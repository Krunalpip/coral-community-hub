import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Structures & Risks",
    description: "Understanding investment structures and risk management.",
    thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=340&fit=crop",
    duration: "3:45",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Assets Explained",
    description: "Deep dive into asset-backed investment mechanisms.",
    thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=340&fit=crop",
    duration: "4:20",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Strategy Overview",
    description: "Our investment strategy and methodology explained.",
    thumbnail: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&h=340&fit=crop",
    duration: "5:10",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const VideoInsightsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Educational Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            See How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            UAE investment breakdowns and strategies explained by our team.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video max-w-4xl mx-auto bg-primary/5">
            <iframe
              src="https://www.youtube.com/embed/Lhsfe6RxjcE"
              title="CWI Investment Overview"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-foreground">Welcome to Coral Wealth Investment</h3>
            <p className="text-muted-foreground mt-2">An introduction to our investment philosophy and community</p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View Full Library
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoInsightsSection;
