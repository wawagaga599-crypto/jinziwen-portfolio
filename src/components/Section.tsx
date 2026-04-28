import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  copy?: string;
}>;

export function Section({ id, eyebrow, title, copy, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-cyan">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-mist sm:text-4xl">{title}</h2>
          {copy ? <p className="mt-4 text-base leading-7 text-mist/68">{copy}</p> : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}
