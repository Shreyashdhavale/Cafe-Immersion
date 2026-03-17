import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const floatingItems = [
  { id: 1, emoji: "☕", top: "15%", left: "10%", delay: 0, size: "text-6xl" },
  { id: 2, emoji: "🍕", top: "20%", left: "80%", delay: 1, size: "text-7xl" },
  { id: 3, emoji: "🍜", top: "70%", left: "15%", delay: 0.5, size: "text-7xl" },
  { id: 4, emoji: "🍔", top: "75%", left: "75%", delay: 1.5, size: "text-8xl" },
  { id: 5, emoji: "🥪", top: "45%", left: "85%", delay: 0.8, size: "text-5xl" },
  { id: 6, emoji: "🍟", top: "60%", left: "25%", delay: 2, size: "text-5xl" },
  { id: 7, emoji: "🥤", top: "10%", left: "45%", delay: 1.2, size: "text-6xl" },
  { id: 8, emoji: "🍵", top: "85%", left: "45%", delay: 0.3, size: "text-4xl" },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero-texture.png`}
          alt="Cafe Background"
          className="w-full h-[120%] object-cover object-center -mt-10"
        />
        {/* Warm Overlay */}
        <div className="absolute inset-0 bg-amber-900/40 mix-blend-multiply dark:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </motion.div>

      {/* Floating Emojis */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none hidden sm:block">
        {floatingItems.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute ${item.size} drop-shadow-2xl opacity-90`}
            style={{ top: item.top, left: item.left }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-primary/20 text-primary-foreground dark:text-primary backdrop-blur-md border border-primary/30 font-semibold text-sm tracking-wide shadow-lg">
            Welcome to Pune's Coziest Spot ✨
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-white dark:text-white drop-shadow-xl leading-tight mb-6">
            Your Daily <br/>
            <span className="text-gradient drop-shadow-none">Hangout Spot</span> <br/>
            in Manjri
          </h1>
          <p className="text-lg sm:text-xl text-white/90 dark:text-white/80 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
            A cozy place known for great taste, quick bites, and refreshing drinks. 
            Perfect for students, friends, and family.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-orange-500 text-white font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Menu
            </a>
            <a 
              href="#location"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
