import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    const target = document.querySelector('#home');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Row 1: Logo & Nav & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Logo Brand */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
              Arankan.dev
            </span>
            <p className="text-xs text-slate-500 mt-1">IT Undergraduate & Web Developer</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick Connect Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:arankan2003@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Row 2: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Varatharajan Arankan. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
