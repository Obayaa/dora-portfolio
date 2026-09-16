import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa6";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="A selection of platforms, apps, and client sites I've designed, built, and shipped."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 0.08}>
            <Card className="flex h-full flex-col gap-4">
              {project.image ? (
                <div className="h-44 overflow-hidden rounded-xl bg-navy-dark">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-44 items-center justify-center rounded-xl bg-cream/60">
                  <FolderGit2 size={40} className="text-navy/50" />
                </div>
              )}

              <h3 className="font-heading text-xl font-semibold text-navy-dark">
                {project.title}
              </h3>
              <p className="text-sm text-navy-dark/70">{project.description}</p>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-4 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-light"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-dark/70 hover:text-navy"
                  >
                    Code <FaGithub size={14} />
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-light"
                  >
                    View Design <FaFigma size={14} />
                  </a>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
