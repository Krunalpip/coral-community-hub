import { Heart, Truck, GraduationCap, Car, Plane, Smartphone, Factory, Leaf, Ship, Sparkles, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingProjects = [
  {
    sector: "Healthcare",
    icon: Heart,
    description: "Stability and income through medical facilities.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
  },
  {
    sector: "Logistics",
    icon: Truck,
    description: "Automation and scalability in warehouse operations.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop",
  },
  {
    sector: "Education",
    icon: GraduationCap,
    description: "Tech-driven learning platforms and campuses.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
  },
  {
    sector: "Rentals Infrastructure",
    icon: Car,
    description: "Consistent returns from rental asset fleets.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
  },
  {
    sector: "Aviation",
    icon: Plane,
    description: "Operational efficiency in aircraft systems.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
  },
  {
    sector: "Fintech",
    icon: Smartphone,
    description: "Innovative financial solutions and apps.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
  },
  {
    sector: "Industrial Manufacturing",
    icon: Factory,
    description: "Growth through manufacturing expansion.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop",
  },
  {
    sector: "Renewable Energy",
    icon: Leaf,
    description: "Sustainability and green energy investments.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
  },
  {
    sector: "Maritime",
    icon: Ship,
    description: "Logistics through ports and shipping.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=300&fit=crop",
  },
  {
    sector: "Wellness",
    icon: Sparkles,
    description: "Healthcare and wellness center investments.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=300&fit=crop",
  },
  {
    sector: "Consumer Products",
    icon: ShoppingBag,
    description: "Retail and luxury consumer investments.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
  },
  {
    sector: "Pink Falconics",
    icon: Car,
    description: "Women-only car rental in Dubai - Empowered mobility.",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop",
  },
];

const UpcomingProjectsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Coming Soon
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Upcoming{" "}
            <span className="text-gradient-brand">Opportunities</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore sectors with early access opportunities for qualified investors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {upcomingProjects.map((project) => (
            <div
              key={project.sector}
              className="group rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.sector}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  {project.sector}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Early Access
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjectsSection;
