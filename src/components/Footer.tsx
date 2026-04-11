import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/Saqib-Ali05', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/saqib-ali-518902393?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/saqibali0867/', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-slate-100 bg-white flex justify-center">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Logo />
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] ml-1">
            © 2026 Crafted with Passion
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-600 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-semibold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">
              Privacy
            </a>
            <a href="#" className="text-xs font-semibold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">
              Terms
            </a>
          </div>
        </div>

        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Built with <span className="text-indigo-600">React</span> & <span className="text-violet-600">Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
