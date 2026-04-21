import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import WistiaPlayer from "@/components/WistiaPlayer";
import { Instagram, Facebook, Linkedin, Phone, MessageCircle } from "lucide-react";

interface Project {
  mediaId: string;
  title: string;
  type: string;
  location: string;
  description: string[];
}

const PROJECTS: Project[] = [
  {
    mediaId: "ixz6r35awe",
    type: "3BHK Apartment",
    location: "DLF Phase 1, Gurgaon",
    title: "Modern 3BHK Apartment Interior in DLF Phase 1 Gurgaon",
    description: [
      "This 3BHK apartment in DLF Phase 1 was reimagined as a calm, contemporary residence for a young family that wanted warmth without losing on modern lines. The brief was clear — open up the layout, let in more natural light, and design every wall to do double duty as both storage and statement. Our team began with a complete spatial audit, removing two non-load-bearing partitions to merge the living and dining zones into a single, breathable volume that feels far larger than the original carpet area suggested.",
      "The living room sets the tone for the rest of the home. A wall-length TV unit in fluted oak veneer is paired with back-painted glass shelving and warm cove lighting tucked behind the ceiling cornice. Underfoot, a soft Italian-marble-look porcelain ties the public areas together, while a custom rug anchors the seating around a low travertine coffee table. Every joint, reveal and shadow gap was detailed on site to keep the look crisp — a hallmark of premium home interior design in Gurgaon.",
      "In the master bedroom, we built a full-height wardrobe in matte laminate with profile-light handles and a fabric-upholstered headboard wall that gently wraps around the bed. Bedside tables are wall-mounted to free the floor and make housekeeping effortless. The children's bedroom uses a loft-style study with pegboard storage, while the guest room doubles as a quiet work-from-home corner with a floating desk and acoustic panelling.",
      "The kitchen was rebuilt from scratch as a functional L-shape with quartz countertops, soft-close tandem drawers, a tall pull-out pantry and an under-cabinet LED system that eliminates every shadow on the working triangle. Materials were selected for the realities of an Indian kitchen — anti-fingerprint laminates, stain-resistant backsplash and a deep single-bowl sink.",
      "Storage planning is the silent hero of this project: under-bed hydraulic units, false-ceiling lofts in the foyer and a concealed shoe cabinet near the entry door together added over 70 cubic feet of usable space. The result is a residential interior in Gurgaon that feels uncluttered, photogenic and genuinely easy to live in — exactly what 2BHK and 3BHK families across Gurugram are asking for in 2026.",
    ],
  },
  {
    mediaId: "guu4489cop",
    type: "2BHK Apartment",
    location: "Sector 56, Gurgaon",
    title: "Contemporary 2BHK Interior Design in Sector 56 Gurgaon",
    description: [
      "This 2BHK in Sector 56 belongs to a young couple who wanted a home that looks like a boutique hotel but works like a smart, low-maintenance apartment. With a compact carpet area, every inch had to earn its place — so we approached the project as a lesson in restraint, choosing a tight palette of warm whites, smoked oak and brushed brass and repeating it consistently from the foyer through to the balcony.",
      "The entry foyer was transformed with a slim console, a full-height mirror panel and a concealed shoe cabinet that tucks behind a fluted shutter. Just beyond, the living room opens up with a minimalist TV wall in micro-cement texture, floating shelves, and a custom modular sofa that can be rearranged for movie nights or family gatherings. Linear profile lights replace traditional false-ceiling pockets, giving the room a clean, gallery-like ceiling plane.",
      "The dining nook was carved out of a previously dead corner using a banquette with hidden storage and a round table that comfortably seats four. This single move freed up nearly 25 square feet of usable circulation — a small but meaningful win for any 2BHK interior design in Gurgaon. The kitchen, though compact, was rebuilt with a tall unit, magic corner, and a pull-out tandem that holds a full week's groceries.",
      "Both bedrooms follow the same design language but with distinct personalities. The master features a fabric-panelled headboard wall, asymmetric pendants and a sliding wardrobe with a dressing unit tucked inside. The second bedroom doubles as a guest room and home office, with a wall-mounted folding desk and an open bookshelf that breaks the visual monotony.",
      "Materials were chosen for longevity in Gurugram's dusty, humid climate — PU-finished shutters in high-touch zones, anti-bacterial laminates in the kitchen, and HDHMR substrates throughout to resist warping. The result is a home interior design in Gurgaon that proves a smaller footprint can still deliver hotel-grade finish, intelligent storage and a calm, curated atmosphere the owners actually look forward to coming home to.",
    ],
  },
  {
    mediaId: "goesug66sk",
    type: "4BHK Villa",
    location: "Golf Course Road, Gurgaon",
    title: "Luxury 4BHK Villa Interior on Golf Course Road Gurgaon",
    description: [
      "This four-bedroom villa on Golf Course Road was designed for a family that entertains often and travels frequently — they wanted a residence that feels grand at first glance but is incredibly easy to maintain day to day. The original shell had generous volumes but lacked a clear hierarchy, so our first move was to redefine the entry sequence with a double-height foyer, a sculpted staircase wall in textured plaster and a custom chandelier that immediately signals the tone of the rest of the home.",
      "The formal living room uses a layered neutral palette — bone white walls, smoked walnut joinery and a centrepiece marble feature wall with concealed grazing lights. A bespoke modular sofa wraps around a low brass-and-stone coffee table, while drapery in heavyweight linen softens the acoustics and filters Gurgaon's strong afternoon light. Every electrical point, including USB and HDMI outlets, was pre-planned to keep cables completely out of sight.",
      "The family lounge upstairs is more relaxed: an L-shaped recliner sofa, a 75-inch TV recessed into a fluted veneer wall, and a built-in bar unit with backlit glass shelving. This zone connects to a dedicated home theatre with acoustic fabric panels, blackout drapes and tiered seating — a feature increasingly requested in luxury villa interiors across Gurugram.",
      "All four bedrooms received custom wardrobe systems with internal lighting, soft-close drawers and dedicated shoe and accessory units. The master suite was treated as a private retreat with a walk-in dressing room, a freestanding bathtub framed against a fluted glass partition, and a balcony lounge overlooking the golf course. The kids' rooms balance playfulness with discipline — pegboards, study lofts and modular beds that grow with the children.",
      "The kitchen and adjoining utility were planned as a true working space: tall units up to the slab, a quartz island with seating, and a separate prep kitchen behind a concealed door — essential for residential interior projects in Gurgaon where heavy daily cooking happens alongside frequent entertaining. The villa today is a benchmark for what considered, slow, materially honest home interior design in Gurgaon can achieve.",
    ],
  },
  {
    mediaId: "bibmbz86k1",
    type: "3BHK Apartment",
    location: "Sector 67, Gurgaon",
    title: "Minimalist 3BHK Apartment Design in Sector 67 Gurgaon",
    description: [
      "This 3BHK in Sector 67 was designed for a couple who describe their style as 'warm minimalism' — clean lines, honest materials and absolutely no visual clutter. The existing apartment had a fragmented layout typical of newer Gurgaon high-rises, so we began by realigning the foyer wall, opening up the kitchen with a breakfast counter, and converting an underused balcony into an indoor-outdoor reading nook.",
      "The living and dining areas now read as one continuous volume, unified by a single ceiling plane with a deep cove of warm light. A long, low TV console in oak veneer sits against a micro-cement wall, balanced by a vertical garden that brings a touch of softness without demanding maintenance. The dining table is a slab of natural travertine on a slim metal base, paired with cane-back chairs that nod to Indian craft traditions.",
      "Each bedroom uses the same palette of off-white, oak and muted sage but in different proportions. The master bedroom features a continuous wardrobe wall with a hidden door leading to the dressing area, an upholstered bed with integrated bedside drawers, and ceiling-mounted reading lights that eliminate clutter on the side tables. The second bedroom doubles as a nursery-ready guest room with a convertible bed and modular storage.",
      "The third bedroom was reimagined as a dedicated study and library — full-height shelving, a custom desk with cable management, and a daybed for occasional guests. Acoustic treatment on one wall makes it equally suitable for video calls, an essential feature for any modern home interior design in Gurgaon.",
      "Material choices follow the minimalist brief: PU-finished MDF for high-touch zones, HDHMR for wet areas, and anti-glare LED profiles throughout. The kitchen is a quiet handle-less design with profile lights, a quartz countertop and a tall pantry that hides everything from the microwave to the rice dispenser. The result is a residential interior in Gurgaon that proves minimalism doesn't have to feel cold — done right, it feels deeply personal, calm and timeless.",
    ],
  },
  {
    mediaId: "7orrb1w46c",
    type: "3BHK Apartment",
    location: "Sohna Road, Gurgaon",
    title: "Elegant 3BHK Home Interior on Sohna Road Gurgaon",
    description: [
      "This 3BHK apartment on Sohna Road was a complete transformation for a family relocating from Mumbai. They wanted the warmth of their old home translated into a contemporary Gurgaon high-rise — soft curves, layered lighting and a sense of craftsmanship in every detail. We responded with a design language built around arches, rounded joinery and tactile materials like cane, fluted wood and hand-finished plaster.",
      "The living room is anchored by an arched media wall in textured plaster, flanked by curved display niches finished in warm beige PU. A bouclé sofa, a marble-topped coffee table with a fluted base, and a hand-tufted rug create a layered, lived-in feel. Drapery extends from ceiling to floor on a recessed track, instantly elevating the proportions of an otherwise standard builder-floor ceiling height.",
      "The dining area uses a circular table to soften the rectangular floor plate, with a sculptural pendant overhead and a custom crockery unit in arched detailing. The adjoining kitchen was opened up with a half-wall and a breakfast counter — a layout change that makes the home feel dramatically more social, which is exactly what residential interior projects in Gurgaon increasingly demand.",
      "All three bedrooms received bespoke joinery: the master with a full dressing unit, fluted wardrobe shutters and a curved headboard wall in performance fabric; the second bedroom with a study loft and pinboard wall for the teenager; and the third converted into a multi-purpose pooja-cum-guest room with a sliding partition that disappears into the wall when not in use.",
      "Lighting was designed in three layers — ambient cove lights, focused task lighting on workstations and study desks, and decorative pendants that act as jewellery for each room. Every switch was relocated to ergonomic heights and grouped logically, a small but transformative upgrade. The finished home is a textbook example of considered home interior design in Gurgaon — emotionally warm, visually current and built to last well beyond passing trends.",
    ],
  },
  {
    mediaId: "oicc7wav9x",
    type: "2BHK Apartment",
    location: "DLF Phase 2, Gurgaon",
    title: "Compact 2BHK Interior Design in DLF Phase 2 Gurgaon",
    description: [
      "This 2BHK in DLF Phase 2 was designed for a young professional couple buying their first home. The brief was honest — a tight budget, a tight floor plate, but no compromise on the feeling of premium-ness. Our team approached the project as a study in 'high perceived value' — focusing the budget on the surfaces people actually touch and see every day, and being disciplined everywhere else.",
      "The living room uses a single statement wall in fluted veneer behind the TV, paired with a simple but well-proportioned sofa, a slim console and a round jute rug. Instead of an expensive false ceiling, we used a peripheral cove with warm LED strips — a fraction of the cost but visually transformative. Curtains run wall-to-wall to make the room feel larger than its actual dimensions.",
      "The kitchen was the single biggest upgrade. We replaced the developer-supplied modular kitchen with a custom L-shaped layout using marine ply carcasses, acrylic shutters and a quartz countertop. A tall unit holds the microwave and pantry, while a magic corner unlocks an otherwise wasted angle. For families researching 2BHK interior design in Gurgaon on a sensible budget, this kitchen is a useful reference point.",
      "The master bedroom features a sliding wardrobe in a soft greige laminate, an upholstered headboard wall and a compact dressing unit with a backlit mirror. Under-bed hydraulic storage adds nearly forty cubic feet of seasonal storage — invaluable in a 2BHK. The second bedroom doubles as a study and guest room, with a wall-mounted desk that folds away when not in use.",
      "Across the apartment, we kept the colour palette to three tones — warm white, oak and a single accent of deep olive — which makes the home feel curated rather than cluttered. The finished project shows that thoughtful home interior design in Gurgaon doesn't always require a luxury budget; what it requires is correct prioritisation, honest materials and detailing that respects the way real families actually live.",
    ],
  },
  {
    mediaId: "czx4fmhpnc",
    type: "3BHK Builder Floor",
    location: "Sector 57, Gurgaon",
    title: "Premium 3BHK Builder Floor Interior in Sector 57 Gurgaon",
    description: [
      "This 3BHK builder floor in Sector 57 came to us as a near-empty shell — a common scenario in Gurgaon's independent floor market. The owners wanted a home that felt distinctly their own, with a contemporary Indian sensibility and the kind of finish typically seen in high-end apartment projects. We treated the entire floor as a blank canvas and developed a single, cohesive design narrative across all 1,800 square feet.",
      "The journey begins at the entry, where a custom jaali-inspired partition in metal and wood separates the foyer from the living area without blocking light. The living room features a full-height TV wall in book-matched veneer, a bespoke sofa in deep teal velvet, and a coffered ceiling detail that adds rhythm overhead. Subtle brass inlays run through the joinery as a recurring motif.",
      "The dining and pooja areas share a single wall — the dining side dressed in a hand-painted mural and the pooja side recessed into a wooden niche with traditional jaali screens and concealed warm lighting. This dual-purpose treatment is a small masterclass in how residential interior design in Gurgaon can honour cultural needs while staying contemporary.",
      "All three bedrooms received customised storage walls with internal organisation systems, profile-light handles and integrated lighting. The master bedroom includes a walk-in wardrobe carved out of an underused corner and a freestanding study desk facing the balcony. The kids' bedroom uses pop colours, a study loft and modular shelves; the third bedroom is a calm guest suite with twin beds.",
      "Modular kitchen design was a major focus — a full U-shaped layout with a tall unit, an island with a breakfast bar, and a separate utility for washing and drying. Quartz countertops, anti-fingerprint laminates and pull-out organisers make the kitchen as functional as it is photogenic. The completed project sets a strong benchmark for premium home interior design in Gurgaon's growing builder-floor segment.",
    ],
  },
  {
    mediaId: "rwuzt8m8ct",
    type: "4BHK Apartment",
    location: "Sector 65, Gurgaon",
    title: "Spacious 4BHK Apartment Interior in Sector 65 Gurgaon",
    description: [
      "This 4BHK apartment in a high-rise tower in Sector 65 was designed for a multi-generational family — grandparents, parents and two school-age children sharing the same home. The design challenge was clear: create distinct private zones for three generations while keeping the public areas warm, social and easy to gather in. We zoned the apartment carefully, dedicating one wing to the grandparents and reorganising the layout to give the children their own quiet study corner.",
      "The living room balances grandeur and comfort. A large sectional sofa in performance fabric anchors the room, paired with an ottoman that doubles as additional seating during family gatherings. A custom unit in walnut veneer with backlit display niches forms the focal wall, while a deep cove ceiling adds visual height. Drapery, rug, and lighting were all selected to soften acoustics — essential in a busy household.",
      "The dining area accommodates a six-seater table with an extendable leaf, set against a fluted wall and a contemporary chandelier. The kitchen was redesigned as an open layout with a half-height partition that keeps cooking smells contained while preserving the visual openness — a genuinely useful upgrade for any home interior design in Gurgaon involving Indian cooking.",
      "Each bedroom was tailored to its occupant. The grandparents' room uses a lower bed with bedside emergency switches, anti-skid flooring in the bathroom and brighter ambient lighting for ageing eyes. The master bedroom is a calm retreat with a fabric headboard, full wardrobe wall and a small lounge corner. The children's rooms use modular study units, pinboards and bunk-style beds where required.",
      "Across all four bedrooms, we used concealed wiring for charging stations, integrated reading lights and customised wardrobe internals. The apartment's finished design shows how thoughtful 4BHK residential interiors in Gurgaon can support different ages, routines and needs under a single, coherent design language — without ever feeling fragmented or overdesigned.",
    ],
  },
  {
    mediaId: "l3itfli5so",
    type: "3BHK Apartment",
    location: "Sector 81, Gurgaon",
    title: "Modern 3BHK Apartment Renovation in Sector 81 Gurgaon",
    description: [
      "This 3BHK in Sector 81 was a full renovation for an NRI family planning to relocate back to Gurgaon. Having lived in Singapore for over a decade, they wanted a home that retained the clean efficiency they had grown used to abroad while celebrating the textures and warmth of an Indian home. Our team handled everything from civil work and electrical re-routing to final styling, delivering the project in just under twelve weeks.",
      "The living room features a textured stone-look feature wall, a wall-mounted TV unit with floating drawers and a low-profile sofa upholstered in a stain-resistant fabric. A long sliding door system replaces the original window, opening up the living area to the balcony and dramatically improving daylight. Linear lighting was used throughout to keep the ceiling clean and modern.",
      "The dining area uses a custom marble-top table, statement pendant and a slim crockery unit with arched display openings — a small detail that quietly references Indian architectural heritage. The adjoining kitchen was rebuilt as a modular U-shape with quartz countertops, soft-close drawers, a tall pantry and a dedicated tea/coffee station — small comforts that significantly improve daily life.",
      "All three bedrooms were treated as individual suites. The master features a continuous wardrobe wall, an upholstered headboard with integrated reading lights and a small writing desk overlooking the city. The second bedroom is a calm, neutral guest suite with a Murphy bed that disappears when not in use. The third bedroom doubles as a music room and home office with acoustic panelling on one wall.",
      "Storage was a major focus throughout — under-bed hydraulics, full-height wardrobes, foyer shoe cabinets and false-ceiling lofts together added more than ninety cubic feet of additional storage compared to the original layout. The completed project is a strong example of how disciplined residential interior design in Gurgaon can deliver a globally contemporary home without losing the warmth and character that make a house feel uniquely Indian.",
    ],
  },
  {
    mediaId: "8mrgz5regn",
    type: "Independent Villa",
    location: "Sector 50, Gurgaon",
    title: "Bespoke Independent Villa Interior in Sector 50 Gurgaon",
    description: [
      "This independent villa in Sector 50 was a ground-up interior project across three floors for a family that wanted a distinctly luxurious yet relaxed home. The owners had a clear vision — neutral palettes, layered lighting, generous use of natural stone and joinery detailed to last decades. Our team coordinated civil modifications, false ceilings, electrical layouts, woodwork and styling under a single roof, ensuring a seamless project timeline.",
      "The ground floor opens with a double-height foyer featuring a custom plaster wall, a sculptural console and a pendant cluster that visually ties the two storeys together. The formal living room sits to one side, dressed in oat-toned upholstery, walnut veneer and a marble feature wall framed by warm grazing light. The informal family lounge sits on the opposite side, designed for movie nights and weekend gatherings.",
      "The kitchen is the heart of the villa — an open plan with a quartz island, breakfast bar and a separate, fully equipped service kitchen tucked behind a concealed door. This dual-kitchen approach is increasingly the gold standard for villa-grade home interior design in Gurgaon, allowing daily Indian cooking to happen out of sight while the main kitchen remains pristine for entertaining.",
      "Upstairs, the master suite occupies an entire wing with a private lounge, walk-in dressing room, freestanding tub and a balcony overlooking the garden. The two children's bedrooms are designed to grow with them — modular study units, full-height wardrobes and accent walls that can be refreshed easily. A dedicated guest suite on the same floor ensures visiting family members never feel like an afterthought.",
      "The top floor was converted into a multi-purpose entertainment zone — a home theatre, a small bar lounge and a covered terrace with built-in seating and outdoor lighting. Across all three floors, the design language stays consistent: warm neutrals, fluted detailing, brass accents and quietly confident proportions. The completed villa stands as a strong reference for what bespoke residential interior design in Gurgaon can achieve when craft, planning and patience are given equal weight.",
    ],
  },
];

export default function HomeInteriorPortfolioGurgaon() {
  return (
    <>
      <SEOHead
        title="Home Interior Design Portfolio in Gurgaon – Real Residential Projects | Cargo Interiors"
        description="Explore our home interior design portfolio in Gurgaon — 2BHK, 3BHK, 4BHK & villa projects across DLF, Golf Course Road, Sohna Road & more. 100+ residential interiors delivered."
      />

      {/* HERO */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionLabel>Home Interior Portfolio</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Home Interior Design Portfolio in Gurgaon –{" "}
            <span className="text-primary">Real Homes, Real Transformations</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed mb-8">
            A curated selection of our best home interior design projects in Gurgaon — from compact
            2BHK apartments to expansive independent villas. With over <strong className="text-foreground">100+ completed
            residential interiors</strong> across 2BHK, 3BHK, 4BHK and villa formats, our work is
            grounded in three commitments: thoughtful functionality, refined aesthetics and on-site
            execution we can stand behind. Every project below was designed and delivered by Cargo
            Interiors in Gurugram for real families with real lives.
          </p>

          {/* Trust strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-4">
            {[
              { stat: "100+", label: "Home Interior Projects Completed" },
              { stat: "10+ Yrs", label: "Residential Design Experience" },
              { stat: "100%", label: "On-Time Delivery Guarantee" },
            ].map((t) => (
              <div key={t.label} className="border border-border rounded-xl p-5 bg-card/40">
                <div className="font-display text-2xl text-primary font-bold">{t.stat}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto space-y-20">
          {PROJECTS.map((p, idx) => (
            <Section key={p.mediaId} className={`grid lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <WistiaPlayer mediaId={p.mediaId} aspect={0.5625} />
              </div>
              <div>
                <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-primary border border-primary/40 rounded-full px-3 py-1 mb-4">
                  Home Interior · {p.type}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {p.title}
                </h2>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-5">
                  📍 {p.location}
                </p>
                <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
                  {p.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS BLOCK */}
      <Section className="py-16 px-6 bg-muted/20 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Plan Your Project</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Useful Resources Before You Start
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-8">
            Looking for the <Link to="/interior-designer-in-gurgaon" className="text-primary hover:underline">best interior designer in Gurgaon</Link>?
            Browse our full <Link to="/our-portfolio" className="text-primary hover:underline">interior design portfolio in Gurgaon</Link>,
            review the latest <Link to="/construction-cost-in-gurugram" className="text-primary hover:underline">construction cost in Gurgaon</Link>,
            or <Link to="/interior-design-cost-calculator-gurugram" className="text-primary hover:underline">calculate your interior design cost in Gurgaon for free</Link> using our budgeting tool.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Looking for Home Interior Design in Gurgaon?
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
          Share your floor plan and budget — we'll prepare a tailored design direction for your home, completely free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton>Get Free Consultation</CTAButton>
          <a href="tel:+919050656162" className="btn-glow-outline inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow-outline inline-flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> WhatsApp Now
          </a>
        </div>
      </Section>

      {/* SOCIAL */}
      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display text-xl font-bold mb-4">Follow Our Work</h3>
          <div className="flex justify-center gap-5">
            <a href="https://instagram.com/cargointeriors" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/cargointeriors" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/cargointeriors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
