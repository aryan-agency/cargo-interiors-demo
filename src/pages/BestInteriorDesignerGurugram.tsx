import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import { CheckCircle, Phone, MessageCircle, ArrowRight, Star, Shield, Layers, Eye, Hammer, Lightbulb } from "lucide-react";

const processSteps = [
  { icon: MessageCircle, title: "Free Consultation", desc: "We listen to your vision, understand your lifestyle or business needs, and discuss budget expectations — all at no cost." },
  { icon: Layers, title: "Space Planning & 3D Design", desc: "Our team creates detailed floor plans and photorealistic 3D renders so you see the final result before any work begins." },
  { icon: Eye, title: "Material Selection", desc: "We guide you through premium material choices — from Italian marble to engineered wood — ensuring durability and elegance." },
  { icon: Hammer, title: "Precision Execution", desc: "Our in-house craftsmen bring the design to life with meticulous attention to detail, on-time delivery, and zero shortcuts." },
];

const strengths = [
  { title: "End-to-End Ownership", desc: "Unlike freelance designers who vanish after handover, we manage every phase — from concept to completion — under one roof." },
  { title: "Transparent, Fixed Pricing", desc: "No surprise bills. We provide detailed cost breakdowns upfront and stick to the agreed budget." },
  { title: "Design That Performs", desc: "Our interiors aren't just beautiful — they improve productivity in offices, boost sales in showrooms, and elevate daily living at home." },
  { title: "10+ Years of Proven Results", desc: "With over a decade serving Gurugram's most discerning clients, our portfolio speaks louder than promises." },
];

export default function BestInteriorDesignerGurugram() {
  return (
    <>
      <SEOHead
        title="Best Interior Designer in Gurugram | Cargo Interiors"
        description="Cargo Interiors is Gurugram's most trusted interior designer — delivering award-worthy homes, offices & showrooms. 10+ years, 100+ projects. Book a free consultation today."
        canonical="https://cargo-interiors-demo.lovable.app/best-interior-designer-in-gurugram"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Best Interior Designer in Gurugram", "Top-rated interior design company in Gurugram specializing in luxury homes, modern offices, and high-converting showroom interiors. Transparent pricing and turnkey execution.")) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Award-Worthy Interior Design</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Best Interior Designer in <span className="text-gradient-gold">Gurugram</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            At Cargo Interiors, we don't just design spaces — we engineer experiences. With over a decade of crafting luxury homes, high-performance offices, and revenue-driving showrooms across Gurugram, we've earned the trust of 100+ clients who demand nothing less than excellence. Our design philosophy blends modern aesthetics with practical functionality, ensuring every square foot works harder for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton className="!px-8 !py-4 !text-sm">
              <MessageCircle size={18} className="mr-2" /> Get Free Consultation
            </CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-8 !py-4 !text-sm inline-flex items-center">
              <Phone size={18} className="mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <Section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Our Promise</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Why Choose Cargo Interiors?</h2>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-12">
            Gurugram has hundreds of interior designers — but very few who combine creative vision with flawless execution. Here's what sets us apart from the rest.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Expert Design Team", desc: "Our designers hold degrees from top institutions and bring years of experience across residential, commercial, and retail verticals." },
              { title: "On-Time, Every Time", desc: "We commit to deadlines and deliver. Our project management system ensures zero delays with weekly progress updates." },
              { title: "Premium Materials, Fair Prices", desc: "Direct partnerships with top material suppliers mean you get Italian finishes and German hardware without inflated markups." },
              { title: "Complete Transparency", desc: "From day one, you get itemized quotes, material samples, and a dedicated project manager — no guesswork, no hidden fees." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <CheckCircle className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Interior Design Process</h2>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-12">
            A structured, four-step approach that takes you from idea to reality — with complete clarity at every stage.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-primary" size={24} />
                </div>
                <span className="text-primary font-display text-xs tracking-widest mb-2 block">Step {i + 1}</span>
                <h3 className="font-display font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Work & Portfolio</h2>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-12">
            From contemporary apartments in DLF Phase 4 to tech-forward offices on Golf Course Road and flagship showrooms on MG Road — our portfolio showcases transformations that exceed expectations. Every project is a testament to our commitment to quality, innovation, and client satisfaction.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Home Interiors", link: "/our-portfolio/home-interior-designer-in-gurugram", stat: "50+ Homes" },
              { label: "Office Interiors", link: "/our-portfolio/office-interior-designer-in-gurugram", stat: "30+ Offices" },
              { label: "Showroom Interiors", link: "/our-portfolio/showroom-interior-designer-in-gurugram", stat: "25+ Showrooms" },
            ].map((item, i) => (
              <Link key={i} to={item.link} className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all text-center">
                <p className="text-primary font-display text-2xl font-bold mb-1">{item.stat}</p>
                <p className="font-display font-semibold mb-2">{item.label}</p>
                <span className="text-primary text-sm font-body inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Portfolio <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/our-portfolio" className="btn-glow-outline !px-8 !py-3 !text-sm inline-flex items-center gap-2">
              Explore Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* STAND OUT */}
      <Section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>The Cargo Advantage</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">What Makes Us Stand Out</h2>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-12">
            Most interior firms in Gurugram outsource execution, inflate costs, or disappear after the contract is signed. We operate differently.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl border border-border hover:border-primary/30 transition-colors">
                <Star className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* INTERNAL LINKS */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Explore more: <Link to="/" className="text-primary hover:underline">Home</Link> · <Link to="/interior-designer-gurgaon" className="text-primary hover:underline">Interior Designer Gurgaon</Link> · <Link to="/office-interior-designer-gurgaon" className="text-primary hover:underline">Office Interior Designer</Link> · <Link to="/showroom-interior-designer-gurgaon" className="text-primary hover:underline">Showroom Interior Designer</Link> · <Link to="/home-interior-designer-gurgaon" className="text-primary hover:underline">Home Interior Designer</Link> · <Link to="/services" className="text-primary hover:underline">All Services</Link>
          </p>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Start Your Project</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Book a free consultation with Gurugram's top interior design team. Share your vision, get expert advice, and receive a detailed proposal — all at zero cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton className="!px-8 !py-4 !text-sm">
              <MessageCircle size={18} className="mr-2" /> Get Free Interior Consultation
            </CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-8 !py-4 !text-sm inline-flex items-center">
              <Phone size={18} className="mr-2" /> Call +91 90506 56162
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
