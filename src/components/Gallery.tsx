import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES, NOBLE_PATRONS } from '../data';
import { GalleryCategory } from '../types';
import { RoyalImage } from './RoyalImage';
import { Image, X, ChevronLeft, ChevronRight, FileText, Check, Award, Eye } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>('ALL');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages = filter === 'ALL' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const categories: { code: GalleryCategory; text: string }[] = [
    { code: 'ALL', text: 'All Archives' },
    { code: 'ROYAL', text: 'Traditional Chiefs & Royalty' },
    { code: 'EVENTS', text: 'Ceremonial Flyers' },
    { code: 'DOCUMENTS', text: 'Official Notes & Manifests' },
    { code: 'BANQUETS', text: 'Trade Banquets' },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    const currentIndexInFiltered = filteredImages.findIndex(img => img.index === activeImageIndex);
    const nextIndex = (currentIndexInFiltered + 1) % filteredImages.length;
    setActiveImageIndex(filteredImages[nextIndex].index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    const currentIndexInFiltered = filteredImages.findIndex(img => img.index === activeImageIndex);
    const prevIndex = (currentIndexInFiltered - 1 + filteredImages.length) % filteredImages.length;
    setActiveImageIndex(filteredImages[prevIndex].index);
  };

  const activeImgObject = GALLERY_IMAGES.find(img => img.index === activeImageIndex);

  return (
    <section 
      id="gallery" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gold-500/10 overflow-hidden"
    >
      <div className="ambient-glow top-[10%] left-[-10%] scale-[1.3] rotate-12" />
      <div className="ambient-glow bottom-[-5%] right-[-10%] scale-[1.2]" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-royal-900 border border-gold-500/20 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <Image className="w-3.5 h-3.5" />
            Sovereign Legacy Repository
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-gold-100">
            SOVEREIGN HISTORICAL MEMORIES <br />
            <span className="text-shine">& FOUNDING BLUEPRINTS</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-royal-100/70 leading-relaxed font-light">
            An extensive visual archive of the twenty-one real images attached to our historical launch, including photographs of chiefs in grand conclaves, state delegations, and photocopied strategic documents. Click any item for close-up views and transcribed textual details.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.code}
              id={`gallery-filter-${cat.code}`}
              onClick={() => setFilter(cat.code)}
              className={`px-4 py-2 rounded text-[11px] sm:text-xs font-serif font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                filter === cat.code
                  ? 'bg-gradient-to-b from-royal-800 to-royal-900 border-gold-500 text-gold-400 shadow shadow-gold-500/5'
                  : 'royal-glass hover:bg-gold-500/5 border-gold-500/10 text-royal-100/60 hover:text-royal-100'
              }`}
            >
              {cat.text}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.index}
                layout
                id={`gallery-item-${img.index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-lg overflow-hidden royal-glass border border-gold-500/15 flex flex-col justify-between align-top cursor-pointer h-[340px]"
                onClick={() => setActiveImageIndex(img.index)}
              >
                {/* Image Section */}
                <div className="relative w-full h-[60%] overflow-hidden bg-royal-950">
                  <RoyalImage 
                    index={img.index} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    category={img.tagline}
                  />
                  {/* Hover visual overlay */}
                  <div className="absolute inset-0 bg-royal-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gold-500/10 border border-gold-500/40 text-gold-400 font-mono text-[10px] uppercase tracking-widest leading-none">
                      <Eye className="w-3.5 h-3.5" />
                      View Archival Close-up
                    </div>
                  </div>
                </div>

                {/* Text section */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-royal-900/40 to-royal-950 text-left border-t border-gold-500/10 h-[40%]">
                  <div>
                    <span className="font-mono text-[9px] font-bold text-gold-500 uppercase tracking-widest">
                      {img.tagline || 'Peace Archive'}
                    </span>
                    <h3 className="font-serif text-[14.5px] font-bold text-gold-100 group-hover:text-gold-300 transition-colors line-clamp-1 mt-1">
                      {img.title}
                    </h3>
                    <p className="font-sans text-[11.5px] text-royal-100/60 leading-tight line-clamp-2 mt-1.5 font-light">
                      {img.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gold-500/5">
                    <span className="font-mono text-[10px] text-royal-100/40">
                      ID: #PTA-{String(img.index).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] text-gold-400 hover:underline">
                      Launch View →
                    </span>
                  </div>
                </div>

                {/* Certificate corner tabs for decoration */}
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-gold-500/20 rounded-bl group-hover:border-gold-500/60 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-gold-500/20 rounded-br group-hover:border-gold-500/60 transition-colors"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {activeImageIndex !== null && activeImgObject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-950/98 backdrop-blur-md"
              onClick={() => setActiveImageIndex(null)}
            >
              {/* Main lightbox card modal */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-4xl w-full royal-glass p-5 rounded-lg border-2 border-gold-500/30 bg-gradient-to-b from-royal-900 to-royal-950 shadow-2xl flex flex-col md:grid md:grid-cols-12 gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Close Button top right */}
                <button
                  id="close-lightbox-btn"
                  onClick={() => setActiveImageIndex(null)}
                  className="absolute -top-3 -right-3 p-2 rounded-full bg-royal-900 border border-gold-500 text-gold-400 hover:text-gold-200 shadow-xl shadow-gold-500/10 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Image display (6 columns out of 12) */}
                <div className="md:col-span-7 flex flex-col items-center justify-center rounded overflow-hidden max-h-[440px] border border-gold-500/10 bg-royal-950/50 p-1 select-none">
                  <div className="w-full h-full object-contain">
                    <RoyalImage 
                      index={activeImgObject.index} 
                      alt={activeImgObject.title} 
                      className="max-h-[380px] w-full object-contain rounded" 
                      category={activeImgObject.tagline}
                    />
                  </div>
                  
                  {/* Gallery Next / Prev controllers */}
                  <div className="flex items-center gap-4 mt-3 py-1 px-4 rounded bg-royal-900 border border-gold-500/20 text-xs text-gold-400 font-mono">
                    <button onClick={handlePrev} className="hover:text-gold-200 font-bold flex items-center gap-1 cursor-pointer">
                      <ChevronLeft className="w-3.5 h-3.5" /> Prev
                    </button>
                    <span>
                      {filteredImages.findIndex(img => img.index === activeImageIndex) + 1} / {filteredImages.length}
                    </span>
                    <button onClick={handleNext} className="hover:text-gold-200 font-bold flex items-center gap-1 cursor-pointer">
                      Next <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Description column (5 columns out of 12) */}
                <div className="md:col-span-5 flex flex-col justify-between text-left space-y-4">
                  <div>
                    <span className="font-mono text-[9px] font-bold text-gold-500 border border-gold-500/25 px-2 py-0.5 rounded uppercase tracking-widest">
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

                  {/* SPECIAL TRANSCRIPTION DISPLAY FOR THE ORIGINAL DOCUMENT IMAGES */}
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

      </div>
    </section>
  );
}
