import React from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { Hobbies } from './components/Hobbies';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050814] text-slate-100 font-sans selection:bg-violet-600/30 selection:text-cyan-300">
      {/* Background Interactive Particles Constellation */}
      <BackgroundParticles />

      {/* Desktop Custom Cyber Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar & Scroll Progress */}
      <Navbar />

      {/* Main Content Container */}
      <main className="relative z-10 space-y-4">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: About Me */}
        <About />

        {/* Section 4: Technical Skills */}
        <Skills />

        {/* Section 5: Tech Stack / Tools I Explore */}
        <TechStack />

        {/* Section 6: Projects and Experiments */}
        <Projects />

        {/* Section 7: My Learning Journey */}
        <LearningJourney />

        {/* Section 8: Hobbies and Interests */}
        <Hobbies />

        {/* Section 9: Currently Exploring ("What's on My Radar") */}
        <CurrentlyExploring />

        {/* Section 10: Contact and Social Links */}
        <Contact />
      </main>

      {/* Polished Footer */}
      <Footer />

      {/* Floating Back To Top Button */}
      <BackToTop />
    </div>
  );
};

export default App;
