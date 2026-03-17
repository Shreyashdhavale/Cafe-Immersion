import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const FLOATING_ITEMS = [
  { emoji: "☕", size: "text-6xl md:text-8xl", top: "15%", left: "10%", delay: 0, animClass: "animate-float" },
  { emoji: "🍕", size: "text-5xl md:text-7xl", top: "20%", right: "15%", delay: 1, animClass: "animate-float-reverse" },
  { emoji: "🍜", size: "text-7xl md:text-9xl", bottom: "25%", left: "5%", delay: 0.5, animClass: "animate-float-delayed" },
  { emoji: "🥪", size: "text-4xl md:text-6xl", top: "45%", right: "8%", delay: 2, animClass: "animate-float" },
  { emoji: "🍔", size: "text-6xl md:text-8xl", bottom: "15%", right: "20%", delay: 1.5, animClass: "animate-float-reverse" },
  { emoji: "🍟", size: "text-5xl md:text-7xl", top: "60%", left: "15%", delay: 0.8, animClass: "animate-float-delayed" },
  { emoji: "🥤", size: "text-5xl md:text-7xl", top: "5%", left: "45%", delay: 1.2, animClass: "animate-float" },
  { emoji: "🍵", size: "text-4xl md:text-6xl", bottom: "10%", left: "40%", delay: 0.3, animClass: "animate-float-reverse" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-texture.png)` }}
      />
      
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Parallax Floating Emojis */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        {FLOATING_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`absolute ${item.animClass} ${item.size} drop-shadow-2xl opacity-80 select-none`}
            style={{ 
              top: item.top, 
              left: item.left, 
              right: item.right, 
              bottom: item.bottom,
              animationDelay: `${item.delay}s`
            }}
          >
            {item.emoji}
          </div>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 shadow-sm">
            Welcome to Pune's Coziest Spot ✨
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1]">
            Your Daily <br/>
            <span className="text-gradient">Hangout Spot</span> <br/>
            in Manjri
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
            A cozy place known for great taste, quick bites, and refreshing drinks. 
            Perfect for students, friends, and family.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollTo('#menu')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore Menu
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('#location')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-card border-2 border-border text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300 shadow-sm"
            >
              Visit Us
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
