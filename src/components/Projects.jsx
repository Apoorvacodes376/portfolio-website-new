import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/constants';
import {
  FiX,
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiPlay,
} from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm" />

          <motion.div
            className="relative bg-gray-900 rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover-glow rounded-full"
            >
              <FiX size={24} />
            </button>

            <div className="p-8">
              <h3 className="text-3xl font-bold gradient-text mb-4 font-heading text-light-primary">{project.title}</h3>
              <p className="text-gray-300 mb-6 text-light-primary">{project.fullDescription}</p>

              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-2 text-light-secondary">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500 bg-opacity-20 border border-blue-500 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-blue-500 rounded-lg hover-glow"
                >
                  <FiGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 border border-purple-500 rounded-lg hover-glow"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProject, setActiveProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const showProject = (direction) => {
    setActiveProject((current) =>
      (current + direction + PROJECTS.length) % PROJECTS.length,
    );
  };

  useEffect(() => {
    if (!isPlaying || PROJECTS.length < 2) return undefined;

    const interval = window.setInterval(() => showProject(1), 5000);
    return () => window.clearInterval(interval);
  }, [isPlaying]);

  const project = PROJECTS[activeProject];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="relative mx-auto flex max-w-5xl items-center justify-center gap-3 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button
            type="button"
            aria-label="Show previous project"
            onClick={() => showProject(-1)}
            className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-400/50 bg-blue-500/10 text-blue-300 transition hover:bg-blue-500/25 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FiChevronLeft size={26} />
          </button>

          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                className="mx-auto max-w-4xl cursor-pointer"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass overflow-hidden rounded-2xl hover-glow group">
                  <div className="relative h-64 overflow-hidden md:h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7 md:p-9">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                          Featured project {activeProject + 1} of {PROJECTS.length}
                        </p>
                        <h3 className="text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
                      </div>
                      <span className="text-sm text-gray-400">Click to view details</span>
                    </div>
                    <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded border border-blue-500/60 bg-blue-500/20 px-3 py-1 text-sm text-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Show next project"
            onClick={() => showProject(1)}
            className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-purple-400/50 bg-purple-500/10 text-purple-300 transition hover:bg-purple-500/25 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <FiChevronRight size={26} />
          </button>
        </motion.div>

        <div className="mt-7 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label={isPlaying ? 'Pause project slideshow' : 'Play project slideshow'}
            aria-pressed={isPlaying}
            onClick={() => setIsPlaying((playing) => !playing)}
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300 transition hover:border-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isPlaying ? <FiPause size={15} /> : <FiPlay size={15} />}
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="flex gap-2" aria-label="Project slides">
            {PROJECTS.map((project, index) => (
              <button
                key={project.id}
                type="button"
                aria-label={`Go to ${project.title}`}
                aria-current={index === activeProject ? 'true' : undefined}
                onClick={() => setActiveProject(index)}
                className={`h-2 rounded-full transition-all ${index === activeProject ? 'w-8 bg-blue-400' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
