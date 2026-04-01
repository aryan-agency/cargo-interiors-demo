import { Link } from "react-router-dom";
import homeImage from "@/assets/home-interior.jpg";
import showroomImage from "@/assets/showroom-interior.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";

export default function HomeInterior() {
  return (
    <>
      <SEOHead
        title="Home Interior Designer in Gurugram | Cargo Interiors"
        description="Premium home interior design in Gurugram. Modular kitchens, bedroom design, living rooms & complete home renovation. 10+ years experience. Cargo Interiors."
        canonical="https://cargo-interiors-demo.lovable.app/home-interior"
      />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Residential Design</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Home Interior Designer in <span className="text-gradient-gold">Gurugram</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Bespoke home interiors crafted with precision, premium materials, and a deep understanding of how you live. Your home, designed by experts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Transform Your Home Into a <span className="text-gradient-gold">Masterpiece</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Your home is your most personal space — it should reflect your taste, support your lifestyle, and bring comfort to every moment. As a premium home interior designer in Gurugram, Cargo Interiors creates bespoke residential spaces that are as functional as they are beautiful. We believe that great home design isn't about following trends — it's about understanding how you and your family live, and designing around that reality.
              </p>
              <p>
                Our home interior design services in Gurugram cover every room and every detail. From complete home renovations and new apartment fit-outs to individual room makeovers, our team handles it all. We specialize in modular kitchen design with premium European fittings, master bedroom suites with custom wardrobes and dressing areas, living rooms designed for both entertaining and relaxation, children's rooms that grow with your family, and bathroom designs that feel like personal spas.
              </p>
              <p>
                What makes our residential design service unique is the same precision and professionalism we bring to our commercial projects. Every home interior project starts with a detailed consultation where we understand your family's needs, aesthetic preferences, and budget. We then create comprehensive 3D visualizations that let you see every room, every finish, and every furniture piece before any work begins. This eliminates guesswork and ensures complete satisfaction with the final result.
              </p>
              <p>
                We work across all major residential areas in Gurugram including DLF Phase 1-5, Sushant Lok, Golf Course Road, South City, Sohna Road, Sector 56-57, and New Gurugram. Whether you own a compact 2BHK or a sprawling villa, our design team creates solutions that maximize space, optimize storage, and create an atmosphere of refined luxury. We source premium materials from trusted suppliers and our in-house craftsmen ensure flawless execution with attention to every joint, edge, and finish.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <img src={homeImage} alt="Home interior design project in Gurugram by Cargo Interiors" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
            <img src={showroomImage} alt="Premium living room interior designed by Cargo Interiors in Gurugram" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Services Breakdown */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Home Interior Design <span className="text-gradient-gold">Services</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Modular Kitchen Design", desc: "Premium modular kitchens with European hardware, granite/quartz countertops, and smart storage solutions designed for Indian cooking needs." },
              { title: "Bedroom & Wardrobe", desc: "Custom bedroom designs with built-in wardrobes, study areas, dressing zones, and lighting that creates the perfect ambiance for rest." },
              { title: "Living Room Design", desc: "Statement living rooms with custom TV units, display shelving, comfortable seating arrangements, and accent lighting." },
              { title: "Bathroom Remodeling", desc: "Spa-inspired bathroom designs with premium fixtures, rain showers, vanity units, and waterproof finishes that last." },
              { title: "Complete Home Renovation", desc: "End-to-end home makeovers including civil work, electrical, plumbing, false ceiling, flooring, painting, and furniture." },
              { title: "Balcony & Outdoor", desc: "Transform balconies and terraces into functional outdoor living spaces with weatherproof furniture and greenery." },
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

      {/* Process */}
      <Section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              How We Design Your <span className="text-gradient-gold">Home</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: "01", title: "Home Visit & Consultation", desc: "We visit your home, take measurements, understand your family's lifestyle, and discuss your design preferences and budget." },
              { step: "02", title: "3D Design & Planning", desc: "Our team creates detailed 3D visualizations of every room so you can see exactly how your home will look after the renovation." },
              { step: "03", title: "Material Selection", desc: "Choose from our curated collection of premium materials, finishes, and fittings. We guide you through every option." },
              { step: "04", title: "Execution & Installation", desc: "Our skilled craftsmen handle all work — civil, carpentry, electrical, painting, and installation. We manage everything." },
              { step: "05", title: "Final Walkthrough", desc: "We do a detailed inspection with you, address any final touches, and hand over your beautifully designed home." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start bg-card border border-border p-8 hover:border-primary/30 transition-colors">
                <span className="font-display text-3xl font-bold text-primary flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Start Your Project</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Redesign Your <span className="text-gradient-gold">Home?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            Book a free home visit and consultation. Let Gurugram's premier home interior designer create the home you've always dreamed of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton>Book a Free Home Visit</CTAButton>
            <Link to="/services" className="btn-glow-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
