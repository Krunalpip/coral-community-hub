import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, GraduationCap, Leaf, Users } from "lucide-react";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Educational Scholarships",
    description:
      "Supporting underprivileged students in the UAE with scholarships for higher education. Over 50 students sponsored since 2018.",
    impact: "50+ students supported",
  },
  {
    icon: Heart,
    title: "Healthcare Access",
    description:
      "Partnering with local clinics to provide free health screenings and medical consultations for low-income families.",
    impact: "1,200+ families served",
  },
  {
    icon: Leaf,
    title: "Environmental Initiatives",
    description:
      "Investing in sustainable projects and participating in UAE's green economy vision through tree planting and conservation efforts.",
    impact: "5,000+ trees planted",
  },
  {
    icon: Users,
    title: "Community Development",
    description:
      "Supporting local entrepreneurs and small businesses through mentorship programs and micro-financing initiatives.",
    impact: "75+ businesses supported",
  },
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
        <meta name="keywords" content="CWI CSR, Dubai charity, UAE community development, investment company social responsibility" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
                  Corporate Social Responsibility
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Investing in{" "}
                  <span className="text-gradient-gold">Community Impact</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Wealth creation is only meaningful when it extends beyond individual
                  success to uplift communities. Our CSR initiatives reflect this belief.
                </p>
              </div>
            </div>
          </section>

          {/* Initiatives */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-8">
                {initiatives.map((initiative) => (
                  <div
                    key={initiative.title}
                    className="p-8 rounded-2xl bg-card border border-border"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <initiative.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {initiative.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="py-20 bg-card">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                  Our CSR Philosophy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
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
          </section>

          {/* Impact Numbers */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <span className="font-display text-4xl font-semibold text-gradient-gold">
                    AED 2M+
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">Total Contributed</p>
                </div>
                <div>
                  <span className="font-display text-4xl font-semibold text-gradient-gold">
                    15+
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">Partner Organizations</p>
                </div>
                <div>
                  <span className="font-display text-4xl font-semibold text-gradient-gold">
                    6+
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">Years of Impact</p>
                </div>
                <div>
                  <span className="font-display text-4xl font-semibold text-gradient-gold">
                    5,000+
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">Lives Touched</p>
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

export default CSR;
