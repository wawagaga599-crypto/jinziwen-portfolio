import { ArrowDownToLine, FileText } from "lucide-react";
import { siteContent } from "../data/siteContent";

export function ResumeBlock() {
  const { assets, resume } = siteContent;

  return (
    <div className="rounded-lg border border-white/10 bg-panel/78 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan/10 text-cyan">
            <FileText size={23} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-mist">{resume.title}</h3>
            <p className="mt-1 text-sm text-mist/55">{resume.subtitle}</p>
          </div>
        </div>
        {/* Place the actual PDF at public/resume.pdf so this link resolves to /resume.pdf. */}
        <a
          href={assets.resumePdf}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 text-sm font-semibold text-night transition hover:bg-cyan"
        >
          {resume.button}
          <ArrowDownToLine size={17} />
        </a>
      </div>
      <dl className="mt-7 grid gap-3">
        {resume.rows.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1 rounded-md border border-white/8 bg-night/45 p-4 sm:grid-cols-[140px_1fr]"
          >
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{label}</dt>
            <dd className="text-sm leading-6 text-mist/74">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
