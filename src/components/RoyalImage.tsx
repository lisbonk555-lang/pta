import React, { useState } from 'react';
import { Shield, Award, Users, FileText, Landmark, Crown, Handshake, Calendar, HelpCircle } from 'lucide-react';

interface RoyalImageProps {
  index: number;
  alt: string;
  className?: string;
  category?: string;
}

export function RoyalImage({ index, alt, className = "", category }: RoyalImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pathIndex, setPathIndex] = useState(0);

  // We support multiple standard paths that AI Studio or custom layouts use
  const possiblePaths = [
    `/assets/input_file_${index}.png`,
    `/assets/input_file_${index}.jpg`,
    `/assets/input_file_${index}.jpeg`,
    `/input_file_${index}.png`,
    `/input_file_${index}.jpg`,
    `/input_file_${index}.jpeg`,
    `/assets/image_${index}.png`,
    `/assets/image_${index}.jpg`,
    `/assets/image_${index}.jpeg`,
    `/image_${index}.png`,
    `/image_${index}.jpg`,
    `/image_${index}.jpeg`,
    `https://picsum.photos/seed/peacetower${index}/800/600` // Ultimate beautiful dynamic fallback
  ];

  const currentSrc = possiblePaths[pathIndex]; // Start with the standard assets path

  const getIconForIndex = (idx: number) => {
    if (idx === 0) return <Handshake className="w-12 h-12 text-gold-400 animate-pulse" />;
    if (idx === 1 || idx === 4) return <Calendar className="w-12 h-12 text-gold-400" />;
    if (idx === 16 || idx === 17) return <FileText className="w-12 h-12 text-gold-400" />;
    if (idx === 18) return <Award className="w-12 h-12 text-gold-400" />;
    if ([2, 10, 13].includes(idx)) return <Crown className="w-12 h-12 text-gold-400" />;
    if ([3, 5, 6, 7, 8, 9, 12, 15].includes(idx)) return <Landmark className="w-12 h-12 text-gold-400" />;
    if ([11, 14, 19, 20].includes(idx)) return <Users className="w-12 h-12 text-gold-400" />;
    return <Shield className="w-12 h-12 text-gold-400" />;
  };

  const getGradForIndex = (idx: number) => {
    const gradients = [
      "from-royal-900 to-royal-800 border-gold-500/30",
      "from-royal-850 to-amber-950/40 border-gold-400/40",
      "from-emerald-950/30 to-royal-950 border-emerald-500/20",
      "from-royal-900 to-gold-950/20 border-gold-500/20"
    ];
    return gradients[idx % gradients.length];
  };

  if (hasError) {
    // Elegant royal placeholder with metadata text and dynamic icons
    return (
      <div 
        className={`relative flex flex-col items-center justify-center p-6 text-center border rounded-lg overflow-hidden select-none bg-gradient-to-b ${getGradForIndex(index)} ${className}`}
        style={{ minHeight: '180px' }}
      >
        {/* Subtle geometric overlay to look like a watermark */}
        <div className="absolute inset-0 opacity-5 pointer-events-none Kente-pattern select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`kente-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0 M0 0 L40 40" stroke="#d4a317" strokeWidth="2" />
                <rect x="10" y="10" width="20" height="20" fill="none" stroke="#d4a317" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#kente-${index})`} />
          </svg>
        </div>

        <div className="z-10 mb-3 flex items-center justify-center w-20 h-20 rounded-full bg-royal-900/80 border border-gold-500/30 shadow-lg shadow-gold-500/5">
          {getIconForIndex(index)}
        </div>
        
        <span className="z-10 text-xs font-mono text-gold-400/80 uppercase tracking-widest mb-1">
          {category || 'Peace Asset'} #{index}
        </span>
        <h4 className="z-10 text-sm font-serif font-semibold text-gold-100 tracking-wide px-3 line-clamp-2">
          {alt}
        </h4>
        <p className="z-10 text-[11px] text-royal-100/60 mt-2 px-4 line-clamp-2 italic">
          Resolution Service Active • PTA Archive
        </p>

        {/* Decorative corner borders to mimic a certificate or award */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold-500/40 rounded-tl"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold-500/40 rounded-tr"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold-500/40 rounded-bl"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold-500/40 rounded-br"></div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden w-full h-full rounded border border-gold-500/10">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-royal-900 animate-pulse">
          <Shield className="w-8 h-8 text-gold-500/30 animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} transition-all duration-700 ease-out ${isLoaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md'}`}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          // Fall back gracefully to the other configured asset paths
          if (pathIndex < possiblePaths.length - 1) {
            setPathIndex(prev => prev + 1);
          } else {
            setHasError(true);
          }
        }}
      />
    </div>
  );
}
