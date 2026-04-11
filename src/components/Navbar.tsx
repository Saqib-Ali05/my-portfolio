import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-2xl md:rounded-full"
      >
        <a href="#">
          <Logo />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-slate-200" />
          <div className="flex items-center gap-4">
            <a href="https://github.com/Saqib-Ali05" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/saqib-ali-518902393?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-500 hover:text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-4 right-4 glass p-6 rounded-2xl md:hidden flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-600 hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
