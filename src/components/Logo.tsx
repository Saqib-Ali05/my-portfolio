import { motion } from 'motion/react';

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-2 group cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Outer stylized shape */}
        <motion.div 
          className="absolute inset-0 accent-gradient rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500"
          initial={{ opacity: 0.8 }}
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-xl border border-indigo-100" />
        
        {/* Inner letter/symbol */}
        <span className="relative text-xl font-black text-indigo-600 tracking-tighter">
          S
        </span>
        
        {/* Decorative dot */}
        <motion.div 
          className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full border-2 border-white"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold text-slate-900 tracking-tight">Saqib Ali</span>
        <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Tech</span>
      </div>
    </motion.div>
  );
}
