import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";

export default function PortfolioHome() {
  return (
    <>
      <SEOHead
        title="Home Interior Designer in Gurugram – Portfolio | Cargo Interiors"
        description="See our home interior design portfolio in Gurugram — modular kitchens, living rooms, bedrooms & more. Comfort-first designs by Cargo Interiors."
      />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Home Interiors</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Home Interior Designer in Gurugram – <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-3xl leading-relaxed mb-4">
            Your home should reflect your lifestyle. As experienced home interior designers in Gurugram,
            we create spaces that balance comfort, aesthetics, and modern functionality — from compact
            2BHK flats to sprawling villas. Every project here showcases our commitment to personalised
            design and flawless execution.
          </p>

          <div className="mt-12 flex justify-center">
            <iframe
              src="https://gamma.app/embed/yaxehnpq4u0zrwu"
              style={{ width: "700px", maxWidth: "100%", height: "450px" }}
              allow="fullscreen"
              title="Turning Houses Into Refined Living Spaces"
            />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {["Modular Kitchen Design", "Living Room Makeover", "Master Bedroom Design", "Bathroom & Wardrobe Solutions"].map((item) => (
              <div key={item} className="border border-border rounded-xl p-6">
                <h2 className="font-display font-bold mb-2">{item}</h2>
                <p className="text-muted-foreground text-sm font-body">
                  Premium materials, smart storage, and elegant finishes tailored to your Gurugram home.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section className="py-16 px-6 text-center bg-muted/30">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Get Free Home Interior Consultation
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
          Tell us about your home and budget — we'll create a personalised design plan for free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton>WhatsApp Now</CTAButton>
          <a href="tel:+919050656162" className="btn-glow-outline">Call Now</a>
        </div>
      </Section>

      {/* Internal links */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm font-body text-muted-foreground">
          <Link to="/our-portfolio" className="text-primary hover:underline">← Back to Portfolio</Link>
          {" · "}
          <Link to="/home-interior" className="text-primary hover:underline">Home Interior Design Services</Link>
          {" · "}
          <Link to="/home-interior-designer-gurgaon" className="text-primary hover:underline">Home Interior Designer Gurgaon</Link>
        </div>
      </section>
    </>
  );
}
