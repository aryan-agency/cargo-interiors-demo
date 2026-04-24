import { Link } from "react-router-dom";
import { Phone, MessageCircle, CheckCircle, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";

export interface SeoMiniPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;            // 3-5 lines
  sectionTitle: string;
  sectionBody: string;      // ~120-180 words, unique
  trustPoints: string[];    // 3-4 short points
  ctaHeading: string;
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
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {data.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <CTAButton>Book Free Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </Section>

      {/* Service / Topic detail */}
      <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-primary" />
            {data.sectionTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            {data.sectionBody}
          </p>

          <div className="mt-8 text-sm text-muted-foreground">
            Explore our work as the{" "}
            <Link to="/interior-designer-in-gurgaon" className="text-primary hover:underline">
              best interior designer in Gurgaon
            </Link>{" "}
            or browse our{" "}
            <Link to="/home-interior-design-portfolio-gurgaon" className="text-primary hover:underline">
              home interior design portfolio in Gurgaon
            </Link>
            .
          </div>
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

      {/* CTA */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40">
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
