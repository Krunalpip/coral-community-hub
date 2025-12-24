import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wallet,
  Shield,
  Users,
  TrendingUp,
  BookOpen,
  Handshake,
  Gift,
  Building,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Curated Deal Flow",
    description: "Access pre-vetted investment opportunities that have passed our rigorous due diligence.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Personal risk profiling to match opportunities with your tolerance and goals.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
  },
  {
    icon: Users,
    title: "Collective Intelligence",
    description: "Benefit from shared insights from experienced investors across diverse industries.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  },
  {
    icon: TrendingUp,
    title: "Consistent Income",
    description: "Focus on income-generating assets designed to provide regular distributions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Access workshops, market analysis, and investment education for UAE market.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
  },
  {
    icon: Handshake,
    title: "Direct Relationships",
    description: "Connect directly with developers, operators, and founders behind opportunities.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop"
  },
  {
    icon: Gift,
    title: "Member Rewards",
    description: "Referral programs, loyalty benefits, and priority access to new opportunities.",
    image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=400&h=300&fit=crop"
  },
  {
    icon: Building,
    title: "Lifestyle Benefits",
    description: "Partner discounts on real estate, travel, hospitality, and professional services.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop"
  },
];

const Benefits = () => {
  return (
    <>
      <Helmet>
        <title>Community Benefits | CWI Investment - Member Advantages</title>
        <meta
          name="description"
          content="Discover the exclusive benefits of joining CWI Investment community. Access curated deals, collective intelligence, and lifestyle advantages."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section with Image */}
          <section className="relative min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=800&fit=crop"
                alt="Professional team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
            </div>
            <div className="container-custom relative z-10">
              <div className="max-w-3xl">
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Community Benefits
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Beyond Investment. A Complete Ecosystem.
                </h1>
                <p className="text-lg text-white/90 leading-relaxed">
                  Membership in CWI delivers more than access to opportunities—it provides
                  the infrastructure, intelligence, and network to build lasting wealth.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Grid with Images */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/30 hover:shadow-hover transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                          <benefit.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Value Statement with Image */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                    alt="Team collaboration"
                    className="rounded-2xl shadow-hover w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-xl p-6 shadow-lg hidden md:block">
                    <p className="text-3xl font-bold">95%</p>
                    <p className="text-sm opacity-90">Member Retention</p>
                  </div>
                </div>
                <div>
                  <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                    The Power of Community
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why Community Matters in Wealth Building
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Individual investors face information asymmetry, limited deal flow, and
                    isolation. CWI changes this equation by pooling expertise, creating
                    leverage, and building systems that benefit every member.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Access to exclusive deal flow",
                      "Shared due diligence reduces risk",
                      "Network effects multiply opportunities",
                      "Collective bargaining power",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=500&fit=crop"
                alt="Dubai skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            <div className="container-custom relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-white">
                    850+
                  </span>
                  <p className="text-white/70 text-sm mt-2">Active Members</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-white">
                    15+
                  </span>
                  <p className="text-white/70 text-sm mt-2">Countries Represented</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-white">
                    24
                  </span>
                  <p className="text-white/70 text-sm mt-2">Active Projects</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-white">
                    95%
                  </span>
                  <p className="text-white/70 text-sm mt-2">Member Retention</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Ready to Join Our Community?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Begin the qualification process and explore if CWI is the right fit for
                    your investment journey.
                  </p>
                  <Link to="/contact">
                    <Button variant="brand" size="xl" className="group">
                      Apply for Membership
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-hover aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/Lhsfe6RxjcE"
                    title="Member Benefits"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Benefits;
