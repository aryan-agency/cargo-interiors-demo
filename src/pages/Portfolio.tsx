import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Home Interior Designer in Gurugram",
    desc: "Luxury living rooms, modular kitchens, smart bedrooms — designed for modern Indian families in Gurugram.",
    link: "/our-portfolio/home-interior-designer-in-gurugram",
    cta: "Explore Home Interiors",
  },
  {
    title: "Office Interior Designer in Gurugram",
    desc: "High-performance workspaces, co-working layouts, and corporate offices built for productivity and brand identity.",
    link: "/our-portfolio/office-interior-designer-in-gurugram",
    cta: "Explore Office Interiors",
  },
  {
    title: "Showroom Interior Designer in Gurugram",
    desc: "Retail showroom designs that maximise footfall, enhance product display, and drive real sales conversions.",
    link: "/our-portfolio/showroom-interior-designer-in-gurugram",
    cta: "Explore Showroom Interiors",
  },
];

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Interior Design Portfolio Gurugram | Cargo Interiors Projects"
        description="Explore our interior design portfolio in Gurugram — home, office & showroom projects delivered with precision. See real transformations by Cargo Interiors."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Our Work</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our Interior Design Portfolio in <span className="text-primary">Gurugram</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            With over 8 years of experience as a trusted interior designer in Gurugram, Cargo Interiors has
            transformed hundreds of spaces — from cosy homes to high-energy offices and sales-driven showrooms.
            Our interior design portfolio in Gurgaon showcases real projects with real results. Every space we
            design blends aesthetics, functionality, and smart budgeting. Whether you need a modular home makeover,
            a branded corporate office, or a retail showroom that converts walk-ins into buyers — our work speaks
            for itself. Browse our categories below and see the Cargo Interiors difference.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.link}
              to={cat.link}
              className="group border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <h2 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {cat.title}
              </h2>
              <p className="text-muted-foreground text-sm font-body mb-6 flex-1">{cat.desc}</p>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                {cat.cta} <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Section className="py-16 px-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
          Get a free consultation with Gurugram's most trusted interior design team. We handle everything — concept to completion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton>Get Free Consultation</CTAButton>
          <a href="tel:+919050656162" className="btn-glow-outline">
            Call Now
          </a>
        </div>
      </Section>

      {/* Internal links */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm font-body">
            Also explore our services:{" "}
            <Link to="/office-interior-design-gurgaon" className="text-primary hover:underline">Office Interior Design</Link>{" · "}
            <Link to="/showroom-interior-design-gurgaon" className="text-primary hover:underline">Showroom Interior Design</Link>{" · "}
            <Link to="/home-interior" className="text-primary hover:underline">Home Interior Design</Link>{" · "}
            <Link to="/interior-designer-gurgaon" className="text-primary hover:underline">Interior Designer in Gurgaon</Link>
          </p>
        </div>
      </section>
    </>
  );
}
