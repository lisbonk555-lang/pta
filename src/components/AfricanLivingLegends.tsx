import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Globe, Landmark, ShieldCheck, HeartHandshake, CheckCircle2, ChevronRight, Send, Star, Compass, UserCheck } from 'lucide-react';
import { RoyalImage } from './RoyalImage';

interface LegendCard {
  name: string;
  role: string;
  contribution: string;
  imageIndex: number;
  tags: string[];
}

const LIVING_LEGENDS_DATA: LegendCard[] = [
  {
    name: "Otumfuo Osei Tutu II",
    role: "Asantehene (King of the Asante)",
    contribution: "Pivotal traditional mediator who has resolved over a hundred land and chieftaincy disputes, establishing an absolute model of cultural peace-building in West Africa.",
    imageIndex: 6,
    tags: ["Traditional Ruler", "State Mediator"]
  },
  {
    name: "Tawia Nkrumah Hemans",
    role: "President & Founder, PTA",
    contribution: "Eminent peace icon and campaign convener who pioneered the Female Commercial Driving initiative and mobilized local traditional councils to secure sovereign investments.",
    imageIndex: 0,
    tags: ["Peace Icon", "Campaign Convener"]
  },
  {
    name: "Nana Adwoa Amos",
    role: "Advocate & Educator",
    contribution: "Champion of gender justice and non-violence campaigns, leading the eradication of Female Genital Mutilation (FGM) and election violence across seven major Ghanaian regions.",
    imageIndex: 5,
    tags: ["Gender Justice", "Civic Educator"]
  }
];

export default function AfricanLivingLegends() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    interest: 'invest', // 'invest' | 'volunteer' | 'homecoming'
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ fullName: '', email: '', country: '', interest: 'invest', message: '' });
    }, 5000);
  };

  return (
    <section 
      id="african-living-legends" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gold-500/10 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-500/5 blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Decorative Divider Accent */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-500" />
          <Star className="w-4 h-4 text-gold-400 animate-spin-slow" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-500" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3.5 py-1.5 rounded-full inline-block">
            Sovereign Diaspora Platform
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-black text-gold-100 tracking-tight leading-none uppercase">
            AFRICAN LIVING LEGENDS
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-gold-300/80">
            "Africa Living Legends Festival and Awards" • Honouring Keepers of Peace & Progress
          </p>
          <div className="h-[2px] w-36 bg-gradient-to-r from-amber-600 via-gold-500 to-amber-600 mx-auto rounded-full mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Vision & Interactive Form */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Vision Statement Box */}
            <div className="p-6 sm:p-8 rounded-lg royal-glass border border-gold-500/20 bg-gradient-to-b from-royal-900/80 to-royal-950 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-gold-500/10 border border-gold-500/30">
                  <Globe className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-gold-200 uppercase tracking-wider">
                    Diaspora Homecoming Vision
                  </h3>
                  <p className="font-mono text-[8px] sm:text-[9px] text-royal-100/50 uppercase tracking-widest">
                    Bridging Global Communities
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-royal-100/90 leading-relaxed font-light">
                The Peace Tower of Africa creates a sovereign platform for the Diaspora Homecoming dubbed the <strong className="text-gold-200 font-medium">Africa Living Legends Festival and Awards</strong>. This initiative aims to celebrate cultural heritage, honor individuals making tremendous impacts on the continent, and invite descendants to invest and partner in Africa's socio-economic advancement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-royal-100/75">
                    Sovereign conflict resolution networks attracting stable investors.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Landmark className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-royal-100/75">
                    Strategic support for building the African Peace Tower & Investment offices.
                  </span>
                </div>
              </div>
            </div>

            {/* Diaspora Registration Form */}
            <div className="p-6 sm:p-8 rounded-lg royal-glass border border-gold-500/20 bg-gradient-to-b from-royal-900/60 to-royal-950/80 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-gold-500/10 border border-gold-500/30">
                  <HeartHandshake className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-gold-100 uppercase tracking-wider">
                    Homecoming & Investment Inquiry
                  </h3>
                  <p className="font-mono text-[8px] sm:text-[9px] text-royal-100/50 uppercase tracking-widest">
                    Register for 2027 US & Ghana Tour
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-gold-400 mb-1.5">
                        Full Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="e.g. Honorable Kofi Boateng"
                        className="w-full px-4 py-2.5 rounded bg-royal-950/80 border border-gold-500/25 text-royal-50 font-sans text-sm focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-gold-400 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="e.g. kofi@diasporalink.org"
                          className="w-full px-4 py-2.5 rounded bg-royal-950/80 border border-gold-500/25 text-royal-50 font-sans text-sm focus:border-gold-400 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-gold-400 mb-1.5">
                          Country of Residence
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({...formData, country: e.target.value})}
                          placeholder="e.g. United States"
                          className="w-full px-4 py-2.5 rounded bg-royal-950/80 border border-gold-500/25 text-royal-50 font-sans text-sm focus:border-gold-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-gold-400 mb-1.5">
                        Platform Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full px-4 py-2.5 rounded bg-royal-950/80 border border-gold-500/25 text-royal-50 font-sans text-sm focus:border-gold-400 focus:outline-none transition-colors"
                      >
                        <option value="invest">Sovereign Investment & Business Centers</option>
                        <option value="homecoming">Diaspora Homecoming Festival (2026/2027)</option>
                        <option value="volunteer">Volunteer & Local Youth Peace Projects</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-gold-400 mb-1.5">
                        Detailed Message / Sovereign proposal
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Describe how you would like to support or collaborate..."
                        className="w-full px-4 py-2.5 rounded bg-royal-950/80 border border-gold-500/25 text-royal-50 font-sans text-sm focus:border-gold-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-royal-950 font-serif font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer scale-100 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Send className="w-3.5 h-3.5 text-royal-950" />
                      Submit Sovereign Inquiry
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="p-6 rounded bg-emerald-950/30 border border-emerald-500/30 flex flex-col items-center justify-center text-center space-y-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 animate-pulse" />
                    <div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-emerald-300">
                        Sovereign Inquiry Received!
                      </h4>
                      <p className="font-sans text-xs text-royal-100/70 mt-1 max-w-sm">
                        Thank you for your valuable response. A coordinating delegate from the Peace Tower of Africa (PTA) will review your request and get in touch with you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Celebrated Leaders & Conclave */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="w-4 h-4 text-gold-400" />
              <h3 className="font-serif text-sm sm:text-base font-extrabold text-gold-200 uppercase tracking-wider">
                Laureates & Living Legends Spotlight
              </h3>
            </div>

            {/* Legends List */}
            <div className="space-y-4">
              {LIVING_LEGENDS_DATA.map((legend, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-lg royal-glass border border-gold-500/10 hover:border-gold-500/30 transition-all bg-royal-900/40 hover:bg-royal-900/60 flex flex-col sm:flex-row gap-5 items-center sm:items-start group"
                >
                  {/* Avatar wrapper */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border border-gold-500/30 p-1 bg-royal-950 shadow-md">
                    <RoyalImage 
                      index={legend.imageIndex}
                      alt={legend.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-serif text-base font-extrabold text-gold-100 leading-tight">
                          {legend.name}
                        </h4>
                        <span className="font-sans text-xs text-royal-100/60 font-light">
                          {legend.role}
                        </span>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap justify-center sm:justify-start gap-1">
                        {legend.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="font-mono text-[8px] uppercase tracking-wider text-gold-400 bg-gold-500/5 border border-gold-500/10 px-1.5 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="font-sans text-xs sm:text-[13px] text-royal-100/85 leading-relaxed font-light">
                      {legend.contribution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Maiden Conclave Info Box */}
            <div className="p-5 rounded-lg border border-gold-500/15 bg-amber-500/[0.02] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gold-500" />
              <div className="space-y-2 text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 font-bold block">
                  Historic Landmark
                </span>
                <h4 className="font-serif text-xs sm:text-sm font-black text-gold-200 uppercase tracking-wide">
                  2026 Conclave Maiden Tribute
                </h4>
                <p className="font-sans text-xs sm:text-sm text-royal-100/80 leading-relaxed font-light">
                  The 2026 maiden event is to build a peaceful atmosphere and honour living Legends in Ghana. We will offer African communities a unique opportunity to contribute towards the Peace Tower during its activities and promote friendship among the nations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
