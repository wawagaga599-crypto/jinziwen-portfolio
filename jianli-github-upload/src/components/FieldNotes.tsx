import { NotebookPen } from "lucide-react";
import { notes } from "../data/siteContent";

export function FieldNotes() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {notes.map((note) => (
        <a
          key={note.title}
          href="#field-notes"
          className="group rounded-lg border border-white/10 bg-panel/70 p-5 transition hover:-translate-y-1 hover:border-cyan/35 hover:bg-panel"
          onClick={(event) => event.preventDefault()}
        >
          <NotebookPen size={20} className="text-cyan" />
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-mist/45">{note.meta}</p>
          <h3 className="mt-3 text-lg font-semibold leading-7 text-mist group-hover:text-cyan">
            {note.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-mist/60">{note.excerpt}</p>
          <span className="mt-5 inline-flex rounded-md border border-white/10 px-3 py-1.5 text-xs text-mist/58">
            待更新
          </span>
        </a>
      ))}
    </div>
  );
}
