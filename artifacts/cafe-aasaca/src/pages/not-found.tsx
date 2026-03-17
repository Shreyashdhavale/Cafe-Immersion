import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <div className="text-8xl mb-6 drop-shadow-lg">☕</div>
      <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
      <h2 className="text-2xl font-bold text-muted-foreground mb-8">Oops! Page not found</h2>
      <p className="text-lg text-muted-foreground max-w-md mb-8">
        Looks like someone spilled the coffee on this page. We can't find what you're looking for.
      </p>
      <Link 
        href="/" 
        className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
