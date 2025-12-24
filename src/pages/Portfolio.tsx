import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Plane,
  Truck,
  Cpu,
  GraduationCap,
  Stethoscope,
  ArrowRight,
  Lock,
  TrendingUp,
} from "lucide-react";

const portfolioSectors = [
  {
    icon: Building2,
    sector: "Real Estate",
    status: "Active",
    projects: 8,
    deployed: "AED 125M",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop",
    description:
      "Premium residential and commercial properties across Dubai Marina, Business Bay, Downtown Dubai, and emerging areas.",
    opportunities: [
      "Branded residences in prime locations",
      "Commercial office spaces with blue-chip tenants",
      "Holiday home portfolios with guaranteed returns",
    ],
  },
  {
    icon: Plane,
    sector: "Aviation",
    status: "Active",
    projects: 4,
    deployed: "AED 85M",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=500&fit=crop",
    description:
      "Structured aircraft leasing and fractional ownership programs with established regional airlines.",
    opportunities: [
      "Regional jet leasing programs",
      "Fractional ownership structures",
      "Aircraft trading and remarketing",
    ],
  },
  {
    icon: Truck,
    sector: "Logistics",
    status: "Expanding",
    projects: 6,
    deployed: "AED 95M",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
    description:
      "Strategic warehouse, fulfillment centers, and last-mile delivery infrastructure supporting UAE's e-commerce growth.",
    opportunities: [
      "Cold chain storage facilities",
      "E-commerce fulfillment centers",
      "Last-mile delivery hubs",
    ],
  },
  {
    icon: Cpu,
    sector: "Technology",
    status: "Growth",
    projects: 5,
    deployed: "AED 45M",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
    description:
      "Equity participation in vetted technology ventures focused on AI, robotics, and industrial automation.",
    opportunities: [
      "Industrial robotics companies",
      "AI-powered enterprise solutions",
      "PropTech and FinTech ventures",
    ],
  },
  {
    icon: GraduationCap,
    sector: "Education",
    status: "Upcoming",
    projects: 2,
    deployed: "AED 25M",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
    description:
      "Investment in premium educational institutions and EdTech platforms with expansion plans.",
    opportunities: [
      "Private school expansion funding",
      "EdTech platform investments",
      "Vocational training centers",
    ],
  },
  {
    icon: Stethoscope,
    sector: "Healthcare",
    status: "Upcoming",
    projects: 2,
    deployed: "AED 20M",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop",
    description:
      "Participation in specialty clinics, diagnostic centers, and healthcare technology platforms.",
    opportunities: [
      "Specialty medical clinics",
      "Diagnostic imaging centers",
      "Healthcare IT platforms",
    ],
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Coral Wealth Investment - UAE Asset-Backed Investments</title>
        <meta
          name="description"
          content="Explore Coral Wealth Investment's diversified portfolio across UAE real estate, aviation, logistics, technology, and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section with Background Image */}
          <section className="relative min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop"
                alt="Dubai skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
            </div>
            <div className="container-custom relative z-10">
              <div className="max-w-3xl">
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Investment Portfolio
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Diversified. Documented. Delivering.
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  Our portfolio spans multiple sectors, each selected for income
                  consistency, asset quality, and alignment with UAE's economic growth.
                </p>
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold text-white">AED 500M+</p>
                    <p className="text-white/70 text-sm">Total Assets</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold text-white">24</p>
                    <p className="text-white/70 text-sm">Active Projects</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold text-white">6</p>
                    <p className="text-white/70 text-sm">Sectors</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Grid with Images */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid gap-8">
                {portfolioSectors.map((sector, index) => (
                  <div
                    key={sector.sector}
                    className={`group rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-hover transition-all overflow-hidden ${
                      index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 !== 0 ? 'direction-rtl' : ''}`}>
                      {/* Image Section */}
                      <div className="relative h-64 lg:h-auto overflow-hidden">
                        <img 
                          src={sector.image}
                          alt={sector.sector}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <sector.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h2 className="font-display text-2xl font-bold text-white">
                                {sector.sector}
                              </h2>
                              <span
                                className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
                                  sector.status === "Active"
                                    ? "bg-green-500/80 text-white"
                                    : sector.status === "Expanding"
                                    ? "bg-accent/80 text-white"
                                    : "bg-white/20 text-white"
                                }`}
                              >
                                {sector.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 lg:p-8">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="p-4 rounded-xl bg-background border border-border">
                            <TrendingUp className="w-5 h-5 text-accent mb-2" />
                            <span className="text-xs text-muted-foreground block">Projects</span>
                            <span className="font-display text-xl font-bold text-foreground">
                              {sector.projects}
                            </span>
                          </div>
                          <div className="p-4 rounded-xl bg-background border border-border">
                            <Building2 className="w-5 h-5 text-accent mb-2" />
                            <span className="text-xs text-muted-foreground block">Deployed</span>
                            <span className="font-display text-xl font-bold text-accent">
                              {sector.deployed}
                            </span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {sector.description}
                        </p>

                        <h4 className="font-semibold text-foreground mb-3 text-sm">
                          Current Opportunities:
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {sector.opportunities.map((opp, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {opp}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-muted/50">
                          <Lock className="w-4 h-4" />
                          Detailed information available to qualified members
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Portfolio Overview
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Watch Our Investment Approach
                </h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-hover aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/Lhsfe6RxjcE"
                    title="CWI Portfolio Overview"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=600&fit=crop"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            <div className="container-custom relative z-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Interested in Specific Opportunities?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Schedule a confidential call to discuss current openings and upcoming
                opportunities across our portfolio.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="xl" className="group">
                  Request Portfolio Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
