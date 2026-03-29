import { Link } from "react-router-dom";
import showroomImage from "@/assets/showroom-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import commercialImage from "@/assets/commercial-interior.jpg";
import homeImage from "@/assets/home-interior.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";

const services = [
  {
    title: "Restaurant Interior Design",
    slug: "/restaurant-interior",
    image: commercialImage,
    alt: "Restaurant interior design in Gurugram by Cargo Interiors",
    description: `A restaurant's interior is as important as its menu. At Cargo Interiors, we design restaurant spaces that create memorable dining experiences and drive repeat visits. Our restaurant interior design services in Gurugram encompass every aspect of the dining environment — from spatial layout and seating configuration to lighting design, acoustic planning, and material selection. We understand that different restaurant concepts require different design approaches: a fine-dining establishment demands elegance and intimacy, while a café needs warmth and casual energy. Our team works closely with restaurant owners to understand their brand, target audience, and operational needs before creating a design that maximizes both aesthetics and functionality. We handle the entire process from 3D visualization to final execution, ensuring your restaurant looks exactly as envisioned.`,
  },
  {
    title: "Café Interior Design",
    slug: "/restaurant-interior",
    image: commercialImage,
    alt: "Café interior design services in Gurugram",
    description: `Cafés have become social hubs, remote workspaces, and lifestyle destinations. The right interior design transforms a simple café into a community landmark. Our café interior design services in Gurugram focus on creating Instagram-worthy spaces that encourage customers to stay longer and share their experience. We design with an understanding of modern café culture — comfortable seating zones, optimal lighting for both ambiance and photography, durable yet beautiful materials that handle high traffic, and layouts that streamline barista workflow. Whether you're opening a specialty coffee shop, a bakery café, or a multi-concept café bar, our team brings creative vision backed by practical restaurant industry knowledge. Every design is fully visualized in 3D before execution begins.`,
  },
  {
    title: "Home Interior Design",
    slug: "/home-interior",
    image: homeImage,
    alt: "Home interior design in Gurugram by Cargo Interiors",
    description: `Your home should be a reflection of who you are — not a template from a catalogue. Cargo Interiors offers bespoke home interior design services in Gurugram for discerning homeowners who value craftsmanship and attention to detail. Our residential design team handles complete home interiors including living rooms, bedrooms, kitchens, bathrooms, dining areas, and outdoor spaces. We begin every project with an in-depth understanding of your lifestyle, family needs, and aesthetic preferences. From modular kitchen design with premium finishes to custom wardrobes, designer lighting, and curated furniture — every element is carefully selected to create a cohesive, comfortable, and visually stunning home. Our 3D visualization process ensures you see and approve every detail before construction begins.`,
  },
  {
    title: "Office Interior Design",
    slug: null,
    image: officeImage,
    alt: "Office interior design in Gurugram",
    description: `The modern office is more than a workspace — it's a strategic asset that influences recruitment, retention, productivity, and client perception. Cargo Interiors is a specialist office interior designer in Gurugram with extensive experience designing corporate headquarters, startup offices, co-working spaces, and executive suites. Our office design process begins with understanding your company culture, workflow patterns, and growth projections. We then create strategic layouts that balance open collaboration zones with private focus areas, design reception areas that make strong first impressions, and specify materials that are both premium and durable. Our 3D visualization technology allows your team to experience the new office virtually before any construction begins, ensuring complete alignment with your vision.`,
  },
];

export default function Services() {
  return (
    <>
      <SEOHead
        title="Interior Design Services in Gurugram | Cargo Interiors"
        description="Complete interior design services in Gurugram — restaurant, café, home, office & showroom interiors. End-to-end design and execution by Cargo Interiors."
        canonical="https://cargo-interiors-demo.lovable.app/services"
      />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Our Services</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Complete Interior Design Services in <span className="text-gradient-gold">Gurugram</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to completion — premium interior design and execution for restaurants, cafés, homes, offices, and showrooms. Your trusted interior designer in Gurugram.
          </p>
        </div>
      </section>

      {/* Service Listings */}
      {services.map((service, i) => (
        <Section key={service.title} className="py-24 md:py-32 border-b border-border">
          <div className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center`}>
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <img src={service.image} alt={service.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">{service.title}</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-4">
                <CTAButton className="text-xs px-6 py-3">Get a Quote</CTAButton>
                {service.slug && (
                  <Link to={service.slug} className="inline-block border border-primary text-primary px-6 py-3 font-body text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors">
                    Learn More →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Need a Custom Interior <span className="text-gradient-gold">Solution?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            Every project is unique. Contact us for a free consultation and let's discuss your specific requirements.
          </p>
          <CTAButton>Book a Free Consultation</CTAButton>
        </div>
      </section>
    </>
  );
}
