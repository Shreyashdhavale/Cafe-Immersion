import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Beverages" | "Maggi" | "Pizza" | "Sandwiches" | "Burgers" | "Quick Bites";

const MENU_DATA = [
  { name: "Hot Coffee", category: "Beverages", desc: "Rich, freshly brewed coffee", price: "₹30–₹60" },
  { name: "Cold Coffee", category: "Beverages", desc: "Chilled blended coffee, smooth & refreshing", price: "₹50–₹80" },
  { name: "Tea (Cutting/Masala)", category: "Beverages", desc: "Hot Indian chai, perfectly spiced", price: "₹15–₹25" },
  { name: "Milkshakes", category: "Beverages", desc: "Thick creamy shakes in various flavors", price: "₹60–₹100" },
  { name: "Cold Drinks", category: "Beverages", desc: "Chilled soft drinks & soda", price: "₹20–₹40" },
  { name: "Fresh Lemon Soda", category: "Beverages", desc: "Tangy, refreshing lemon soda", price: "₹30–₹50" },
  
  { name: "Classic Maggi", category: "Maggi", desc: "Original masala Maggi noodles", price: "₹30–₹40" },
  { name: "Masala Maggi", category: "Maggi", desc: "Extra spicy masala twist", price: "₹40–₹50" },
  { name: "Cheese Maggi", category: "Maggi", desc: "Loaded with melted cheese", price: "₹50–₹60" },
  { name: "Egg Maggi", category: "Maggi", desc: "Classic Maggi with egg", price: "₹50–₹60" },
  { name: "Butter Maggi", category: "Maggi", desc: "Buttery smooth noodles", price: "₹40–₹50" },
  
  { name: "Margherita Pizza", category: "Pizza", desc: "Classic tomato base with cheese", price: "₹80–₹120" },
  { name: "Veg Pizza", category: "Pizza", desc: "Fresh veggies on a crispy base", price: "₹90–₹130" },
  { name: "Paneer Pizza", category: "Pizza", desc: "Spiced paneer with bell peppers", price: "₹100–₹140" },
  { name: "Corn & Cheese Pizza", category: "Pizza", desc: "Sweet corn with extra cheese", price: "₹90–₹130" },
  
  { name: "Veg Grilled Sandwich", category: "Sandwiches", desc: "Grilled with veggies & chutney", price: "₹50–₹70" },
  { name: "Cheese Sandwich", category: "Sandwiches", desc: "Loaded cheese, hot & crispy", price: "₹60–₹80" },
  { name: "Paneer Sandwich", category: "Sandwiches", desc: "Spiced paneer in toasted bread", price: "₹70–₹90" },
  { name: "Club Sandwich", category: "Sandwiches", desc: "Layered sandwich with all toppings", price: "₹80–₹100" },
  { name: "Egg Sandwich", category: "Sandwiches", desc: "Egg with veggies, toasted", price: "₹60–₹80" },
  
  { name: "Veg Burger", category: "Burgers", desc: "Crispy patty with fresh veggies", price: "₹60–₹80" },
  { name: "Aloo Tikki Burger", category: "Burgers", desc: "Spiced potato patty burger", price: "₹60–₹80" },
  { name: "Cheese Burger", category: "Burgers", desc: "Juicy patty with cheese slice", price: "₹70–₹90" },
  { name: "Paneer Burger", category: "Burgers", desc: "Spiced paneer patty with sauce", price: "₹80–₹100" },
  
  { name: "French Fries", category: "Quick Bites", desc: "Crispy golden fries with ketchup", price: "₹40–₹60" },
  { name: "Masala Fries", category: "Quick Bites", desc: "Spiced fries with Indian masala", price: "₹50–₹70" },
  { name: "Peri Peri Fries", category: "Quick Bites", desc: "Tangy peri peri flavored fries", price: "₹50–₹70" },
  { name: "Bread Pakoda", category: "Quick Bites", desc: "Crispy fried bread, tea-time snack", price: "₹20–₹30" },
  { name: "Veg Puff", category: "Quick Bites", desc: "Flaky pastry with spiced veggie filling", price: "₹20–₹30" },
];

const CATEGORIES: Category[] = ["All", "Beverages", "Maggi", "Pizza", "Sandwiches", "Burgers", "Quick Bites"];

export function Menu() {
  const [activeCat, setActiveCat] = useState<Category>("All");

  const filteredMenu = activeCat === "All" 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeCat);

  return (
    <section id="menu" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Our Menu</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeCat === cat 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105" 
                    : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-background"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={item.name}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                  <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full text-sm whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
