import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, categories, Category } from "@/data/menu";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredMenu = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our <span className="text-primary">Menu</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delicious bites and refreshing drinks prepared fresh, just for you.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-white dark:bg-white/5 text-foreground/70 hover:bg-primary/10 hover:text-primary shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative bg-white dark:bg-card rounded-2xl p-6 shadow-md hover:shadow-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-6xl rotate-12 pointer-events-none">
                  {item.emoji}
                </div>
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="text-4xl mb-2 filter drop-shadow-sm">{item.emoji}</div>
                  <span className="font-bold text-lg text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {item.priceRange}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 relative z-10 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow relative z-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
