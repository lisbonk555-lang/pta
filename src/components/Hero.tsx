import { motion } from 'motion/react';
import { ArrowDown, Handshake, ShieldAlert, Award, ChevronRight, Gavel } from 'lucide-react';
import { RoyalImage } from './RoyalImage';

interface HeroProps {
  onExplore: (sectionId: string) => void;
}

export default function Hero({ onExplore }: HeroProps) {
  const highlightPoints = [
    { icon: Gavel, text: "Verbal Dispute Settlement", color: "text-rose-400" },
    { icon: Handshake, text: "Business & Economic Trade Hub", color: "text-emerald-400" },
    { icon: Award, text: "African Living Legends Network", color: "text-gold-400" },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="ambient-glow top-[-10%] left-[-10%] scale-150" />
      <div className="ambient-glow bottom-[-15%] right-[-10%] scale-150 rotate-45" />

      {/* Subtle Grid Watermark Layer */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#d4a317_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tag/Badge indicator */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-royal-900 border border-gold-500/30 text-gold-400 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sovereign Chieftaincy Platform
            </motion.div>

            {/* Main Typographic Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-gold-100 leading-tight">
                THE PEACE TOWER <br />
                <span className="text-shine">OF AFRICA</span>
              </h1>
              <p className="font-serif italic text-sm sm:text-lg text-gold-300/80 tracking-wide font-medium">
                "Ghana Sell Peace Now" • Conflict Prevention & Resolution
              </p>
            </motion.div>

            {/* Brief Narrative Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-royal-100/80 leading-relaxed max-w-2xl font-light"
            >
              The Peace Tower is a high-level sovereign initiative designed to serve as a paramount physical tribunal and a dynamic engine to promote bilateral business and corporate trade in Ghana and across Africa. Founded under the supreme patronage of <strong className="text-gold-100 font-semibold">Osabarimba Kwesi Atta II (Oguaa Omanhen)</strong>, <strong className="text-gold-100 font-semibold">Sheikh Dr. Osmanu Nuhu Sharubutu</strong>, and custodians of royal African authority.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 border-y border-gold-500/10"
            >
              {highlightPoints.map((pt, i) => {
                const IconComponent = pt.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-royal-900/80 border border-gold-500/20">
                      <IconComponent className={`w-4 h-4 ${pt.color}`} />
                    </div>
                    <span className="font-mono text-[10.5px] font-bold text-royal-50 uppercase tracking-wider leading-tight">
                      {pt.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Primary Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => onExplore('tribunal-portal')}
                className="px-6 py-3 rounded bg-gradient-to-r from-gold-600 to-gold-400 text-royal-950 font-serif font-extrabold text-xs sm:text-sm tracking-widest uppercase hover:from-gold-500 hover:to-gold-300 transition-all shadow-lg shadow-gold-500/10 scale-100 hover:scale-[1.03] active:scale-[0.98] border border-gold-300/30 cursor-pointer"
              >
                Enter Mediation Center
              </button>
              <button
                onClick={() => onExplore('gallery')}
                className="px-6 py-3 rounded royal-glass text-gold-200 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-gold-500/10 transition-all border border-gold-500/30 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Sovereign Archive
                <ChevronRight className="w-4 h-4 text-gold-400" />
              </button>
            </motion.div>

          </div>

          {/* Majestic Circular Dynamic Logo Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Outer golden orbiting light rings */}
            <div className="absolute inset-0 rounded-full border border-gold-500/5 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border border-gold-500/10 animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-20 rounded-full border border-gold-500/15 animate-[spin_15s_linear_infinite]" />

            {/* Main Emblem Mockup Card */}
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 rounded-full p-2.5 bg-gradient-to-b from-gold-400/20 to-royal-950 border-4 border-gold-500/30 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 rounded-full overflow-hidden bg-royal-900 border border-gold-500/25">
                {/* Logo Image */}
                <RoyalImage 
                  index={0} 
                  alt="Official Triangle Seal of PTA" 
                  className="w-full h-full object-cover rounded-full" 
                  category="Logo"
                />
              </div>

              {/* Holographic glowing ring */}
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-gold-950/40 to-transparent pointer-events-none" />
            </div>

            {/* Float Label 1: Ghana thank you award seal */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-4 right-1 px-3 py-2 rounded-lg royal-glass shadow-xl border border-gold-500/40 flex items-center gap-2 max-w-[150px]"
            >
              <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center text-royal-950 font-serif font-black text-[9px] shadow-sm">
                ★
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[9px] font-bold text-gold-100 uppercase leading-none">Thank You</span>
                <span className="font-mono text-[7px] text-royal-100/60 leading-tight">Ghana Award</span>
              </div>
            </motion.div>

            {/* Float Label 2: West Africa resolution pilot */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }}
              className="absolute bottom-6 left-1 px-3 py-2 rounded-lg royal-glass shadow-xl border border-emerald-500/30 flex items-center gap-2 max-w-[160px]"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <div className="flex flex-col">
                <span className="font-serif text-[9px] font-bold text-emerald-300 uppercase leading-none">Hague Tribunal</span>
                <span className="font-mono text-[7px] text-royal-100/60 leading-tight">ECOWAS Pilot Active</span>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Floating Arrow down anchor to scroll down */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer" onClick={() => onExplore('objectives')}>
          <span className="font-mono text-[9px] uppercase tracking-widest text-gold-500/60 leading-none">Scroll to discover</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="p-1 rounded-full border border-gold-500/25 bg-royal-900"
          >
            <ArrowDown className="w-3.5 h-3.5 text-gold-400" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
