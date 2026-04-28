import { motion } from "framer-motion";
import type { Skill } from "../types";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.article
      className="group rounded-lg border border-white/10 bg-panel/72 p-5 transition hover:border-cyan/35 hover:bg-panel"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-cyan/20 bg-cyan/10 text-cyan">
        <Icon size={21} />
      </div>
      <h3 className="text-xl font-semibold text-mist">{skill.title}</h3>
      <p className="mt-3 text-sm leading-6 text-mist/64">{skill.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {skill.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-white/10 bg-night/50 px-2.5 py-1 text-xs text-mist/70"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
