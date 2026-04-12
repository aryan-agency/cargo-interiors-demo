import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";

export default function PortfolioOffice() {
  return (
    <>
      <SEOHead
        title="Office Interior Designer in Gurugram – Portfolio | Cargo Interiors"
        description="Browse our office interior design portfolio in Gurugram — corporate offices, co-working spaces & startup setups. Productivity-first designs by Cargo Interiors."
      />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Office Interiors</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Office Interior Designer in Gurugram – <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-4">
            A well-designed office boosts productivity, attracts talent, and strengthens your brand.
            As a leading office interior designer in Gurugram, we've delivered workspaces for startups,
            MNCs, and co-working hubs — all built around efficiency, ergonomics, and smart budgeting.
          </p>

          <div className="mt-12 flex justify-center">
            <iframe
              src="https://gamma.app/embed/7ft114bro9nz46n"
              style={{ width: "700px", maxWidth: "100%", height: "450px" }}
              allow="fullscreen"
              title="Designing Workspaces That Define Success"
            />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {["Corporate Office Design", "Startup & Co-Working Spaces", "Conference & Meeting Rooms", "Reception & Branding Zones"].map((item) => (
              <div key={item} className="border border-border rounded-xl p-6">
                <h2 className="font-display font-bold mb-2">{item}</h2>
                <p className="text-muted-foreground text-sm font-body">
                  Designed for maximum productivity and brand presence in Gurugram's competitive market.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="py-16 px-6 text-center bg-muted/30">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Upgrade Your Office Space
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
          Get a free office design consultation — we'll plan your layout, materials, and budget.
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
          <Link to="/office-interior-design-gurgaon" className="text-primary hover:underline">Office Interior Design Services</Link>
          {" · "}
          <Link to="/office-interior-designer-gurgaon" className="text-primary hover:underline">Office Interior Designer Gurgaon</Link>
        </div>
      </section>
    </>
  );
}
