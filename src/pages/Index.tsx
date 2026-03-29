import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-showroom.jpg";
import showroomImage from "@/assets/showroom-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import commercialImage from "@/assets/commercial-interior.jpg";
import homeImage from "@/assets/home-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import HeroSlider from "@/components/HeroSlider";
import FactBox from "@/components/FactBox";
import BrandLogoSlider from "@/components/BrandLogoSlider";
import TechVisualization from "@/components/TechVisualization";
import IntroAnimation from "@/components/IntroAnimation";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";

export default function Index() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <>
      <SEOHead
        title="Best Interior Designer in Gurugram | Cargo Interiors"
        description="Cargo Interiors — Best interior designer in Gurugram. 10+ years, 100+ projects. Premium showroom, office, restaurant & home interior design in Gurugram."
        canonical="https://cargo-interiors-demo.lovable.app/"
      />
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <HeroSlider images={[heroImage, showroomImage, officeImage, commercialImage]} interval={3000} />
        <FactBox />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-primary font-body text-xs uppercase tracking-[0.4em] mb-6"
          >
            Best Interior Designer in Gurugram
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground"
          >
            We Design Spaces That
            <br />
            <span className="text-gradient-gold">Sell, Scale & Impress</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-body text-lg md:text-xl font-medium mb-10 max-w-[650px] mx-auto leading-relaxed"
            style={{ color: "#F5F5F5", textShadow: "0px 2px 8px rgba(0,0,0,0.6)" }}
          >
            Showrooms that convert. Offices that inspire. Your trusted interior designer in Gurugram for spaces engineered for business impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton>Book a Consultation</CTAButton>
            <a
              href="tel:+919050656162"
              className="inline-block border border-primary text-primary px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.2em] rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Call Now
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-primary/40 mx-auto mb-2" />
          <span className="text-muted-foreground text-xs tracking-widest uppercase font-body">Scroll</span>
        </motion.div>
      </section>

      {/* BRAND LOGOS */}
      <BrandLogoSlider />

      {/* STATS */}
      <Section className="py-16 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "10+", label: "Years of Excellence" },
            { num: "100+", label: "Projects Delivered" },
            { num: "80+", label: "Professionals" },
            { num: "15+", label: "Cities Served" },
          ].map((item) => (
            <div key={item.label}>
              <span className="font-display text-3xl md:text-4xl font-bold text-primary">{item.num}</span>
              <p className="text-muted-foreground text-sm mt-2 font-body">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT SUMMARY */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>The Brand</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
              We Don't Decorate.<br />
              <span className="text-gradient-gold">We Engineer Experiences.</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Founded in 2015 in Gurugram, Cargo Interiors is not your typical design firm. As a leading interior designer in Gurugram, we are strategic space planners who understand that every square foot is an asset — and every design decision impacts your bottom line.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              From branded showrooms that turn walk-ins into buyers, to offices that attract top talent — we design with purpose, precision, and an obsession for premium execution. Led by Azam Saifi, our 80+ member team has delivered over 100 high-value projects across 15+ cities.
            </p>
            <Link to="/about-us" className="inline-block border border-primary text-primary px-6 py-3 font-body text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors mr-4">
              Learn More About Us
            </Link>
            <CTAButton className="text-xs px-6 py-3">Let's Talk</CTAButton>
          </div>
          <div className="relative">
            <img src={showroomImage} alt="Premium showroom interior by Cargo Interiors, interior designer in Gurugram" className="w-full aspect-[4/5] object-cover" loading="lazy" width={1280} height={960} />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6">
              <span className="font-display text-2xl font-bold text-primary">Since 2015</span>
              <p className="text-muted-foreground text-sm font-body mt-1">Gurugram, Haryana</p>
            </div>
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* SERVICES OVERVIEW */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Spaces That Drive <span className="text-gradient-gold">Revenue</span>
            </h2>
          </div>

          {/* Showroom */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <img src={showroomImage} alt="Showroom interior design in Gurugram" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
            <div>
              <span className="text-primary text-xs uppercase tracking-[0.3em] font-body mb-2 block">Primary Focus</span>
              <h3 className="font-display text-2xl md:text-4xl font-bold mb-6">Showroom Interiors</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Your showroom is your brand's first handshake. We design retail environments rooted in customer psychology — strategic product placement, lighting that guides attention, and layouts that increase dwell time and conversions.
              </p>
              <ul className="space-y-3 mb-8">
                {["Increase walk-in to purchase ratio", "Strategic product display psychology", "Brand-aligned spatial storytelling", "Premium material selection"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-secondary-foreground font-body text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton>Discuss Your Showroom</CTAButton>
            </div>
          </div>

          {/* Office */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="md:order-2">
              <img src={officeImage} alt="Office interior design in Gurugram" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
            </div>
            <div className="md:order-1">
              <span className="text-primary text-xs uppercase tracking-[0.3em] font-body mb-2 block">Primary Focus</span>
              <h3 className="font-display text-2xl md:text-4xl font-bold mb-6">Office Interiors</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Your office is a statement. To clients, it signals credibility. To employees, it signals ambition. We design workspaces that elevate productivity, reinforce brand identity, and make your company the place people want to be.
              </p>
              <ul className="space-y-3 mb-8">
                {["Boost team productivity & morale", "Impress clients from the lobby", "Brand identity through spatial design", "Scalable layouts for growing teams"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-secondary-foreground font-body text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton>Design Your Office</CTAButton>
            </div>
          </div>

          {/* Restaurant + Home cards with links */}
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/restaurant-interior" className="bg-card border border-border p-8 md:p-12 hover:border-primary/30 transition-colors block">
              <img src={commercialImage} alt="Restaurant interior design in Gurugram" className="w-full aspect-[16/9] object-cover mb-8" loading="lazy" width={1280} height={960} />
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">Restaurant & Café Interiors</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                Restaurants, cafés, and dining spaces designed to keep customers longer and coming back. Strategic ambiance design that elevates the dining experience.
              </p>
              <span className="text-primary font-body text-xs uppercase tracking-[0.2em]">Learn More →</span>
            </Link>
            <Link to="/home-interior" className="bg-card border border-border p-8 md:p-12 hover:border-primary/30 transition-colors block">
              <img src={homeImage} alt="Home interior design in Gurugram" className="w-full aspect-[16/9] object-cover mb-8" loading="lazy" width={1280} height={960} />
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">Home Interiors</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                Bespoke residential design with premium materials, curated aesthetics, and white-glove execution for select clients who demand precision at home.
              </p>
              <span className="text-primary font-body text-xs uppercase tracking-[0.2em]">Learn More →</span>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border border-primary text-primary px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.2em] rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* WHY US */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel>The Difference</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Why The Best <span className="text-gradient-gold">Choose Us</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Design + Execution", desc: "We don't hand off drawings. We design, build, and deliver — end to end. One team. Zero gaps." },
              { title: "Rapid Delivery", desc: "Time is money. Our streamlined process and 80+ person team ensures your space is ready when you need it." },
              { title: "Premium Materials", desc: "We source materials that look exceptional and last. No shortcuts. No compromises on quality." },
              { title: "Strategic Design", desc: "Every layout decision is backed by spatial psychology, brand strategy, and business objectives." },
              { title: "Proven Track Record", desc: "100+ projects. 15+ cities. A decade of trust from business owners who don't settle for average." },
              { title: "Transparent Process", desc: "Detailed proposals, clear timelines, and honest communication. You always know where your project stands." },
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

      {/* TECH VISUALIZATION */}
      <Section className="py-24 md:py-32">
        <TechVisualization />
      </Section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* PORTFOLIO */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Transformations That <span className="text-gradient-gold">Speak</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: project1, title: "Corporate HQ Redesign", type: "Office", impact: "40% increase in employee satisfaction" },
              { img: project2, title: "Luxury Fashion Showroom", type: "Showroom", impact: "2x increase in average dwell time" },
              { img: project3, title: "Fine Dining Restaurant", type: "Commercial", impact: "Premium brand perception established" },
            ].map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="overflow-hidden mb-4">
                  <img
                    src={project.img}
                    alt={`${project.title} - interior design project in Gurugram`}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={1280}
                    height={960}
                  />
                </div>
                <span className="text-primary text-xs uppercase tracking-[0.2em] font-body">{project.type}</span>
                <h3 className="font-display text-lg font-bold mt-1 mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{project.impact}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton>View All Projects</CTAButton>
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* TESTIMONIALS */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel>Client Words</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Trusted by <span className="text-gradient-gold">Decision Makers</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Cargo Interiors transformed our showroom into a space that sells itself. Walk-in conversions went up 35% within the first month. They understand business, not just design.", name: "Rajiv Mehta", role: "Retail Brand Owner, Gurugram" },
              { quote: "Our new office became a recruiting tool. Candidates walk in and immediately want to work here. The Cargo team delivered on time, on budget, and beyond expectations.", name: "Priya Sharma", role: "Founder & CEO, Tech Startup" },
              { quote: "From concept to execution, their professionalism was unmatched. They handled everything — materials, contractors, timelines. We just watched our restaurant come to life.", name: "Khadak Singh", role: "Restaurant Owner, Delhi NCR" },
            ].map((t) => (
              <div key={t.name} className="bg-card border border-border p-8">
                <div className="text-primary text-3xl font-display mb-4">"</div>
                <p className="text-secondary-foreground font-body text-sm leading-relaxed mb-6">{t.quote}</p>
                <div>
                  <p className="font-display font-bold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs font-body">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SEO LONG-FORM CONTENT */}
      <Section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>About Cargo Interiors</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 leading-tight">
            Your Trusted Interior Designer in <span className="text-gradient-gold">Gurugram</span>
          </h2>

          <div className="prose-custom space-y-6 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
            <p>
              Cargo Interiors is a leading interior designer in Gurugram with over 10 years of experience in creating premium commercial and residential spaces. Founded in 2015 by Azam Saifi, our firm has grown from a small design studio to a full-service interior design and execution company with a team of 80+ skilled professionals. We have successfully delivered more than 100 high-value interior design projects across 15+ cities in India.
            </p>
            <p>
              As the best interior designer in Gurugram, we specialize in a wide range of interior design services including showroom interiors, corporate office design, restaurant and café interiors, retail store design, clinic interiors, and luxury home interiors. Our approach combines cutting-edge 3D visualization technology with strategic space planning to ensure every project delivers measurable results — whether that means increased customer conversions, improved employee productivity, or enhanced brand perception.
            </p>
            <p>
              What sets us apart from other interior designers in Gurugram is our end-to-end approach. We don't just create beautiful designs — we handle the complete project lifecycle from initial consultation and 3D rendering to material procurement, construction, and final handover. This integrated approach eliminates communication gaps between designers and contractors, resulting in faster delivery times, better quality control, and a final result that precisely matches the approved design.
            </p>
            <p>
              Our Gurugram-based team understands the unique requirements of businesses in the Delhi NCR region. Whether you're setting up a new showroom in Sohna Road, renovating an office in Cyber City, designing a restaurant in Sector 29, or creating your dream home in DLF Phase 5, our team brings local market knowledge combined with world-class design expertise. We are deeply familiar with local regulations, vendor networks, and material sourcing channels — enabling us to deliver projects efficiently and cost-effectively.
            </p>
            <p>
              Residential interior design is another area where Cargo Interiors excels. Our home interior design services in Gurugram cover everything from complete home renovations to modular kitchen design, bedroom interiors, living room design, and bathroom remodeling. We work closely with homeowners to understand their lifestyle, preferences, and budget before creating a personalized design plan. Every residential project features premium materials, custom furniture, and meticulous attention to detail.
            </p>
            <p>
              Our commercial interior design portfolio includes work with recognized brands such as Samsung, LG, Havas Media Network, Sagar Ratna, and developments within Cyber Hub and Sobha City. These collaborations demonstrate our ability to work with diverse brand identities, strict corporate guidelines, and complex project requirements while delivering outstanding results on schedule.
            </p>
            <p>
              If you're looking for a reliable, experienced, and results-driven interior designer in Gurugram, Cargo Interiors is your ideal partner. We invite you to schedule a complimentary design consultation where we'll discuss your vision, assess your space, and provide a detailed proposal — all at no obligation. Contact us today via WhatsApp at +91 90506 56162 or visit our office at Badshahpur, Teekli Road, Gurugram, Haryana 122101.
            </p>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-40 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Start Today</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            If Your Space Doesn't Impress,<br />
            <span className="text-gradient-gold">It Doesn't Convert.</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            Every day your space underperforms is revenue left on the table. Let's change that — with a complimentary design consultation.
          </p>
          <CTAButton>Start Your Project</CTAButton>
          <p className="text-muted-foreground text-xs font-body mt-6 tracking-wider uppercase">
            Limited availability — Accepting select projects only
          </p>
        </div>
      </section>

      {/* FAQ */}
      <Section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Frequently <span className="text-gradient-gold">Asked</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What types of projects does Cargo Interiors handle?", a: "We specialize in premium commercial interiors — showrooms, corporate offices, restaurants, retail stores, clinics, and select residential projects across India." },
              { q: "How does the design process work?", a: "It starts with a consultation to understand your goals. We then create high-fidelity 3D visualizations for your review. Once approved, our team executes the project end-to-end with precision." },
              { q: "Do you provide 3D renders before starting work?", a: "Absolutely. Every project begins with photo-realistic 3D renders so you can visualize, review, and approve the design before any construction begins — no surprises." },
              { q: "What is the typical project timeline?", a: "Timelines vary based on scope, but most commercial projects are completed within 6–12 weeks. Our 80+ member team ensures rapid, on-schedule delivery." },
              { q: "Which cities do you operate in?", a: "We are based in Gurugram, Haryana and have delivered 100+ projects across 15+ cities in India." },
              { q: "How do I get started?", a: "Simply book a free consultation via WhatsApp or phone. We'll discuss your vision, visit the site if needed, and provide a detailed proposal within days." },
            ].map((faq, i) => (
              <details key={i} className="group bg-card border border-border rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-display font-semibold text-sm md:text-base select-none">
                  {faq.q}
                  <span className="ml-4 text-primary transition-transform duration-300 group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="px-6 pb-5 text-muted-foreground font-body text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
