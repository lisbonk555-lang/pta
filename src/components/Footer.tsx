import { Gavel, Heart, ChevronUp, Scale, Star } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  return (
    <footer className="relative bg-royal-950 border-t border-gold-500/15 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-[80%] left-[45%] w-80 h-80 bg-gold-500/5 rounded-full filter blur-5xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gold-500/10 pb-10">
          
          {/* Column 1: PTA Branding */}
          <div className="col-span-1 md:col-span-5 text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-royal-900 border border-gold-500/40 flex items-center justify-center font-serif font-black text-xs text-gold-400">
                PTA
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm font-extrabold text-gold-100 uppercase tracking-widest leading-none">
                  Peace Tower of Africa
                </span>
                <span className="font-mono text-[8px] text-royal-100/50 uppercase tracking-wider mt-0.5">
                  Conflict Resolution & Youth Trade Council
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-royal-100/60 leading-relaxed font-light">
              An active non-governmental peace-promotion and industrial trade coordinating initiative. Commemorated in collaboration with World Peace Volunteers, Great Corner Stone Foundation, and Global Trade Network International (GTNI).
            </p>
          </div>

          {/* Column 2: Legal registration & collaboration */}
          <div className="col-span-1 md:col-span-4 text-left space-y-3">
            <h4 className="font-serif text-xs font-bold text-gold-100 uppercase tracking-widest border-b border-gold-500/10 pb-1.5">
              Registration & Alliance
            </h4>
            <div className="space-y-2">
              <p className="font-mono text-[10.5px] text-royal-100/70 leading-relaxed font-light">
                🌿 Registered NGO: <strong className="text-gold-200 font-semibold text-[10.5px]">Peace Tower of Africa Framework</strong>
              </p>
              <p className="font-mono text-[10.5px] text-royal-100/70 leading-relaxed font-light">
                🌐 Strategic Trade: <strong className="text-gold-200 font-semibold text-[10.5px]">Global Trade Network Int.</strong>
              </p>
              <p className="font-mono text-[10.5px] text-royal-100/70 leading-relaxed font-light">
                🤝 Core Support: <strong className="text-gold-200 font-semibold text-[10.5px]">National Peace Council Elders</strong>
              </p>
            </div>
          </div>

          {/* Column 3: Navigation Quick Action */}
          <div className="col-span-1 md:col-span-3 text-left space-y-3 md:flex md:flex-col md:items-end">
            <div className="space-y-3 w-full max-w-[180px]">
              <h4 className="font-serif text-xs font-bold text-gold-100 uppercase tracking-widest border-b border-gold-500/10 pb-1.5">
                Quick Action
              </h4>
              <button
                onClick={onScrollToTop}
                className="w-full py-2 px-3 rounded royal-glass border border-gold-500/30 text-gold-300 font-mono text-[9px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold-500/10 transition-all select-none cursor-pointer"
              >
                Top of Palace
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Base Details */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-royal-100/40 text-center gap-4">
          
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Peace Tower of Africa. All Rights Reserved.</span>
          </div>

          {/* Built code credit line adhering precisely to human wording and avoiding self praise */}
          <div className="flex items-center gap-1.5 uppercase tracking-widest text-[9.5px]">
            <Star className="w-3 h-3 text-gold-500" />
            <span>Traditional Hague Initiative Portal • Accra, GH</span>
          </div>

          <div className="flex items-center gap-1 text-[10.5px]">
            <span>Secured under custom Royal Decree</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
