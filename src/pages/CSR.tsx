import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, GraduationCap, Leaf, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Educational Scholarships",
    description: "Supporting underprivileged students in the UAE with scholarships for higher education.",
    impact: "50+ students supported",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
  },
  {
    icon: Heart,
    title: "Healthcare Access",
    description: "Partnering with local clinics to provide free health screenings for low-income families.",
    impact: "1,200+ families served",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
  },
  {
    icon: Leaf,
    title: "Environmental Initiatives",
    description: "Investing in sustainable projects and participating in UAE's green economy vision.",
    impact: "5,000+ trees planted",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop"
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Supporting local entrepreneurs through mentorship and micro-financing initiatives.",
    impact: "75+ businesses supported",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=300&fit=crop",
];

const CSR = () => {
  return (
    <>
      <Helmet>
        <title>CSR Activity | Coral Wealth Investment - Community Impact</title>
        <meta
          name="description"
          content="Learn about Coral Wealth Investment's corporate social responsibility initiatives in education, healthcare, environment, and community development."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section with Image */}
          <section className="relative min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=800&fit=crop"
                alt="Community support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
            </div>
            <div className="container-custom relative z-10">
              <div className="max-w-3xl">
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Corporate Social Responsibility
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Investing in Community Impact
                </h1>
                <p className="text-lg text-white/90">
                  Wealth creation is only meaningful when it extends beyond individual
                  success to uplift communities.
                </p>
              </div>
            </div>
          </section>

          {/* Initiatives Grid */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Our Initiatives
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Making a Difference in Every Community
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {initiatives.map((initiative) => (
                  <div
                    key={initiative.title}
                    className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-hover transition-all"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                          <initiative.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/90 text-primary text-sm font-semibold">
                          {initiative.impact}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {initiative.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Photo Gallery */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Photo Gallery
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Our Impact in Action
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
                  >
                    <img 
                      src={image}
                      alt={`CSR Activity ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=500&fit=crop"
                    alt="Volunteers helping"
                    className="rounded-2xl shadow-hover w-full"
                  />
                </div>
                <div>
                  <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                    Our Philosophy
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    More Than Charity—A Commitment
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe corporate social responsibility is not marketing—it is a
                    structural commitment to giving back. Every year, a percentage of our
                    operational surplus is dedicated to initiatives that create long-term
                    positive impact in the UAE and beyond.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our members are encouraged to participate directly in these initiatives,
                    creating shared experiences that strengthen community bonds beyond
                    financial relationships.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Numbers */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=500&fit=crop"
                alt="Community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            <div className="container-custom relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-white">
                    AED 2M+
                  </span>
                  <p className="text-white/70 text-sm mt-2">Total Contributed</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-white">
                    15+
                  </span>
                  <p className="text-white/70 text-sm mt-2">Partner Organizations</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-white">
                    6+
                  </span>
                  <p className="text-white/70 text-sm mt-2">Years of Impact</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-white">
                    5,000+
                  </span>
                  <p className="text-white/70 text-sm mt-2">Lives Touched</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-card">
            <div className="container-custom text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Want to Get Involved?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Join our community and participate in initiatives that make a real difference.
              </p>
              <Link to="/contact">
                <Button variant="brand" size="xl" className="group">
                  Contact Us
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

export default CSR;
