import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, Cat, MapPinned } from "lucide-react";
import { siteContent } from "../data/siteContent";

export function Hero() {
  const { assets, hero } = siteContent;

  return (
    <section id="top" className="px-5 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/8 px-3 py-1.5 text-sm text-cyan">
            <MapPinned size={15} />
            {hero.eyebrow}
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-mist sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-2xl font-medium text-moss sm:text-3xl">
            {hero.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist/72">
            {hero.description}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-mist/58">
            {hero.secondaryDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-mist px-5 py-3 text-sm font-semibold text-night transition hover:bg-cyan"
            >
              {hero.primaryCta}
              <ArrowRight size={17} />
            </a>
            <a
              href={assets.resumePdf}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-mist transition hover:border-moss/60 hover:text-moss"
            >
              {hero.secondaryCta}
              <ArrowDownToLine size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.16, duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute -inset-6 rounded-full bg-cyan/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/12 bg-panel/82 p-5 shadow-glow">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-mist/45">{hero.visualTitle}</p>
                <p className="mt-1 text-sm text-mist/76">{hero.visualMeta}</p>
              </div>
              <Cat className="text-moss" size={24} />
            </div>
            <pre className="mt-6 overflow-hidden rounded-md border border-white/8 bg-night/70 p-5 text-[12px] leading-5 text-cyan/80 sm:text-sm">
{` /\_/\\\\
( o.o )  city watcher
 > ^ <   ${hero.mascotLabel}
         ${hero.mascotLines.join(" / ")}`}
            </pre>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-mist/72"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-12 gap-1">
              {Array.from({ length: 60 }).map((_, index) => (
                <span
                  key={index}
                  className="h-2 rounded-sm bg-cyan/20"
                  style={{ opacity: 0.2 + ((index * 17) % 10) / 13 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
