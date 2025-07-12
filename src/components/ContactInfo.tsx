import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactInfo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-primary mb-4">Contact Information</h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Ready to discuss your legal needs? Get in touch today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-6 bg-card border-0 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Office Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mitchell Law Offices<br />
                    1425 Corporate Center Drive<br />
                    Suite 240<br />
                    Downtown Business District<br />
                    Springfield, IL 62701
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card border-0 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    Office: (217) 555-0123<br />
                    Mobile: (217) 555-0124
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card border-0 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    sarah@mitchelllaw.com
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card border-0 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Office Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="bg-section-bg p-8 rounded-lg">
              <h3 className="text-2xl font-light text-primary mb-6">Schedule a Consultation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Take the first step toward resolving your legal matter. Schedule a consultation 
                to discuss your case and learn about your options.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-professional-light text-primary-foreground"
                >
                  Book Online Consultation
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Call for Appointment
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6 text-center">
                Evening and weekend appointments available upon request
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};