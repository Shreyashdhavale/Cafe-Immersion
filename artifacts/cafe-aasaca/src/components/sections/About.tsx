import { motion } from "framer-motion";
import { Store, Users, Clock } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Cafe Aasaca</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Cafe Aasaca is a budget-friendly, cozy local café located on Manjri-Hadapsar Road, Pune. 
                Popular among students and locals for its tasty food, quick service, and comfortable hangout environment.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We offer a variety of delicious snacks and beverages at affordable prices, making every visit a delightful experience.
              </p>
            </div>
            
            <div className="grid gap-6">
              {[
                { icon: Store, title: "Cozy Environment", desc: "Perfect aesthetic for your daily hangs and catchups." },
                { icon: Users, title: "Community First", desc: "A loved spot by locals and students in Manjri." },
                { icon: Clock, title: "Quick Service", desc: "Hot, fresh, and served fast to your table." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-white/5 hover:bg-background transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
