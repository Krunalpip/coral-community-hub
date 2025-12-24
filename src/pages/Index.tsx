import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CommunitySection from "@/components/sections/CommunitySection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WhyItWorksSection from "@/components/sections/WhyItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import JoinSection from "@/components/sections/JoinSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Coral Wealth Investment | Dubai Private Investment Community</title>
        <meta
          name="description"
          content="Join Dubai's premier private investment community. Access structured, asset-backed opportunities across UAE real estate, logistics, aviation, and technology with consistent monthly income."
        />
        <meta
          name="keywords"
          content="Dubai investment, UAE private investment, asset-backed income, wealth building Dubai, real estate investment UAE, private investment community"
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
              "Dubai-based private investment community offering structured, asset-backed investment opportunities.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "UAE",
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
          <WhyItWorksSection />
          <TestimonialsSection />
          <FAQSection />
          <JoinSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
