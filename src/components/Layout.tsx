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
  { to: "/office-interior-design-gurgaon", label: "Office Interiors Gurgaon" },
  { to: "/showroom-interior-design-gurgaon", label: "Showroom Interiors Gurgaon" },
  { to: "/commercial-interior-design-gurgaon", label: "Commercial Interiors Gurgaon" },
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
