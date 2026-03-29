import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"beam" | "expand" | "done">("beam");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("expand"), 1600);
    const t2 = setTimeout(() => setPhase("done"), 3200);
    const t3 = setTimeout(onComplete, 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" ? null : null}
      <motion.div
        key="intro"
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ background: "#000" }}
        animate={phase === "done" ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Beam */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[2px]"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.9), rgba(212,175,55,0.4), transparent)",
            boxShadow: "0 0 20px 6px rgba(212,175,55,0.3), 0 0 60px 12px rgba(212,175,55,0.15)",
          }}
          initial={{ top: "-10%", height: "0%" }}
          animate={
            phase === "beam"
              ? { top: "0%", height: "100%", transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }
              : { opacity: 0, transition: { duration: 0.4 } }
          }
        />

        {/* Horizontal expand glow */}
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            background: "radial-gradient(ellipse 0% 100% at 50% 50%, rgba(212,175,55,0.25) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          animate={
            phase === "expand"
              ? { opacity: [0, 1, 0.6], background: [
                  "radial-gradient(ellipse 2% 120% at 50% 50%, rgba(212,175,55,0.3) 0%, transparent 70%)",
                  "radial-gradient(ellipse 80% 120% at 50% 50%, rgba(212,175,55,0.2) 0%, transparent 70%)",
                  "radial-gradient(ellipse 160% 120% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)",
                ] }
              : {}
          }
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        {/* Thin center flash line */}
        {phase === "expand" && (
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width: "1px",
              background: "rgba(212,175,55,0.5)",
              filter: "blur(1px)",
            }}
            initial={{ opacity: 1, scaleX: 1 }}
            animate={{ opacity: 0, scaleX: 300 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
