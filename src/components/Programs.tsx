import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAMS } from '../data';
import { RoyalImage } from './RoyalImage';
import { Award, CheckCircle, ArrowRight, Gavel, CalendarRange } from 'lucide-react';

export default function Programs() {
  const [selectedId, setSelectedId] = useState(PROGRAMS[0].id);

  const getIconForProgram = (id: string) => {
    switch (id) {
      case 'tribunal':
        return <Gavel className="w-5 h-5 text-gold-400" />;
      case 'legends':
        return <CalendarRange className="w-5 h-5 text-gold-400" />;
      case 'thank_you_ghana':
        return <Award className="w-5 h-5 text-gold-400" />;
      default:
        return <Award className="w-5 h-5 text-gold-400" />;
    }
  };

  const activeProg = PROGRAMS.find(p => p.id === selectedId) || PROGRAMS[0];

  return (
    <section 
      id="programs" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-royal-950 border-t border-gold-500/10 overflow-hidden"
    >
      <div className="ambient-glow top-[40%] left-[-20%] scale-[1.2] rotate-90" />
      <div className="ambient-glow bottom-[10%] right-[-10%] scale-[1.3]" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-royal-900 border border-gold-400/20 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            Diplomatic Frameworks
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-gold-100">
            OUR HISTORIC PROGRAMMES <br />
            <span className="text-shine">& SIGNATURE SUMMITS</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-royal-100/70 leading-relaxed font-light">
            In collaboration with local bar associations, global voluntaries, and traditional chieftancies, we host high-level forums that promote economic partnerships and foster active dispute resolutions.
          </p>
        </div>

        {/* Dynamic Selector Row (Mobile: column, Desktop: horizontal row) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Vertical Menu column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3 min-w-[280px]">
            <p className="font-mono text-[10.5px] uppercase tracking-widest text-gold-500/60 font-bold mb-1 pl-3">
              Select Programme Unit
            </p>
            {PROGRAMS.map((prog) => {
              const isSelected = prog.id === selectedId;
              return (
                <button
                  key={prog.id}
                  id={`program-tab-${prog.id}`}
                  onClick={() => setSelectedId(prog.id)}
                  className={`w-full p-4 rounded-lg flex items-center justify-between text-left transition-all border outline-none text-sm cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-royal-800 to-royal-900 border-gold-500/50 shadow-lg shadow-gold-500/5 text-gold-400 font-bold'
                      : 'royal-glass hover:bg-royal-900/50 border-gold-500/10 text-royal-100/70 hover:text-royal-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full border transition-colors ${
                      isSelected ? 'bg-gold-500/10 border-gold-500/40' : 'bg-royal-950 border-gold-500/10'
                    }`}>
                      {getIconForProgram(prog.id)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif text-[13.5px] tracking-wide font-bold">{prog.title}</span>
                      <span className="font-mono text-[9px] text-royal-100/50 tracking-wider mt-0.5">{prog.subtitle}</span>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'translate-x-[4px] text-gold-400' : 'text-royal-100/40'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active detail panel with motion animation */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 rounded-lg royal-glass border border-gold-500/20 relative overflow-hidden bg-gradient-to-b from-royal-900/40 to-royal-950"
              >
                {/* Visual Accent Badge */}
                <span className="absolute top-4 right-4 font-mono text-[9.5px] font-bold tracking-widest text-gold-500/40 uppercase hidden sm:inline-block">
                  {activeProg.keyEventCode || 'PROGRAMME_MEMBER'}
                </span>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Detailed descriptions */}
                  <div className="md:col-span-12 space-y-5">
                    
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-2xl sm:text-2.5xl font-extrabold text-gold-100 tracking-wide line-clamp-2">
                        {activeProg.title}
                      </h3>
                      <p className="font-mono text-[11px] sm:text-xs text-gold-500 font-semibold uppercase tracking-widest italic">
                        {activeProg.subtitle}
                      </p>
                    </div>

                    <p className="font-sans text-sm text-royal-100/80 leading-relaxed font-light">
                      {activeProg.description}
                    </p>

                    <div className="border-t border-gold-500/10 pt-4">
                      <h4 className="font-serif text-xs font-bold text-gold-200 uppercase tracking-widest mb-3">
                        Milestones & Core Objectives:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeProg.objectives.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="font-sans text-xs sm:text-[13px] text-royal-100/70 leading-tight">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Historical archive picture preview associated with the program */}
                    <div className="mt-4 pt-4 border-t border-gold-500/10">
                      <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="w-full sm:w-44 h-28 overflow-hidden rounded-md border border-gold-500/20 bg-royal-950 p-1">
                          <RoyalImage 
                            index={activeProg.bannerImageIndex} 
                            alt={activeProg.title} 
                            className="w-full h-full object-cover rounded" 
                            category="Historical Archive"
                          />
                        </div>
                        <div className="flex flex-col text-left space-y-1">
                          <span className="font-mono text-[9px] text-gold-500/80 uppercase tracking-widest font-semibold">
                            Archival Photo Reference #{activeProg.bannerImageIndex}
                          </span>
                          <span className="font-serif text-[12.5px] font-bold text-royal-50">
                            Summit Memory Snapshot
                          </span>
                          <span className="font-sans text-[11px] text-royal-100/50 leading-none">
                            Captured live during peak launches and assemblies in Accra.
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Decorative borders */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-500/40 rounded-tl"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-500/40 rounded-tr"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-500/40 rounded-bl"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-500/40 rounded-br"></div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
