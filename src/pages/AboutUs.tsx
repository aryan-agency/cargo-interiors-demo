import { Link } from "react-router-dom";
import showroomImage from "@/assets/showroom-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { organizationSchema } from "@/data/schemaMarkup";

export default function AboutUs() {
  return (
    <>
      <SEOHead
        title="About Cargo Interior | Interior Design, Architecture & Construction in Gurugram"
        description="Cargo Interior is a full-service design and build company in Gurugram offering interior design, architectural planning, and turnkey construction. 100+ projects delivered with premium quality."
        canonical="https://cargo-interiors-demo.lovable.app/about-us"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* Hero Banner */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>About Us</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Design. Architecture. Construction. <span className="text-gradient-gold">One Company.</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Cargo Interior is a full-service design and build company in Gurugram — delivering end-to-end interior design, architectural planning, and construction under one roof.
          </p>
        </div>
      </section>

      {/* Story */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">
              From Interior Design Studio to <span className="text-gradient-gold">Full-Service Build Company</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Cargo Interior was founded in 2015 by Azam Saifi with a clear mission: to create spaces that drive business results. What began as a focused interior design studio in Gurugram quickly evolved as clients demanded more — not just beautiful interiors, but complete architectural planning and construction under one trusted team.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Today, we are a full-service design and build company with 80+ professionals — architects, structural engineers, 3D visualization experts, project managers, and skilled craftsmen. Our portfolio spans 100+ projects across 15+ cities, from luxury showrooms and corporate offices to turnkey house construction and premium residences.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              This evolution wasn't accidental. We expanded into architecture and construction because our clients needed seamless execution from concept to handover — and we deliver exactly that, with the same design sensibility and quality control that built our reputation.
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
          {/* What We Do */}
          <div className="text-center mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Complete Design & <span className="text-gradient-gold">Build Solutions</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Interior Design", desc: "Commercial and residential interiors crafted for performance — showrooms that sell, offices that inspire, and homes that elevate everyday living." },
              { title: "Architectural Planning & Design", desc: "From floor plans and elevations to 3D visualization and municipal approvals, our architects shape spaces that are structurally sound and visually compelling." },
              { title: "House Construction & Turnkey Projects", desc: "End-to-end residential construction — foundation to finishing — with ISI-certified materials, on-site supervision, and transparent milestone-based delivery." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border p-8 hover:border-primary/30 transition-colors">
                <h3 className="font-display text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Our Approach */}
          <div className="text-center mb-16">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Seamless Execution, <span className="text-gradient-gold">Concept to Completion</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "One Team, One Vision", desc: "Architects, designers, and builders work together from day one — no fragmented coordination, no miscommunication between teams." },
              { title: "Rigorous Quality Control", desc: "Daily site inspections, premium material sourcing, and structured quality checks at every milestone ensure the final result matches the design exactly." },
              { title: "Client-First Delivery", desc: "Your goals shape every decision. We listen first, design second, and maintain transparent communication with honest timelines and no hidden costs." },
              { title: "Design with Purpose", desc: "Every element has a reason — from lighting that highlights products to layouts that guide customer flow. Design without strategy is just decoration." },
              { title: "Innovation & Technology", desc: "3D visualization before execution, modern construction techniques, and real-time project tracking deliver better results, faster." },
              { title: "Transparency Always", desc: "Itemized estimates, milestone-based billing, and regular progress updates. You always know exactly where your project stands." },
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">Why Clients Choose Us</h3>
              <ul className="space-y-4">
                {[
                  "One-stop solution — design, architecture & construction under one roof",
                  "ISO certified processes for consistent quality across every project",
                  "MSME registered — supporting Make in India",
                  "Worked with Samsung, LG, Havas Media, Sagar Ratna & more",
                  "Full in-house team — no outsourced labor or fragmented coordination",
                  "3D visualization before execution — no surprises at handover",
                  "Transparent pricing with milestone-based billing",
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
            Ready to Design & <span className="text-gradient-gold">Build?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            Whether it's interiors, architecture, or complete construction — schedule a complimentary consultation with Gurugram's trusted design and build company.
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
