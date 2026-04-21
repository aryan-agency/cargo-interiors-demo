import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import WistiaPlayer from "@/components/WistiaPlayer";
import { Instagram, Facebook, Linkedin, Phone, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { HOME_PROJECTS } from "@/data/homeProjects";

export default function HomeInteriorPortfolioGurgaon() {
  return (
    <>
      <SEOHead
        title="Home Interior Design Portfolio in Gurgaon – Real Residential Projects | Cargo Interiors"
        description="Explore our home interior design portfolio in Gurgaon — 2BHK, 3BHK, 4BHK & villa projects across DLF, Golf Course Road, Sohna Road & more. 100+ residential interiors delivered."
      />

      {/* HERO */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionLabel>Home Interior Portfolio</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Home Interior Design Portfolio in Gurgaon –{" "}
            <span className="text-primary">Real Homes, Real Transformations</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed mb-8">
            A curated selection of our best home interior design projects in Gurgaon — from compact
            2BHK apartments to expansive independent villas. With over <strong className="text-foreground">100+ completed
            residential interiors</strong> across 2BHK, 3BHK, 4BHK and villa formats, our work in Gurugram
            is grounded in three commitments: thoughtful functionality, refined aesthetics and on-site
            execution we can stand behind.
          </p>

          {/* Trust strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-4">
            {[
              { stat: "100+", label: "Home Interior Projects Completed" },
              { stat: "10+ Yrs", label: "Residential Design Experience" },
              { stat: "100%", label: "On-Time Delivery Guarantee" },
            ].map((t) => (
              <div key={t.label} className="border border-border rounded-xl p-5 bg-card/40">
                <div className="font-display text-2xl text-primary font-bold">{t.stat}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT CARD GRID */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOME_PROJECTS.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-2xl border border-border bg-card/40 overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="p-4 pb-0">
                <WistiaPlayer mediaId={p.mediaId} aspect={0.5625} />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <span className="inline-block self-start text-[10px] uppercase tracking-[0.25em] text-primary border border-primary/40 rounded-full px-3 py-1 mb-3">
                  Home Interior · {p.type}
                </span>
                <h2 className="font-display text-lg md:text-xl font-bold mb-2 leading-snug">
                  {p.title}
                </h2>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3 inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {p.location}
                </p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5 flex-1">
                  {p.preview}
                </p>
                <Link
                  to={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Read Full Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS BLOCK */}
      <Section className="py-16 px-6 bg-muted/20 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Plan Your Project</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Useful Resources Before You Start
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-8">
            Looking for the <Link to="/interior-designer-in-gurgaon" className="text-primary hover:underline">best interior designer in Gurgaon</Link>?
            Browse our full <Link to="/our-portfolio" className="text-primary hover:underline">interior design portfolio in Gurgaon</Link>,
            review the latest <Link to="/construction-cost-in-gurugram" className="text-primary hover:underline">construction cost in Gurgaon</Link>,
            or <Link to="/interior-design-cost-calculator-gurugram" className="text-primary hover:underline">calculate your interior design cost in Gurgaon for free</Link> using our budgeting tool.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Looking for Home Interior Design in Gurgaon?
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
          Share your floor plan and budget — we'll prepare a tailored design direction for your home, completely free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton>Get Free Consultation</CTAButton>
          <a href="tel:+919050656162" className="btn-glow-outline inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow-outline inline-flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> WhatsApp Now
          </a>
        </div>
      </Section>

      {/* SOCIAL */}
      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display text-xl font-bold mb-4">Follow Our Work</h3>
          <div className="flex justify-center gap-5">
            <a href="https://instagram.com/cargointeriors" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/cargointeriors" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/cargointeriors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
