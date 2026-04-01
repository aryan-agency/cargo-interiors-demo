import { Link } from "react-router-dom";
import showroomImage from "@/assets/showroom-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";

export default function AboutUs() {
  return (
    <>
      <SEOHead
        title="About Cargo Interiors | Best Interior Designer in Gurugram"
        description="Learn about Cargo Interiors — Gurugram's leading interior design firm with 10+ years experience, 100+ projects, and 80+ professionals. Interior designer in Gurugram."
        canonical="https://cargo-interiors-demo.lovable.app/about-us"
      />

      {/* Hero Banner */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>About Us</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Leading Interior Designer in <span className="text-gradient-gold">Gurugram</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Over a decade of transforming commercial and residential spaces into high-performing assets. Based in Gurugram, delivering across India.
          </p>
        </div>
      </section>

      {/* Story */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">
              From a Vision to <span className="text-gradient-gold">100+ Projects</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Cargo Interiors was founded in 2015 by Azam Saifi with a singular mission: to bridge the gap between beautiful design and business performance. Starting from a small studio in Gurugram, we recognized that most interior designers focused on aesthetics alone — missing the strategic impact that well-designed spaces have on revenue, productivity, and brand perception.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Today, as a premier interior designer in Gurugram, we've grown to a team of over 80 professionals — including architects, 3D visualization experts, project managers, and skilled craftsmen. Our portfolio spans 100+ successfully delivered projects across 15+ cities, from luxury showrooms and corporate headquarters to restaurants, retail stores, and premium residences.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              What drives us is the belief that every space tells a story. Our job is to make sure that story drives results — whether it's increased footfall in a showroom, higher employee retention in an office, or a dining experience that keeps guests coming back.
            </p>
          </div>
          <div className="relative">
            <img src={showroomImage} alt="Cargo Interiors office - interior designer in Gurugram" className="w-full aspect-[4/5] object-cover" loading="lazy" width={1280} height={960} />
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Mission & Values */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>What We Believe</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Our Mission & <span className="text-gradient-gold">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Design with Purpose", desc: "Every element we place has a reason — from lighting angles that highlight products to layouts that guide customer flow. Design without strategy is just decoration." },
              { title: "End-to-End Ownership", desc: "We handle everything from concept to completion. No third-party handoffs, no miscommunication. One team, one vision, one delivery." },
              { title: "Client-First Approach", desc: "Your business goals shape our design decisions. We listen first, design second, and iterate until you're fully satisfied with the vision." },
              { title: "Quality Without Compromise", desc: "We source premium materials, work with skilled craftsmen, and maintain rigorous quality checks throughout the project lifecycle." },
              { title: "Innovation & Technology", desc: "From 3D visualization to modern construction techniques, we leverage technology to deliver better results faster." },
              { title: "Transparency Always", desc: "Clear proposals, honest timelines, and no hidden costs. You always know exactly where your project stands and what it will cost." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border p-8 hover:border-primary/30 transition-colors">
                <h3 className="font-display text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Trust Signals */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>By The Numbers</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              A Track Record That <span className="text-gradient-gold">Speaks</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            {[
              { num: "10+", label: "Years in Business" },
              { num: "100+", label: "Projects Completed" },
              { num: "80+", label: "Team Members" },
              { num: "15+", label: "Cities Across India" },
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border p-8">
                <span className="font-display text-3xl md:text-4xl font-bold text-primary block">{item.num}</span>
                <p className="text-muted-foreground text-sm mt-2 font-body">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={officeImage} alt="Cargo Interiors team working on commercial project in Gurugram" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">Why Businesses Trust Us</h3>
              <ul className="space-y-4">
                {[
                  "ISO certified processes for consistent quality",
                  "MSME registered — supporting Make in India",
                  "Worked with Samsung, LG, Havas Media, Sagar Ratna",
                  "Full in-house team — no outsourced labor",
                  "3D visualization before execution — no surprises",
                  "Based in Gurugram with pan-India delivery capability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-secondary-foreground font-body text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Work With Us</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Transform <span className="text-gradient-gold">Your Space?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            Schedule a complimentary design consultation with Gurugram's most trusted interior design team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton>Book a Free Consultation</CTAButton>
            <Link to="/services" className="btn-glow-outline">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
