import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/ui/hero-section';
import ProfileSections from '@/components/ui/profile-sections';
import FeaturesSection from '@/components/ui/features-section';
import CTASection from '@/components/ui/cta-section';
import Footer from '@/components/ui/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      <main>
        <HeroSection />
        <ProfileSections />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}