import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

export const LawyerHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light text-primary tracking-tight">
            Rajan Dasgupta
          </h1>
          <div className="w-24 h-0.5 bg-accent mx-auto"></div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Advocate B.A. LLB (Hons.)
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Providing trusted legal counsel with over 5 years of experience in Civil law, 
            registration of property, and Family Law.
          </p>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-professional-light text-primary-foreground px-8 py-3 text-lg font-light tracking-wide"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};