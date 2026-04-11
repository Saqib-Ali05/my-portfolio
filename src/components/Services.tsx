import { motion } from 'motion/react';
import { Layout, Video, Megaphone, Palette, Search, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout className="text-indigo-600" size={32} />,
      title: 'Website Design',
      desc: 'Creating modern, responsive, and user-centric websites that drive results.'
    },
    {
      icon: <Video className="text-violet-600" size={32} />,
      title: 'Video Editing',
      desc: 'Professional editing for YouTube, commercials, and social media content.'
    },
    {
      icon: <Megaphone className="text-blue-600" size={32} />,
      title: 'Social Media Management',
      desc: 'Strategic planning and execution to grow your brand across all platforms.'
    },
    {
      icon: <Search className="text-emerald-600" size={32} />,
      title: 'SEO Optimization',
      desc: 'Improving your search visibility and driving organic traffic to your site.'
    },
    
  ];

  return (
    <section id="services" className="py-24 px-6 flex justify-center bg-slate-50">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col gap-4 mb-16 text-center">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Services</h2>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight">What I Offer</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all"
            >
              <div className="p-4 rounded-2xl bg-slate-50 w-fit mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
