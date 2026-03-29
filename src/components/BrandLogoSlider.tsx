import { useEffect, useState } from "react";
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

const BRAND_URLS = BRANDS.map((brand) => brand.src);
const LOOPED_BRANDS = [...BRANDS, ...BRANDS];

let logosReady = false;
let logosPreloadPromise: Promise<void> | null = null;

function injectPreloadLinks() {
  if (typeof document === "undefined") return;

  BRAND_URLS.forEach((href) => {
    const existingLink = document.head.querySelector(
      `link[rel="preload"][as="image"][href="${href}"]`
    );

    if (existingLink) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    document.head.appendChild(link);
  });
}

function preloadAllLogos() {
  if (logosReady) return Promise.resolve();
  if (logosPreloadPromise) return logosPreloadPromise;

  logosPreloadPromise = new Promise<void>((resolve, reject) => {
    let loadedCount = 0;

    const markLoaded = () => {
      loadedCount += 1;
      if (loadedCount === BRAND_URLS.length) {
        logosReady = true;
        resolve();
      }
    };

    BRAND_URLS.forEach((src) => {
      const img = new Image();
      let settled = false;

      const cleanup = () => {
        img.onload = null;
        img.onerror = null;
      };

      const handleLoad = () => {
        if (settled) return;
        settled = true;
        cleanup();
        markLoaded();
      };

      const handleError = () => {
        if (settled) return;
        settled = true;
        cleanup();
        logosPreloadPromise = null;
        reject(new Error(`Failed to preload logo: ${src}`));
      };

      img.onload = handleLoad;
      img.onerror = handleError;
      img.decoding = "async";
      img.src = src;

      if (img.complete) {
        handleLoad();
      }
    });
  });

  return logosPreloadPromise;
}

export default function BrandLogoSlider() {
  const [isReady, setIsReady] = useState(logosReady);

  useEffect(() => {
    let isMounted = true;

    injectPreloadLinks();

    if (logosReady) {
      setIsReady(true);
      return () => {
        isMounted = false;
      };
    }

    preloadAllLogos()
      .then(() => {
        if (isMounted) {
          setIsReady(true);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsReady(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

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

      {isReady ? (
        <div className="relative group">
          <div className="flex animate-scroll-logos gap-20 w-max group-hover:[animation-play-state:paused]">
            {LOOPED_BRANDS.map((brand, i) => (
              <div
                key={`${brand.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-14 px-4"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-auto object-contain brightness-0 invert opacity-60 hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-6" aria-hidden="true">
          <div className="h-14 w-full rounded-md bg-muted/30 animate-pulse" />
        </div>
      )}
    </section>
  );
}
