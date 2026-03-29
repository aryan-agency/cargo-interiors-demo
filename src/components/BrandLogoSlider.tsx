import havas from "@/assets/brands/havas.png";
import cybercity from "@/assets/brands/cybercity.png";
import cyberhub from "@/assets/brands/cyberhub.png";
import lg from "@/assets/brands/lg.png";
import samsung from "@/assets/brands/samsung.png";
import sagarratna from "@/assets/brands/sagarratna.png";
import sobhacity from "@/assets/brands/sobhacity.png";
import eldeco from "@/assets/brands/eldeco.png";

const BRANDS = [
  { src: havas, alt: "Havas Media Network" },
  { src: cybercity, alt: "Cyber City" },
  { src: cyberhub, alt: "Cyber Hub" },
  { src: lg, alt: "LG" },
  { src: samsung, alt: "Samsung" },
  { src: sagarratna, alt: "Sagar Ratna" },
  { src: sobhacity, alt: "Sobha City" },
  { src: eldeco, alt: "Eldeco" },
];

const LOOPED = [...BRANDS, ...BRANDS];

export default function BrandLogoSlider() {
  return (
    <section className="py-12 border-y border-border overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wide text-foreground mb-2">
          Our Clients
        </h2>
        <p className="text-muted-foreground font-body text-xs uppercase tracking-[0.3em]">
          Trusted By Brands
        </p>
      </div>
      <div className="relative group">
        <div className="flex animate-scroll-logos gap-20 w-max group-hover:[animation-play-state:paused]">
          {LOOPED.map((brand, i) => (
            <div
              key={`${brand.alt}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-14 px-4"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                loading="eager"
                decoding="sync"
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
