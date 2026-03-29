import { useState, useEffect } from "react";
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

function preloadImages(srcs: string[]): Promise<void> {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    )
  ).then(() => {});
}

export default function BrandLogoSlider() {
  const [loaded, setLoaded] = useState(false);
  const doubled = [...BRANDS, ...BRANDS];

  useEffect(() => {
    preloadImages(BRANDS.map((b) => b.src)).then(() => setLoaded(true));
  }, []);

  return (
    <div className="py-12 border-y border-border overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wide text-foreground mb-2">
          Our Clients
        </h2>
        <span className="text-muted-foreground font-body text-xs uppercase tracking-[0.3em]">
          Trusted By Brands
        </span>
      </div>
      <div
        className="relative group transition-opacity duration-500"
        style={{ opacity: loaded ? 1 : 0.15 }}
      >
        <div
          className={`flex gap-20 w-max group-hover:[animation-play-state:paused] ${loaded ? "animate-scroll-logos" : ""}`}
        >
          {doubled.map((brand, i) => (
            <div
              key={`${brand.alt}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-14 px-4"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-full w-auto object-contain brightness-0 invert opacity-60 hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
