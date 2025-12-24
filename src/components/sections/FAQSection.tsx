import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is eligible to join Coral Wealth Investment?",
    answer:
      "CWI is designed for individuals, professionals, and business owners who meet minimum investment thresholds and seek long-term, asset-backed income. We conduct a brief qualification process to ensure alignment between your financial goals and available opportunities. There is no geographic restriction—members join from across the UAE, GCC, and internationally.",
  },
  {
    question: "How is my capital protected?",
    answer:
      "Capital protection varies by asset class and structure. Real estate investments are backed by physical property. Aviation and logistics positions are secured by tangible assets and long-term contracts. All investments include legal documentation, escrow arrangements where applicable, and regular reporting. We never guarantee returns, but we do guarantee transparency.",
  },
  {
    question: "What returns can I realistically expect?",
    answer:
      "Historical performance across our portfolio ranges from 1.8% to 6% monthly, depending on asset class and risk profile. Lower-risk real estate positions typically yield 1.8-2.5%, while higher-growth technology or aviation positions may target 4-6%. Past performance does not guarantee future results. We provide detailed projections before you commit to any opportunity.",
  },
  {
    question: "How does the community model differ from a fund?",
    answer:
      "Unlike a pooled fund, CWI operates as a community where members choose individual opportunities based on their preferences. You maintain direct ownership or contractual rights to specific assets. There are no management fees on your capital—only participation in shared due diligence and deal structuring costs.",
  },
  {
    question: "What documentation and compliance is involved?",
    answer:
      "All investments operate within UAE regulatory frameworks. You will receive investment agreements, ownership documentation (where applicable), and quarterly performance reports. We work with licensed legal and financial advisors to ensure proper structuring. KYC verification is required for all members.",
  },
  {
    question: "How do I begin the process?",
    answer:
      "Start by scheduling a strategy call with our team. We will discuss your investment goals, risk tolerance, and timeline. If there is mutual alignment, we will guide you through the qualification process, introduce relevant opportunities, and support you through your first participation. There is no obligation at any stage.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Header */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Clarity Before{" "}
              <span className="text-gradient-brand">Commitment</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe informed investors make better decisions. These questions
              address the most common concerns—but our team is always available
              for deeper conversations.
            </p>

            {/* Contact Box */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                Still have questions?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Schedule a confidential call with our investor relations team.
              </p>
              <a
                href="/contact"
                className="text-accent font-medium text-sm hover:underline"
              >
                Contact Us →
              </a>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-accent py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
