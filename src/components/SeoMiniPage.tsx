import { Link } from "react-router-dom";
import { Phone, MessageCircle, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";

export interface SeoMiniSection {
  /** Section heading (H2). */
  heading: string;
  /** One or more paragraphs. May contain inline HTML (anchors only). */
  paragraphs: string[];
}

export interface SeoMiniRelatedLink {
  label: string;
  to: string;
  description?: string;
}

export interface SeoMiniPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Hero intro — may contain inline anchor HTML. */
  intro: string;
  /** Long-form sections (typically 3–5 sections, ~800–1200 words total). */
  sections: SeoMiniSection[];
  /** Short benefit bullets. */
  benefits: { title: string; body: string }[];
  /** Step-by-step approach. */
  process: { title: string; body: string }[];
  /** Trust grid cards. */
  trustPoints: string[];
  /** Final CTA heading. */
  ctaHeading: string;
  /** Curated outbound internal links shown as a card grid. */
  relatedLinks: SeoMiniRelatedLink[];
}

/**
 * Renders a paragraph that may contain a small whitelist of inline HTML
 * (anchor tags) authored in our data layer. Content is fully controlled by
 * us, so dangerouslySetInnerHTML is acceptable here.
 */
function RichParagraph({ html, className }: { html: string; className?: string }) {
  return (
    <p
      className={className}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function SeoMiniPage({ data }: { data: SeoMiniPageData }) {
  const canonical = `https://cargo-interiors-demo.lovable.app/${data.slug}`;
  return (
    <>
      <SEOHead title={data.metaTitle} description={data.metaDescription} canonical={canonical} />

      {/* Hero */}
      <Section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Cargo Interiors • Gurgaon</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6 leading-tight">
            {data.h1}
          </h1>
          <RichParagraph
            html={data.intro}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline"
          />
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <CTAButton>Book Free Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </Section>

      {/* Long-form sections */}
      <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-3xl mx-auto space-y-14">
          {data.sections.map((s, i) => (
            <article key={s.heading} className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-display font-semibold flex items-center gap-3">
                {i === 0 && <Sparkles className="w-7 h-7 text-primary" />}
                {s.heading}
              </h2>
              {s.paragraphs.map((p, idx) => (
                <RichParagraph
                  key={idx}
                  html={p}
                  className="text-muted-foreground leading-relaxed text-base md:text-lg [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline"
                />
              ))}
            </article>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-10">
            Key Benefits
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card/50 p-5">
                <h3 className="font-display text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-10">
            Our Approach
          </h2>
          <ol className="space-y-5">
            {data.process.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-xl border border-border bg-card/40 p-5">
                <div className="shrink-0 w-9 h-9 rounded-full bg-primary/15 text-primary font-display font-semibold flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Trust */}
      <Section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-10">
            Why Clients in Gurugram Trust Cargo Interiors
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.trustPoints.map((p) => (
              <div
                key={p}
                className="rounded-xl border border-border bg-card/50 p-5 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Links */}
      <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-10">
            Explore Related Services & Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.relatedLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group rounded-xl border border-border bg-card/50 p-5 hover:border-primary/60 transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors">
                    {l.label}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
                {l.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{l.description}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {data.ctaHeading}
          </h2>
          <p className="text-muted-foreground mb-8">
            Speak directly with our design team in Gurgaon — fast quotes, transparent pricing, premium execution.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton>Get Free Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-outline inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
