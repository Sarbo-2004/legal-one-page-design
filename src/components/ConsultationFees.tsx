import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const consultationOptions = [
  {
    type: "Initial Consultation",
    duration: "30 minutes",
    price: "$200",
    description: "Brief case evaluation and legal advice",
    features: [
      "Case assessment",
      "Initial legal guidance",
      "Fee structure discussion"
    ]
  },
  {
    type: "Extended Consultation",
    duration: "60 minutes",
    price: "$350",
    description: "Comprehensive review and strategy session",
    features: [
      "Detailed case analysis",
      "Strategic planning",
      "Document review",
      "Next steps outlined"
    ],
    popular: true
  },
  {
    type: "Document Review",
    duration: "Per document",
    price: "$150",
    description: "Professional review of legal documents",
    features: [
      "Contract analysis",
      "Legal document review",
      "Written summary",
      "Recommendations provided"
    ]
  }
];

export const ConsultationFees = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-primary mb-4">Consultation Fees</h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for professional legal consultation services
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {consultationOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`relative p-8 bg-card border transition-all duration-300 hover:shadow-lg ${
                option.popular ? 'border-accent shadow-md' : 'border-border hover:border-primary/20'
              }`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">{option.type}</h3>
                  <p className="text-sm text-muted-foreground">{option.duration}</p>
                </div>
                
                <div className="text-4xl font-light text-primary">{option.price}</div>
                
                <p className="text-muted-foreground">{option.description}</p>
                
                <ul className="space-y-3 text-left">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    option.popular 
                      ? 'bg-primary hover:bg-professional-light' 
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                >
                  Book Consultation
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};