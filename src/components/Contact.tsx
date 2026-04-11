import { motion } from 'motion/react';
import { Mail, Send, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 flex justify-center bg-slate-50">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Contact</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Let's start a conversation.</h3>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-slate-600">
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <Mail className="text-indigo-600" size={20} />
                </div>
                <span className="font-medium">saqibali8531@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Linkedin size={20} />, href: '#' },
                { icon: <Github size={20} />, href: '#' },
                { icon: <Instagram size={20} />, href: '#' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-indigo-500/5"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Saqib ali"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="saqibali8531@gmail.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all mt-2"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
