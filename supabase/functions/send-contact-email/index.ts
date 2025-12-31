import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  mobile: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { name, mobile, email }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, mobile, email });

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
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr>
          <p>This message was sent from the AlphaBull website contact form.</p>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const errorData = await notificationRes.text();
      console.error("Failed to send notification email:", errorData);
      throw new Error(`Failed to send notification email: ${errorData}`);
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
          <h2>Thank you for contacting AlphaBull, ${name}!</h2>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Connect with us on <a href="https://wa.me/919032999466">WhatsApp</a> for instant support</li>
            <li>Follow us on <a href="https://www.instagram.com/alphabull_club/">Instagram</a> for daily insights</li>
            <li>Join our <a href="https://t.me/alphabull_in">Telegram</a> community</li>
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
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
