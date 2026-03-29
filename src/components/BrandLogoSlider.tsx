const BRANDS = [
  "Havells", "Asian Paints", "Godrej", "Tata Steel", "Saint-Gobain",
  "Philips", "Kohler", "Schneider", "JSW", "Kajaria",
];

export default function BrandLogoSlider() {
  // Duplicate for seamless loop
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <div className="py-10 border-y border-border overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-6 mb-4">
        <span className="text-muted-foreground font-body text-xs uppercase tracking-[0.3em]">
          Trusted by Leading Brands
        </span>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-logos gap-16 w-max">
          {doubled.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-10 px-6"
            >
              <span
                className="font-display text-lg font-bold tracking-wide whitespace-nowrap"
                style={{ color: "hsl(0 0% 40%)" }}
              >
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
