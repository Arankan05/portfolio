import React, { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { Github } from './Icons';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web & AI', 'IoT & Systems', 'Data Science'];

  const projectsData = [
    {
      title: 'Prompt2PicAI',
      category: 'Web & AI',
      image: '/prompt2pic_showcase.png',
      description: 'A premium text-to-image generator mobile application built with React Native, Expo, and Supabase. Features semantic prompt analysis, safe content filtering, history synchronization, and a curated high-fidelity local artwork gallery engine.',
      tech: ['React Native', 'Expo Router', 'Supabase', 'TypeScript', 'AI Generation'],
      github: 'https://github.com/Arankan05/Prompt2PicAI.git',
      demo: 'https://github.com/Arankan05/Prompt2PicAI.git',
    },
    {
      title: 'Arduino Radar System',
      category: 'IoT & Systems',
      image: '/arduino_radar.png',
      description: 'An ultrasonic radar system built using Arduino to detect objects and measure their distance/angle in real-time. Features a visual sonar-like radar sweep display created using Processing.',
      tech: ['Arduino', 'C++', 'Processing', 'Hardware'],
      github: 'https://github.com/Arankan05/Arduino-radar.git',
      demo: 'https://github.com/Arankan05/Arduino-radar.git',
    },
    {
      title: 'AI Diet Chatbot',
      category: 'Web & AI',
      image: '/diet_chatbot.png',
      description: 'An interactive diet and nutrition assistant chatbot that leverages Natural Language Processing to understand user queries, recommend tailored meal plans, and track caloric intake.',
      tech: ['Python', 'Flask', 'NLP', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/Arankan05/diet_Chatbot.git',
      demo: 'https://github.com/Arankan05/diet_Chatbot.git',
    },
    {
      title: 'Retail Customer ML Analysis',
      category: 'Data Science',
      image: '/retail_ml.png',
      description: 'A machine learning pipeline developed to analyze retail customer transaction data, segment clients using clustering algorithms, and predict future purchasing behaviors to optimize target marketing.',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter'],
      github: 'https://github.com/Arankan05/customer-retail-machine-learning-project.git',
      demo: 'https://github.com/Arankan05/customer-retail-machine-learning-project.git',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wider uppercase mb-2">My Portfolio</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Recent Projects
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 100}
              className="w-full"
            >
              <div className="group flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 hover:translate-y-[-6px] hover:rotate-[0.5deg]">
                {/* Image Box */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="px-3 py-1 rounded-lg bg-indigo-500/90 text-xs font-semibold text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Folder size={18} className="text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-950 border border-slate-800/80 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Code Source
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
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

export default Projects;
