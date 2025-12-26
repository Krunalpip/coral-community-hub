import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CommunitySection from "@/components/sections/CommunitySection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import UpcomingProjectsSection from "@/components/sections/UpcomingProjectsSection";
import WhyItWorksSection from "@/components/sections/WhyItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VideoInsightsSection from "@/components/sections/VideoInsightsSection";
import FAQSection from "@/components/sections/FAQSection";
import JoinSection from "@/components/sections/JoinSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Coral Wealth Investment | Dubai Private Investment Community</title>
        <meta
          name="description"
          content="Join Dubai's premier private investment community. Access structured, asset-backed opportunities across UAE logistics, aviation, technology, and more with 1.8-6% monthly returns."
        />
        <meta
          name="keywords"
          content="Dubai investment, UAE private investment, asset-backed income, wealth building Dubai, private investment community, monthly income investments"
        />
        <link rel="canonical" href="https://coraluae.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Coral Wealth Investment | Dubai Private Investment Community" />
        <meta
          property="og:description"
          content="Join Dubai's premier private investment community for structured, asset-backed wealth participation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coraluae.com/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Coral Wealth Investment",
            url: "https://coraluae.com",
            logo: "https://coraluae.com/logo.png",
            description:
              "Dubai-based private investment community offering structured, asset-backed investment opportunities since 2014.",
            foundingDate: "2014",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SIT Towers",
              addressLocality: "Dubai Silicon Oasis",
              addressRegion: "Dubai",
              addressCountry: "UAE",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971-4-552-8423",
              email: "info@coraluae.com",
              contactType: "customer service",
            },
            sameAs: [],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <CommunitySection />
          <PortfolioSection />
          <UpcomingProjectsSection />
          <WhyItWorksSection />
          <TestimonialsSection />
          <VideoInsightsSection />
          <FAQSection />
          <JoinSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
