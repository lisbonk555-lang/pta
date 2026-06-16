/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objectives from './components/Objectives';
import Programs from './components/Programs';
import TribunalPortal from './components/TribunalPortal';
import Gallery from './components/Gallery';
import Patrons from './components/Patrons';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SlidingGallery from './components/SlidingGallery';
import PeaceWisdom from './components/PeaceWisdom';
import BackToTop from './components/BackToTop';
import { Sparkles, MessageSquareCode, Volume2, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showTicker, setShowTicker] = useState(true);

  // Simple scroll listener to spy scroll active positions
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'objectives', 'programs', 'tribunal-portal', 'gallery', 'patrons', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-royal-950 text-royal-50 relative selection:bg-gold-500/30 selection:text-gold-100">
      
      {/* Top Royal Announcement Ticker Bar */}
      {showTicker && (
        <div className="bg-gradient-to-r from-amber-700 via-gold-600 to-amber-700 text-royal-950 font-serif font-black text-[10px] sm:text-xs tracking-widest uppercase py-2 px-4 shadow-md flex items-center justify-between text-center gap-3 relative z-50">
          <div className="flex items-center gap-1.5 mx-auto">
            <Volume2 className="w-4 h-4 text-royal-950 animate-bounce" />
            <span>GHANA SELL PEACE NOW — "LET'S BUILD THE AFRICAN PEACE TOWER" — RESOLVING CONFLICTS VERBALLY</span>
            <Sparkles className="w-3.5 h-3.5 text-royal-950 animate-pulse hidden md:inline-block" />
          </div>
          <button 
            onClick={() => setShowTicker(false)}
            className="p-1 rounded bg-royal-950/20 hover:bg-royal-950/40 text-royal-950 transition-colors pointer-events-auto cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Header Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Hero Intro Spotlight */}
      <Hero onExplore={handleNavigate} />

      {/* Instant Endless Sliding Gallery Photostream (All 21 historic photographs) */}
      <SlidingGallery />

      {/* Main Narrative Sections */}
      <main id="main-content">
        
        {/* Core Strategic Pillars */}
        <Objectives />

        {/* Historic Programs */}
        <Programs />

        {/* Interactive Dispute Conciliator & Trade Advisory Portal */}
        <TribunalPortal />

        {/* Rotating peace & unity quotes from African Leaders (Peace Wisdom card) */}
        <PeaceWisdom />

        {/* Extensive Archive Gallery with Image Lights */}
        <Gallery />

        {/* Noble Patrons */}
        <Patrons />

        {/* Contact Us Channels and Support Endorsements */}
        <ContactSection />

      </main>

      {/* Royal Footer */}
      <Footer onScrollToTop={() => handleNavigate('hero')} />

      {/* Back to Top Floating Button Trigger */}
      <BackToTop />

    </div>
  );
}
