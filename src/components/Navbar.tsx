import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Compute scroll percentage for progress bar
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050814]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20 border border-violet-500/40 group-hover:border-cyan-400/80 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              <span className="font-heading font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                {portfolioData.personal.monogram}
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
            </div>

            <div className="hidden sm:flex flex-col text-left">
              <span className="font-heading font-semibold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                First-Year CSE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0c1129]/60 border border-white/8 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner shadow-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-white/10 shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium text-white bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-cyan-600 border border-violet-400/30 hover:border-cyan-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#050814]/95 backdrop-blur-2xl px-4 pt-4 pb-6 mt-2 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="px-2 py-1 mb-2 font-mono text-[11px] text-cyan-400 flex items-center gap-2 border-b border-white/5 pb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// PORTFOLIO NAVIGATION</span>
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-600/20 text-cyan-300 border border-violet-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-cyan-600 border border-cyan-400/40 shadow-lg shadow-violet-500/20"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
