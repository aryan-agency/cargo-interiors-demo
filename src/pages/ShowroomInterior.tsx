import { Link } from "react-router-dom";
import showroomImage from "@/assets/showroom-interior.jpg";
import commercialImage from "@/assets/commercial-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import { Store, Eye, Palette, Zap, CheckCircle, LayoutGrid } from "lucide-react";

const stats = [
  { number: "100+", label: "Projects Delivered" },
  { number: "80+", label: "Design Experts" },
  { number: "15+", label: "Cities Served" },
  { number: "10+", label: "Years Experience" },
];

const processSteps = [
  { step: "01", title: "Brand & Product Analysis", description: "We study your brand identity, product range, target customer demographics, and competitive positioning to inform every showroom design decision in Gurgaon." },
  { step: "02", title: "Layout & Flow Design", description: "Our spatial designers create customer journey maps and traffic flow patterns that guide visitors naturally through your showroom, maximizing product exposure and dwell time." },
  { step: "03", title: "Lighting & Material Strategy", description: "Precision lighting design highlights key products while creating ambiance. We specify materials that balance durability with the premium look your brand demands." },
  { step: "04", title: "Turnkey Execution", description: "From civil work to signage installation, our in-house team manages every detail. We deliver on time so your showroom in Gurgaon opens exactly as planned." },
];

const showroomTypes = [
  { title: "Automobile Showrooms", description: "High-impact automotive retail spaces with dramatic lighting, flexible display platforms, and customer experience zones. Designed to showcase vehicles while facilitating the sales process in Gurgaon's competitive auto market.", icon: Zap },
  { title: "Fashion & Lifestyle Retail", description: "Trend-forward retail interiors that blend visual merchandising with brand storytelling. Strategic fixture placement, fitting room design, and checkout flow optimization for maximum conversion.", icon: Palette },
  { title: "Electronics & Appliance Showrooms", description: "Interactive product display environments with integrated demo stations, clear category zoning, and customer-friendly navigation. Built to handle high footfall in Gurugram retail clusters.", icon: LayoutGrid },
  { title: "Luxury Brand Showrooms", description: "Bespoke retail environments that embody exclusivity. Premium finishes, controlled lighting, VIP consultation areas, and sensory design that elevates the luxury buying experience.", icon: Store },
];

const psychologyPoints = [
  "Strategic product placement at eye-level increases engagement by 35%",
  "Warm lighting tones build trust and extend customer dwell time",
  "Clear navigation reduces decision fatigue and boosts conversions",
  "Branded environments create emotional connections with customers",
  "Comfortable consultation zones improve high-ticket closing rates",
  "Sensory design (scent, sound, texture) enhances brand recall",
];

export default function ShowroomInterior() {
  return (
    <>
      <SEOHead
        title="Showroom Interior Design in Gurgaon | Best Showroom Designers | Cargo Interiors"
        description="Premium showroom interior design in Gurgaon by Cargo Interiors. Conversion-focused retail layouts, luxury brand environments & turnkey execution. 100+ projects in Gurugram & Delhi NCR."
        canonical="https://cargo-interiors-demo.lovable.app/showroom-interior-design-gurgaon"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Showroom Interior Design in Gurgaon", "Premium showroom interior design in Gurgaon (Gurugram). Conversion-focused retail layouts and turnkey execution for automobile, fashion, electronics, and luxury brand showrooms across Delhi NCR.")) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={showroomImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Showroom Interior Design Gurgaon</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Showroom Interior Design in <span className="text-gradient-gold">Gurgaon</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Design showrooms that don't just display — they sell. Cargo Interiors is a specialist showroom interior designer in Gurgaon, creating conversion-focused retail environments that turn walk-ins into paying customers across Gurugram and Delhi NCR.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <CTAButton>Book a Free Consultation</CTAButton>
            <Link to="/office-interior-design-gurgaon" className="btn-glow-outline !px-6 !py-3 !text-xs">
              Office Interiors →
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">{s.number}</p>
              <p className="text-muted-foreground font-body text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONVERSION-FOCUSED DESIGN */}
      <Section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Why Design Sells</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">
              Why Showroom Design Directly Impacts <span className="text-gradient-gold">Sales</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              In Gurgaon's retail-dense corridors — from MG Road to Golf Course Extension — your showroom's interior is your most powerful sales tool. Research shows that 70% of purchase decisions are made in-store, influenced directly by the environment. A strategically designed showroom in Gurgaon can increase average transaction value by 25–40%.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              At Cargo Interiors, we combine retail psychology with architectural expertise to create showroom interiors in Gurgaon that guide customer behaviour. Every layout decision, lighting angle, and material choice is backed by data and designed to move your customers from browsing to buying. Our showroom interior design services extend across Gurugram and the wider Delhi NCR region.
            </p>
          </div>
          <img src={showroomImage} alt="Showroom interior design in Gurgaon by Cargo Interiors" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
        </div>
      </Section>

      {/* LAYOUT & LIGHTING */}
      <Section className="py-24 md:py-32 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold">
              Layout & Lighting <span className="text-gradient-gold">Strategy</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {processSteps.map((item) => (
              <div key={item.step} className="border border-border p-8 bg-background">
                <span className="text-primary font-display text-3xl font-bold opacity-40">{item.step}</span>
                <h3 className="font-display text-xl font-bold mt-3 mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CUSTOMER PSYCHOLOGY */}
      <Section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img src={commercialImage} alt="Customer psychology in showroom interior design Gurgaon" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
          <div>
            <SectionLabel>Customer Psychology</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-8">
              Design That Understands <span className="text-gradient-gold">Buyers</span>
            </h2>
            <ul className="space-y-4">
              {psychologyPoints.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground font-body text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* SHOWROOM TYPES */}
      <Section className="py-24 md:py-32 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Retail Branding</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold">
              Showroom Types We Design in <span className="text-gradient-gold">Gurgaon</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {showroomTypes.map((t) => (
              <div key={t.title} className="border border-border p-8 bg-background">
                <t.icon className="text-primary mb-4" size={32} />
                <h3 className="font-display text-xl font-bold mb-3">{t.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold">
              Showroom Projects in <span className="text-gradient-gold">Gurgaon & Delhi NCR</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg mt-4 max-w-2xl mx-auto">
              Featured showroom interior projects by Cargo Interiors across Gurugram, demonstrating our expertise in high-conversion retail environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: project1, title: "Auto Showroom, MG Road", desc: "3,200 sq.ft. premium automobile display with VIP lounge" },
              { img: project2, title: "Fashion Retail, Golf Course Road", desc: "Multi-brand lifestyle store with immersive brand zones" },
              { img: project3, title: "Electronics Hub, Sohna Road", desc: "Interactive product experience centre for 500+ SKUs" },
            ].map((p) => (
              <div key={p.title} className="group">
                <div className="overflow-hidden">
                  <img src={p.img} alt={`${p.title} - Showroom interior design Gurgaon`} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                </div>
                <h3 className="font-display font-bold mt-4 text-sm">{p.title}</h3>
                <p className="text-muted-foreground font-body text-xs mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* INTERNAL LINKS */}
      <Section className="py-16 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-xl font-bold mb-6 text-center">Explore More Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to="/office-interior-design-gurgaon" className="border border-border p-6 text-center hover:border-primary transition-colors bg-background">
              <p className="font-display font-bold text-sm">Office Interiors</p>
              <p className="text-muted-foreground text-xs mt-1">Gurgaon</p>
            </Link>
            <Link to="/commercial-interior-design-gurgaon" className="border border-border p-6 text-center hover:border-primary transition-colors bg-background">
              <p className="font-display font-bold text-sm">Commercial Interiors</p>
              <p className="text-muted-foreground text-xs mt-1">Gurgaon</p>
            </Link>
            <Link to="/home-interior" className="border border-border p-6 text-center hover:border-primary transition-colors bg-background">
              <p className="font-display font-bold text-sm">Home Interiors</p>
              <p className="text-muted-foreground text-xs mt-1">Gurugram</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background border-y border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Build a Showroom That <span className="text-gradient-gold">Sells?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            From concept to grand opening — Cargo Interiors delivers turnkey showroom interior design in Gurgaon that maximizes your retail ROI. Get in touch for a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton>Book a Free Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-8 !py-3 !text-xs">
              Call Now →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
