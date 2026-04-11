import { motion } from 'motion/react';
import { Code, Video, Share2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="text-indigo-600" size={24} />,
      title: 'Web Development',
      desc: 'Building responsive, high-performance web applications with modern frameworks.'
    },
    {
      icon: <Video className="text-violet-600" size={24} />,
      title: 'Video Editing',
      desc: 'Crafting compelling visual stories through expert editing and motion graphics.'
    },
    {
      icon: <Share2 className="text-blue-600" size={24} />,
      title: 'Digital Marketing',
      desc: 'Strategizing and managing digital presence to drive engagement and growth.'
    },
  ];

  return (
    <section id="about" className="py-24 px-6 flex justify-center bg-slate-50">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">About Me</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                My name is <br />  Saqib Ali.
              </h3>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Hi, I'm Saqib Ali, a multi-skilled digital professional and BBIT student at Virtual University of Pakistan.

              I specialize in web development, video editing, and digital marketing, creating impactful and user-friendly digital experiences through a blend of creativity and technical skills.

              Based in Gujrat, I’m constantly learning and improving to stay aligned with modern trends and deliver high-quality work.
            </p>

            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-slate-50 h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square bg-indigo-600 rounded-[4rem] rotate-3 absolute inset-0 -z-10 opacity-10" />
            <img
              src="saqib3.webp"
              alt="Creative Work"
              className="rounded-[4rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
