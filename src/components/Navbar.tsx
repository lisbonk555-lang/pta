import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield, Handshake, Compass, Award, Image, UserCheck, MessageSquare } from 'lucide-react';
import { RoyalImage } from './RoyalImage';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero', name: 'Home', icon: Compass },
    { id: 'objectives', name: 'Objectives', icon: Shield },
    { id: 'programs', name: 'Programmes', icon: Award },
    { id: 'tribunal-portal', name: 'Mediation Chamber', icon: Handshake },
    { id: 'gallery', name: 'Archive Gallery', icon: Image },
    { id: 'patrons', name: 'Patrons', icon: UserCheck },
    { id: 'contact', name: 'Contact US', icon: MessageSquare },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-royal-950/95 backdrop-blur-md py-3 border-b border-gold-500/20 shadow-lg shadow-gold-500/5' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleLinkClick('hero')}
            >
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-royal-900 border border-gold-500/30 overflow-hidden shadow-md shadow-gold-500/5">
                {/* Try to resolve image_0.png, using our high resilience wrapper */}
                <div className="absolute inset-0">
                  <RoyalImage index={0} alt="PTA Logo" className="w-full h-full object-cover" category="Logo" />
                </div>
                {/* Behind it is a stylized safety emblem */}
                <span className="sr-only">PTA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-extrabold tracking-wider text-sm sm:text-base text-gold-100 group-hover:text-gold-400 transition-colors uppercase leading-none">
                  Peace Tower
                </span>
                <span className="font-mono text-[9px] text-gold-500/80 tracking-widest mt-0.5 uppercase">
                  Of Africa • PTA
                </span>
                <span className="font-sans text-[7px] text-royal-100/50 leading-none">CONFLICT RESOLUTION</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative px-4 py-2 rounded-md font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                      isActive 
                        ? 'text-gold-400' 
                        : 'text-royal-100 hover:text-gold-300'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-gold-400' : 'text-royal-100/60'}`} />
                    {item.name}
                    {isActive && (
                      <motion.div 
                        layoutId="activeSubbar"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-500 to-amber-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
              
              <button 
                onClick={() => handleLinkClick('tribunal-portal')}
                className="ml-4 px-4 py-2 rounded bg-gradient-to-r from-gold-600 to-gold-500 text-royal-950 font-serif font-bold text-xs tracking-wider uppercase shadow-md shadow-gold-500/20 hover:from-gold-500 hover:to-gold-400 border border-gold-300/30 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                Pledge Peace
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-md text-gold-100 hover:text-gold-400 hover:bg-royal-900 focus:outline-none transition-all border border-gold-500/10 cursor-pointer"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden p-4 bg-royal-950/98 border-b border-gold-500/20 backdrop-blur-xl shadow-2xl"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full px-4 py-3 rounded-md flex items-center gap-3 font-sans text-sm font-bold uppercase tracking-wider transition-all border ${
                      isActive 
                        ? 'bg-royal-900 border-gold-500/30 text-gold-400 shadow-inner' 
                        : 'border-transparent text-royal-100 hover:text-gold-300 hover:bg-royal-900/50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-gold-400" />
                    {item.name}
                  </button>
                );
              })}
              <div className="pt-4 px-4">
                <button
                  onClick={() => handleLinkClick('tribunal-portal')}
                  className="w-full py-3 rounded-md bg-gradient-to-r from-gold-600 to-gold-500 text-royal-950 font-serif font-extrabold text-sm tracking-widest uppercase text-center shadow-lg border border-gold-300/30 active:scale-95 transition-all"
                >
                  Enter Mediation Center
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
