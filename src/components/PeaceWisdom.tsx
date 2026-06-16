import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';

interface AfricanQuote {
  id: number;
  text: string;
  author: string;
  title: string;
  role: string;
}

const AFRICAN_QUOTES: AfricanQuote[] = [
  {
    id: 1,
    text: "Only through unity and peace can we build the Africa we want and deserve.",
    author: "Osagyefo Dr. Kwame Nkrumah",
    title: "First President of Ghana",
    role: "Pan-African Founding Father"
  },
  {
    id: 2,
    text: "If you want to make peace with your enemy, you must work with your enemy. Then he becomes your partner.",
    author: "Nelson Rolihlahla Mandela",
    title: "Former President of South Africa",
    role: "Nobel Peace Prize Laureate"
  },
  {
    id: 3,
    text: "Peace is not just the absence of war, but the presence of justice, of law, of order.",
    author: "H.E. Kofi Annan",
    title: "Former Secretary-General of the United Nations",
    role: "Ghanaian Diplomat & Peace Icon"
  },
  {
    id: 4,
    text: "We must guard our unity and national peace because without them, no stable development can take place in our sovereign lands.",
    author: "Sheikh Dr. Osmanu Nuhu Sharubutu",
    title: "National Chief Imam of Ghana",
    role: "Grand Patron of the Peace Tower"
  },
  {
    id: 5,
    text: "True leaders always prefer the table of verbal mediation and compromise over the triggers of communal conflict.",
    author: "Osabarimba Kwesi Atta II",
    title: "Oguaa Omanhen (Paramount Ruler of Cape Coast)",
    role: "Key Founding Coordinator of PTA"
  },
  {
    id: 6,
    text: "Peace is a daily, a weekly, a monthly process, gradually changing opinions, slowly eroding old barriers, quietly building new structures.",
    author: "Mwalimu Julius Nyerere",
    title: "First President of Tanzania",
    role: "Father of the Nation"
  },
  {
    id: 7,
    text: "Human diversity is a beautiful resource of our continent, not a threat to our peaceful coexistence.",
    author: "Archbishop Desmond Tutu",
    title: "Anti-Apartheid Hero",
    role: "Nobel Peace Prize Laureate"
  },
  {
    id: 8,
    text: "Peace is the greatest weapon for sustainable development that any sovereign African nation can possess.",
    author: "Dr. Wangari Maathai",
    title: "Environmental & Peace Activist",
    role: "Nobel Peace Laureate, Kenya"
  },
  {
    id: 9,
    text: "An army of principles and dialogue can penetrate where an army of armed soldiers cannot.",
    author: "Thomas Sankara",
    title: "Pan-African Revolutionist",
    role: "Former President of Burkina Faso"
  },
  {
    id: 10,
    text: "Let us join hands verbally to build a persistent, physical sanctuary. Ghana must sell peace now and forever!",
    author: "Tawia Nkrumah Hemans",
    title: "Distinguished Peace Icon & PTA Proponent",
    role: "Co-founding Architect of Peace Kampaigns"
  }
];

export default function PeaceWisdom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % AFRICAN_QUOTES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + AFRICAN_QUOTES.length) % AFRICAN_QUOTES.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % AFRICAN_QUOTES.length);
  };

  const currentQuote = AFRICAN_QUOTES[activeIndex];

  return (
    <section 
      id="peace-wisdom" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-royal-950 to-royal-900 border-t border-gold-500/10 overflow-hidden"
    >
      <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 opacity-60" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-royal-950 border border-gold-500/20 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            African Peace Wisdom
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-gold-100">
            INSPIRATIONAL VOICES OF UNITY
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* Quote Bento Card */}
        <div 
          className="royal-glass p-8 sm:p-12 rounded-xl border-2 border-gold-500/20 bg-gradient-to-b from-royal-900/60 to-royal-950 text-center relative overflow-hidden min-h-[280px] flex flex-col justify-between"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Huge stylized open quote mark */}
          <span className="absolute -top-4 left-6 text-9xl font-serif text-gold-500/5 select-none pointer-events-none">
            “
          </span>
          {/* Huge stylized close quote mark */}
          <span className="absolute -bottom-16 right-6 text-9xl font-serif text-gold-500/5 select-none pointer-events-none">
            ”
          </span>

          {/* Animate quote change with Framer Motion */}
          <div className="my-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="font-serif text-base sm:text-xl lg:text-2xl italic text-gold-100 leading-relaxed tracking-wide font-medium px-4">
                  "{currentQuote.text}"
                </p>
                
                <div className="space-y-1">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-gold-400 tracking-wider">
                    — {currentQuote.author}
                  </h4>
                  <p className="font-mono text-[10px] sm:text-xs text-royal-100/50 uppercase tracking-widest leading-none">
                    {currentQuote.title}
                  </p>
                  <p className="font-sans text-[10px] text-royal-100/30 italic">
                    {currentQuote.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls and Indicators */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gold-500/10">
            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="p-2 rounded bg-royal-900 border border-gold-500/20 text-gold-400 hover:text-gold-200 transition-colors cursor-pointer"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Circular step trackers */}
            <div className="flex gap-2">
              {AFRICAN_QUOTES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoplay(false);
                    setActiveIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx 
                      ? 'bg-gold-500 w-4' 
                      : 'bg-royal-100/20 hover:bg-royal-100/40'
                  }`}
                  aria-label={`Go to quote ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="p-2 rounded bg-royal-900 border border-gold-500/20 text-gold-400 hover:text-gold-200 transition-colors cursor-pointer"
              aria-label="Next quote"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Corners */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold-500/25 rounded-tl"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold-500/25 rounded-tr"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold-500/25 rounded-bl"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold-500/25 rounded-br"></div>
        </div>

      </div>
    </section>
  );
}
