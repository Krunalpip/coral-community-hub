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
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Curated Deal Flow",
    description:
      "Access pre-vetted investment opportunities that have passed our rigorous due diligence process. No need to source deals yourself.",
  },
  {
    icon: Shield,
    title: "Risk Assessment Support",
    description:
      "Personal risk profiling to match opportunities with your tolerance, timeline, and financial goals.",
  },
  {
    icon: Users,
    title: "Collective Intelligence",
    description:
      "Benefit from shared insights and analysis from a community of experienced investors across diverse industries.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Income",
    description:
      "Focus on income-generating assets designed to provide regular distributions, not speculation.",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description:
      "Access to workshops, market analysis, and investment education tailored to the UAE market.",
  },
  {
    icon: Handshake,
    title: "Direct Relationships",
    description:
      "Connect directly with developers, operators, and founders behind investment opportunities.",
  },
  {
    icon: Gift,
    title: "Member Rewards",
    description:
      "Referral programs, loyalty benefits, and priority access to new opportunities as they arise.",
  },
  {
    icon: Building,
    title: "Lifestyle Benefits",
    description:
      "Partner discounts on real estate, travel, hospitality, and professional services across the UAE.",
  },
];

const Benefits = () => {
  return (
    <>
      <Helmet>
        <title>Community Benefits | Coral Wealth Investment - Member Advantages</title>
        <meta
          name="description"
          content="Discover the exclusive benefits of joining Coral Wealth Investment community. Access curated deals, collective intelligence, and lifestyle advantages."
        />
        <meta name="keywords" content="investment community benefits, Dubai investor network, UAE investment membership, private investor advantages" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
                  Community Benefits
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                  Beyond Investment.{" "}
                  <span className="text-gradient-gold">A Complete Ecosystem.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Membership in CWI delivers more than access to opportunities—it provides
                  the infrastructure, intelligence, and network to build lasting wealth.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Value Statement */}
          <section className="py-20 bg-card">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  The Value of Community
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Individual investors face information asymmetry, limited deal flow, and
                  isolation. CWI changes this equation by pooling expertise, creating
                  leverage, and building systems that benefit every member. When one
                  member gains insight, the entire community benefits.
                </p>
                <div className="grid grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <span className="font-display text-4xl font-semibold text-gradient-gold">
                      850+
                    </span>
                    <p className="text-muted-foreground text-sm mt-2">Active Members</p>
                  </div>
                  <div className="text-center">
                    <span className="font-display text-4xl font-semibold text-gradient-gold">
                      15+
                    </span>
                    <p className="text-muted-foreground text-sm mt-2">Countries Represented</p>
                  </div>
                  <div className="text-center">
                    <span className="font-display text-4xl font-semibold text-gradient-gold">
                      95%
                    </span>
                    <p className="text-muted-foreground text-sm mt-2">Member Retention</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-background">
            <div className="container-custom text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Ready to Join?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Begin the qualification process and explore if CWI is the right fit for
                your investment journey.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="xl" className="group">
                  Apply for Membership
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

export default Benefits;
