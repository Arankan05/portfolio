import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace the string below with your Web3Forms Access Key
    const ACCESS_KEY = "9e8e50ff-cc6a-4471-a8b6-3f6c59bd9f61";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Form submission failed:", result);
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Network error during submission:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wider uppercase mb-2">Contact</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Direct Info */}
          <ScrollReveal className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Discuss Your Next Project
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you have a question, want to collaborate on a software project, or are looking to hire an intern, my inbox is always open. I will do my best to get back to you as soon as possible!
              </p>

              {/* Direct Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase">Email</h4>
                    <a href="mailto:arankan2003@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                      arankan2003@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase">Location</h4>
                    <span className="text-white block">
                      Kelaniya, Sri Lanka (Current)
                    </span>
                    <span className="text-slate-400 text-xs block mt-0.5">
                      Permanent: Jaffna, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="pt-8 border-t border-slate-900">
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Follow My Work</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Glass Contact Form */}
          <ScrollReveal className="lg:col-span-7" delay={150}>
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-900 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850/80 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850/80 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850/80 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850/80 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Notice */}
                {isSent && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center text-sm font-semibold animate-pulse">
                    Message sent successfully! Thank you.
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
