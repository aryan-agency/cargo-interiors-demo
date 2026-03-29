import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const WA_LINK = "https://wa.me/919050656162?text=Hi%2C%20Cargo%20Interiors!%20I%20wanted%20to%20discuss%20about%20some%20interior%20designing%20project%2C%20Please%20reply.%20Thanks!";

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function CTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-primary text-primary-foreground px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.2em] rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] ${className}`}
      style={{
        boxShadow: "0 8px 20px rgba(0,0,0,0.25), 0 0 20px rgba(212,175,55,0.25)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3), 0 0 30px rgba(212,175,55,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25), 0 0 20px rgba(212,175,55,0.25)";
      }}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-primary font-body text-xs uppercase tracking-[0.3em] mb-4 block">
      {children}
    </span>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-xl font-bold tracking-wide text-foreground">
            CARGO <span className="text-primary">INTERIORS</span>
          </span>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block border border-primary text-primary px-6 py-2 font-body text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </nav>

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
            Premium Commercial Interiors — Gurugram
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
            style={{ color: '#F5F5F5', textShadow: '0px 2px 8px rgba(0,0,0,0.6)' }}
          >
            Showrooms that convert. Offices that inspire. Spaces engineered for business impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <CTAButton>Book a Consultation</CTAButton>
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

      {/* BRAND LOGO SLIDER */}
      <BrandLogoSlider />
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

      {/* ABOUT */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>The Brand</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
              We Don't Decorate.<br />
              <span className="text-gradient-gold">We Engineer Experiences.</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Founded in 2015 in Gurugram, Cargo Interiors is not your typical design firm. We are strategic space planners who understand that every square foot is an asset — and every design decision impacts your bottom line.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              From branded showrooms that turn walk-ins into buyers, to offices that attract top talent — we design with purpose, precision, and an obsession for premium execution. Led by Azam Saifi, our 80+ member team has delivered over 100 high-value projects across 15+ cities.
            </p>
            <CTAButton>Let's Talk</CTAButton>
          </div>
          <div className="relative">
            <img src={showroomImage} alt="Premium showroom interior" className="w-full aspect-[4/5] object-cover" loading="lazy" width={1280} height={960} />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6">
              <span className="font-display text-2xl font-bold text-primary">Since 2015</span>
              <p className="text-muted-foreground text-sm font-body mt-1">Gurugram, Haryana</p>
            </div>
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* SERVICES */}
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
            <img src={showroomImage} alt="Showroom interiors" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
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
              <img src={officeImage} alt="Office interiors" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
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

          {/* Commercial + Home */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border p-8 md:p-12">
              <img src={commercialImage} alt="Commercial spaces" className="w-full aspect-[16/9] object-cover mb-8" loading="lazy" width={1280} height={960} />
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">Commercial Spaces</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                Restaurants, clinics, studios, cafés — every commercial space is a revenue engine. We design environments where your customers stay longer, spend more, and come back.
              </p>
              <CTAButton className="text-xs px-6 py-3">Get Started</CTAButton>
            </div>
            <div className="bg-card border border-border p-8 md:p-12">
              <img src={homeImage} alt="Home interiors" className="w-full aspect-[16/9] object-cover mb-8" loading="lazy" width={1280} height={960} />
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">Home Interiors</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                For select clients who demand the same level of precision at home. Bespoke residential design with premium materials, curated aesthetics, and white-glove execution.
              </p>
              <CTAButton className="text-xs px-6 py-3">Inquire Now</CTAButton>
            </div>
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
                    alt={project.title}
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
              {
                quote: "Cargo Interiors transformed our showroom into a space that sells itself. Walk-in conversions went up 35% within the first month. They understand business, not just design.",
                name: "Rajiv Mehta",
                role: "Retail Brand Owner, Gurugram"
              },
              {
                quote: "Our new office became a recruiting tool. Candidates walk in and immediately want to work here. The Cargo team delivered on time, on budget, and beyond expectations.",
                name: "Priya Sharma",
                role: "Founder & CEO, Tech Startup"
              },
              {
                quote: "From concept to execution, their professionalism was unmatched. They handled everything — materials, contractors, timelines. We just watched our restaurant come to life.",
                name: "Khadak Singh",
                role: "Restaurant Owner, Delhi NCR"
              },
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

      {/* FOOTER */}
      <footer className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="font-display text-lg font-bold text-foreground">
                CARGO <span className="text-primary">INTERIORS</span>
              </span>
              <p className="text-muted-foreground text-sm font-body mt-4 leading-relaxed">
                Premium commercial interior design firm specializing in showrooms, offices, and high-value spaces. Based in Gurugram, delivering across India.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-sm">Contact</h4>
              <div className="space-y-2 text-muted-foreground text-sm font-body">
                <p>Badshahpur, Teekli Road</p>
                <p>Gurugram, Haryana 122101</p>
                <a href="tel:+919050656162" className="block hover:text-primary transition-colors">+91 90506 56162</a>
                <a href="mailto:cargointerior80@gmail.com" className="block hover:text-primary transition-colors">cargointerior80@gmail.com</a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-sm">Quick Links</h4>
              <div className="space-y-2 text-muted-foreground text-sm font-body">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">Book Consultation</a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">Get a Quote</a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">View Portfolio</a>
              </div>
            </div>
          </div>
          <div className="section-divider mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs font-body">© 2025 Cargo Interiors. All rights reserved.</p>
            <p className="text-muted-foreground text-xs font-body">ISO Certified · MSME Registered · Make in India</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-foreground">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212L4 20l1.212-3.757A8 8 0 1112 20z" fill="currentColor"/>
        </svg>
      </a>
    </div>
  );
}
