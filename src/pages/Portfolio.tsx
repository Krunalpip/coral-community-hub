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
} from "lucide-react";

const portfolioSectors = [
  {
    icon: Building2,
    sector: "Real Estate",
    status: "Active",
    projects: 8,
    deployed: "AED 125M",
    description:
      "Premium residential and commercial properties across Dubai Marina, Business Bay, Downtown Dubai, and emerging areas. Focus on income-generating assets with strong rental yields and capital appreciation potential.",
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
    description:
      "Structured aircraft leasing and fractional ownership programs with established regional airlines. Assets backed by long-term lease agreements and comprehensive maintenance reserves.",
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
    description:
      "Strategic warehouse, fulfillment centers, and last-mile delivery infrastructure supporting UAE's e-commerce growth. Triple-net lease structures with established operators.",
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
    description:
      "Equity participation in vetted technology ventures focused on AI, robotics, and industrial automation. Higher risk-reward profile with structured milestone-based capital deployment.",
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
    description:
      "Investment in premium educational institutions and EdTech platforms. Focus on established schools with expansion plans and technology-enabled learning solutions.",
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
    description:
      "Participation in specialty clinics, diagnostic centers, and healthcare technology. Aligned with UAE's healthcare diversification vision.",
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
          content="Explore Coral Wealth Investment's diversified portfolio across UAE real estate, aviation, logistics, technology, and more. Real assets with documented performance."
        />
        <meta name="keywords" content="UAE investment portfolio, Dubai real estate investment, aviation leasing UAE, logistics investment" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
                  Investment Portfolio
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                  Diversified. Documented.{" "}
                  <span className="text-gradient-gold">Delivering.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Our portfolio spans multiple sectors, each selected for income
                  consistency, asset quality, and alignment with UAE's economic growth.
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid gap-8">
                {portfolioSectors.map((sector) => (
                  <div
                    key={sector.sector}
                    className="p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                  >
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Header */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                            <sector.icon className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                              {sector.sector}
                            </h2>
                            <span
                              className={`text-xs font-medium uppercase tracking-wider ${
                                sector.status === "Active"
                                  ? "text-green-400"
                                  : sector.status === "Expanding"
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {sector.status}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="p-4 rounded-lg bg-background border border-border">
                            <span className="text-xs text-muted-foreground block">
                              Projects
                            </span>
                            <span className="font-display text-xl font-semibold text-foreground">
                              {sector.projects}
                            </span>
                          </div>
                          <div className="p-4 rounded-lg bg-background border border-border">
                            <span className="text-xs text-muted-foreground block">
                              Deployed
                            </span>
                            <span className="font-display text-xl font-semibold text-primary">
                              {sector.deployed}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2">
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {sector.description}
                        </p>

                        <h4 className="font-medium text-foreground mb-3">
                          Current Opportunities:
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {sector.opportunities.map((opp, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {opp}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Lock className="w-4 h-4" />
                          Detailed information available to qualified members only
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-card">
            <div className="container-custom text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Interested in Specific Opportunities?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
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
