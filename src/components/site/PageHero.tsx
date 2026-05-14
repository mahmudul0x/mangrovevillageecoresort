import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-[65vh] min-h-[420px] md:min-h-[480px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-12 md:pb-20 text-beige">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.35em] text-sunset mb-4"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl max-w-3xl text-balance leading-[1.05]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-xl text-base md:text-lg text-beige/80"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
