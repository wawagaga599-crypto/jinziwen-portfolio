import { motion } from "framer-motion";
import { Activity, FlaskConical } from "lucide-react";
import { useState } from "react";
import { labPanels } from "../data/siteContent";

export function DataLab() {
  const [activeId, setActiveId] = useState(labPanels[0].id);
  const active = labPanels.find((panel) => panel.id === activeId) ?? labPanels[0];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="grid gap-3">
        {labPanels.map((panel) => (
          <button
            key={panel.id}
            className={`rounded-lg border p-4 text-left transition ${
              panel.id === activeId
                ? "border-cyan/45 bg-cyan/10"
                : "border-white/10 bg-panel/60 hover:border-white/20"
            }`}
            onClick={() => setActiveId(panel.id)}
            type="button"
          >
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${panel.color}`} />
              <span className="font-semibold text-mist">{panel.title}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-mist/58">{panel.question}</p>
          </button>
        ))}
      </div>
      <motion.div
        key={active.id}
        className="overflow-hidden rounded-lg border border-white/10 bg-panel/75 p-5 shadow-glow"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.32 }}
      >
        <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-cyan">
              <FlaskConical size={14} />
              experimental workspace
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-mist">{active.title}</h3>
          </div>
          <div className="rounded-md border border-white/10 bg-night/55 px-3 py-2 text-sm text-mist/66">
            {active.signal}
          </div>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-md border border-white/8 bg-night/50 p-4">
            <div className="mb-4 flex items-center justify-between text-xs text-mist/45">
              <span>模拟空间网格</span>
              <span>置信度 0.{active.id.length}8</span>
            </div>
            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 100 }).map((_, index) => {
                const intensity = 18 + ((index * 13 + active.id.length * 9) % 72);
                return (
                  <span
                    key={index}
                    className="aspect-square rounded-[2px] bg-cyan"
                    style={{ opacity: intensity / 100 }}
                  />
                );
              })}
            </div>
          </div>
          <div className="rounded-md border border-white/8 bg-night/50 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-mist">
              <Activity size={16} className="text-moss" />
              信号变化
            </div>
            <div className="mt-5 flex h-40 items-end gap-2">
              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  key={index}
                  className="w-full rounded-t-sm bg-moss/70"
                  style={{ height: `${28 + ((index * 23 + active.id.length * 8) % 68)}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-5 text-base leading-7 text-mist/70">
          我不只罗列工具，更希望用工具把问题问得更准确。
        </p>
      </motion.div>
    </div>
  );
}
