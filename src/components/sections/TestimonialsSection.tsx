import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Amir K.",
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "Distributions cover my monthly expenses; the vetting process saves me countless hours of research.",
    rating: 5,
    memberSince: "2020",
  },
  {
    id: 2,
    name: "Sarah L.",
    role: "Investment Professional",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content:
      "The sectors available exceed traditional investment options. Real diversification with real returns.",
    rating: 5,
    memberSince: "2021",
  },
  {
    id: 3,
    name: "Marcus T.",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content:
      "The structures are intelligent and transparent. I know exactly where my capital is deployed.",
    rating: 5,
    memberSince: "2019",
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
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Member Perspectives
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Intelligent Investors.{" "}
            <span className="text-gradient-brand">Honest Reflections.</span>
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'bg-primary text-white border-primary shadow-hover' 
                  : 'bg-background border-border hover:border-accent/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${index === currentIndex ? 'text-accent fill-accent' : 'text-accent fill-accent'}`} 
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h4 className={`font-semibold text-sm ${index === currentIndex ? 'text-white' : 'text-foreground'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-xs ${index === currentIndex ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className={`text-sm line-clamp-3 ${index === currentIndex ? 'text-white/90' : 'text-muted-foreground'}`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl bg-background border border-border shadow-card">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Quote className="w-6 h-6 text-accent" />
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar */}
              <img 
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-accent/20 shadow-md"
              />
              
              {/* Content */}
              <div className="flex-1">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
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
                    <p className="text-accent text-xs mt-1">
                      Member since {currentTestimonial.memberSince}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link to="/#testimonials">
            <Button variant="outline" size="lg">
              More Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
