import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, name: "Hot Coffee", emoji: "☕", gradient: "from-amber-200 to-orange-400 dark:from-amber-900 dark:to-orange-900" },
  { id: 2, name: "Maggi Bowl", emoji: "🍜", gradient: "from-yellow-200 to-amber-500 dark:from-yellow-900 dark:to-amber-800" },
  { id: 3, name: "Pizza Slice", emoji: "🍕", gradient: "from-orange-300 to-red-500 dark:from-orange-900 dark:to-red-900" },
  { id: 4, name: "Grilled Sandwich", emoji: "🥪", gradient: "from-green-200 to-emerald-500 dark:from-green-900 dark:to-emerald-800" },
  { id: 5, name: "Cold Coffee", emoji: "🥤", gradient: "from-blue-200 to-cyan-500 dark:from-blue-900 dark:to-cyan-800" },
  { id: 6, name: "French Fries", emoji: "🍟", gradient: "from-red-200 to-rose-500 dark:from-red-900 dark:to-rose-900" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our <span className="text-primary">Gallery</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A sneak peek at our fan-favorite items.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl aspect-square flex items-center justify-center group bg-gradient-to-br ${item.gradient} shadow-lg`}
            >
              <div className="text-7xl md:text-9xl filter drop-shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 ease-out">
                {item.emoji}
              </div>
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-xl md:text-2xl drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
