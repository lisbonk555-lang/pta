import { motion } from 'motion/react';
import { CORE_OBJECTIVES } from '../data';
import { Shield, Sparkles } from 'lucide-react';

export default function Objectives() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="objectives" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-royal-950 border-t border-gold-500/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="ambient-glow top-[20%] right-[-10%] scale-100" />
      <div className="ambient-glow bottom-[10%] left-[-10%] scale-100 rotate-180" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-royal-900 border border-gold-500/20 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            Strategic Mandate
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-gold-100">
            THE EIGHT SOVEREIGN PILIARS <br />
            <span className="text-shine">OF THE PEACE TOWER</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-royal-100/70 leading-relaxed font-light">
            Transcribed directly from our founding strategic charter, these pillars govern our operations, ensuring regional election stability, youth leadership, tribal mediation, and corporate investment security.
          </p>
        </div>

        {/* Bento Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CORE_OBJECTIVES.map((obj, index) => {
            const formattedNum = String(obj.id).padStart(2, '0');
            return (
              <motion.div
                key={obj.id}
                variants={itemVariants}
                className="group relative p-6 rounded-lg royal-glass royal-glass-hover flex flex-col justify-between align-top select-none overflow-hidden h-[240px]"
              >
                {/* Background decorative shine element */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.02] to-transparent pointer-events-none group-hover:from-gold-500/[0.05]" />

                <div>
                  {/* Decorative Header Row inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-gold-500/40 tracking-widest uppercase">
                      Pillar Sub-Charter
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-gold-500/10 group-hover:text-gold-500/40 transition-colors" />
                  </div>

                  {/* Title of Pillar */}
                  <h3 className="font-serif text-lg font-bold text-gold-100 group-hover:text-gold-300 transition-colors tracking-wide leading-tight mb-2">
                    {obj.title}
                  </h3>

                  {/* Body description */}
                  <p className="font-sans text-xs sm:text-[13px] text-royal-100/60 leading-relaxed font-light line-clamp-4 group-hover:text-royal-50 transition-colors">
                    {obj.description}
                  </p>
                </div>

                {/* Big number on the bottom right */}
                <div className="flex items-end justify-between mt-4">
                  <div className="w-8 h-[1px] bg-gold-500/20 group-hover:w-16 transition-all duration-500 rounded-full" />
                  <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-500/15 to-gold-500/5 select-none font-outline tracking-tighter leading-none group-hover:from-gold-400/45 group-hover:to-gold-500/10 transition-colors duration-500">
                    {formattedNum}
                  </span>
                </div>

                {/* Certificate corner tabs for royal decoration */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-500/0 group-hover:border-gold-500/50 transition-all rounded-tl"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-500/0 group-hover:border-gold-500/50 transition-all rounded-tr"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold-500/0 group-hover:border-gold-500/50 transition-all rounded-bl"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-500/0 group-hover:border-gold-500/50 transition-all rounded-br"></div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlight Quote banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-lg royal-glass border border-gold-500/30 text-center relative max-w-4xl mx-auto overflow-hidden bg-gradient-to-r from-royal-950 via-royal-900/40 to-royal-950"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          
          <h4 className="font-serif text-xl sm:text-2xl text-gold-200 tracking-wide leading-relaxed font-bold italic mb-3">
            "LETS BUILD AFRICAN PEACE TOWER • Where all African conflict would be resolve verbally"
          </h4>
          <p className="font-mono text-[10.5px] uppercase tracking-widest text-gold-500/70">
            — Osabarimba Kwesi Atta II, Cape Coast Paramount Ruler & Grand Convoker
          </p>
        </motion.div>

      </div>
    </section>
  );
}
