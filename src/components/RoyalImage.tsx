import React, { useState } from 'react';
import { Shield, Award, Users, FileText, Landmark, Crown, Handshake, Calendar, HelpCircle } from 'lucide-react';

// Path references for high-fidelity generated real images
const sealImg = 'https://i.postimg.cc/h48tSXD8/IMG-20260616-WA0010.jpg';
const festivalImg = '/src/assets/images/living_legend_festival_1781585278321.jpg';
const imamImg = '/src/assets/images/chief_imam_portrait_1781585261453.jpg';
const monumentImg = '/src/assets/images/peace_tower_monument_1781585294928.jpg';

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

  // Curated high-resolution Unsplash images perfectly mapping to each of the 21 unique historical Peace Tower archives
  const CURATED_UNSPLASH_IMAGES: Record<number, string> = {
    0: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800", // Mutual respect handshake
    1: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800", // African Living Legend Festival 2019 celebration
    2: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=800", // Islamic delegation/community peace assembly
    3: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=800", // Broadcast media interview
    4: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800", // Invitation card design mockup/Prestige template
    5: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&q=80&w=800", // West African traditional Kente detail
    6: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", // Traditional leadership proclaim lectern
    7: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800", // Elite Queen Mother matriarch portrait
    8: "https://images.unsplash.com/photo-1521791136368-1a46827d0a11?auto=format&fit=crop&q=80&w=800", // Customary agreement handshake
    9: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=800", // Historic scroll document
    10: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", // Chief Imam wise portrait
    11: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800", // Diplomatic academic speech
    12: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800", // Assembly grand chamber council hall
    13: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800", // Traditional sovereign leader portrait
    14: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800", // Maranatha legends launching panel
    15: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800", // Smile delegation group
    16: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800", // Strategy charter document
    17: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800", // Founders campaign charter sheet
    18: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", // Bank partner award ceremony
    19: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800", // Launch dinner banquet layout
    20: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"  // Business summit corporate roundtable
  };

  let curatedSrc = CURATED_UNSPLASH_IMAGES[index] || `https://picsum.photos/seed/peacetower${index}/800/600`;

  // Dynamically map high-fidelity generated local assets as primary sources
  if (index === 0) curatedSrc = sealImg;
  if (index === 1) curatedSrc = festivalImg;
  if (index === 4) curatedSrc = monumentImg;
  if (index === 10) curatedSrc = imamImg;
  if (index === 12) curatedSrc = monumentImg;

  // We support multiple standard paths with the user-uploaded images as first priority, followed by curated high-resolution photographic sources
  const possiblePaths = [
    `/assets/input_file_${index}.png`,
    `/assets/input_file_${index}.jpg`,
    `/assets/input_file_${index}.jpeg`,
    `/assets/input_file_${index}.webp`,
    `/input_file_${index}.png`,
    `/input_file_${index}.jpg`,
    `/input_file_${index}.jpeg`,
    `/input_file_${index}.webp`,
    `/src/assets/images/image_${index}.png`,
    `/src/assets/images/image_${index}.jpg`,
    `/src/assets/images/image_${index}.jpeg`,
    `/assets/image_${index}.png`,
    `/assets/image_${index}.jpg`,
    `/assets/image_${index}.jpeg`,
    `/image_${index}.png`,
    `/image_${index}.jpg`,
    `/image_${index}.jpeg`,
    curatedSrc,
    `https://picsum.photos/seed/peacetower${index}/800/600`
  ];

  // If we have a hardcoded image link or curated path, use it directly to prevent broken/long-loading attempts
  const isHardcodedIndex = [0, 1, 4, 10, 12].includes(index);
  const currentSrc = isHardcodedIndex ? curatedSrc : possiblePaths[pathIndex]; 


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
