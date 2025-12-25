import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  Car,
  Plane,
  Truck,
  Cpu,
  GraduationCap,
  Stethoscope,
  ArrowRight,
  Lock,
  TrendingUp,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const portfolioSectors = [
  {
    icon: Car,
    sector: "Car Rental",
    status: "Active",
    projects: 6,
    deployed: "AED 75M",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop",
    description:
      "Premium and luxury vehicle rental fleets serving tourists, business travelers, and long-term residents across Dubai and Abu Dhabi.",
    opportunities: [
      "Luxury fleet expansion programs",
      "Corporate leasing partnerships",
      "Electric vehicle fleet investments",
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | Coral Wealth Investment - UAE Asset-Backed Investments</title>
        <meta
          name="description"
          content="Explore Coral Wealth Investment's diversified portfolio across UAE car rental, aviation, logistics, technology, and more."
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

          {/* Active Investment Sectors - Horizontal Scroll */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-2">
                    Our Focus Areas
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    Active Investment Sectors
                  </h2>
                </div>
                <div className="hidden md:flex gap-2">
                  <button
                    onClick={() => scroll("left")}
                    className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 px-4 md:px-8 lg:px-16 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {portfolioSectors.map((sector) => (
                <div
                  key={sector.sector}
                  className="group flex-shrink-0 w-[340px] md:w-[400px] rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-hover transition-all overflow-hidden snap-start"
                >
                  {/* Image Section */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={sector.image}
                      alt={sector.sector}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <sector.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-white">
                            {sector.sector}
                          </h3>
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
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-background border border-border">
                        <TrendingUp className="w-4 h-4 text-accent mb-1" />
                        <span className="text-xs text-muted-foreground block">Projects</span>
                        <span className="font-display text-lg font-bold text-foreground">
                          {sector.projects}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-background border border-border">
                        <Building2 className="w-4 h-4 text-accent mb-1" />
                        <span className="text-xs text-muted-foreground block">Deployed</span>
                        <span className="font-display text-lg font-bold text-accent">
                          {sector.deployed}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {sector.description}
                    </p>

                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      Opportunities:
                    </h4>
                    <ul className="space-y-1.5 mb-4">
                      {sector.opportunities.slice(0, 2).map((opp, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="line-clamp-1">{opp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground p-2.5 rounded-lg bg-muted/50">
                      <Lock className="w-3.5 h-3.5" />
                      Details for qualified members
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Scroll Hint */}
            <div className="md:hidden text-center mt-4">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Swipe to explore more sectors
                <ChevronRight className="w-4 h-4" />
              </p>
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
