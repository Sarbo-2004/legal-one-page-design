import { Navbar } from "@/components/Navbar";
import { LawyerHero } from "@/components/LawyerHero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { ConsultationFees } from "@/components/ConsultationFees";
import { Testimonials } from "@/components/Testimonials";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LawyerHero />
      <PracticeAreas />
      <ConsultationFees />
      <Testimonials />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;
