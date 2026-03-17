import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Find <span className="text-primary">Us</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Manjri-Hadapsar Road,<br />
                    Manjri Budruk, Pune – 412307
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Opening Hours</h3>
                  <p className="text-muted-foreground text-lg">
                    Monday – Sunday<br />
                    <span className="font-semibold text-foreground">9:00 AM – 10:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Contact</h3>
                  <p className="text-muted-foreground text-lg">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Manjri+Budruk,+Hadapsar,+Pune" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-center shadow-lg shadow-primary/25 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[500px] bg-muted rounded-3xl overflow-hidden shadow-xl border border-border"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30268.0163351989!2d73.94639411656627!3d18.505436660144983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c222ba0a2411%3A0xc33e54b684a29a1!2sManjari%20Budruk%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Location Map"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
