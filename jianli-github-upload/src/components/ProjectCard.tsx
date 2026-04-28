import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.article
      className="rounded-lg border border-white/10 bg-panel/76 p-5 transition hover:border-moss/35 hover:bg-panel/95 sm:p-6"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -3 }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{project.type}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-snug text-mist">{project.title}</h3>
        </div>
        <button
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 text-mist/70 transition hover:border-cyan/40 hover:text-cyan"
          onClick={() => setExpanded((value) => !value)}
          aria-label={expanded ? "Collapse project details" : "Expand project details"}
          type="button"
        >
          <ChevronDown
            size={18}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <p className="mt-4 text-sm leading-7 text-mist/66">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-mist/66">
            {tag}
          </span>
        ))}
      </div>
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Detail label="Problem" value={project.problem} />
            <Detail label="Method" value={project.method} />
            <Detail label="Result" value={project.result} />
            <Detail label="My Role" value={project.role} />
            {project.impact ? (
              <div className="sm:col-span-2">
                <Detail label="Impact" value={project.impact} />
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/8 bg-night/45 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">{label}</p>
      <p className="mt-2 text-sm leading-6 text-mist/68">{value}</p>
    </div>
  );
}
