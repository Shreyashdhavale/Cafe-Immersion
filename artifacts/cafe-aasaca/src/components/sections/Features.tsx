import { motion } from "framer-motion";

const features = [
  { icon: "💰", title: "Affordable Pricing", desc: "Budget-friendly meals starting ₹15. Most items between ₹100–₹200." },
  { icon: "🍽️", title: "Wide Variety", desc: "From morning chai to evening snacks, we've got it all." },
  { icon: "⭐", title: "Consistent Quality", desc: "Every bite is prepared with care and fresh ingredients." },
  { icon: "⚡", title: "Fast Service", desc: "Quick preparation so you can eat and get back to life." },
  { icon: "🛋️", title: "Comfortable Vibe", desc: "Chill, friendly environment perfect for hanging out." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Features() {
  return (
    <section id="features" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Why Choose <span className="text-primary">Cafe Aasaca?</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className={`bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group ${
                i >= 3 ? "lg:col-span-1.5" : ""
              } ${i === 4 ? "lg:col-start-2 lg:col-span-1" : ""}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
