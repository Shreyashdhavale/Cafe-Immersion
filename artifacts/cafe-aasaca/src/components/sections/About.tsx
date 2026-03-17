import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">
            About <span className="text-primary">Cafe Aasaca</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          
          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium">
            Cafe Aasaca is a budget-friendly, cozy local café located on Manjri-Hadapsar Road, Pune. 
            Popular among students and locals for its tasty food, quick service, and comfortable 
            hangout environment. We offer a variety of delicious snacks and beverages at affordable prices.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Budget Friendly", emoji: "💰" },
              { label: "Cozy Vibe", emoji: "🛋️" },
              { label: "Quick Service", emoji: "⚡" },
              { label: "Tasty Food", emoji: "😋" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <span className="text-4xl">{item.emoji}</span>
                <span className="font-bold text-foreground/80">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative blurry blobs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-orange-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 -translate-y-1/2" />
    </section>
  );
}
