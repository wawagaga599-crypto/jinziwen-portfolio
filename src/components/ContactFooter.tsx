import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { siteContent } from "../data/siteContent";

const contactIcons = {
  mail: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
};

export function ContactFooter() {
  const { contact, identity } = siteContent;

  return (
    <footer id="contact" className="border-t border-white/10 px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">
              {contact.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-mist">
              {contact.title}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contact.items.map((item) => {
              const Icon = contactIcons[item.type as keyof typeof contactIcons];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg border border-white/10 bg-panel/65 p-4 transition hover:border-moss/35"
                >
                  <Icon size={18} className="text-moss" />
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-mist/45">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-mist/76">{item.value}</p>
                </a>
              );
            })}
          </div>
        </div>
        <p className="mt-10 text-sm text-mist/45">
          {identity.footerLine}
        </p>
      </div>
    </footer>
  );
}
