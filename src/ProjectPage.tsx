import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Globe2, Layers, Code2 } from "lucide-react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "./projects";
import { useEffect } from "react";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg text-white font-sans px-6">
        <h1 className="text-5xl font-heading font-bold mb-4">404</h1>
        <p className="text-brand-text-dim text-lg mb-8">
          Project not found.
        </p>
        <Link
          to="/"
          className="bg-brand-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-blue-hover transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans">
      {/* Sticky Top Bar */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Houston Express Logo"
              className="h-10 object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="text-brand-text-dim hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-zinc-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2"
            >
              Visit Site <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-[#0a0b0e]"
          style={{ height: "70vh" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg z-10 pointer-events-none" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </section>

      {/* Project Info */}
      <section className="relative z-20 -mt-24 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm border border-brand-blue/20">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
              {project.title}
            </h1>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              {/* Description */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-brand-surface rounded-3xl p-8 md:p-10 border border-white/5">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Layers className="w-5 h-5 text-brand-blue" />
                    About this Project
                  </h2>
                  <p className="text-brand-text-dim leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Full Screenshot */}
                <div className="bg-brand-surface rounded-3xl border border-white/5 overflow-hidden">
                  <div className="p-3">
                    {/* Browser-style top bar */}
                    <div className="bg-brand-bg rounded-xl p-3 mb-3 flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex-1 bg-brand-surface rounded-lg px-4 py-1.5 text-sm text-brand-text-dim font-mono truncate flex items-center gap-2">
                        <Globe2 className="w-3.5 h-3.5 flex-shrink-0" />
                        {project.url}
                      </div>
                    </div>
                    <img
                      src={project.image}
                      alt={`${project.title} full screenshot`}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <div className="bg-brand-surface rounded-3xl p-8 border border-white/5">
                  <h3 className="text-lg font-bold mb-5 flex items-center gap-2 font-heading">
                    <Code2 className="w-5 h-5 text-brand-accent" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-brand-bg border border-white/5 rounded-xl text-sm text-brand-text-dim font-medium hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-brand-blue/20 to-brand-surface rounded-3xl p-8 border border-brand-blue/20">
                  <h3 className="text-xl font-bold mb-3 font-heading">
                    Want something similar?
                  </h3>
                  <p className="text-brand-text-dim text-sm mb-6 leading-relaxed">
                    We can build a premium website like this for your business,
                    delivered fast and affordably.
                  </p>
                  <a
                    href={`https://wa.me/5491131486912?text=Hola!%20Me%20interesa%20cotizar%20una%20p%C3%A1gina%20web%20similar%20al%20proyecto%20${encodeURIComponent(project.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-900 font-bold transition-colors text-center text-lg"
                  >
                    Get Your Quote
                  </a>
                </div>

                {/* Visit Site */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-900 font-bold transition-colors text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Site
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0a0b0e] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Houston Express Logo"
              className="h-12 object-contain"
            />
          </Link>
          <div className="text-sm text-brand-text-dim">
            © {new Date().getFullYear()} Houston Professional Web Agency. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
