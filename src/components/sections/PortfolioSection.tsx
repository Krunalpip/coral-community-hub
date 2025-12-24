import { ArrowUpRight, Building2, Plane, Truck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    sector: "Real Estate",
    icon: Building2,
    title: "Premium Residential Portfolio",
    location: "Dubai Marina & Business Bay",
    deployed: "AED 45M",
    returns: "2.4% Monthly",
    status: "Fully Operational",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop",
    description:
      "Diversified holdings across premium residential units generating consistent rental income.",
  },
  {
    id: 2,
    sector: "Aviation",
    icon: Plane,
    title: "Regional Aircraft Leasing",
    location: "GCC Region",
    deployed: "AED 28M",
    returns: "3.2% Monthly",
    status: "Active Distribution",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop",
    description:
      "Structured aircraft leasing with established regional carriers, backed by physical assets.",
  },
  {
    id: 3,
    sector: "Logistics",
    icon: Truck,
    title: "E-Commerce Fulfillment Centers",
    location: "JAFZA & DWC",
    deployed: "AED 32M",
    returns: "2.8% Monthly",
    status: "Expanding",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    description:
      "Strategic warehouse infrastructure supporting UAE's growing e-commerce sector.",
  },
  {
    id: 4,
    sector: "Technology",
    icon: Cpu,
    title: "AI & Robotics Ventures",
    location: "Dubai Silicon Oasis",
    deployed: "AED 15M",
    returns: "5.5% Monthly",
    status: "Growth Phase",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    description:
      "Equity participation in technology companies focused on industrial automation and AI.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Portfolio Snapshot
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Assets. Real Returns.{" "}
            <span className="text-gradient-brand">Documented Performance.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every portfolio position represents tangible assets, verified due diligence,
            and structured income mechanisms.
          </p>
        </div>

        {/* Portfolio Grid with Images */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-background border border-border hover:border-accent/30 hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {item.sector}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground block">Location</span>
                    <span className="text-xs text-foreground font-medium">{item.location}</span>
                  </div>
                  <div className="text-center border-x border-border">
                    <span className="text-xs text-muted-foreground block">Deployed</span>
                    <span className="text-xs text-foreground font-medium">{item.deployed}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground block">Returns</span>
                    <span className="text-xs text-accent font-semibold">{item.returns}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="brand-outline" size="lg" className="group">
              View Full Portfolio
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
