import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import home from "@/assets/home-interior.jpg";

const TITLE = "Apartment Renovation in DLF Phase 1 Gurgaon | 4BHK Luxury Case Study";
const DESC = "Case study: 4BHK builder floor renovation in DLF Phase 1 Gurgaon by Cargo Interior. Layout, lighting, materials & final outcome of a luxury apartment transformation.";
const CANONICAL = "https://cargo-interiors-demo.lovable.app/apartment-renovation-in-dlf-phase-1-gurgaon";

const FACTS = [
  { k: "Typology", v: "4BHK Builder Floor" },
  { k: "Carpet Area", v: "≈ 3,150 sq ft" },
  { k: "Location", v: "DLF Phase 1, Gurgaon" },
  { k: "Scope", v: "Civil + Interior + MEP" },
  { k: "Timeline", v: "18 weeks" },
  { k: "Style", v: "Warm Contemporary" },
];

export default function ApartmentRenovationDLFPhase1() {
  return (
    <>
      <SEOHead title={TITLE} description={DESC} canonical={CANONICAL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema("Apartment Renovation in DLF Phase 1 Gurgaon", DESC)),
        }}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={home} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>
            <span className="inline-flex items-center gap-2"><MapPin size={12} /> Project Case Study · DLF Phase 1</span>
          </SectionLabel>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Apartment Renovation in <span className="text-gradient-gold">DLF Phase 1 Gurgaon</span> — Luxury Interior Transformation
          </h1>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            A documented walk-through of how Cargo Interior reimagined a tired 4BHK builder floor in DLF Phase 1 into a calm, gallery-grade residence — from the first site survey to the final styling brief.
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
        <article className="max-w-3xl mx-auto px-6 prose-invert">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">The Brief</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            The client — a returning NRI family of four — had inherited a two-decade-old builder floor on a quiet inner road of DLF Phase 1. The structure was sound but the interiors felt dated: deep false ceilings crowded the rooms, bedroom wardrobes ate into circulation, and a closed kitchen disconnected the dining experience from the rest of the home. They wanted a residence that felt like a private art gallery — warm, hushed, lit for evenings — without the gloss of a developer show flat.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Project Overview</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            The footprint covered roughly 3,150 sq ft of carpet across the entire third floor. The brief included four bedrooms, a formal living + dining room, an open kitchen with a butler pantry, a media lounge, and a compact home office. Cargo Interior took on the project as a single design + build mandate covering civil modifications, MEP overhaul, joinery, surface finishes, lighting design and final styling.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Design Challenges</h2>
          <ul className="text-muted-foreground font-body leading-relaxed mb-6 space-y-3 list-disc pl-5">
            <li><strong className="text-foreground">Low slab heights.</strong> The existing 9'2" slab was further compromised by a continuous false ceiling — visually heavy for a luxury home.</li>
            <li><strong className="text-foreground">RWA constraints.</strong> DLF Phase 1 restricts wet-work timings and noisy demolition; we had to phase civil work without overshooting permitted windows.</li>
            <li><strong className="text-foreground">Awkward kitchen wall.</strong> A load-bearing pier sat exactly where the client wanted an open island.</li>
            <li><strong className="text-foreground">Mixed daylight.</strong> The east-facing bedrooms received harsh morning glare while the west living room felt flat by sunset.</li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Our Solution</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            We stripped the slab back to RCC and replaced the heavy ceiling with a slim peripheral cove that hides linear LEDs and hugs the room edges — recovering nearly four inches of vertical air. A structural consultant validated retaining the kitchen pier; we wrapped it in fluted oak and absorbed it into a 10-foot island instead of fighting it.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Layout rework opened the kitchen-to-dining axis, while a new pocket door isolates the butler pantry during entertaining. Wardrobes were rebuilt as flush-shadow-line joinery flush with the wall plane, returning circulation to every bedroom. The home office moved into a former dressing alcove and gained a 7-foot study window.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Lighting was layered into four scenes per room — daylight, task, evening and dinner — controlled from a Lutron keypad. Sheer linen drapes diffuse the east glare without darkening the bedrooms.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Materials & Finishes</h2>
          <ul className="text-muted-foreground font-body leading-relaxed mb-6 space-y-2 list-disc pl-5">
            <li>Italian travertine flooring through living, dining and passages</li>
            <li>Smoked oak veneer with hand-rubbed matte PU on all loose furniture and joinery</li>
            <li>Honed Statuario marble island top with a brass shadow inlay</li>
            <li>Lime-plaster wall finish in the formal living and master bedroom</li>
            <li>Solid brass hardware, custom-machined locally to a satin finish</li>
            <li>Engineered wood flooring in all four bedrooms for warmth underfoot</li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Before vs After Transformation</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            The before condition read as a generic high-end rental — glossy tiles, dropped ceilings, mismatched wardrobes and over-bright CFL panels. The after is the opposite: a quiet sequence of warm stone, oak and lime plaster, lit almost entirely by indirect sources after sunset. The kitchen, previously a back-of-house room, is now the social heart of the home and opens directly into the dining space without a single visible door track.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-10">Final Outcome</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            The renovation was handed over in 18 weeks against the planned 20, with a single mid-project change order. The family moved in directly with their existing art collection, which the lighting layout had been pre-tuned for. Post-occupancy, the client reported a measurable drop in artificial-lighting use during the day and a noticeably quieter acoustic profile across the apartment thanks to the fabric-clad ceiling cove. For us, this project remains a reference point for what a thoughtful apartment renovation in DLF Phase 1 Gurgaon can look like when design and execution stay in the same hands from day one.
          </p>

          <div className="border-t border-border pt-8 mt-10 text-muted-foreground font-body text-sm leading-relaxed">
            Working with a senior <Link to="/interior-designer-in-dlf-phase-1-gurgaon" className="text-primary hover:underline">interior designer in DLF Phase 1 Gurgaon</Link> usually means juggling an architect, a contractor and a stylist. Cargo Interior collapses that into one accountable team. If you are evaluating partners more broadly, our <Link to="/interior-designer-in-gurgaon" className="text-primary hover:underline">best interior designer in Gurgaon</Link> hub explains how we work end to end.
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
            Planning a similar <span className="text-gradient-gold">renovation in DLF Phase 1?</span>
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Share your floor plan with our team and we will walk you through what is feasible, what it will cost and how long it will take.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton className="!px-7 !py-3 !text-xs">Get Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-6 !py-3 !text-xs inline-flex items-center gap-2">
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
