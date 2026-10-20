import { Lexend } from "next/font/google";
import ProjectGrid from "./projects/ProjectGrid";
import projects from "../content/projects.json";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

export default function ProjectSection() {
  return (
    <section id="project" className="scroll-mt-20 bg-white px-5 py-20 sm:py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl pb-12">
          <h2 className={`${titleFont.className} text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl`}>Projetos</h2>
        </div>
        <ProjectGrid projects={projects.map(project => ({
          ...project,
          imagePresentation: project.mobileImageUrl ? 'devices' : 'mockup',
        }))} />
      </div>
    </section>
  );
}
