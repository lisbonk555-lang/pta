import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Handshake, ShieldAlert, Award, ChevronRight, Gavel, Sparkles, BookOpen, X, Check, Landmark, Calendar, HeartHandshake, Globe } from 'lucide-react';
import { RoyalImage } from './RoyalImage';

interface HeroProps {
  onExplore: (sectionId: string) => void;
}

export default function Hero({ onExplore }: HeroProps) {
  const [isCharterOpen, setIsCharterOpen] = useState(false);

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
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-royal-900/90 border border-gold-500/30 text-gold-400 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="font-sans text-sm sm:text-base text-royal-100/90 leading-relaxed font-light">
                Welcome to the official Sovereign Mediation Center and Strategic Peace Platform of the <strong className="text-gold-200 font-medium">Peace Tower of Africa</strong>. We facilitate verbal conflict resolution, support economic trade integration, and celebrate African living legends.
              </p>
            </motion.div>

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
                onClick={() => onExplore('african-living-legends')}
                className="px-6 py-3 rounded bg-gradient-to-r from-gold-600 to-gold-400 text-royal-950 font-serif font-extrabold text-xs sm:text-sm tracking-widest uppercase hover:from-gold-500 hover:to-gold-300 transition-all shadow-lg shadow-gold-500/10 scale-100 hover:scale-[1.03] active:scale-[0.98] border border-gold-300/30 cursor-pointer"
              >
                Explore Living Legends
              </button>
              <button
                onClick={() => onExplore('ghana-thank-you-awards')}
                className="px-6 py-3 rounded royal-glass text-gold-200 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-gold-500/10 transition-all border border-gold-500/30 cursor-pointer flex items-center justify-center gap-1.5"
              >
                GTYA Awards Portal
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

        {/* Majestic Centered Note Section with Left and Right Images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 mb-20 p-6 sm:p-8 rounded-lg royal-glass border border-gold-500/30 bg-gradient-to-r from-royal-950 via-royal-900/60 to-royal-950 max-w-6xl mx-auto relative overflow-hidden shadow-2xl"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-500/40 rounded-tl" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-500/40 rounded-tr" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-500/40 rounded-bl" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-500/40 rounded-br" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Image */}
            <div 
              className="md:col-span-3 flex flex-col items-center cursor-pointer group"
              onClick={() => onExplore('african-living-legends')}
            >
              <div className="relative w-40 h-52 sm:w-44 sm:h-56 rounded-md overflow-hidden border border-gold-500/35 p-1 bg-royal-950 shadow-lg shadow-gold-500/5 group-hover:border-gold-500/60 transition-all scale-100 group-hover:scale-105 active:scale-[0.98]">
                <img 
                  src="https://i.ibb.co/hFt12nmB/Whats-App-Image-2026-06-23-at-22-42-24.jpg" 
                  alt="Peace Campaign Document" 
                  className="w-full h-full object-cover rounded"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-wider text-gold-300 bg-royal-950/90 px-1.5 py-0.5 rounded border border-gold-500/20">
                  Campaign Document
                </span>
              </div>
              <span className="mt-3 font-mono text-[9px] sm:text-[10px] text-gold-400 group-hover:text-gold-200 text-center tracking-wider max-w-[180px] leading-normal transition-colors uppercase font-bold">
                Click the image to visit the programs page
              </span>
            </div>

            {/* Middle Note Content */}
            <div className="md:col-span-6 text-center space-y-4">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 inline-block">
                Campaign Mandate & Vision
              </span>
              <p className="font-sans text-xs sm:text-sm md:text-base text-royal-100 leading-relaxed font-normal text-center">
                War mostly caused in Africa is a major challenge facing the continent today. It is in view of this that <strong className="text-gold-200 font-semibold">Peace Tower of Africa</strong> has created a platform to promote peace among countries and serve as a vehicle or conduit leading to the enhancement of socio-economic development, national integration and economic business in Ghana, Africa and around the globe.
              </p>
              
              {/* Read More trigger */}
              <div className="pt-2">
                <button
                  onClick={() => setIsCharterOpen(true)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-400 hover:text-gold-200 bg-gold-500/10 hover:bg-gold-500/20 px-4 py-2.5 rounded border border-gold-500/30 hover:border-gold-500/50 cursor-pointer shadow-md transition-all scale-100 hover:scale-105 active:scale-[0.98]"
                >
                  <BookOpen className="w-4 h-4 text-gold-400 animate-pulse" />
                  Read More
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div 
              className="md:col-span-3 flex flex-col items-center cursor-pointer group"
              onClick={() => onExplore('ghana-thank-you-awards')}
            >
              <div className="relative w-40 h-52 sm:w-44 sm:h-56 rounded-md overflow-hidden border border-gold-500/35 p-1 bg-royal-950 shadow-lg shadow-gold-500/5 group-hover:border-gold-500/60 transition-all scale-100 group-hover:scale-105 active:scale-[0.98]">
                <img 
                  src="https://i.postimg.cc/h48tSXD8/IMG-20260616-WA0010.jpg" 
                  alt="Peace Tower Seal" 
                  className="w-full h-full object-cover rounded"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-wider text-gold-300 bg-royal-950/90 px-1.5 py-0.5 rounded border border-gold-500/20">
                  Peace Tower Seal
                </span>
              </div>
              <span className="mt-3 font-mono text-[9px] sm:text-[10px] text-gold-400 group-hover:text-gold-200 text-center tracking-wider max-w-[180px] leading-normal transition-colors uppercase font-bold">
                Click the image to visit the programs page
              </span>
            </div>

          </div>
        </motion.div>

        {/* Floating Arrow down anchor to scroll down */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer" onClick={() => onExplore('african-living-legends')}>
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

      {/* Interactive Overlay Modal displaying the entire notes beautifully & attractively */}
      <AnimatePresence>
        {isCharterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCharterOpen(false)}
              className="absolute inset-0 bg-royal-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-lg royal-glass border border-gold-500/30 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950 shadow-2xl flex flex-col"
            >
              {/* Corner certificate accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-500/40 rounded-tl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-500/40 rounded-tr" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-500/40 rounded-bl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-500/40 rounded-br" />

              {/* Modal Header */}
              <div className="p-6 border-b border-gold-500/10 flex items-center justify-between bg-royal-950/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-gold-500/10 border border-gold-500/30">
                    <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-black text-gold-100 tracking-wide uppercase">
                      Campaign Charter & Background
                    </h3>
                    <p className="font-mono text-[9px] text-royal-100/50 uppercase tracking-widest mt-0.5">
                      Sovereign Record • Peace Tower of Africa
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCharterOpen(false)}
                  className="p-2 rounded-full hover:bg-gold-500/10 text-royal-100/60 hover:text-gold-200 transition-colors border border-transparent hover:border-gold-500/20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Contents */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10 custom-scrollbar text-left bg-royal-950/40">
                
                {/* SECTION 1: BACKGROUND NOTES */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-gold-500/20">
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                      Historical Archives
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-black text-gold-100 uppercase tracking-wide">
                      Background Notes
                    </h4>
                  </div>
                  
                  <div className="space-y-4 font-sans text-sm sm:text-base text-royal-100 leading-relaxed font-light">
                    <p className="p-4 rounded-lg bg-royal-900 border border-gold-500/15 italic text-gold-200">
                      War mostly caused in Africa is a major challenge facing the continent today. It is in view of this that Peace Tower of Africa has created a platform to promote peace among countries and serve as a vehicle or conduit leading to the enhancement of socio-economic development, national integration and economic business in Ghana, Africa and around the globe.
                    </p>
                    <p>
                      Peace Tower of Africa has designed an event dubbed the Ghana Thank You Awards to honour individuals and organizations that has made positive impacts on Ghanaians living in Ghana and abroad, they are tasked to support a worthy cause.
                    </p>
                    <p>
                      With the first event which doubles up as the first edition of the Ghana Thank You Awards 2012, the organization tasked its awardees to support the advocacy of Female into Commercial Driving and trained few ladies as commercial drivers at Cape Cost since the award took place there.
                    </p>
                  </div>
                </div>

                {/* SECTION 2: YOUTH & HISTORICAL RESOLUTIONS */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-gold-500/20">
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                      Elections & Leaders
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-black text-gold-100 uppercase tracking-wide">
                      Youth & Historical Resolutions
                    </h4>
                  </div>
                  
                  <div className="space-y-4 font-sans text-sm sm:text-base text-royal-100 leading-relaxed font-light">
                    <p>
                      Stop violence which has been perpetrated by the youth during elections and help contribute effectively for the development of their respective communities and Ghana as a whole and also PTA deployed about 46 volunteers in seven (7) out of the ten (10) regions in Ghana in the 2012 General Elections.
                    </p>
                    <p>
                      The PTA and World Peace Volunteers 2013 invited the former president J. Mahama and few senior citizens to accept the 2012 general election petition result which was challenged at the Supreme Court through GTYA awards.
                    </p>
                    <p>
                      The PTA in 2014 assembled the full house of Paramount Chiefs in the Western Regional House of Chiefs including the regional Minister of State and the deputy and were addressed by Tawia N. Hemans (President PTA) to promote peace in the region to attract investors.
                    </p>
                    <p>
                      The PTA campaigned against rampant road accidents on our road in 2015 and launched Females into Commercial Driving and trained few ladies in Takoradi.
                    </p>
                    <p className="border-l-2 border-emerald-500/40 pl-4 italic text-emerald-300">
                      Nana Adwoa Amos educated the eradication of FGM and Violence in election in Ghana.
                    </p>
                  </div>
                </div>

                {/* SECTION 3: REGIONAL PEACE CAMPAIGNS */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-gold-500/20">
                    <span className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                      National Tours
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-black text-gold-100 uppercase tracking-wide">
                      Regional Peace Campaigns
                    </h4>
                  </div>
                  
                  <div className="space-y-4 font-sans text-sm sm:text-base text-royal-100 leading-relaxed font-light">
                    <p>
                      These are some of the teams that organized Peace Campaigns tour through Western, Eastern, Ashanti and Greater Accra regions for the 2016 General Elections. They visited schools, Churches, Mosques, Media Houses et c.
                    </p>
                    <p>
                      The “PEACE TOWER OF AFRICA” event is an initiative by Tawia Nkrumah Hemans (Peace Icon), and collaborated with Global Trade Network Int. (GTNI), and some Refugees in Ghana to create awareness among Ghanaian society through series of events such as presentation of Awards, Sports, Peace seminar, Fundraising and Church / Muslim regional Prayer and Peace walk that seeks to interact with individuals to mark the 2018 and 2019 Ghana showcasing Africa Peace Tower.
                    </p>
                    <p>
                      The theme for 2020 event was “AFRICA PEACE TOWER NOW”. The 2026 maiden event is to build peaceful atmosphere and honour living Legends in Ghana. We will offer African communities unique opportunity to contribute towards the Peace tower during it activities and promote friendship among the nations.
                    </p>
                  </div>
                </div>

                {/* SECTION 4: FUNDRAISING CAMPAIGN */}
                <div className="p-6 rounded-lg bg-gradient-to-br from-royal-900 to-royal-950 border border-gold-500/30 relative space-y-4">
                  <div className="absolute top-0 right-6 w-16 h-[2.5px] bg-gold-500" />
                  <div className="flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-gold-400" />
                    <h4 className="font-serif text-md sm:text-xl font-extrabold text-gold-100 uppercase tracking-wider">
                      MESSAGE FOR THE FUNDRAISING CAMPAIGN EVENT
                    </h4>
                  </div>
                  <blockquote className="border-l-2 border-gold-500/50 pl-4 font-serif text-lg sm:text-xl italic text-gold-200 uppercase tracking-wide">
                    “LETS BUILD AFRICAN PEACE TOWER (PREVENT WAR)”
                  </blockquote>
                  <p className="font-sans text-sm text-royal-100/80 leading-relaxed font-light">
                    The PEACE TOWER OF AFRICA Campaign has already been accepted by the public with more to come, by utilizing a strategic promotion and publicity plan.
                  </p>
                </div>

                {/* SECTION 5: SPECIFIC OBJECTIVES */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-gold-500/20">
                    <span className="px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                      Directives
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-black text-gold-100 uppercase tracking-wide">
                      SPECIFIC OBJECTIVES INCLUDE:
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Build a Peace Tower in Ghana in memory of the freedom fighters",
                      "To build a Peaceful atmosphere for investors in Ghana",
                      "Encourage youth to desist from conflicts and wars to maintain Peace",
                      "Create platform where people will visit to study about peace.",
                      "Offer Africa Investment Center office.",
                      "Offer nations and regions the opportunity to settle their conflicts in the Peace Tower.",
                      "Enhancing and influencing our continent to embrace Peace to attract investors.",
                      "Creating jobs for the youths so they would stop migrating to seek greener pasture outside Africa."
                    ].map((obj, index) => (
                      <div key={index} className="p-4 rounded-lg bg-royal-900/60 border border-gold-500/10 flex items-start gap-3 hover:border-gold-500/30 transition-all">
                        <span className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                          {index + 1}
                        </span>
                        <span className="font-sans text-xs sm:text-sm text-royal-100/90 leading-relaxed font-light">
                          {obj}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 6: PEACE TOWER OF AFRICA DIASPORA */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-gold-500/20">
                    <span className="px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                      Diaspora
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-black text-gold-100 uppercase tracking-wide">
                      PEACE TOWER OF AFRICA
                    </h4>
                  </div>
                  
                  <div className="p-5 rounded-lg bg-royal-900 border border-gold-500/15 font-sans text-sm sm:text-base text-royal-100 leading-relaxed font-light">
                    The Peace Tower of Africa create a platform for the Diaspora Homecoming dubbed <strong className="text-gold-200">Africa Living Legends Festival and Awards</strong> to promote Ghana and invite them to come back home and invest particular be a vehicle to promote Economic business in Ghana, Africa and the globe.
                  </div>
                </div>

                {/* SECTION 7: 70TH INDEPENDENCE & US TOUR */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-gold-500/20">
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                      Future Milestones
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-black text-gold-100 uppercase tracking-wide">
                      70th Independence & US Tour
                    </h4>
                  </div>
                  
                  <p className="font-sans text-sm sm:text-base text-royal-100 leading-relaxed font-light">
                    There was a big event celebrated in Ghana 70th year independence in 2027 and the Peace Tower of Africa will use that opportunity to launch the fundraising towards building a Conflict Resolution and Business Centre; as a forward to host a "grand event" in the US to launch the fund raising which comes with a sketch of the Peace Tower building to show participants to raise funds and promote business opportunities in Ghana, that is what our organization desires.
                  </p>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gold-500/10 bg-royal-950 flex justify-end">
                <button
                  onClick={() => setIsCharterOpen(false)}
                  className="px-5 py-2.5 rounded bg-gradient-to-r from-gold-600 to-gold-400 text-royal-950 font-serif font-black text-xs uppercase tracking-widest hover:from-gold-500 hover:to-gold-300 transition-all cursor-pointer shadow-md"
                >
                  Close Document
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
