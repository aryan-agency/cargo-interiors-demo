import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import office from "@/assets/office-interior.jpg";

const TITLE = "Office Interior Design in E Block, DLF Phase 1 Gurgaon | Case Study";
const DESC = "Founder's studio office case study in E Block, DLF Phase 1 Gurgaon. How Cargo Interior delivered a 1,400 sq ft hybrid workspace with a private client viewing room.";
const CANONICAL = "https://cargo-interiors-demo.lovable.app/office-interior-design-e-block-dlf-phase-1-gurgaon";

const FACTS = [
  { k: "Typology", v: "Founder's Studio Office" },
  { k: "Carpet Area", v: "≈ 1,400 sq ft" },
  { k: "Location", v: "E Block, DLF Phase 1" },
  { k: "Headcount", v: "8 + 2 hybrid seats" },
  { k: "Timeline", v: "11 weeks" },
  { k: "Scope", v: "Turnkey Fit-out" },
];

export default function OfficeInteriorDLFPhase1EBlock() {
  return (
    <>
      <SEOHead title={TITLE} description={DESC} canonical={CANONICAL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema("Office Interior Design in E Block, DLF Phase 1 Gurgaon", DESC)),
        }}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={office} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>
            <span className="inline-flex items-center gap-2"><MapPin size={12} /> Project Case Study · E Block</span>
          </SectionLabel>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Office Interior Design in <span className="text-gradient-gold">E Block DLF Phase 1 Gurgaon</span>
          </h1>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            How a 1,400 sq ft independent floor in E Block was reimagined into a hybrid founder's studio for a fashion-tech entrepreneur — combining workstations, a creative atelier and a private client viewing room.
          </p>
        </div>
      </section>

      {/* FACTS */}
      <Section className="py-12 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {FACTS.map((f) => (
            <div key={f.k} className="border border-border p-4">
              <div className="text-[10px] uppercase tracking-widest text-primary font-body mb-1">{f.k}</div>
              <div className="font-display text-sm font-semibold">{f.v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* BODY */}
      <Section className="py-16 md:py-20 border-b border-border">
        <article className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">The Business Requirement</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            The client runs a direct-to-consumer fashion label that had outgrown a coworking arrangement. Their team of eight needed a permanent base in central Gurgaon that could double as a quiet showroom for partner buyers and press. They specifically chose an independent floor in E Block of DLF Phase 1 over a glass-tower lease — the residential-scale building gave them privacy, ground-floor parking and a hospitality feel that no commercial high-rise could match.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Project Overview</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            The mandate covered the entire first floor — roughly 1,400 sq ft of carpet, originally laid out as a residential 3BHK. Cargo Interior delivered a turnkey fit-out covering demolition of redundant walls, full MEP rewiring for office loads, acoustic treatment, custom joinery, AV cabling and final furniture procurement. The brief consciously avoided the open-plan-everything trend; the founder wanted defined zones for focused work, casual collaboration and discreet client meetings.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Design Strategy & Zoning</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            We mapped the floor into three zones along the long axis. The street-facing front became the client viewing room — a quiet, gallery-like space with controlled lighting, a single large display table and a discreet rail for hanging samples. The middle zone holds the eight workstations in a single bench arrangement, paired with a six-seat informal meeting nook against a tackable wall. The rear, originally the master bedroom, was converted into the founder's cabin and a small recording corner for product video shoots.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Two existing bathrooms were retained; one was upgraded to a guest-grade powder room facing the viewing area. A new utility pantry was carved out of the original kitchen footprint, sized to support all-day team coffee plus an occasional sit-down lunch.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Execution Details</h2>
          <ul className="text-muted-foreground font-body leading-relaxed mb-6 space-y-3 list-disc pl-5">
            <li><strong className="text-foreground">Acoustics first.</strong> Walls between the viewing room and workstations were rebuilt with a double-stud, mineral-wool partition to keep showings undisturbed during peak workday hours.</li>
            <li><strong className="text-foreground">Lighting design.</strong> The viewing room runs on a 4000K wall-grazer system tuned to flatter fabric textures, while workstations sit under a flicker-free 4500K linear pendant grid.</li>
            <li><strong className="text-foreground">Joinery on site.</strong> All cabinetry — from the workstation bench to the founder's credenza — was milled in our Manesar workshop and dry-fitted before transport, removing two weeks of typical on-site finishing.</li>
            <li><strong className="text-foreground">RWA coordination.</strong> Civil work was scheduled around DLF Phase 1's permitted hours, with daily dust extraction to keep neighbouring floors unaffected.</li>
            <li><strong className="text-foreground">Cabling.</strong> A flush-mounted floor box system serves every workstation, eliminating exposed wires across the timber flooring.</li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Final Outcome</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            The studio was handed over in 11 weeks — three weeks ahead of the original schedule — and went operational the same week. The client now hosts buyer visits in the viewing room without disrupting the working team behind the partition, a workflow that simply was not possible in their previous coworking setup. Energy consumption logs from the first quarter confirmed lighting load came in 18% below projection thanks to the layered scene-based control. As a reference for any future office interior design in DLF Phase 1 Gurgaon brief, this project demonstrates how a residential floor can outperform a commercial tower when the layout is treated as a strategic decision rather than an afterthought.
          </p>

          <div className="border-t border-border pt-8 mt-10 text-muted-foreground font-body text-sm leading-relaxed">
            Reviewing more options? Read about our work as a full-service <Link to="/interior-designer-in-dlf-phase-1-gurgaon" className="text-primary hover:underline">interior designer in DLF Phase 1 Gurgaon</Link>, or see how we approach corporate fit-outs broadly on our <Link to="/office-interior-designer-gurgaon" className="text-primary hover:underline">office interior designer in Gurgaon</Link> page.
          </div>

          <Link to="/interior-designer-in-dlf-phase-1-gurgaon" className="inline-flex items-center gap-2 mt-10 text-xs uppercase tracking-widest text-primary font-body">
            <ArrowLeft size={14} /> Back to DLF Phase 1 Page
          </Link>
        </article>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
            Fitting out an <span className="text-gradient-gold">office in DLF Phase 1?</span>
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Send us your floor plan and headcount — we will revert with a zoning concept and a timeline within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+919050656162" className="btn-glow !px-7 !py-3 !text-xs inline-flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow-outline !px-6 !py-3 !text-xs inline-flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp Now
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
