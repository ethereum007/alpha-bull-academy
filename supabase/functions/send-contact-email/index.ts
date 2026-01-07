import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const HCAPTCHA_SECRET_KEY = Deno.env.get("HCAPTCHA_SECRET_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  mobile: string;
  email: string;
  captchaToken: string;
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 requests per hour per IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function checkRateLimit(clientIP: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(clientIP);
  
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  entry.count++;
  return true;
}

// Escape HTML to prevent XSS in emails
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check required environment variables (log server-side only)
    if (!RESEND_API_KEY || !HCAPTCHA_SECRET_KEY) {
      console.error("Missing required environment variables");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
        { status: 503, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";

    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, mobile, email, captchaToken }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, mobile, email });

    // Verify hCaptcha token
    const captchaVerification = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `response=${captchaToken}&secret=${HCAPTCHA_SECRET_KEY}`,
    });

    const captchaResult = await captchaVerification.json();
    console.log("hCaptcha verification result:", captchaResult);

    if (!captchaResult.success) {
      return new Response(
        JSON.stringify({ error: "Captcha verification failed. Please try again." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Escape user inputs for safe HTML embedding
    const safeName = escapeHtml(name);
    const safeMobile = escapeHtml(mobile);
    const safeEmail = escapeHtml(email);

    // Send notification email to the business
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AlphaBull Contact Form <onboarding@resend.dev>",
        to: ["alphabullacademy@gmail.com"],
        subject: `New Contact Form Submission from ${safeName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Mobile:</strong> ${safeMobile}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <hr>
          <p>This message was sent from the AlphaBull website contact form.</p>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const errorData = await notificationRes.text();
      console.error("Failed to send notification email:", errorData);
      throw new Error("Email service error");
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to the user
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AlphaBull <onboarding@resend.dev>",
        to: [email],
        subject: "We received your message - AlphaBull",
        html: `
          <h2>Thank you for contacting AlphaBull, ${safeName}!</h2>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Connect with us on <a href="https://wa.me/919032999466">WhatsApp</a> for instant support</li>
            <li>Follow us on <a href="https://www.instagram.com/alphabull_club/">Instagram</a> for daily insights</li>
            <li>Join our <a href="https://t.me/alpha_bull">Telegram</a> community</li>
          </ul>
          <p>Best regards,<br>The AlphaBull Team</p>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const errorData = await confirmationRes.text();
      console.error("Failed to send confirmation email:", errorData);
      // Don't throw here - notification was sent, just log the error
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", {
      error: error.message,
      timestamp: new Date().toISOString()
    });
    return new Response(
      JSON.stringify({ error: "Unable to send message. Please try again or contact us via WhatsApp." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
