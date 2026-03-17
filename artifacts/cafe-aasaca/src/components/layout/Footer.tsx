import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="space-y-4">
            <a href="#home" className="flex items-center justify-center md:justify-start gap-2 group inline-block">
              <span className="text-3xl">☕</span>
              <span className="font-display font-bold text-3xl tracking-tight text-white">
                Cafe <span className="text-primary">Aasaca</span>
              </span>
            </a>
            <p className="text-secondary-foreground/70 max-w-sm mx-auto md:mx-0">
              Your daily hangout spot in Manjri. Serving fresh coffee, tasty snacks, and good vibes.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-xl text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['Home', 'Menu', 'About', 'Why Us', 'Location'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors w-fit mx-auto md:mx-0"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-xl text-white">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-secondary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Cafe Aasaca. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
