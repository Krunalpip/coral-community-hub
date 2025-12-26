import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Coral Wealth Investment?",
    answer:
      "CWI is a private investment community that has been empowering investors since 2014. We operate globally across multiple countries, connecting qualified investors with curated, asset-backed opportunities in the UAE.",
  },
  {
    question: "How do I join?",
    answer:
      "Simply complete the membership inquiry form on our website. Our team will review your application and schedule a strategy call to discuss your investment goals and determine if CWI is the right fit for you.",
  },
  {
    question: "Who can join CWI?",
    answer:
      "CWI is designed for individuals, professionals, and business owners seeking financial independence through structured investments. We welcome members who are committed to long-term wealth building and value transparency over speculation.",
  },
  {
    question: "What returns can I expect?",
    answer:
      "Our portfolio targets monthly returns between 1.8% and 6%, depending on the asset class and risk profile. Lower-risk positions typically yield 1.8-2.5%, while higher-growth opportunities may target 4-6%. Past performance does not guarantee future results.",
  },
  {
    question: "What sectors do you invest in?",
    answer:
      "We invest across multiple sectors including Manufacturing, Energy, Technology, Logistics, Healthcare, Retail, Education, Aviation, and Robotics. Each sector is selected for income consistency and alignment with UAE's economic growth.",
  },
  {
    question: "How is my investment secured?",
    answer:
      "All investments are professionally managed with comprehensive insurance coverage. We conduct thorough due diligence on every opportunity, and assets are backed by tangible properties, equipment, or contracts. Regular reporting ensures full transparency.",
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
