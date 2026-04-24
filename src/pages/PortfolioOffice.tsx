import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";

const officeCategories = [
  {
    title: "Corporate Office Design",
    description: "Designed for maximum productivity and brand presence in Gurugram's competitive market.",
    to: "/corporate-office-interior-design-in-gurgaon",
  },
  {
    title: "Startup & Co-Working Spaces",
    description: "Flexible, vibrant layouts built for fast-growing teams and shared workspaces in Gurgaon.",
    to: "/startup-and-coworking-office-interiors-in-gurgaon",
  },
  {
    title: "Conference & Meeting Rooms",
    description: "Acoustically tuned, tech-ready boardrooms that elevate every client presentation.",
    to: "/conference-and-meeting-room-design-in-gurgaon",
  },
  {
    title: "Reception & Branding Zones",
    description: "First-impression interiors that reinforce your brand identity from the moment guests arrive.",
    to: "/reception-and-branding-area-design-in-gurgaon",
  },
];

const relatedOfficeLinks = [
  { label: "Ergonomic Office Interior Design", to: "/ergonomic-office-interior-design-in-gurgaon" },
  { label: "Office Interior Designer in Gurgaon", to: "/office-interior-designer-in-gurgaon" },
  { label: "Trusted Interior Designer in Gurgaon", to: "/trusted-interior-designer-in-gurgaon" },
  { label: "Interior Designer with 100+ Projects", to: "/interior-designer-projects-in-gurgaon" },
  { label: "Office Interior Cost in Gurgaon", to: "/blog/office-interior-design-cost-gurgaon" },
  { label: "Interior Cost Calculator", to: "/interior-cost-calculator" },
];

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
            A well-designed office boosts productivity, attracts talent, and strengthens your brand. As a{" "}
            <Link to="/office-interior-designer-in-gurgaon" className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors">
              leading office interior designer in Gurugram
            </Link>
            , we've delivered workspaces for startups, MNCs, and co-working hubs — all built around{" "}
            <Link to="/ergonomic-office-interior-design-in-gurgaon" className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors">
              ergonomic office interior design
            </Link>
            , efficiency, and smart{" "}
            <Link to="/blog/office-interior-design-cost-gurgaon" className="text-primary font-medium underline decoration-primary/50 underline-offset-4 hover:decoration-primary transition-colors">
              office interior cost in Gurgaon
            </Link>{" "}
            planning.
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
            {officeCategories.map((item) => (
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
              {relatedOfficeLinks.map((l) => (
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
          <Link to="/our-portfolio" className="text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary">← Back to Portfolio</Link>
          {" · "}
          <Link to="/office-interior-design-gurgaon" className="text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary">Office Interior Design Services</Link>
          {" · "}
          <Link to="/office-interior-designer-gurgaon" className="text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary">Office Interior Designer Gurgaon</Link>
        </div>
      </section>
    </>
  );
}
