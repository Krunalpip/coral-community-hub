import { ArrowUpRight, Package, Plane, Shield, Bot, GraduationCap, Cpu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    sector: "Containers & Caravans",
    icon: Package,
    title: "Starlink Exp",
    description: "Asset-backed trading in luxury containers and caravans.",
    invested: "AED 420K",
    value: "AED 916K",
    roi: "+36%",
    profit: "+14%",
    status: "Fully Operational",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    sector: "Luxury Air Travel",
    icon: Plane,
    title: "SkyRoyce",
    description: "Aviation marketplace for luxury private jet experiences.",
    invested: "AED 2,500K",
    value: "AED 3,030K",
    roi: "+21.1%",
    profit: "+13%",
    status: "Active Distribution",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    sector: "General Aviation",
    icon: Shield,
    title: "GAC Aviation",
    description: "Pilot access and aviation safety training programs.",
    invested: "AED 840K",
    value: "AED 1,580K",
    roi: "+19%",
    profit: "+7%",
    status: "Expanding",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    sector: "Humanoid Robotics",
    icon: Bot,
    title: "Fortune Robotics",
    description: "Healthcare, hospitality, and automation robotics solutions.",
    invested: "AED 1,200K",
    value: "AED 2,000K+",
    roi: "+36-48%",
    profit: "+13%",
    status: "Growth Phase",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    sector: "Education Innovation",
    icon: GraduationCap,
    title: "Silicon Institute",
    description: "AI and robotics education platform for future skills.",
    invested: "AED 600K",
    value: "AED 900K+",
    roi: "+34%",
    profit: "+8%",
    status: "Active",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    sector: "AI Automation",
    icon: Cpu,
    title: "Backergy Soft",
    description: "SaaS workflows and AI-powered business automation.",
    invested: "AED 2,690K",
    value: "AED 3,610K",
    roi: "+30%",
    profit: "+43% efficiency",
    status: "Active",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    sector: "Luxury Interiors",
    icon: Home,
    title: "L-Circle",
    description: "Premium home, office, and gym interior fit-outs.",
    invested: "—",
    value: "—",
    roi: "+32%",
    profit: "—",
    status: "Active",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
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
            Real Assets. Lasting Income.{" "}
            <span className="text-gradient-brand">Diversification.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every portfolio position represents tangible assets, verified due diligence,
            and structured income mechanisms.
          </p>
        </div>

        {/* Portfolio Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-background border border-border hover:border-accent/30 hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
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
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-card border border-border">
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground block">Invested</span>
                    <span className="text-sm text-foreground font-medium">{item.invested}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground block">Value</span>
                    <span className="text-sm text-foreground font-medium">{item.value}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground block">ROI</span>
                    <span className="text-sm text-accent font-semibold">{item.roi}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground block">Profit</span>
                    <span className="text-sm text-accent font-semibold">{item.profit}</span>
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
