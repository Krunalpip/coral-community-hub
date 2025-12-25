import { Shield, Users, TrendingUp, Building, Plane, Truck, Cpu, Car, Ship, Factory, Briefcase, Heart, GraduationCap, Leaf } from "lucide-react";
import { useEffect, useRef } from "react";

const sectors = [
  { 
    name: "Real Estate", 
    icon: Building,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop"
  },
  { 
    name: "Aviation", 
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop"
  },
  { 
    name: "Car Rental", 
    icon: Car,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop"
  },
  { 
    name: "Logistics", 
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
  },
  { 
    name: "Technology", 
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
  },
  { 
    name: "Maritime", 
    icon: Ship,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=300&fit=crop"
  },
  { 
    name: "Manufacturing", 
    icon: Factory,
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop"
  },
  { 
    name: "Financial Services", 
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
  },
  { 
    name: "Healthcare", 
    icon: Heart,
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop"
  },
  { 
    name: "Education", 
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"
  },
  { 
    name: "Green Energy", 
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop"
  },
];

const CommunitySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset to start when reaching the end (seamless loop)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after a short delay
    const timeout = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 1000);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image & Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Professional team discussing investment strategies"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold">850+</p>
                    <p className="text-sm opacity-90">Active Members</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">AED 120M+</p>
                    <p className="text-sm opacity-90">Capital Deployed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-sm opacity-90">Live Projects</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl border border-border p-4 shadow-card hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Returns</p>
                  <p className="text-xl font-bold text-foreground">1.8% – 6%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Why Community Matters
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              From Accumulation to{" "}
              <span className="text-gradient-brand">Structured Participation</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                True financial independence comes from
                <strong className="text-foreground"> systematic participation</strong> in
                income-generating assets, not just savings.
              </p>
              <p>
                CWI members gain access to curated, asset-backed opportunities that have been
                vetted for consistency—not speculation.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:shadow-card transition-shadow">
                <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">Full Transparency</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:shadow-card transition-shadow">
                <Users className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">Risk Profiling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Sectors with Auto-Scroll */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-10">
            Active Investment Sectors
          </h3>
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate sectors for seamless loop */}
            {[...sectors, ...sectors].map((sector, index) => (
              <div
                key={`${sector.name}-${index}`}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-hover transition-all duration-300 flex-shrink-0 w-72"
              >
                <img 
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2">
                    <sector.icon className="w-5 h-5" />
                    <h4 className="font-semibold">{sector.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
