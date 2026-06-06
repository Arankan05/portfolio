import React from 'react';
import { Layout, Server, Database, Settings } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="text-indigo-400" size={20} />,
      skills: [
        { name: 'HTML5 / CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'React Native & Expo', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="text-purple-400" size={20} />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'REST APIs', level: 80 },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="text-pink-400" size={20} />,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'Firebase', level: 75 },
        { name: 'Supabase', level: 75 },
      ],
    },
    {
      title: 'Tools & Workflows',
      icon: <Settings className="text-cyan-400" size={20} />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wider uppercase mb-2">My Skills</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Capabilities
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal 
              key={catIndex} 
              delay={catIndex * 100}
              className="w-full"
            >
              <div className="group p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 hover:rotate-[-0.5deg] hover:scale-[1.01] backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/2">
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/60">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:rotate-12 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      {/* Skill Info */}
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-semibold text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-indigo-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                        {/* Active Progress */}
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
