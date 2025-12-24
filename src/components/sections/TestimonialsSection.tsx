import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    role: "Business Owner, Dubai",
    content:
      "After years of managing my own investments with mixed results, joining CWI brought clarity I did not expect. The monthly distributions are consistent, and more importantly, I understand exactly where my capital is deployed.",
    memberSince: "2019",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Healthcare Executive, Abu Dhabi",
    content:
      "What attracted me was the transparency. Every quarter, I receive detailed reports on asset performance. No hidden fees, no complex structures—just straightforward participation in real opportunities.",
    memberSince: "2020",
  },
  {
    id: 3,
    name: "Mohammed Qasim",
    role: "Retired Engineer, Sharjah",
    content:
      "I was skeptical at first—I have seen too many investment schemes. But CWI operates differently. The team took time to understand my risk tolerance and only recommended opportunities that matched my profile.",
    memberSince: "2018",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "IT Consultant, Dubai",
    content:
      "The time I save is invaluable. Instead of researching deals myself, I leverage the community's due diligence. In three years, I have participated in six opportunities—all performing as expected.",
    memberSince: "2021",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Member Perspectives
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Intelligent Investors.{" "}
            <span className="text-gradient-gold">Honest Reflections.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Hear from community members about their experience with structured wealth participation.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl bg-background border border-border">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Content */}
            <div className="relative">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-primary text-xs mt-1">
                    Member since {currentTestimonial.memberSince}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
