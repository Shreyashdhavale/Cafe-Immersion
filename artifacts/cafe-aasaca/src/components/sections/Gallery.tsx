import { motion } from "framer-motion";

const GALLERY_ITEMS = [
  { name: "Hot Coffee", emoji: "☕", gradient: "from-amber-700/80 to-yellow-900/90" },
  { name: "Maggi Bowl", emoji: "🍜", gradient: "from-yellow-400/80 to-orange-500/90" },
  { name: "Pizza Slice", emoji: "🍕", gradient: "from-red-500/80 to-orange-600/90" },
  { name: "Grilled Sandwich", emoji: "🥪", gradient: "from-green-500/80 to-emerald-700/90" },
  { name: "Cold Coffee", emoji: "🥤", gradient: "from-stone-600/80 to-stone-800/90" },
  { name: "French Fries", emoji: "🍟", gradient: "from-yellow-500/80 to-red-500/90" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Gallery</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`} />
              
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="text-6xl md:text-8xl drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-2">
                  {item.emoji}
                </span>
                <span className="absolute bottom-6 font-bold text-white text-lg md:text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 drop-shadow-md text-center w-full px-2">
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
