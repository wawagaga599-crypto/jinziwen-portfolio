import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteContent } from "../data/siteContent";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-sm font-semibold tracking-wide text-mist">
          {siteContent.identity.logo}
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {siteContent.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-mist/70 transition hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <span className="rounded-full border border-moss/35 bg-moss/10 px-3 py-1 text-xs font-medium text-moss">
            {siteContent.identity.status}
          </span>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-mist lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          type="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {siteContent.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-mist/78 hover:bg-white/5 hover:text-cyan"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <span className="mt-2 w-max rounded-full border border-moss/35 bg-moss/10 px-3 py-1 text-xs font-medium text-moss">
              {siteContent.identity.status}
            </span>
          </div>
        </div>
      ) : null}
    </header>
  );
}
