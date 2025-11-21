import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get in touch with us today and take the first step towards becoming a successful trader
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group h-full">
              <div className="w-14 h-14 rounded-xl bg-success/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-success" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white">
                WhatsApp
              </h3>
              
              <p className="text-white/80 mb-6">
                Quick response and instant communication
              </p>
              
              <Button 
                className="w-full bg-success hover:bg-success/90 text-white"
                onClick={() => window.open('https://wa.me/919032999466', '_blank')}
              >
                Message on WhatsApp
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group h-full">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white">
                Email
              </h3>
              
              <p className="text-white/80 mb-6">
                Detailed inquiries and support
              </p>
              
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-primary"
                onClick={() => window.location.href = 'mailto:support@alphabullschool.com'}
              >
                Send an Email
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
