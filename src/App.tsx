import { About } from "./components/About";
import { ContactFooter } from "./components/ContactFooter";
import { DataLab } from "./components/DataLab";
import { FieldNotes } from "./components/FieldNotes";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { ResumeBlock } from "./components/ResumeBlock";
import { Section } from "./components/Section";
import { SkillCard } from "./components/SkillCard";
import { projects, siteContent, skills } from "./data/siteContent";

function App() {
  return (
    <div className="min-h-screen bg-night text-mist">
      <div className="site-grid" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Section
          id="skills"
          eyebrow={siteContent.sections.skills.eyebrow}
          title={siteContent.sections.skills.title}
          copy={siteContent.sections.skills.copy}
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </Section>
        <Section
          id="projects"
          eyebrow={siteContent.sections.projects.eyebrow}
          title={siteContent.sections.projects.title}
        >
          <div className="grid gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>
        <Section
          id="data-lab"
          eyebrow={siteContent.sections.dataLab.eyebrow}
          title={siteContent.sections.dataLab.title}
          copy={siteContent.sections.dataLab.copy}
        >
          <DataLab />
        </Section>
        <Section
          id="about"
          eyebrow={siteContent.sections.about.eyebrow}
          title={siteContent.sections.about.title}
        >
          <About />
        </Section>
        <Section
          id="field-notes"
          eyebrow={siteContent.sections.fieldNotes.eyebrow}
          title={siteContent.sections.fieldNotes.title}
        >
          <FieldNotes />
        </Section>
        <Section
          id="resume"
          eyebrow={siteContent.sections.resume.eyebrow}
          title={siteContent.sections.resume.title}
          copy={siteContent.sections.resume.copy}
        >
          <ResumeBlock />
        </Section>
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
