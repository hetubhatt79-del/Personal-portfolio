import React, { useState } from 'react';
import {
  Terminal,
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#8b5cf6', '#22d3ee', '#a855f7'],
        });
      } catch {
        // Safe fallback
      }

      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center sm:items-start mb-14">
        <div className="flex items-center gap-2 font-mono text-xs text-violet-400 mb-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>[08] // INITIATE TRANSMISSION</span>
        </div>

        {/* Animated Availability Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span>{personal.availability}</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-left">
          Have an idea? <span className="gradient-text-primary">Let's connect.</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
          Whether you want to discuss first-year engineering projects, collaborate on web experiments, or just talk tech — my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links, Email Copy & Socials */}
        <div className="lg:col-span-5 space-y-6 text-left">
          {/* Email Copy Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-base">Direct Email</h3>
                <p className="text-xs font-mono text-slate-400">Copy to clipboard or send directly</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
              <div className="flex-1 px-4 py-3 rounded-xl bg-[#070b1f] border border-white/10 font-mono text-xs sm:text-sm text-cyan-300 truncate select-all">
                {personal.email}
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer shadow-lg shadow-violet-600/20"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors pt-1"
            >
              <span>Open in default mail client</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/8 space-y-4">
            <h3 className="font-heading font-semibold text-white text-base">
              Developer &amp; Social Profiles
            </h3>
            <p className="text-xs text-slate-400">
              Easily update these placeholder URLs anytime in <code className="text-cyan-400">portfolioData.ts</code>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {/* GitHub */}
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#070b1f] border border-white/10 hover:border-violet-500/50 hover:bg-violet-950/20 text-slate-300 hover:text-white transition-all group"
              >
                <svg className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span className="font-mono text-xs">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#070b1f] border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-slate-300 hover:text-white transition-all group"
              >
                <svg className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="font-mono text-xs">LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href={personal.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#070b1f] border border-white/10 hover:border-pink-500/50 hover:bg-pink-950/20 text-slate-300 hover:text-white transition-all group"
              >
                <svg className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="font-mono text-xs">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Send Message Interactive Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/8 relative">
            <div className="flex items-center gap-2 mb-6 text-left">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="font-heading font-semibold text-lg text-white">
                Send a Fast Note
              </h3>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-violet-950/30 border border-violet-500/30 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">Message Transmitted!</h4>
                <p className="text-xs font-mono text-slate-400 max-w-sm mx-auto">
                  Thank you for reaching out! Since this is a client-side demo, your note was simulated. Feel free to copy my direct email above.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-mono text-xs text-slate-400">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ada Lovelace"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#060a1e] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-mono text-xs text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-mono text-xs text-slate-400">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ada@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#060a1e] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-mono text-xs text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-mono text-xs text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hey Hetu, saw your portfolio and wanted to talk about..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060a1e] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-mono text-xs text-white placeholder-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 border border-cyan-400/40 shadow-lg shadow-violet-500/25 transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 text-cyan-300" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
