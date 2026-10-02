import { motion } from 'motion/react';
import { ArrowDownRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50/50 blur-[100px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-wider w-fit">
            <Sparkles size={14} />
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
            Web Developer <br />
            <span className="text-indigo-600">& Digital Creator</span>
          </h1>

          <p className="max-w-md text-lg text-slate-500 leading-relaxed">
            Specializing in <span className="text-slate-900 font-medium">Web Development</span>,
            <span className="text-slate-900 font-medium"> Video Editing</span>, and
            <span className="text-slate-900 font-medium"> Social Media Management</span>.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
            >
              View Projects
              <ArrowDownRight size={20} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative frames */}
            <div className="absolute inset-0 border-2 border-indigo-100 rounded-[3rem] rotate-6 -z-10" />
            <div className="absolute inset-0 bg-indigo-600/5 rounded-[3rem] -rotate-3 -z-10" />

            <img
              src="saqib.webp"
              alt="Saqib"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl shadow-indigo-100"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-200 to-transparent" />
      </motion.div>
    </section>
  );
}
