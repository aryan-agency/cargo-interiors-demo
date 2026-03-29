import { useState, useEffect, useCallback } from "react";
import { Bot } from "lucide-react";

const FACTS = [
  "Well-designed showrooms increase customer conversion rates.",
  "Better office design improves employee productivity and retention.",
  "Premium interiors influence buying decisions instantly.",
  "Customer experience directly impacts sales performance.",
  "Strategic layouts help businesses scale faster.",
];

export default function FactBox() {
  const [factIndex, setFactIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const currentFact = FACTS[factIndex];

  const advanceFact = useCallback(() => {
    setFactIndex((prev) => (prev + 1) % FACTS.length);
    setCharIndex(0);
    setDisplayedText("");
  }, []);

  useEffect(() => {
    if (charIndex < currentFact.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentFact.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 40);
      return () => clearTimeout(timer);
    } else {
      // Pause after full sentence, then move to next
      const pause = setTimeout(advanceFact, 2000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentFact, advanceFact]);

  return (
    <div
      className="absolute top-24 right-4 sm:right-8 z-20 max-w-[280px] sm:max-w-xs p-5 rounded-xl border"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Bot className="w-4 h-4 text-primary" />
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-body font-medium">
          Did You Know?
        </span>
      </div>
      <p
        className="font-body text-sm font-medium leading-relaxed min-h-[3.5rem]"
        style={{ color: "#EAEAEA" }}
      >
        {displayedText}
        <span className="inline-block w-px h-4 bg-primary ml-0.5 animate-pulse align-middle" />
      </p>
    </div>
  );
}
