import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import office1 from "@/assets/tech/office-1.png";
import office2 from "@/assets/tech/office-2.png";
import office3 from "@/assets/tech/office-3.png";
import office4 from "@/assets/tech/office-4.png";
import office5 from "@/assets/tech/office-5.png";

const images = [office1, office2, office3, office4, office5];

export default function TechVisualization() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Text */}
      <div>
        <span className="text-primary font-body text-xs uppercase tracking-[0.3em] mb-4 block">
          Our Process
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Where Technology Meets{" "}
          <span className="text-gradient-gold">Interior Design</span>
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-6">
          Every project begins with a high-fidelity 3D visualization — so you
          experience your space before a single nail is driven.
        </p>
        <ul className="space-y-4">
          {[
            "Review & approve photo-realistic 3D renders",
            "No surprises — clear expectations from day one",
            "Execution mirrors the approved design with precision",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-secondary-foreground font-body text-sm"
            >
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Slider */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg shadow-black/30">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={images[current]}
            alt="3D visualization preview"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            width={1280}
            height={960}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
