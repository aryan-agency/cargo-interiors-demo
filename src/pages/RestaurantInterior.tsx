import { Link } from "react-router-dom";
import commercialImage from "@/assets/commercial-interior.jpg";
import project3 from "@/assets/project-3.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";

export default function RestaurantInterior() {
  return (
    <>
      <SEOHead
        title="Restaurant Interior Designer in Gurugram | Cargo Interiors"
        description="Expert restaurant & café interior design in Gurugram. Create stunning dining spaces that boost footfall. 10+ years experience, 100+ projects. Cargo Interiors."
        canonical="https://cargo-interiors-demo.lovable.app/restaurant-interior"
      />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Restaurant & Café Design</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Restaurant Interior Designer in <span className="text-gradient-gold">Gurugram</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Create dining experiences that keep customers coming back. Expert restaurant and café interior design by Gurugram's most trusted interior design firm.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Designing Restaurants That <span className="text-gradient-gold">Perform</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                A great restaurant is more than great food — it's about creating an immersive dining experience that engages all senses. As an experienced restaurant interior designer in Gurugram, Cargo Interiors understands the unique design challenges of the food and hospitality industry. We create spaces that not only look stunning but are engineered for operational efficiency, customer comfort, and maximum revenue per square foot.
              </p>
              <p>
                Our restaurant interior design process begins with understanding your concept, cuisine, target demographic, and brand identity. Whether you're opening a fine-dining establishment in Sector 29, a quick-service restaurant on MG Road, or a themed café in Cyber Hub, our team creates designs that authentically represent your brand while maximizing customer throughput and satisfaction.
              </p>
              <p>
                We pay meticulous attention to every design element: seating layouts that balance intimacy with capacity, lighting schemes that create the right mood at different times of day, acoustic treatments that allow comfortable conversation, kitchen flow optimization that speeds up service, and material selections that withstand the demands of a busy restaurant while maintaining premium aesthetics.
              </p>
              <p>
                Our 3D visualization technology allows you to see your restaurant come to life before any construction begins. You can review seating arrangements, lighting effects, color palettes, and material finishes in photo-realistic detail — ensuring the final result matches your vision perfectly. This approach eliminates costly mid-project changes and significantly reduces project timelines.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <img src={commercialImage} alt="Restaurant interior design project in Gurugram by Cargo Interiors" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
            <img src={project3} alt="Fine dining restaurant interior designed by Cargo Interiors in Gurugram" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Benefits */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Benefits of Professional Restaurant <span className="text-gradient-gold">Design</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Increased Footfall", desc: "Instagram-worthy interiors that attract new customers through social sharing and word-of-mouth. Your space becomes a marketing tool." },
              { title: "Higher Average Spending", desc: "Strategic design elements — from premium ambiance to comfortable seating — encourage customers to stay longer and order more." },
              { title: "Operational Efficiency", desc: "Optimized kitchen-to-table flow, smart storage solutions, and layouts that reduce staff movement — improving service speed." },
              { title: "Brand Differentiation", desc: "A unique interior sets you apart from competitors. We create spaces that are unmistakably yours — reinforcing brand recall." },
              { title: "Regulatory Compliance", desc: "Our designs account for fire safety, accessibility, ventilation, and local Gurugram municipal requirements from day one." },
              { title: "Faster ROI", desc: "Professional design reduces costly mistakes, speeds up project delivery, and creates spaces that generate revenue from day one." },
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
              How We Design Your <span className="text-gradient-gold">Restaurant</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: "01", title: "Consultation & Concept", desc: "We discuss your restaurant concept, cuisine, brand vision, target audience, and budget to establish the design direction." },
              { step: "02", title: "Space Planning & 3D Design", desc: "Our team creates detailed floor plans and photo-realistic 3D visualizations so you can see exactly how your restaurant will look." },
              { step: "03", title: "Material Selection", desc: "We source premium materials that match the design vision while meeting durability and hygiene requirements for food establishments." },
              { step: "04", title: "Execution & Handover", desc: "Our in-house team handles all construction, installation, and finishing work. We deliver a turnkey restaurant ready for opening day." },
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
            Ready to Design Your <span className="text-gradient-gold">Restaurant?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            From concept to grand opening — let Gurugram's most experienced restaurant interior designer bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton>Book a Free Consultation</CTAButton>
            <Link to="/services" className="btn-glow-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
