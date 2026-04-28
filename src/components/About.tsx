import { siteContent } from "../data/siteContent";

export function About() {
  const { about } = siteContent;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-lg border border-white/10 bg-panel/72 p-6">
        <p className="text-xl leading-9 text-mist">
          {about.main}
        </p>
        <p className="mt-5 text-base leading-7 text-mist/66">
          {about.support}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {about.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-md border border-moss/25 bg-moss/10 px-4 py-2 text-sm font-medium text-moss"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-night/50 p-6">
        <h3 className="text-lg font-semibold text-mist">{about.timelineTitle}</h3>
        <div className="mt-6 grid gap-5">
          {about.timeline.map((item) => (
            <div key={item} className="relative border-l border-cyan/30 pl-5">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan" />
              <p className="text-sm leading-6 text-mist/70">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
