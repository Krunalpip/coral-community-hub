import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JoinSection = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"member" | "investor">("member");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [memberForm, setMemberForm] = useState({
    name: "",
    email: "",
    mobile: "",
    nationality: "",
    occupation: "",
    company: "",
    linkedin: "",
    source: "",
    motivation: "",
    declaration: false,
    guidelines: false,
  });

  const [investorForm, setInvestorForm] = useState({
    name: "",
    email: "",
    mobile: "",
    nationality: "",
    occupation: "",
    company: "",
    linkedin: "",
    capital: "",
    period: "",
    tenure: "",
    priorExperience: "",
    goals: "",
    contribution: "",
    referral: "",
    additional: "",
    declaration: false,
    guidelines: false,
  });

  const handleMemberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Application Received",
      description: "Our team will review your membership application and contact you within 24-48 hours.",
    });
    setIsSubmitting(false);
    setMemberForm({
      name: "", email: "", mobile: "", nationality: "", occupation: "",
      company: "", linkedin: "", source: "", motivation: "",
      declaration: false, guidelines: false,
    });
  };

  const handleInvestorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Investor Inquiry Received",
      description: "Our investment relations team will contact you within 24-48 hours.",
    });
    setIsSubmitting(false);
    setInvestorForm({
      name: "", email: "", mobile: "", nationality: "", occupation: "",
      company: "", linkedin: "", capital: "", period: "", tenure: "",
      priorExperience: "", goals: "", contribution: "", referral: "", additional: "",
      declaration: false, guidelines: false,
    });
  };

  return (
    <section id="form-member" className="section-padding bg-card relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-hover mb-8">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop"
                alt="Professional consultation meeting"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8">
                <div className="text-white max-w-sm">
                  <h3 className="font-display text-2xl font-bold mb-2">
                    Start Your Wealth Journey
                  </h3>
                  <p className="text-white/80 text-sm">
                    Join 158+ members building sustainable income through structured investments
                  </p>
                </div>
              </div>
            </div>

            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Begin Your Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Qualification, Not Registration.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This form helps us understand your investment profile and determine if CWI is the right fit for your financial goals.
            </p>

            <div className="space-y-3">
              {[
                "Review by our investor relations team",
                "Confidential strategy call",
                "Introduction to matching opportunities",
                "Guided onboarding support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Forms */}
          <div className="bg-background rounded-2xl border border-border p-8 shadow-card">
            {/* Tab Buttons */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab("member")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "member"
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <Users className="w-4 h-4" />
                Join Member
              </button>
              <button
                onClick={() => setActiveTab("investor")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "investor"
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Join Investor
              </button>
            </div>

            {/* Member Form */}
            {activeTab === "member" && (
              <form onSubmit={handleMemberSubmit} className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Start your journey with our Private Community.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name *"
                    required
                    value={memberForm.name}
                    onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                    className="bg-card"
                  />
                  <Input
                    type="email"
                    placeholder="Email *"
                    required
                    value={memberForm.email}
                    onChange={(e) => setMemberForm({ ...memberForm, email: e.target.value })}
                    className="bg-card"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Mobile *"
                    required
                    value={memberForm.mobile}
                    onChange={(e) => setMemberForm({ ...memberForm, mobile: e.target.value })}
                    className="bg-card"
                  />
                  <Input
                    placeholder="Nationality *"
                    required
                    value={memberForm.nationality}
                    onChange={(e) => setMemberForm({ ...memberForm, nationality: e.target.value })}
                    className="bg-card"
                  />
                </div>

                <Input
                  placeholder="Occupation *"
                  required
                  value={memberForm.occupation}
                  onChange={(e) => setMemberForm({ ...memberForm, occupation: e.target.value })}
                  className="bg-card"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Company (optional)"
                    value={memberForm.company}
                    onChange={(e) => setMemberForm({ ...memberForm, company: e.target.value })}
                    className="bg-card"
                  />
                  <Input
                    placeholder="LinkedIn (optional)"
                    value={memberForm.linkedin}
                    onChange={(e) => setMemberForm({ ...memberForm, linkedin: e.target.value })}
                    className="bg-card"
                  />
                </div>

                <Input
                  placeholder="How did you hear about us? *"
                  required
                  value={memberForm.source}
                  onChange={(e) => setMemberForm({ ...memberForm, source: e.target.value })}
                  className="bg-card"
                />

                <Textarea
                  placeholder="What motivates you to join? *"
                  required
                  value={memberForm.motivation}
                  onChange={(e) => setMemberForm({ ...memberForm, motivation: e.target.value })}
                  className="bg-card min-h-[80px]"
                />

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      required
                      checked={memberForm.declaration}
                      onChange={(e) => setMemberForm({ ...memberForm, declaration: e.target.checked })}
                      className="rounded"
                    />
                    I confirm the information provided is accurate *
                  </label>
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      required
                      checked={memberForm.guidelines}
                      onChange={(e) => setMemberForm({ ...memberForm, guidelines: e.target.checked })}
                      className="rounded"
                    />
                    I agree to the community guidelines *
                  </label>
                </div>

                <Button type="submit" variant="brand" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : (
                    <>Submit Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </Button>
              </form>
            )}

            {/* Investor Form */}
            {activeTab === "investor" && (
              <form onSubmit={handleInvestorSubmit} className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Empower your investments with us.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name *"
                    required
                    value={investorForm.name}
                    onChange={(e) => setInvestorForm({ ...investorForm, name: e.target.value })}
                    className="bg-card"
                  />
                  <Input
                    type="email"
                    placeholder="Email *"
                    required
                    value={investorForm.email}
                    onChange={(e) => setInvestorForm({ ...investorForm, email: e.target.value })}
                    className="bg-card"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Mobile *"
                    required
                    value={investorForm.mobile}
                    onChange={(e) => setInvestorForm({ ...investorForm, mobile: e.target.value })}
                    className="bg-card"
                  />
                  <Input
                    placeholder="Nationality *"
                    required
                    value={investorForm.nationality}
                    onChange={(e) => setInvestorForm({ ...investorForm, nationality: e.target.value })}
                    className="bg-card"
                  />
                </div>

                <Input
                  placeholder="Occupation *"
                  required
                  value={investorForm.occupation}
                  onChange={(e) => setInvestorForm({ ...investorForm, occupation: e.target.value })}
                  className="bg-card"
                />

                <div className="grid sm:grid-cols-3 gap-4">
                  <Input
                    placeholder="Capital Range *"
                    required
                    value={investorForm.capital}
                    onChange={(e) => setInvestorForm({ ...investorForm, capital: e.target.value })}
                    className="bg-card"
                  />
                  <Input
                    placeholder="Investment Period *"
                    required
                    value={investorForm.period}
                    onChange={(e) => setInvestorForm({ ...investorForm, period: e.target.value })}
                    className="bg-card"
                  />
                  <Input
                    placeholder="Expected Tenure *"
                    required
                    value={investorForm.tenure}
                    onChange={(e) => setInvestorForm({ ...investorForm, tenure: e.target.value })}
                    className="bg-card"
                  />
                </div>

                <Textarea
                  placeholder="What are your investment goals? *"
                  required
                  value={investorForm.goals}
                  onChange={(e) => setInvestorForm({ ...investorForm, goals: e.target.value })}
                  className="bg-card min-h-[80px]"
                />

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      required
                      checked={investorForm.declaration}
                      onChange={(e) => setInvestorForm({ ...investorForm, declaration: e.target.checked })}
                      className="rounded"
                    />
                    I confirm the information provided is accurate *
                  </label>
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      required
                      checked={investorForm.guidelines}
                      onChange={(e) => setInvestorForm({ ...investorForm, guidelines: e.target.checked })}
                      className="rounded"
                    />
                    I agree to the investment guidelines *
                  </label>
                </div>

                <Button type="submit" variant="brand" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : (
                    <>Submit Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </Button>
              </form>
            )}

            <p className="text-xs text-muted-foreground text-center mt-4">
              Your information is secure and will never be shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
