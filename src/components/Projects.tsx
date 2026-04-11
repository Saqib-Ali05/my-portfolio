import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Eye } from 'lucide-react';
import { projects, Project } from '../data/projects';
import ProjectCaseStudy from './ProjectCaseStudy';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 flex justify-center bg-white">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Selected Works</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Recent Projects</h3>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
            <span className="text-indigo-600">{projects.length}</span> Projects Showcase
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="group flex flex-col gap-6 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-500/10 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <div className="flex gap-3">
                    {project.live !== '#' && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full bg-white text-indigo-600 hover:scale-110 transition-transform shadow-xl"
                        title="Live Preview"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full bg-slate-900 text-white hover:scale-110 transition-transform shadow-xl"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Eye size={16} />
                    View Case Study
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-2">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-slate-100 text-[10px] font-semibold text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudy 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
