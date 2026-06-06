import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const stats = [
    { label: 'Completed Projects', value: '4' },
    { label: 'Programming Languages', value: '5+' },
    { label: 'GitHub Repositories', value: '7' },
  ];

  const focusCards = [
    {
      icon: <GraduationCap className="text-indigo-400" size={24} />,
      title: 'Education',
      desc: 'Pursuing a Bachelor of Science (Hons) in Information Technology at the University of Kelaniya. Gaining a solid foundation in software engineering, database management, and network systems.',
    },
    {
      icon: <BookOpen className="text-purple-400" size={24} />,
      title: 'Continuous Learning',
      desc: 'Actively exploring modern web development libraries, cloud platforms, and architecture patterns. Committed to writing clean, maintainable, and well-documented code.',
    },
    {
      icon: <Award className="text-pink-400" size={24} />,
      title: 'Problem Solving',
      desc: 'Enthusiastic about data structures, algorithms, and practical programming logic. Participating in university hackathons and solving online coding challenges.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wider uppercase mb-2">About Me</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Journey in Technology
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo */}
          <ScrollReveal className="lg:col-span-5 relative group w-full max-w-sm mx-auto lg:max-w-none">
            {/* Outer Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-[15px] opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none" />
            
            {/* Image Container */}
            <div className="relative bg-slate-900/60 border border-slate-800 p-2.5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md group-hover:rotate-2 transition-all duration-500">
              <img 
                src="/arankan.jpg" 
                alt="Varatharajan Arankan" 
                className="w-full h-auto rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-500 shadow-inner"
              />
            </div>
          </ScrollReveal>

          {/* Right Column: Biography Text & Stats */}
          <ScrollReveal className="lg:col-span-7 flex flex-col justify-center" delay={150}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Empowering Ideas Through Code
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              As an Information Technology undergraduate at the University of Kelaniya, I am deeply fascinated by web development and software engineering. I enjoy the process of turning ideas into functional, interactive digital experiences that solve real problems.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              My academic curriculum has equipped me with a strong grounding in computing fundamentals, database concepts, and system architecture. Beyond classes, I spend my time working on personal React projects, practicing programming on GitHub, and staying updated with emerging tech trends.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-900 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 rounded-xl bg-slate-900/40 border border-slate-900/60 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>

        {/* Focus Cards / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {focusCards.map((card, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 100}
              className="w-full"
            >
              <div className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/65 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:translate-y-[-2px]">
                <div className="flex flex-col gap-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
