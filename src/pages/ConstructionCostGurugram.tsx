import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";
import { Phone, CheckCircle, ArrowRight, IndianRupee, HelpCircle, XCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the cost of building a house in Gurugram?",
      acceptedAnswer: { "@type": "Answer", text: "House construction cost in Gurugram typically ranges from ₹1,500 to ₹2,500+ per sq ft depending on the quality of materials, design complexity, and finishing level. A standard 2,000 sq ft home may cost between ₹36 lakh and ₹50 lakh." },
    },
    {
      "@type": "Question",
      name: "How much does construction cost per sq ft in Gurugram?",
      acceptedAnswer: { "@type": "Answer", text: "Basic construction starts at ₹1,500–₹1,800 per sq ft, standard quality ranges from ₹1,800–₹2,500 per sq ft, and premium construction with high-end finishes costs ₹2,500+ per sq ft." },
    },
    {
      "@type": "Question",
      name: "How long does house construction take in Gurugram?",
      acceptedAnswer: { "@type": "Answer", text: "A typical residential construction project in Gurugram takes 8–14 months depending on the size, design complexity, and weather conditions. Cargo Interior provides milestone-based timelines with regular progress updates." },
    },
    {
      "@type": "Question",
      name: "Does construction cost include interior design?",
      acceptedAnswer: { "@type": "Answer", text: "No, standard construction cost covers structural and civil work with basic finishing. Interior design, modular furniture, and decorative elements are quoted separately. Cargo Interior offers integrated construction + interior packages for a seamless experience." },
    },
  ],
};

const costTiers = [
  { tier: "Basic Construction", range: "₹1,500 – ₹1,800 per sq ft", desc: "Standard materials, functional design, and essential finishing suitable for budget-conscious builds." },
  { tier: "Standard Construction", range: "₹1,800 – ₹2,500 per sq ft", desc: "Quality branded materials, thoughtful design, good finishing with vitrified tiles and premium fittings." },
  { tier: "Premium Construction", range: "₹2,500+ per sq ft", desc: "Top-grade materials, architect-led design, luxury finishing with imported fittings and custom detailing." },
];

const costFactors = [
  { title: "Plot Size & Location", desc: "Larger plots and prime locations in areas like Golf Course Road or DLF phases may involve higher foundation and compliance costs." },
  { title: "Material Quality", desc: "The choice between standard and premium-grade cement, steel, tiles, and fittings significantly impacts the overall budget." },
  { title: "Design Complexity", desc: "Custom architectural features, double-height ceilings, cantilever designs, or curved walls add to engineering and labor costs." },
  { title: "Labor & Contractor", desc: "Experienced contractors with skilled teams charge more but deliver better quality, fewer reworks, and on-time completion." },
  { title: "Finishing Level", desc: "Basic putty-and-paint finishing costs far less than textured walls, wooden panelling, or designer false ceilings." },
];

const included = [
  "RCC structure & framework",
  "Brickwork & plastering",
  "Electrical wiring & points",
  "Plumbing & sanitary work",
  "Basic flooring & tiling",
  "External & internal painting",
  "Doors & windows installation",
  "Waterproofing & damp-proofing",
];

const notIncluded = [
  "Interior design & décor",
  "Modular kitchen & wardrobes",
  "Furniture & furnishings",
  "Landscaping & outdoor work",
  "Government approvals & fees",
  "Boundary wall (if separate)",
];

export default function ConstructionCostGurugram() {
  return (
    <>
      <SEOHead
        title="Construction Cost in Gurugram | House Building Cost Per Sq Ft – Cargo Interior"
        description="Know the accurate construction cost in Gurugram. Basic to premium house building cost per sq ft, factors affecting pricing, and how to get a free estimate from Cargo Interior."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionLabel>Construction Cost Guide</SectionLabel>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
            Construction Cost in Gurugram –<br className="hidden md:block" /> Complete Guide for Home Building
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed mb-8">
            Planning to build your dream home in Gurugram? Understanding the real cost of construction is the first step toward a stress-free project. With rapid urbanization and rising material prices, having a clear budget before you break ground helps you avoid surprises and make informed decisions. This guide breaks down house construction costs in Gurugram — from basic builds to premium residences — so you know exactly what to expect before reaching out for a quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton className="!px-8 !py-3">Get Your Cost Estimate</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-8 !py-3 !text-sm inline-flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Cost Tiers */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Cost Breakdown</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Average Construction Cost in Gurugram</h2>
          <p className="text-muted-foreground font-body mb-10 max-w-3xl">
            Construction costs vary based on material grade, design complexity, and finishing quality. Here's a realistic overview of what homeowners in Gurugram can expect in 2025.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {costTiers.map((t) => (
              <div key={t.tier} className="glass-card p-6 rounded-xl text-center">
                <IndianRupee size={28} className="mx-auto text-primary mb-3" />
                <h3 className="font-display font-bold text-lg mb-1">{t.tier}</h3>
                <p className="text-primary font-display font-semibold text-base mb-3">{t.range}</p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground font-body text-xs mt-6 text-center italic">
            *Actual cost depends on your specific design, material choices, and site conditions. Contact us for a personalized estimate.
          </p>
        </div>
      </Section>

      {/* Factors */}
      <Section className="py-20 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>What Drives Cost</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-10">Factors Affecting Construction Cost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {costFactors.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-base mb-1">{f.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Included / Not Included */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Included</SectionLabel>
              <h2 className="font-display text-2xl font-bold mb-6">What's Included in Construction Cost</h2>
              <div className="space-y-3">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Not Included</SectionLabel>
              <h2 className="font-display text-2xl font-bold mb-6">What's NOT Included</h2>
              <div className="space-y-3">
                {notIncluded.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <XCircle size={16} className="text-muted-foreground flex-shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Cargo */}
      <Section className="py-20 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>The Cargo Advantage</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-10">Why Choose Cargo Interior for Construction</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Transparent Pricing", desc: "Detailed, itemized cost breakdowns before construction begins. You see every rupee — no hidden charges, no surprise escalations." },
              { title: "End-to-End Execution", desc: "From architectural planning to final finishing, one team manages everything so you don't juggle multiple contractors." },
              { title: "Quality Materials", desc: "ISI-certified cement, TMT steel, and branded fittings. We maintain transparent procurement records you can verify." },
              { title: "On-Time Delivery", desc: "Milestone-based scheduling with weekly progress updates. Your home is delivered on the date we promise." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 rounded-xl">
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>Common Questions</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {schema.mainEntity.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-5">
                <AccordionTrigger className="font-display font-semibold text-sm text-left py-4">
                  <span className="flex items-center gap-2"><HelpCircle size={16} className="text-primary flex-shrink-0" />{faq.name}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-4">
                  {faq.acceptedAnswer.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Internal Links */}
      <Section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-xl font-bold mb-6">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/house-construction-in-gurugram", label: "House Construction Services" },
              { to: "/home-builders-and-constructions-in-gurugram", label: "Home Builders in Gurugram" },
              { to: "/home-interior", label: "Home Interior Design" },
              { to: "/our-portfolio", label: "Our Portfolio" },
              { to: "/about-us", label: "About Us" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="inline-flex items-center gap-1 text-sm font-body text-primary hover:underline">
                {l.label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Get Your Construction Cost Estimate Today</h2>
          <p className="text-muted-foreground font-body mb-8">Share your plot details and requirements — we'll provide a transparent, itemized construction estimate at no cost.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton className="!px-10 !py-3">Get Free Estimate</CTAButton>
            <a href="https://wa.me/919050656162?text=Hi%2C%20I%20want%20to%20know%20the%20construction%20cost%20for%20my%20project%20in%20Gurugram" target="_blank" rel="noopener noreferrer" className="btn-glow-outline !px-8 !py-3 !text-sm inline-flex items-center gap-2">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
