export type Category = "All" | "Beverages" | "Maggi" | "Pizza" | "Sandwiches" | "Burgers" | "Fries & Bites";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  category: Category;
  emoji: string;
}

export const menuItems: MenuItem[] = [
  // Beverages
  { id: "b1", name: "Hot Coffee", description: "Rich, freshly brewed coffee", priceRange: "₹30–₹60", category: "Beverages", emoji: "☕" },
  { id: "b2", name: "Cold Coffee", description: "Chilled blended coffee, smooth & refreshing", priceRange: "₹50–₹80", category: "Beverages", emoji: "🥤" },
  { id: "b3", name: "Tea (Cutting/Masala)", description: "Hot Indian chai, perfectly spiced", priceRange: "₹15–₹25", category: "Beverages", emoji: "🍵" },
  { id: "b4", name: "Milkshakes", description: "Thick creamy shakes in various flavors", priceRange: "₹60–₹100", category: "Beverages", emoji: "🥛" },
  { id: "b5", name: "Cold Drinks", description: "Chilled soft drinks & soda", priceRange: "₹20–₹40", category: "Beverages", emoji: "🥤" },
  { id: "b6", name: "Fresh Lemon Soda", description: "Tangy, refreshing lemon soda", priceRange: "₹30–₹50", category: "Beverages", emoji: "🍋" },

  // Maggi
  { id: "m1", name: "Classic Maggi", description: "Original masala Maggi noodles", priceRange: "₹30–₹40", category: "Maggi", emoji: "🍜" },
  { id: "m2", name: "Masala Maggi", description: "Extra spicy masala twist", priceRange: "₹40–₹50", category: "Maggi", emoji: "🌶️" },
  { id: "m3", name: "Cheese Maggi", description: "Loaded with melted cheese", priceRange: "₹50–₹60", category: "Maggi", emoji: "🧀" },
  { id: "m4", name: "Egg Maggi", description: "Classic Maggi with egg", priceRange: "₹50–₹60", category: "Maggi", emoji: "🥚" },
  { id: "m5", name: "Butter Maggi", description: "Buttery smooth noodles", priceRange: "₹40–₹50", category: "Maggi", emoji: "🧈" },

  // Pizza
  { id: "p1", name: "Margherita Pizza", description: "Classic tomato base with cheese", priceRange: "₹80–₹120", category: "Pizza", emoji: "🍕" },
  { id: "p2", name: "Veg Pizza", description: "Fresh veggies on a crispy base", priceRange: "₹90–₹130", category: "Pizza", emoji: "🫑" },
  { id: "p3", name: "Paneer Pizza", description: "Spiced paneer with bell peppers", priceRange: "₹100–₹140", category: "Pizza", emoji: "🧀" },
  { id: "p4", name: "Corn & Cheese Pizza", description: "Sweet corn with extra cheese", priceRange: "₹90–₹130", category: "Pizza", emoji: "🌽" },

  // Sandwiches
  { id: "s1", name: "Veg Grilled Sandwich", description: "Grilled with veggies & chutney", priceRange: "₹50–₹70", category: "Sandwiches", emoji: "🥪" },
  { id: "s2", name: "Cheese Sandwich", description: "Loaded cheese, hot & crispy", priceRange: "₹60–₹80", category: "Sandwiches", emoji: "🧀" },
  { id: "s3", name: "Paneer Sandwich", description: "Spiced paneer in toasted bread", priceRange: "₹70–₹90", category: "Sandwiches", emoji: "🥪" },
  { id: "s4", name: "Club Sandwich", description: "Layered sandwich with all toppings", priceRange: "₹80–₹100", category: "Sandwiches", emoji: "🥪" },
  { id: "s5", name: "Egg Sandwich", description: "Egg with veggies, toasted", priceRange: "₹60–₹80", category: "Sandwiches", emoji: "🥚" },

  // Burgers
  { id: "bg1", name: "Veg Burger", description: "Crispy patty with fresh veggies", priceRange: "₹60–₹80", category: "Burgers", emoji: "🍔" },
  { id: "bg2", name: "Aloo Tikki Burger", description: "Spiced potato patty burger", priceRange: "₹60–₹80", category: "Burgers", emoji: "🥔" },
  { id: "bg3", name: "Cheese Burger", description: "Juicy patty with cheese slice", priceRange: "₹70–₹90", category: "Burgers", emoji: "🧀" },
  { id: "bg4", name: "Paneer Burger", description: "Spiced paneer patty with sauce", priceRange: "₹80–₹100", category: "Burgers", emoji: "🍔" },

  // Fries & Bites
  { id: "f1", name: "French Fries", description: "Crispy golden fries with ketchup", priceRange: "₹40–₹60", category: "Fries & Bites", emoji: "🍟" },
  { id: "f2", name: "Masala Fries", description: "Spiced fries with Indian masala", priceRange: "₹50–₹70", category: "Fries & Bites", emoji: "🌶️" },
  { id: "f3", name: "Peri Peri Fries", description: "Tangy peri peri flavored fries", priceRange: "₹50–₹70", category: "Fries & Bites", emoji: "🍟" },
  { id: "f4", name: "Bread Pakoda", description: "Crispy fried bread, tea-time snack", priceRange: "₹20–₹30", category: "Fries & Bites", emoji: "🍞" },
  { id: "f5", name: "Veg Puff", description: "Flaky pastry with spiced veggie filling", priceRange: "₹20–₹30", category: "Fries & Bites", emoji: "🥐" },
];

export const categories: Category[] = ["All", "Beverages", "Maggi", "Pizza", "Sandwiches", "Burgers", "Fries & Bites"];
