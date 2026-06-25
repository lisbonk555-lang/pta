import { motion } from 'motion/react';
import { NOBLE_PATRONS } from '../data';
import { RoyalImage } from './RoyalImage';
import { Award, UserCheck, Star } from 'lucide-react';

export default function Patrons() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section 
      id="patrons" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gold-500/10 overflow-hidden"
    >
      <div className="ambient-glow top-[30%] left-[-10%] scale-[1.1]" />
      <div className="ambient-glow bottom-[20%] right-[-15%] scale-[1.2] rotate-12" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-royal-900 border border-gold-500/20 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5" />
            Sovereign Patrons & Pioneers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-gold-100">
            THE NOBLE CONVOKERS <br />
            <span className="text-shine">& LIFETME PATRONS</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-royal-100/70 leading-relaxed font-light">
            We honor the visionary leadership and historical wisdom of Ghana's traditional, cultural, and spiritual custodians whose support maintains the sacred canopy of peace for developmental enterprise.
          </p>
        </div>

        {/* Patrons Card list */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {NOBLE_PATRONS.map((patron) => (
            <motion.div
              key={patron.id}
              variants={cardVariants}
              className="group p-6 rounded-lg royal-glass border border-gold-500/15 bg-gradient-to-b from-royal-900/20 to-royal-950 flex flex-col sm:flex-row gap-6 items-center sm:items-stretch select-none"
            >
              
              {/* Profile Portrait Container */}
              <div className="w-36 h-36 sm:w-44 sm:h-auto overflow-hidden rounded-md border border-gold-500/25 p-1 bg-royal-950 relative shrink-0 aspect-square sm:aspect-auto">
                {patron.imageUrl ? (
                  <img 
                    src={patron.imageUrl} 
                    alt={patron.name} 
                    className="w-full h-full object-cover rounded" 
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <RoyalImage 
                    index={patron.imageIndex} 
                    alt={patron.name} 
                    className="w-full h-full object-cover rounded" 
                    category="Portrait"
                  />
                )}
                
                {/* Decorative Star tag on image */}
                <div className="absolute top-2 left-2 p-1 rounded bg-royal-950/90 border border-gold-500/30">
                  <Star className="w-3 h-3 text-gold-400 animate-pulse" />
                </div>
              </div>

              {/* Biography Details */}
              <div className="flex-1 flex flex-col justify-between text-left space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-extrabold text-gold-100 tracking-wide">
                    {patron.name}
                  </h3>
                  <p className="font-mono text-[10px] sm:text-[11px] text-gold-500/95 font-semibold uppercase tracking-widest leading-tight">
                    {patron.title}
                  </p>
                </div>

                {/* Achievements List */}
                <div className="space-y-2 border-t border-gold-500/10 pt-3">
                  <span className="font-mono text-[9px] font-bold text-gold-400 uppercase tracking-widest block">
                    Key Peacemaking Milestones:
                  </span>
                  <ul className="space-y-1.5">
                    {patron.achievements.map((ach, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-1.5" />
                        <span className="font-sans text-[11.5px] sm:text-xs text-royal-100/70 leading-tight">
                          {ach}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Certificate corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-500/20 group-hover:border-gold-500 rounded-tl transition-colors"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-500/20 group-hover:border-gold-500 rounded-tr transition-colors"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
