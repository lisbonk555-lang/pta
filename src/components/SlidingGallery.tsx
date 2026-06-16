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
      className="relative py-12 bg-transparent border-t border-b border-gold-500/20 overflow-hidden"
    >
      {/* VIBRANT ROYAL GLOWS - Red, Gold, Green authentic West African colors for extreme attraction */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-rose-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 z-10 relative">
        <div className="text-left space-y-1">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-gold-400 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 font-extrabold">
              ROYAL HISTORICAL PHOTOSTREAM
            </span>
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-gold-100 tracking-tight uppercase">
            Sovereign Heritage Carousel
          </h2>
          <p className="font-sans text-xs sm:text-sm text-royal-100/70 max-w-2xl leading-tight">
            An interactive sliding track documenting all twenty-one real historic launch photographs of the Peace Tower initiative. <span className="text-gold-400 font-semibold">Hover to pause, click to inspect full details.</span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-sans text-xs text-gold-400 font-mono self-start sm:self-center">
          <span className="px-3 py-1 rounded bg-gradient-to-r from-royal-950 to-royal-900 border-2 border-gold-500/30 font-extrabold shadow-lg">
            {GALLERY_IMAGES.length} Archives Registered
          </span>
        </div>
      </div>

      {/* Marquee Outer Container */}
      <div className="relative w-full overflow-hidden py-6 select-none z-10">
        
        {/* Soft edge blur overlays to make it fade nicely into borders */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-r from-royal-950 via-royal-950/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-l from-royal-950 via-royal-950/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {marqueeImages.map((img, i) => (
            <div
              key={`${img.index}-${i}`}
              onClick={() => setActiveImageIndex(img.index)}
              className="group relative w-80 h-[240px] rounded-xl overflow-hidden royal-glass border border-gold-500/20 flex flex-col justify-end bg-royal-950 shrink-0 select-none shadow-xl hover:border-gold-300 hover:shadow-gold-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full">
                <RoyalImage 
                  index={img.index} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                  category={img.tagline}
                />
              </div>

              {/* Colorful vibrant overlay gradient for rich contrast (Dark bottom moving to colourful upper) */}
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/30 to-transparent z-[2]" />

              {/* Glowing decorative border effect inner */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/30 rounded-xl transition-all pointer-events-none z-[4]" />

              {/* West African Flag Ribbon on bottom edge of each image (Vibrant colourful touch) */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-600 via-amber-500 to-emerald-600 z-[4]" />

              {/* Text Tag and Titles */}
              <div className="p-5 z-[3] text-left">
                <span className="font-mono text-[9px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200 uppercase tracking-widest block mb-1">
                  {img.tagline}
                </span>
                <h3 className="font-serif text-sm font-extrabold text-gold-100 truncate group-hover:text-gold-300 transition-colors">
                  {img.title}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono text-[8.5px] text-royal-100/50 uppercase tracking-widest">
                    ID: #PTA-{String(img.index).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[8px] px-2 py-0.5 rounded bg-amber-500/20 text-gold-300 font-bold uppercase leading-none border border-gold-500/20">
                    HISTORIC
                  </span>
                </div>
              </div>

              {/* Hover magnifying glass sign */}
              <div className="absolute top-3 right-3 z-[3] p-1.5 rounded-lg bg-royal-950/90 border border-gold-500/40 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md">
                <Eye className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                <span className="font-mono text-[8px] font-black uppercase tracking-widest leading-none">INSPECT</span>
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
