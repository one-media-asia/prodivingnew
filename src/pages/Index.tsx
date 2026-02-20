import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DivingCoursesSection from "@/components/DivingCoursesSection";
import DiveSitesSection from "@/components/DiveSitesSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DivingCoursesSection />
      <DiveSitesSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
