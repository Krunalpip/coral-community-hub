import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Khalid Al-Mansouri",
    role: "Founder & Managing Director",
    bio: "With over 20 years in UAE real estate and private equity, Khalid founded CWI to bridge the gap between institutional opportunities and individual investors. His experience spans development, asset management, and strategic advisory across the GCC.",
    linkedin: "#",
  },
  {
    name: "Fatima Hassan",
    role: "Chief Investment Officer",
    bio: "Fatima leads investment strategy and due diligence processes. A former investment banker with experience at regional institutions, she brings rigorous analysis and risk management expertise to every opportunity.",
    linkedin: "#",
  },
  {
    name: "James Chen",
    role: "Head of Investor Relations",
    bio: "James ensures every member receives personalized attention and clear communication. His background in wealth management and client advisory makes him the first point of contact for new members.",
    linkedin: "#",
  },
  {
    name: "Aisha Rahman",
    role: "Director of Operations",
    bio: "Aisha manages the operational infrastructure that keeps CWI running smoothly. From compliance to reporting, she ensures every process meets the highest standards of professionalism.",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Coral Wealth Investment - Leadership</title>
        <meta
          name="description"
          content="Meet the leadership team behind Coral Wealth Investment. Experienced professionals dedicated to your investment success in the UAE."
        />
        <meta name="keywords" content="CWI leadership, Dubai investment team, UAE wealth management team" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
                  Our Team
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Experience You Can{" "}
                  <span className="text-gradient-gold">Trust</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Our leadership combines decades of investment experience with a genuine
                  commitment to member success.
                </p>
              </div>
            </div>
          </section>

          {/* Team Grid */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-8">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-6">
                      {/* Avatar Placeholder */}
                      <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-display text-2xl font-semibold text-primary">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-primary text-sm font-medium mb-3">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {member.bio}
                        </p>

                        <div className="flex items-center gap-3">
                          <a
                            href={member.linkedin}
                            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin size={14} />
                          </a>
                          <a
                            href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@coraluae.com`}
                            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                  Leadership Principles
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                      Accountability
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Every recommendation carries our personal commitment to your success.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                      Accessibility
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Direct access to decision-makers, not layers of bureaucracy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                      Alignment
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      We invest alongside our members in the opportunities we recommend.
                    </p>
                  </div>
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

export default Team;
