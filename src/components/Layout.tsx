import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone } from "lucide-react";

const WA_LINK = "https://wa.me/919050656162?text=Hi%2C%20Cargo%20Interiors!%20I%20wanted%20to%20discuss%20about%20some%20interior%20designing%20project%2C%20Please%20reply.%20Thanks!";

export { WA_LINK };

export function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function CTAButton({ children, className = "", href }: { children: React.ReactNode; className?: string; href?: string }) {
  return (
    <a
      href={href || WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-glow ${className}`}
    >
      {children}
    </a>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-primary font-body text-xs uppercase tracking-[0.3em] mb-4 block">
      {children}
    </span>
  );
}

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/interior-designer-gurgaon", label: "Interior Designer" },
  { to: "/office-interior-designer-gurgaon", label: "Office Designer" },
  { to: "/showroom-interior-designer-gurgaon", label: "Showroom Designer" },
  { to: "/home-interior-designer-gurgaon", label: "Home Designer" },
  { to: "/our-portfolio", label: "Portfolio" },
  { to: "/about-us", label: "About" },
  { to: "/blog", label: "Blog" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold tracking-wide text-foreground">
            CARGO <span className="text-primary">INTERIORS</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-xs uppercase tracking-[0.15em] transition-colors hover:text-primary ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block btn-glow-outline !px-6 !py-2 !text-xs"
          >
            Book a Consultation
          </a>
        </div>
      </nav>

      {children}

      {/* FOOTER */}
      <footer className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="font-display text-lg font-bold text-foreground">
                CARGO <span className="text-primary">INTERIORS</span>
              </Link>
              <p className="text-muted-foreground text-sm font-body mt-4 leading-relaxed">
                Premium interior designer in Gurugram specializing in showrooms, offices, restaurants, and residential spaces. Delivering design excellence across India since 2015.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-sm">Services</h4>
              <div className="space-y-2 text-muted-foreground text-sm font-body">
                <Link to="/office-interior-design-gurgaon" className="block hover:text-primary transition-colors">Office Interior Design Gurgaon</Link>
                <Link to="/showroom-interior-design-gurgaon" className="block hover:text-primary transition-colors">Showroom Interior Design Gurgaon</Link>
                <Link to="/commercial-interior-design-gurgaon" className="block hover:text-primary transition-colors">Commercial Interior Design Gurgaon</Link>
                <Link to="/home-interior" className="block hover:text-primary transition-colors">Home Interior Design</Link>
                <Link to="/restaurant-interior" className="block hover:text-primary transition-colors">Restaurant Interior Design</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-sm">Company</h4>
              <div className="space-y-2 text-muted-foreground text-sm font-body">
                <Link to="/about-us" className="block hover:text-primary transition-colors">About Us</Link>
                <Link to="/blog" className="block hover:text-primary transition-colors">Blog</Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">Book Consultation</a>
              </div>
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
          </div>
          {/* Our Location */}
          <div className="mb-12">
            <h4 className="font-display font-bold mb-2 text-sm text-center">Our Location</h4>
            <p className="text-muted-foreground text-xs font-body text-center mb-6">
              Serving clients across Gurgaon (Gurugram) with interior design and construction services.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.16302933138!2d77.04310740000001!3d28.384143500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2316fcc27161%3A0xd50e654a66a3e1fb!2sCargo%20interior!5e0!3m2!1sen!2sin!4v1776475556014!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cargo Interior Location – Badshahpur, Gurugram"
                className="block w-full"
              />
            </div>
          </div>

          {/* Connect With Us */}
          <div className="mb-12">
            <h4 className="font-display font-bold mb-6 text-sm text-center">Connect With Us</h4>
            <div className="flex items-center justify-center gap-5 flex-wrap">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1BUtqvsT13/",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/cargo_interiors?igsh=MWgyOXN0bWk1azYzdQ==",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/cargo-interior-63ba13244",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ),
                },
                {
                  label: "Justdial",
                  href: "https://jsdl.in/DT-23GZ9VEUWSH",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  ),
                },
                {
                  label: "Smergers",
                  href: "https://www.smergers.com/franchise/cargo-interior/o99z6/",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Cargo Interior ${item.label} Profile`}
                  className="flex flex-col items-center gap-1.5 group"
                >
                  <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_0_12px_hsla(40,50%,55%,0.25)]">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-body text-muted-foreground group-hover:text-primary transition-colors">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="section-divider mb-8" />
          <p className="text-muted-foreground text-sm font-body leading-relaxed mb-8">
            Cargo Interiors is a leading office and showroom interior design company in Gurgaon (Gurugram), specializing in high-performance commercial spaces. We design offices and retail showrooms that enhance business growth through smart layouts, premium aesthetics, and precise execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs font-body">© 2025 Cargo Interiors. All rights reserved.</p>
            <p className="text-muted-foreground text-xs font-body">ISO Certified · MSME Registered · Make in India</p>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        {/* Call Button */}
        <a
          href="tel:+919050656162"
          className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-primary-foreground transition-all duration-300 hover:scale-105"
          style={{
            boxShadow: '0 4px 15px hsla(40,50%,55%,0.35), 0 0 20px hsla(40,50%,55%,0.15)',
          }}
          aria-label="Call Now"
        >
          <Phone size={24} strokeWidth={2.2} />
        </a>
        {/* WhatsApp Button */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] transition-all duration-300 hover:scale-105 shadow-lg"
          aria-label="Chat on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-foreground">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212L4 20l1.212-3.757A8 8 0 1112 20z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
