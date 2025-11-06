import { ExternalLink, Code2, Palette, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Chromatic Flux",
    description: "Generative blobs rendered in WebGL with interactive color shifting.",
    tag: "Creative Coding",
  },
  {
    title: "Aurora UI Kit",
    description: "Glassmorphism UI components for modern dashboards and apps.",
    tag: "Design System",
  },
  {
    title: "Pulse Mobile",
    description: "Animated wellness tracker with realtime charts and offline sync.",
    tag: "Mobile App",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Selected Projects</h2>
            <p className="text-white/70 mt-2">A few highlights from recent work.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
                  {p.tag === "Creative Coding" && <Code2 className="h-4 w-4" />}
                  {p.tag === "Design System" && <Palette className="h-4 w-4" />}
                  {p.tag === "Mobile App" && <Smartphone className="h-4 w-4" />}
                  <span>{p.tag}</span>
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.description}</p>
              <div className="mt-5 flex items-center gap-2 text-cyan-300">
                <span className="text-sm">View Project</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
