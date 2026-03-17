import { motion } from "framer-motion";

const FEATURES = [
  { icon: "💰", title: "Affordable Pricing", desc: "Budget-friendly meals starting ₹15. Most items between ₹100–₹200." },
  { icon: "🍽️", title: "Wide Variety", desc: "From morning chai to evening snacks, we've got it all." },
  { icon: "⭐", title: "Consistent Quality", desc: "Every bite is prepared with care and fresh ingredients." },
  { icon: "⚡", title: "Fast Service", desc: "Quick preparation so you can eat and get back to life." },
  { icon: "🛋️", title: "Comfortable Vibe", desc: "Chill, friendly environment perfect for hanging out." },
];

export function Features() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass-card rounded-3xl p-8 text-center flex flex-col items-center ${
                i === 3 ? "lg:col-start-2" : i === 4 ? "lg:col-start-3" : ""
              }`}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
