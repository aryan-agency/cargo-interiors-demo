import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";

const homeCategories = [
  {
    title: "Modular Kitchen Design",
    description: "Premium materials, smart storage, and elegant finishes tailored to your Gurugram home.",
    to: "/modular-kitchen-designer-in-gurgaon",
  },
  {
    title: "Living Room Makeover",
    description: "Statement living spaces designed for comfort, entertaining, and everyday family life.",
    to: "/living-room-interior-design-in-gurgaon",
  },
  {
    title: "Master Bedroom Design",
    description: "Restful, refined bedrooms with custom wardrobes, mood lighting, and luxe finishes.",
    to: "/master-bedroom-interior-design-in-gurgaon",
  },
  {
    title: "Bathroom & Wardrobe Solutions",
    description: "Space-smart bathroom and wardrobe design solutions built around your daily routine.",
    to: "/bathroom-and-wardrobe-designer-in-gurgaon",
  },
];

const relatedHomeLinks = [
  { label: "2BHK Flat Interior Designer", to: "/2bhk-flat-interior-designer-in-gurgaon" },
  { label: "Villa Interior Designer in Gurgaon", to: "/villa-interior-designer-in-gurgaon" },
  { label: "Home Interior Design Portfolio", to: "/home-interior-design-portfolio-gurgaon" },
  { label: "Experienced Interior Designer", to: "/experienced-interior-designer-in-gurgaon" },
  { label: "2BHK Interior Design Cost", to: "/blog/2bhk-interior-design-cost-in-gurgaon" },
  { label: "Interior Cost Calculator", to: "/interior-cost-calculator" },
];

export default function PortfolioHome() {
  return (
    <>
      <SEOHead
        title="Home Interior Designer in Gurugram – Portfolio | Cargo Interiors"
        description="See our home interior design portfolio in Gurugram — modular kitchens, living rooms, bedrooms & more. Comfort-first designs by Cargo Interiors."
      />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Home Interiors</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Home Interior Designer in Gurugram – <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-4">
            Your home should reflect your lifestyle. As an{" "}
            <Link to="/experienced-interior-designer-in-gurgaon" className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors">
              experienced interior designer in Gurgaon
            </Link>
            , we create spaces that balance comfort, aesthetics, and modern functionality — from compact{" "}
            <Link to="/2bhk-flat-interior-designer-in-gurgaon" className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors">
              2BHK interior design in Gurgaon
            </Link>{" "}
            to sprawling{" "}
            <Link to="/villa-interior-designer-in-gurgaon" className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors">
              villa interior design in Gurgaon
            </Link>
            . Every project here showcases our commitment to personalised design and flawless execution.
          </p>

          <div className="mt-12 flex justify-center">
            <iframe
              src="https://gamma.app/embed/yaxehnpq4u0zrwu"
              style={{ width: "700px", maxWidth: "100%", height: "450px" }}
              allow="fullscreen"
              title="Turning Houses Into Refined Living Spaces"
            />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {homeCategories.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group flex flex-col border border-border rounded-xl p-6 bg-card/40 hover:border-primary/60 hover:bg-card/70 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <h2 className="font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-muted-foreground text-sm font-body flex-1">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary underline decoration-primary/50 underline-offset-4 group-hover:decoration-primary">
                  Read More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {/* Related Services */}
          <div className="mt-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">
              Explore Related Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedHomeLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card/40 p-5 hover:border-primary/60 hover:bg-card/70 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span className="font-display text-base text-foreground group-hover:text-primary transition-colors">
                    {l.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section className="py-16 px-6 text-center bg-muted/30">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Get Free Home Interior Consultation
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
          Tell us about your home and budget — we'll create a personalised design plan for free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton>WhatsApp Now</CTAButton>
          <a href="tel:+919050656162" className="btn-glow-outline">Call Now</a>
        </div>
      </Section>

      {/* Internal links */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm font-body text-muted-foreground">
          <Link to="/our-portfolio" className="text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary">← Back to Portfolio</Link>
          {" · "}
          <Link to="/home-interior" className="text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary">Home Interior Design Services</Link>
          {" · "}
          <Link to="/home-interior-designer-gurgaon" className="text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary">Home Interior Designer Gurgaon</Link>
        </div>
      </section>
    </>
  );
}
