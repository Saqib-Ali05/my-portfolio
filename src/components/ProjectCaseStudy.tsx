import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectCaseStudy({ project, onClose }: ProjectCaseStudyProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/40 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl shadow-indigo-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close Button */}
            <div className="sticky top-0 z-10 flex justify-end p-6 bg-white/80 backdrop-blur-md">
              <button 
                onClick={onClose}
                className="p-3 rounded-full bg-slate-100 text-slate-500 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
              >
                <X size={24} />
              </button>
            </div>

            <div className="px-8 md:px-16 pb-16">
              {/* Hero Image */}
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-xl border border-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Meta */}
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-xl text-slate-600 leading-relaxed">
                    {project.caseStudy.overview}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {project.live !== '#' && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all"
                      >
                        Live Demo
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all"
                      >
                        Source Code
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                    <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Key Results</h4>
                    <ul className="flex flex-col gap-3">
                      {project.caseStudy.results.map((result, i) => (
                        <li key={i} className="flex gap-3 text-sm text-indigo-900/70 font-medium">
                          <CheckCircle2 size={18} className="text-indigo-600 shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="grid md:grid-cols-2 gap-12 mt-20">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-slate-900">The Challenge</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.caseStudy.challenge}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-slate-900">The Solution</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Secondary Images */}
              <div className="grid md:grid-cols-2 gap-8 mt-20">
                {project.caseStudy.images.map((img, i) => (
                  <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
                    <img 
                      src={img} 
                      alt={`${project.title} detail ${i + 1}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col items-center text-center gap-6">
                <h3 className="text-2xl font-bold text-slate-900">Interested in something similar?</h3>
                <button 
                  onClick={onClose}
                  className="group flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all"
                >
                  Let's talk about your project
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
