import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";

const showroomCategories = [
  {
    title: "Product Display Zones",
    to: "/product-display-zone-interior-design-in-gurgaon",
    body: "Plinths, gondolas and wall systems engineered to spotlight hero SKUs and lift attach rates.",
  },
  {
    title: "Brand Experience Areas",
    to: "/brand-experience-area-interior-design-in-gurgaon",
    body: "Immersive zones with storytelling walls, demo bays and signature materials that build preference.",
  },
  {
    title: "Customer Flow Optimization",
    to: "/customer-flow-optimization-in-showroom-design-gurgaon",
    body: "Walk-paths, sightlines and decompression zones planned to maximise dwell time and conversions.",
  },
  {
    title: "Lighting & Visual Merchandising",
    to: "/lighting-and-visual-merchandising-in-showroom-interior-design-gurgaon",
    body: "Layered lighting and modular VM systems tuned to make every product look its best.",
  },
];

const relatedShowroom = [
  { label: "Product Display Zone Design", to: "/product-display-zone-interior-design-in-gurgaon", description: "Display layouts engineered for product hierarchy." },
  { label: "Brand Experience Area Design", to: "/brand-experience-area-interior-design-in-gurgaon", description: "Immersive zones that anchor your brand story." },
  { label: "Customer Flow Optimization", to: "/customer-flow-optimization-in-showroom-design-gurgaon", description: "Walk paths designed to maximise dwell time." },
  { label: "Lighting & Visual Merchandising", to: "/lighting-and-visual-merchandising-in-showroom-interior-design-gurgaon", description: "Lighting schemes that lift product appeal." },
  { label: "Showroom Interior Designer in Gurgaon", to: "/showroom-interior-designer-in-gurgaon", description: "Our flagship showroom design service." },
  { label: "Experienced Interior Designer", to: "/experienced-interior-designer-in-gurgaon", description: "10+ years and 100+ projects delivered in Gurgaon." },
  { label: "Showroom Cost Guide", to: "/blog/showroom-interior-design-cost-gurgaon", description: "Budget benchmarks for retail interiors." },
];

export default function PortfolioShowroom() {
  return (
    <>
      <SEOHead
        title="Showroom Interior Designer in Gurugram – Portfolio | Cargo Interiors"
        description="Explore our showroom interior design portfolio in Gurugram — retail displays, brand zones & high-converting layouts. Designed by Cargo Interiors."
      />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Showroom Interiors</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Showroom Interior Designer in Gurugram – <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-4">
            Your showroom is your biggest salesperson. As specialist{" "}
            <Link
              to="/showroom-interior-designer-in-gurgaon"
              className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors"
            >
              showroom interior designers in Gurugram
            </Link>
            , we create retail spaces that grab attention, guide the customer journey, and turn walk-ins into paying clients — using{" "}
            <Link
              to="/customer-flow-optimization-in-showroom-design-gurgaon"
              className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors"
            >
              smart layouts
            </Link>
            ,{" "}
            <Link
              to="/product-display-zone-interior-design-in-gurgaon"
              className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors"
            >
              premium displays
            </Link>
            , and{" "}
            <Link
              to="/brand-experience-area-interior-design-in-gurgaon"
              className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors"
            >
              brand-aligned aesthetics
            </Link>
            .
          </p>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed">
            Every project layers deliberate{" "}
            <Link
              to="/lighting-and-visual-merchandising-in-showroom-interior-design-gurgaon"
              className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors"
            >
              lighting and visual merchandising
            </Link>{" "}
            with disciplined{" "}
            <Link
              to="/customer-flow-optimization-in-showroom-design-gurgaon"
              className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors"
            >
              customer journey optimization
            </Link>{" "}
            so every square foot earns its rent.
          </p>

          <div className="mt-12 flex justify-center">
            <iframe
              src="https://gamma.app/embed/031vmsjx0rkdc5l"
              style={{ width: "700px", maxWidth: "100%", height: "450px" }}
              allow="fullscreen"
              title="Designs That Drive Sales"
            />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {showroomCategories.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group flex flex-col justify-between border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_10px_30px_-15px_hsl(var(--primary)/0.4)]"
              >
                <div>
                  <h2 className="font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground text-sm font-body">{item.body}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section className="py-16 px-6 text-center bg-muted/30">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Design a High-Converting Showroom
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
          Let's build a showroom that sells. Get a free design consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton>WhatsApp Now</CTAButton>
          <a href="tel:+919050656162" className="btn-glow-outline">Call Now</a>
        </div>
      </Section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Explore Related Services</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            Dive Deeper Into Our Showroom Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedShowroom.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex flex-col justify-between border border-border rounded-xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_10px_30px_-15px_hsl(var(--primary)/0.4)]"
              >
                <div>
                  <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body">{link.description}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm font-body text-muted-foreground">
          <Link to="/our-portfolio" className="text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors">← Back to Portfolio</Link>
          {" · "}
          <Link to="/showroom-interior-design-gurgaon" className="text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors">Showroom Interior Design Services</Link>
          {" · "}
          <Link to="/showroom-interior-designer-gurgaon" className="text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors">Showroom Interior Designer Gurgaon</Link>
        </div>
      </section>
    </>
  );
}
