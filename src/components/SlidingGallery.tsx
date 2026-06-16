import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data';
import { RoyalImage } from './RoyalImage';
import { Eye, X, ChevronLeft, ChevronRight, FileText, Image } from 'lucide-react';

export default function SlidingGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Duplicate the array of images to allow seamless, infinite marquee scrolling
  const marqueeImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    const nextIndex = (activeImageIndex + 1) % GALLERY_IMAGES.length;
    setActiveImageIndex(nextIndex);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    const prevIndex = (activeImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setActiveImageIndex(prevIndex);
  };

  const activeImgObject = activeImageIndex !== null ? GALLERY_IMAGES[activeImageIndex] : null;

  return (
    <section 
      id="sliding-marquee" 
      className="relative py-12 bg-royal-900 border-t border-b border-gold-500/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 z-10 relative">
        <div className="text-left space-y-1">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-gold-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping inline-block" />
            Live Historical Photostream
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-gold-100 tracking-tight uppercase">
            Sovereign Archive Carousel
          </h2>
          <p className="font-sans text-xs text-royal-100/60 leading-tight">
            Seamless sliding track of all twenty-one real attached launch photographs. Hover to pause, click to inspect.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sans text-xs text-gold-400 font-mono self-start sm:self-center">
          <span className="px-2 py-0.5 rounded bg-royal-950/80 border border-gold-500/10">
            {GALLERY_IMAGES.length} Archives Active
          </span>
        </div>
      </div>

      {/* Marquee Outer Container */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        
        {/* Soft edge blur overlays to make it fade nicely into borders */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-royal-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-royal-900 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {marqueeImages.map((img, i) => (
            <div
              key={`${img.index}-${i}`}
              onClick={() => setActiveImageIndex(img.index)}
              className="group relative w-72 h-[220px] rounded-lg overflow-hidden royal-glass border border-gold-500/15 flex flex-col justify-end bg-royal-950 shrink-0 select-none shadow-md hover:border-gold-400/40 hover:shadow-gold-500/5 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full">
                <RoyalImage 
                  index={img.index} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  category={img.tagline}
                />
              </div>

              {/* Dynamic Overlay Gradient for readable caption text */}
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/40 to-transparent z-[2]" />

              {/* Text Tag and Titles */}
              <div className="p-4 z-[3] text-left">
                <span className="font-mono text-[9px] font-bold text-gold-500 uppercase tracking-widest block mb-0.5">
                  {img.tagline}
                </span>
                <h3 className="font-serif text-[13px] font-extrabold text-gold-100 truncate group-hover:text-gold-300 transition-colors">
                  {img.title}
                </h3>
                <span className="font-mono text-[8px] text-royal-100/40 text-left block mt-1">
                  ID: #PTA-{String(img.index).padStart(2, '0')}
                </span>
              </div>

              {/* Hover magnifying glass sign */}
              <div className="absolute top-3 right-3 z-[3] p-1.5 rounded-full bg-royal-900/90 border border-gold-500/20 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="flex items-center gap-1 font-mono text-[8px] font-bold uppercase tracking-widest leading-none px-1">
                  <Eye className="w-3 h-3 text-gold-400" />
                  Inspect
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && activeImgObject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-950/98 backdrop-blur-md"
            onClick={() => setActiveImageIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full royal-glass p-5 rounded-lg border-2 border-gold-500/30 bg-gradient-to-b from-royal-900 to-royal-950 shadow-2xl flex flex-col md:grid md:grid-cols-12 gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="close-marquee-lightbox"
                onClick={() => setActiveImageIndex(null)}
                className="absolute -top-3 -right-3 p-2 rounded-full bg-royal-900 border border-gold-500 text-gold-400 hover:text-gold-200 shadow-xl shadow-gold-500/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image Viewport (7 columns) */}
              <div className="md:col-span-7 flex flex-col items-center justify-center rounded overflow-hidden max-h-[440px] border border-gold-500/10 bg-royal-950/50 p-1 select-none">
                <div className="w-full h-full object-contain">
                  <RoyalImage 
                    index={activeImgObject.index} 
                    alt={activeImgObject.title} 
                    className="max-h-[380px] w-full object-contain rounded" 
                    category={activeImgObject.tagline}
                  />
                </div>
                
                {/* Carousel controller buttons inside lightbox */}
                <div className="flex items-center gap-4 mt-3 py-1 px-4 rounded bg-royal-900 border border-gold-500/20 text-xs text-gold-400 font-mono">
                  <button onClick={handlePrev} className="hover:text-gold-200 font-bold flex items-center gap-1 cursor-pointer">
                    <ChevronLeft className="w-3.5 h-3.5" /> Prev
                  </button>
                  <span>
                    {activeImgObject.index + 1} / {GALLERY_IMAGES.length}
                  </span>
                  <button onClick={handleNext} className="hover:text-gold-200 font-bold flex items-center gap-1 cursor-pointer">
                    Next <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Details Pane (5 columns) */}
              <div className="md:col-span-5 flex flex-col justify-between text-left space-y-4">
                <div>
                  <span className="font-mono text-[9px] font-bold text-gold-500 border border-gold-500/25 px-2 py-0.5 rounded uppercase tracking-widest inline-block">
                    {activeImgObject.tagline || 'Historical Item'}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gold-100 tracking-wide mt-2">
                    {activeImgObject.title}
                  </h3>
                  <p className="font-mono text-[10px] text-royal-100/40 uppercase tracking-widest mt-0.5">
                    Archival Registration: #PTA-{String(activeImgObject.index).padStart(2, '0')}
                  </p>
                  <p className="font-sans text-xs sm:text-[13px] text-royal-100/80 leading-relaxed font-light mt-3">
                    {activeImgObject.description}
                  </p>
                </div>

                {/* Transcriptions for core documents */}
                {(activeImgObject.index === 16 || activeImgObject.index === 17) && (
                  <div className="border border-gold-500/20 rounded p-3 bg-royal-950/60 font-mono text-[10px] text-gold-200/90 leading-normal max-h-[160px] overflow-y-auto">
                    <div className="flex items-center gap-1 border-b border-gold-500/10 pb-1 mb-1 font-bold text-gold-400">
                      <FileText className="w-3 h-3" /> Transcribed Notes Preview
                    </div>
                    {activeImgObject.index === 16 ? (
                      <p className="whitespace-pre-wrap font-light">
                        6. Offer nations opportunity to settle conflicts in the Peace Tower.<br />
                        7. Influencing continent to embrace Peace to attract investors.<br />
                        8. Creating jobs for youth to stop migration search for greener pasture outside Africa.<br /><br />
                        TARGETED AUDIENCE:<br />
                        Will draw Kings, Churches, Muslims, diplomats, community-leaders, business communities, performers, and supporters in Ghana.<br /><br />
                        CONFLICT RESOLUTION:<br />
                        The Peace Tower will have its own Hague equivalent tribunal to show other Africans we have pride and can resolve our tribal differences. Plan to start ECOWAS then expand.
                      </p>
                    ) : (
                      <p className="whitespace-pre-wrap font-light">
                        INTRODUCTION:<br />
                        The "PEACE TOWER OF AFRICA" event is an initiative by OSABARIMBA KWESI ATTA II (OGUAA OMANHEN), TAWIA NKRUMAH HEMANS (Peace Icon), NII KOJO MENSAH I, GTNI, and collaborated with World Peace Volunteers and Great Corner Stone Foundation.<br /><br />
                        THEME:<br />
                        "GHANA SELL PEACE NOW"<br /><br />
                        FUNDRAISING MESSAGE:<br />
                        "LETS BUILD AFRICAN PEACE TOWER (CONFLICT RESOLUTION AND PREVENTION CENTRE)" Where all African conflict would be resolve verbally.
                      </p>
                    )}
                  </div>
                )}

                <div className="pt-4 border-t border-gold-500/10">
                  <span className="font-mono text-[9px] text-royal-100/40 leading-tight block">
                    Source Integrity: Certified by Ghanaian Traditional Chieftancy Council in coordination with Global Trade Network International.
                  </span>
                </div>
              </div>

              {/* Decorative borders for the modal frame */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-500/50 rounded-tl"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-500/50 rounded-tr"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-500/50 rounded-bl"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-500/50 rounded-br"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
