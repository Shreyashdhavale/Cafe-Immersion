import { Coffee } from "lucide-react";

export function Footer() {
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
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-lg">
                <Coffee size={20} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-foreground">
                Cafe Aasaca
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your favorite neighborhood spot for great food, warm vibes, and unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Menu', 'About', 'Why Us', 'Gallery'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollTo(`#${link.toLowerCase().replace(' ', '-')}`)}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-lg mb-6">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                📸
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                👍
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                🐦
              </a>
            </div>
          </div>
          
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Cafe Aasaca. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
