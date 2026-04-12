import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";

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
            Your showroom is your biggest salesperson. As specialist showroom interior designers in
            Gurugram, we create retail spaces that grab attention, guide the customer journey, and
            turn walk-ins into paying clients — using smart layouts, premium displays, and brand-aligned aesthetics.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {["Product Display Zones", "Brand Experience Areas", "Customer Flow Optimization", "Lighting & Visual Merchandising"].map((item) => (
              <div key={item} className="border border-border rounded-xl p-6">
                <h2 className="font-display font-bold mb-2">{item}</h2>
                <p className="text-muted-foreground text-sm font-body">
                  Engineered to maximise sales conversions and elevate brand perception in Gurugram's retail market.
                </p>
              </div>
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

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm font-body text-muted-foreground">
          <Link to="/our-portfolio" className="text-primary hover:underline">← Back to Portfolio</Link>
          {" · "}
          <Link to="/showroom-interior-design-gurgaon" className="text-primary hover:underline">Showroom Interior Design Services</Link>
          {" · "}
          <Link to="/showroom-interior-designer-gurgaon" className="text-primary hover:underline">Showroom Interior Designer Gurgaon</Link>
        </div>
      </section>
    </>
  );
}
