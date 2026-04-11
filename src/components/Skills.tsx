import { motion } from 'motion/react';

export default function Skills() {
  const skillCategories = [
    
    {
      title: 'Video Editing',
      skills: [
        { name: 'Adobe Premiere Pro', level: 10 },
        { name: 'DaVinci Resolve', level: 10 },
        { name: 'Capcut', level: 75 },
        { name: 'Color Grading', level: 50 },
      ]
    },
    {
      title: 'Digital Marketing',
      skills: [
        { name: 'Content Strategy', level: 0 },
        { name: 'Copywriting', level: 0 },
        { name: 'Analytics & SEO', level: 0 },
        { name: 'Community Management', level: 0 },
      ]
    },  
    {
      title: 'Web Development',
      skills: [
        { name: 'Visual code', level: 45 },
       
      ]
    },  
  ];

  return (
    <section className="py-24 px-6 flex justify-center bg-white">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col gap-4 mb-16 text-center">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">My Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Technical Proficiency</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="flex flex-col gap-8"
            >
              <h4 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                {category.title}
              </h4>
              <div className="flex flex-col gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full accent-gradient"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
