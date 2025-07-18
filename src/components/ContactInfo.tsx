import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactInfo = () => {
  return (
    <section id="contact" className="py-24 bg-background">
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
                    Tetikhola<br />
                    Vivekananda Park<br />
                    H. N:- I G/ 3/1,<br />
                    P.O.Arrah, Durgapur
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
                    Mobile: 09641426460
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
                    dasguptarajan@gmail.com
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
                    <p>Monday - Friday: 6:00 PM - 9:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="bg-section-bg p-8 rounded-lg">
              <h3 className="text-2xl font-light text-primary mb-6">Get Legal Guidance</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have a legal question or need professional counsel? Contact our office directly 
                to discuss your matter and explore your options.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-professional-light text-primary-foreground"
                  onClick={() => window.location.href = 'tel:09641426460'}
                >
                  Call Office: 09641426460
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = ''}
                >
                  Send Email
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6 text-center">
                Please call to schedule in-person consultations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};