import { Link } from "react-router-dom";
import officeImage from "@/assets/office-interior.jpg";
import commercialImage from "@/assets/commercial-interior.jpg";
import showroomImage from "@/assets/showroom-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import { Building2, Users, TrendingUp, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";

const stats = [
  { number: "100+", label: "Projects Delivered" },
  { number: "80+", label: "Design Experts" },
  { number: "15+", label: "Cities Served" },
  { number: "10+", label: "Years Experience" },
];

const processSteps = [
  { step: "01", title: "Discovery & Briefing", description: "We begin every office interior project in Gurgaon with a detailed consultation to understand your company culture, workflow, team size, growth plans, and brand identity." },
  { step: "02", title: "Space Planning & Layout", description: "Our architects create optimized floor plans balancing open collaboration zones, private cabins, meeting rooms, breakout areas, and reception spaces for maximum productivity." },
  { step: "03", title: "3D Visualization", description: "Experience your new office virtually before construction begins. Our photorealistic 3D renders let you see every detail — materials, lighting, furniture, and colour palette." },
  { step: "04", title: "Execution & Handover", description: "Our in-house project management team handles procurement, civil work, electrical, HVAC coordination, furniture installation, and final quality inspection." },
];

const officeTypes = [
  { title: "Corporate Headquarters", description: "Executive-grade interiors that reinforce brand authority and impress clients. Premium materials, sophisticated lighting, and boardroom-ready design for large enterprises in Gurgaon and Delhi NCR.", icon: Building2 },
  { title: "Startup & Tech Offices", description: "Vibrant, agile workspaces designed for innovation. Flexible layouts, standing desks, collaboration pods, and creative zones that attract top talent in Gurgaon's competitive tech landscape.", icon: Lightbulb },
  { title: "Co-Working Spaces", description: "Revenue-optimized layouts with hot desks, private cabins, phone booths, and community areas. Designed for maximum occupancy without sacrificing comfort or aesthetics.", icon: Users },
  { title: "Executive Suites", description: "Refined, private office environments for senior leadership. Sound-insulated cabins, premium finishes, integrated AV systems, and bespoke furniture that commands respect.", icon: TrendingUp },
];

const benefits = [
  "Increased employee productivity by up to 20% through ergonomic design",
  "Stronger brand perception with clients and visitors",
  "Better talent attraction and employee retention",
  "Optimized space utilization reducing real estate costs",
  "Improved acoustics and lighting for focused work",
  "Future-proof layouts that adapt to team growth",
];

export default function OfficeInterior() {
  return (
    <>
      <SEOHead
        title="Office Interior Design in Gurgaon | Best Office Designers | Cargo Interiors"
        description="Looking for the best office interior design in Gurgaon? Cargo Interiors delivers premium office interiors for corporates, startups & co-working spaces. 100+ projects delivered in Gurugram & Delhi NCR."
        canonical="https://cargo-interiors-demo.lovable.app/office-interior-design-gurgaon"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Office Interior Design in Gurgaon", "Expert office interior design services in Gurgaon (Gurugram). Modern, productive workspace design and turnkey execution for corporates, startups, and co-working spaces across Delhi NCR.")) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={officeImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Office Interior Design Gurgaon</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Office Interior Design in <span className="text-gradient-gold">Gurgaon</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Transform your workspace into a high-performance environment that drives productivity, strengthens your brand, and attracts top talent. Cargo Interiors is a leading office interior designer in Gurgaon with 100+ projects delivered across Gurugram and Delhi NCR.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <CTAButton>Book a Free Consultation</CTAButton>
            <Link to="/showroom-interior-design-gurgaon" className="btn-glow-outline !px-6 !py-3 !text-xs">
              Showroom Interiors →
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

      {/* WHY OFFICE DESIGN MATTERS */}
      <Section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">
              Why Office Interior Design Is a <span className="text-gradient-gold">Business Investment</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              In Gurgaon's competitive corporate landscape, your office interior is more than aesthetics — it's a strategic asset. Studies show that well-designed workspaces increase employee productivity by up to 20%, reduce absenteeism, and significantly improve talent retention. For companies in Gurgaon and Delhi NCR, where competition for skilled professionals is fierce, a thoughtfully designed office becomes a powerful recruitment tool.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              At Cargo Interiors, we approach every office interior design project in Gurgaon with a business-first mindset. We don't just create beautiful spaces — we engineer environments that align with your company's goals, workflow patterns, and growth trajectory. From Fortune 500 headquarters to dynamic startup hubs in Gurugram's Cyber City and Golf Course Road, our portfolio spans every scale and industry.
            </p>
          </div>
          <img src={officeImage} alt="Modern office interior design in Gurgaon by Cargo Interiors" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="py-24 md:py-32 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold">
              Our Office Interior Design <span className="text-gradient-gold">Process</span>
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

      {/* TYPES OF OFFICES */}
      <Section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Office Types</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold">
              Types of Office Interiors We Design in <span className="text-gradient-gold">Gurgaon</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {officeTypes.map((t) => (
              <div key={t.title} className="border border-border p-8 bg-card">
                <t.icon className="text-primary mb-4" size={32} />
                <h3 className="font-display text-xl font-bold mb-3">{t.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* BENEFITS */}
      <Section className="py-24 md:py-32 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img src={commercialImage} alt="Office interior benefits - productivity boost in Gurgaon workspace" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
          <div>
            <SectionLabel>Benefits</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-8">
              Benefits of Professional Office <span className="text-gradient-gold">Interior Design</span>
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground font-body text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PORTFOLIO / CASE STUDIES */}
      <Section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold">
              Office Interior Projects in <span className="text-gradient-gold">Gurgaon & Delhi NCR</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg mt-4 max-w-2xl mx-auto">
              A selection of office interior design projects delivered by Cargo Interiors across Gurugram, showcasing our range from corporate HQs to modern startup environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: project1, title: "Corporate HQ, Cyber City", desc: "4,500 sq.ft. executive workspace with premium finishes" },
              { img: project2, title: "Tech Startup, Golf Course Road", desc: "Open-plan office with collaborative zones and breakout areas" },
              { img: project3, title: "Co-Working Hub, Sohna Road", desc: "Multi-tenant workspace optimized for 120+ professionals" },
            ].map((p) => (
              <div key={p.title} className="group">
                <div className="overflow-hidden">
                  <img src={p.img} alt={`${p.title} - Office interior design Gurgaon`} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
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
            <Link to="/showroom-interior-design-gurgaon" className="border border-border p-6 text-center hover:border-primary transition-colors bg-background">
              <p className="font-display font-bold text-sm">Showroom Interiors</p>
              <p className="text-muted-foreground text-xs mt-1">Gurgaon</p>
            </Link>
            <Link to="/commercial-interior-design-gurgaon" className="border border-border p-6 text-center hover:border-primary transition-colors bg-background">
              <p className="font-display font-bold text-sm">Commercial Interiors</p>
              <p className="text-muted-foreground text-xs mt-1">Gurgaon</p>
            </Link>
            <Link to="/restaurant-interior" className="border border-border p-6 text-center hover:border-primary transition-colors bg-background">
              <p className="font-display font-bold text-sm">Restaurant Interiors</p>
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
            Ready to Transform Your <span className="text-gradient-gold">Office?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            Whether you're setting up a new office in Gurgaon or renovating an existing workspace, Cargo Interiors delivers end-to-end office interior design solutions tailored to your business needs. Contact us today for a free consultation.
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
