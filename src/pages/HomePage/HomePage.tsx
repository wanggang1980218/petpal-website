import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import CasesSection from './CasesSection';
import ThreeDPrintSection from './ThreeDPrintSection';
import ProcessSection from './ProcessSection';
import PricingSection from './PricingSection';
import CustomizeSection from './CustomizeSection';
import FaqSection from './FaqSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CasesSection />
        <ThreeDPrintSection />
        <ProcessSection />
        <PricingSection />
        <CustomizeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
