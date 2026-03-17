import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 relative bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Find Us</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-10" />
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Manjri-Hadapsar Road,<br />
                    Manjri Budruk, Pune – 412307
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground">Monday–Sunday: 9:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Contact</h3>
                  <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Manjri+Budruk,+Hadapsar,+Pune" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-8 py-4 rounded-xl font-bold bg-foreground text-background shadow-lg hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden glass-card p-2 border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5682662886737!2d73.961608!3d18.503254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3a595f9c961%3A0x8e8eb46487ff6a24!2sManjari%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1.25rem" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Location Map"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
