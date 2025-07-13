import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-primary">
            Rajan Dasgupta
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('practice-areas')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Practice Areas
            </button>
            <button
              onClick={() => scrollToSection('fees')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Fees
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            size="sm"
            className="bg-primary hover:bg-professional-light text-primary-foreground"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};