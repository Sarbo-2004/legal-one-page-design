import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sarah provided exceptional legal guidance during our company's acquisition. Her attention to detail and strategic thinking were invaluable. I wouldn't hesitate to recommend her services.",
    author: "Michael Chen",
    position: "CEO, TechStart Solutions"
  },
  {
    quote: "Professional, knowledgeable, and truly cares about her clients. Sarah helped us navigate a complex real estate transaction with ease and confidence.",
    author: "Jennifer Martinez",
    position: "Property Developer"
  },
  {
    quote: "Outstanding service in estate planning. Sarah took the time to understand our family's needs and created a comprehensive plan that gives us peace of mind.",
    author: "Robert & Linda Thompson",
    position: "Retired Educators"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-primary mb-4">Client Testimonials</h2>
          <div className="w-24 h-0.5 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-0 shadow-sm">
              <div className="space-y-6">
                <Quote className="w-8 h-8 text-accent" />
                
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-6">
                  <p className="font-medium text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};