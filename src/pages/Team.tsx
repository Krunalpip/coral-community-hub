import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Khalid Al-Mansouri",
    role: "Founder & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "With over 20 years in UAE real estate and private equity, Khalid founded CWI to bridge the gap between institutional opportunities and individual investors.",
    linkedin: "#",
  },
  {
    name: "Fatima Hassan",
    role: "Chief Investment Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Fatima leads investment strategy and due diligence. A former investment banker, she brings rigorous analysis and risk management expertise.",
    linkedin: "#",
  },
  {
    name: "James Chen",
    role: "Head of Investor Relations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "James ensures every member receives personalized attention and clear communication. His background in wealth management makes him the first point of contact.",
    linkedin: "#",
  },
  {
    name: "Aisha Rahman",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Aisha manages the operational infrastructure that keeps CWI running smoothly, from compliance to reporting at the highest standards.",
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
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section with Image */}
          <section className="relative min-h-[50vh] flex items-center">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=700&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
            </div>
            <div className="container-custom relative z-10">
              <div className="max-w-3xl">
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Our Team
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Experience You Can Trust
                </h1>
                <p className="text-lg text-white/90">
                  Our leadership combines decades of investment experience with a genuine
                  commitment to member success.
                </p>
              </div>
            </div>
          </section>

          {/* Team Grid with Photos */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-hover transition-all"
                  >
                    {/* Photo */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Social Links on Hover */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@coraluae.com`}
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-accent text-sm font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Principles with Images */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Leadership Principles
                </h2>
                <p className="text-muted-foreground">
                  The values that guide our team and every decision we make
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-hover transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
                      alt="Accountability"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-display text-2xl font-bold text-white">Accountability</h4>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-muted-foreground text-sm">
                      Every recommendation carries our personal commitment to your success.
                    </p>
                  </div>
                </div>

                <div className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-hover transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop"
                      alt="Accessibility"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-accent/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-display text-2xl font-bold text-white">Accessibility</h4>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-muted-foreground text-sm">
                      Direct access to decision-makers, not layers of bureaucracy.
                    </p>
                  </div>
                </div>

                <div className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-hover transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop"
                      alt="Alignment"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-display text-2xl font-bold text-white">Alignment</h4>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-muted-foreground text-sm">
                      We invest alongside our members in the opportunities we recommend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=500&fit=crop"
                alt="Meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            <div className="container-custom relative z-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Meet Our Team?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Schedule a call to discuss your investment goals and learn how we can help.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="xl" className="group">
                  Schedule a Call
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

export default Team;
