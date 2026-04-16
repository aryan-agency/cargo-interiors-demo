import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";

export default function CostCalculator() {
  const [budget, setBudget] = useState("");
  const [area, setArea] = useState("");
  const [unit, setUnit] = useState<"sqft" | "sqm">("sqft");

  const budgetNum = parseFloat(budget.replace(/,/g, ""));
  const areaNum = parseFloat(area.replace(/,/g, ""));
  const areaInSqFt = unit === "sqm" ? areaNum * 10.764 : areaNum;
  const costPerSqFt = budgetNum > 0 && areaInSqFt > 0 ? budgetNum / areaInSqFt : null;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Interior Design Cost Per Sq Ft Calculator – Gurugram",
    url: "https://cargointerior.in/interior-design-cost-calculator-gurugram",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description:
      "Free calculator to estimate interior design and construction cost per sq ft in Gurugram. Plan your budget with Cargo Interior.",
    provider: {
      "@type": "LocalBusiness",
      name: "Cargo Interior",
      telephone: "+919050656162",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <SEOHead
        title="Interior Design Cost Per Sq Ft Calculator Gurugram | Cargo Interior"
        description="Use our free calculator to estimate interior design, construction, and renovation cost per sq ft in Gurugram. Plan your budget easily with Cargo Interior."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-[hsl(var(--gold))] text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Free Budget Tool
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Interior Design Cost Per Sq Ft Calculator in Gurugram
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Planning a home construction, renovation, or interior design project in Gurugram? Use this simple calculator to
              understand your estimated cost per square foot based on your total budget and area. Whether you're building a new
              house or redesigning an office, knowing your cost per sq ft helps you plan better, compare options, and make
              informed decisions — before you even speak to a contractor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <div className="rounded-2xl border border-[hsl(var(--gold)/0.2)] bg-card p-6 md:p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--gold)/0.1)] flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-[hsl(var(--gold))]" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  Calculate Your Cost Per Sq Ft
                </h2>
              </div>

              {/* Budget */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Total Budget (₹)
                </label>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="e.g. 5000000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value.replace(/[^0-9,]/g, ""))}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Area */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Area
                </label>
                <div className="flex gap-3">
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 2000"
                    value={area}
                    onChange={(e) => setArea(e.target.value.replace(/[^0-9,.]/g, ""))}
                    className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <div className="flex rounded-md border border-border overflow-hidden shrink-0">
                    <button
                      onClick={() => setUnit("sqft")}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        unit === "sqft"
                          ? "bg-[hsl(var(--gold))] text-background"
                          : "bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Sq Ft
                    </button>
                    <button
                      onClick={() => setUnit("sqm")}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        unit === "sqm"
                          ? "bg-[hsl(var(--gold))] text-background"
                          : "bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Sq M
                    </button>
                  </div>
                </div>
              </div>

              {/* Result */}
              {costPerSqFt !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl bg-[hsl(var(--gold)/0.06)] border border-[hsl(var(--gold)/0.15)] p-6 text-center mb-6"
                >
                  <p className="text-sm text-muted-foreground mb-1">Your estimated cost per sq ft</p>
                  <p className="text-3xl md:text-4xl font-bold text-[hsl(var(--gold))]">
                    ₹{Math.round(costPerSqFt).toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">
                    This is a rough estimate to help you plan your project better.
                  </p>
                </motion.div>
              )}

              {/* Soft CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919050656162?text=Hi%2C%20I%20used%20the%20cost%20calculator%20and%20need%20expert%20guidance."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Cargo Interior on WhatsApp"
                  className="flex-1"
                >
                  <Button className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-background font-semibold gap-2">
                    <MessageCircle className="w-4 h-4" /> Talk to an Expert
                  </Button>
                </a>
                <a href="tel:+919050656162" aria-label="Call Cargo Interior" className="flex-1">
                  <Button variant="outline" className="w-full border-[hsl(var(--gold)/0.3)] text-foreground hover:bg-[hsl(var(--gold)/0.1)] gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-20 bg-background border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Explore Our Services
            </h2>
            <p className="text-muted-foreground mb-10">
              Now that you have a cost estimate, take the next step with Cargo Interior.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "House Construction Services", to: "/house-construction-in-gurugram" },
                { label: "Interior Design Services", to: "/home-interior" },
                { label: "Construction Cost Guide", to: "/construction-cost-in-gurugram" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card px-5 py-4 text-sm font-medium text-foreground transition-all hover:border-[hsl(var(--gold)/0.4)] hover:bg-[hsl(var(--gold)/0.05)]"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(var(--gold))] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
