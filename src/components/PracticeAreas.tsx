import { Card } from "@/components/ui/card";
import { Scale, Building, FileText, Users, Home, Briefcase } from "lucide-react";

const practiceAreas = [
  {
    icon: Scale,
    title: "Corporate Law",
    description: "Business formation, contracts, mergers and acquisitions, and corporate governance."
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Property transactions, closings, title work, and real estate litigation."
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Wills, trusts, probate administration, and estate tax planning."
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Divorce, custody, adoption, and domestic relations matters."
  },
  {
    icon: Building,
    title: "Civil Litigation",
    description: "Commercial disputes, contract enforcement, and trial representation."
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Workplace disputes, wrongful termination, and employment contracts."
  }
];

export const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-primary mb-4">Practice Areas</h2>
          <div className="w-24 h-0.5 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-full">
                  <area.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-primary">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};