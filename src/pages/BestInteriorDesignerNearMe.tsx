import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import { Phone, MessageCircle, ArrowRight, MapPin, Clock, Users, ThumbsUp, Building2, Home, Store } from "lucide-react";

const areas = [
  "DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5",
  "Sohna Road", "Golf Course Road", "Golf Course Extension Road", "MG Road",
  "Sector 48", "Sector 49", "Sector 56", "Sector 57", "Sector 67",
  "Sushant Lok", "South City", "Nirvana Country", "Palam Vihar",
  "Cyber City", "Udyog Vihar", "New Gurugram",
];

const recentProjects = [
  { type: "3 BHK Apartment", location: "DLF Phase 4", scope: "Full home interior with modular kitchen, wardrobes, and living room makeover", icon: Home },
  { type: "Corporate Office", location: "Golf Course Road", scope: "2,800 sq ft open-plan office with executive cabin, conference room, and pantry", icon: Building2 },
  { type: "Retail Showroom", location: "MG Road", scope: "1,500 sq ft fashion showroom with custom display units, lighting, and branding integration", icon: Store },
  { type: "4 BHK Villa", location: "Sushant Lok", scope: "Luxury villa interior — master bedroom suite, home theatre, and landscape deck", icon: Home },
  { type: "Co-working Space", location: "Sector 48", scope: "5,000 sq ft flexible workspace with hot desks, private pods, and breakout zones", icon: Building2 },
];

const testimonials = [
  { name: "Neha Kapoor", location: "DLF Phase 3", text: "I searched for an interior designer near me and found Cargo Interiors. They visited the next day, understood exactly what I wanted, and delivered our dream home in just 35 days. Incredible team!" },
  { name: "Vikram Singh", location: "Golf Course Extension", text: "What impressed us most was their speed. From the first meeting to final handover, everything was smooth, professional, and on budget. Highly recommended for anyone in Gurugram." },
  { name: "Meena Agarwal", location: "Sohna Road", text: "We've hired two designers before and both disappointed. Cargo Interiors was different — they showed up when they said they would, kept us updated, and the quality is outstanding." },
];

export default function BestInteriorDesignerNearMe() {
  return (
    <>
      <SEOHead
        title="Best Interior Designer Near Me in Gurugram | Cargo Interiors"
        description="Looking for a top interior designer near you in Gurugram? Cargo Interiors serves DLF, Sohna Road, Golf Course Road & all sectors. Free site visit. Call now!"
        canonical="https://cargo-interiors-demo.lovable.app/best-interior-designer-near-me-gurugram"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Best Interior Designer Near Me Gurugram", "Local interior design company in Gurugram offering fast consultation and turnkey execution across DLF, Sohna Road, Golf Course Road, and all major sectors.")) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Your Local Interior Design Partner</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Best Interior Designer <span className="text-gradient-gold">Near Me</span> in Gurugram
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Why wait weeks for a consultation when Gurugram's most responsive interior design team is just around the corner? At Cargo Interiors, we offer same-day site visits, rapid project turnarounds, and a local execution crew that knows every neighborhood in the city. Whether you're in DLF Phase 1 or Sohna Road — we're already nearby.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton className="!px-8 !py-4 !text-sm">
              <MessageCircle size={18} className="mr-2" /> Book Free Site Visit
            </CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-8 !py-4 !text-sm inline-flex items-center">
              <Phone size={18} className="mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <Section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Local Presence</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Areas We Serve in Gurugram</h2>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-10">
            Our team operates across every major residential and commercial hub in Gurugram. No matter where your property is, we can reach you within hours for a free on-site assessment.
          </p>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-body text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors">
                <MapPin size={12} className="inline mr-1.5 -mt-0.5" />{area}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* HASSLE-FREE */}
      <Section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Speed & Convenience</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Quick & Hassle-Free Interior Services Near You</h2>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-12">
            We've designed our process to respect your time. No endless back-and-forth — just fast, professional service from start to finish.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Same-Day Consultation", desc: "Call us before noon and we'll visit your site the same day. We carry measurement tools, material samples, and a design portfolio — ready to start immediately." },
              { icon: Users, title: "Local Execution Team", desc: "Our carpenters, electricians, and painters are all Gurugram-based. This means faster mobilization, daily supervision, and no logistical delays." },
              { icon: ThumbsUp, title: "Seamless Communication", desc: "Your dedicated project manager is available on call and WhatsApp. Get real-time photo updates, resolve queries instantly, and stay in control." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-border text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* RECENT PROJECTS */}
      <Section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Nearby Transformations</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Recent Projects Near You</h2>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-12">
            Here's a snapshot of recent interior projects we've completed across Gurugram — spanning homes, offices, and retail spaces.
          </p>
          <div className="space-y-4">
            {recentProjects.map((project, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <project.icon className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm">{project.type} — <span className="text-primary">{project.location}</span></h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mt-1">{project.scope}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/our-portfolio" className="btn-glow-outline !px-8 !py-3 !text-sm inline-flex items-center gap-2">
              View Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Trusted by Clients in Gurugram</h2>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-12">
            Our happiest clients are our strongest advocates. Here's what homeowners and business owners across Gurugram say about working with us.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl border border-border">
                <p className="text-muted-foreground font-body text-sm leading-relaxed italic mb-4">"{t.text}"</p>
                <p className="font-display font-bold text-sm">{t.name}</p>
                <p className="text-primary text-xs font-body">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* INTERNAL LINKS */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Explore more: <Link to="/" className="text-primary hover:underline">Home</Link> · <Link to="/office-interior-design-gurgaon" className="text-primary hover:underline">Office Interior Design</Link> · <Link to="/showroom-interior-design-gurgaon" className="text-primary hover:underline">Showroom Interior Design</Link> · <Link to="/home-interior" className="text-primary hover:underline">Home Interior Design</Link> · <Link to="/our-portfolio" className="text-primary hover:underline">Portfolio</Link> · <Link to="/services" className="text-primary hover:underline">All Services</Link>
          </p>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>We're Near You</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Book Your Free Site Visit Today</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Stop searching — your ideal interior designer is right here in Gurugram. Call us or send a WhatsApp message to schedule a free, no-obligation site visit at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton className="!px-8 !py-4 !text-sm">
              <MessageCircle size={18} className="mr-2" /> Book Free Site Visit on WhatsApp
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
