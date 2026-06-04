import React from 'react';
import { ArrowRight, Mail, FileText, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Hero = () => {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950">
      {/* Background Gradients & Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 md:py-20">

          {/* Column 1: Intro Text */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Available for Internships & Projects
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Varatharajan Arankan</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4">
              IT Undergraduate at <span className="text-indigo-400">University of Kelaniya</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              Passionate IT undergraduate with interests in full-stack web development, AI, hardware systems, and IoT technologies. Dedicated to building modern, scalable, and user-friendly digital solutions that combine software and smart technologies to solve real-world challenges.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                View My Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Let's Talk
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Arankan05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-850 hover:shadow-md hover:shadow-indigo-500/5 hover:rotate-[360deg] transition-all duration-500"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/arankan?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-850 hover:shadow-md hover:shadow-indigo-500/5 hover:rotate-[360deg] transition-all duration-500"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:arankan2003@gmail.com"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-850 hover:shadow-md hover:shadow-indigo-500/5 hover:rotate-[360deg] transition-all duration-500"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Decorative Code Block Mockup */}
          <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-[40px] opacity-20 animate-pulse pointer-events-none" />

            {/* Glass Card */}
            <div className="relative bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md hover:rotate-1 hover:scale-[1.02] transition-all duration-500">
              {/* Card Header (Mac-like buttons) */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/60 border-b border-slate-900">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-slate-500">arankan.js</div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* Card Body */}
              <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                <div className="text-slate-500">// Personal profile configuration</div>
                <div>
                  <span className="text-indigo-400">const</span> developer = &#123;
                </div>
                <div className="pl-4">
                  name: <span className="text-amber-300">'Varatharajan Arankan'</span>,
                </div>
                <div className="pl-4">
                  role: <span className="text-amber-300">'IT Undergraduate'</span>,
                </div>
                <div className="pl-4">
                  education: <span className="text-amber-300">'University of Kelaniya'</span>,
                </div>
                <div className="pl-4">
                  skills: [
                </div>
                <div className="pl-8 text-purple-400">
                  'React', 'Node.js', 'TailwindCSS',
                </div>
                <div className="pl-8 text-purple-400">
                  'JavaScript', 'SQL', 'Git'
                </div>
                <div className="pl-8 text-purple-400">
                  'Java', 'C++', 'HTML'
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  passions: [<span className="text-emerald-400">'Web Development'</span>, <span className="text-emerald-400">'Problem Solving'</span>, <span className="text-emerald-400">'IoT Systems'</span>],
                </div>
                <div className="pl-4">
                  seeking: <span className="text-amber-300">'Internships & Collaborations'</span>
                </div>
                <div>&#125;;</div>
                <div className="mt-4">
                  <span className="text-indigo-400">console</span>.<span className="text-indigo-400">log</span>(developer.passions.join(<span className="text-amber-300">' & '</span>));
                </div>
                <div className="mt-2 text-slate-500">
                  {`> "Web Development & Problem Solving"`}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
