import React from 'react';

interface PTALogoProps {
  className?: string;
  showText?: boolean;
  size?: number | string;
  variant?: 'light' | 'dark' | 'gold';
}

export default function PTALogo({ 
  className = "", 
  showText = false, 
  size = "100%", 
  variant = "light" 
}: PTALogoProps) {
  
  // Decide colors based on variant
  const triangleColor = "#1D70B8"; // Exact bright blue from the user's uploaded logo
  const textColor = variant === "dark" ? "#040914" : variant === "gold" ? "#d4a317" : "#FFFFFF";
  const subtextColor = variant === "dark" ? "#193566" : variant === "gold" ? "#ffffff" : "#F1F6FC";

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <svg 
        id="pta-official-logo-svg"
        viewBox="0 0 400 360" 
        width={size} 
        height={size} 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md select-none"
      >
        {/* Main Blue Triangle */}
        <polygon 
          points="200,10 390,320 10,320" 
          fill={triangleColor} 
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />

        {/* White perspective guidelines from apex to base (Forming the inner "A" structure) */}
        <line x1="200" y1="120" x2="80" y2="305" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="200" y1="120" x2="320" y2="305" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />

        {/* The Giant APEX "P" */}
        <text 
          x="198" 
          y="110" 
          fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', serif" 
          fontSize="82" 
          fontWeight="900" 
          fill="#FFFFFF" 
          textAnchor="middle"
          letterSpacing="normal"
        >
          P
        </text>

        {/* The Bottom Left "T" */}
        <text 
          x="95" 
          y="285" 
          fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', serif" 
          fontSize="68" 
          fontWeight="900" 
          fill="#FFFFFF" 
          textAnchor="middle"
        >
          T
        </text>

        {/* The Bottom Right "A" */}
        <text 
          x="305" 
          y="285" 
          fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', serif" 
          fontSize="68" 
          fontWeight="900" 
          fill="#FFFFFF" 
          textAnchor="middle"
        >
          A
        </text>

        {/* Handshake Path in the Center of Triangle */}
        <g transform="translate(133, 160) scale(1.65)">
          {/* Hand 1 (Right sleeve & hand) */}
          <path 
            d="M5 25 L16 16 L22 23.5" 
            stroke="#FFFFFF" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
          <path 
            d="M3 21.5 L13 13 C15 11, 19.5 12, 22.5 15.5 C25.5 19, 23 23.5, 20.5 25" 
            stroke="#FFFFFF" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
          {/* Hand 2 (Left sleeve & hand clasping) */}
          <path 
            d="M75 25 L64 16 L58 23.5" 
            stroke="#FFFFFF" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
          <path 
            d="M77 21.5 L67 13 C65 11, 60.5 12, 57.5 15.5 C54.5 19, 57 23.5, 59.5 25" 
            stroke="#FFFFFF" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />

          {/* Clapsed Fingers details in the center */}
          {/* Dynamic handshake overlapping loop lines */}
          <path 
            d="M26.5 17.5 C28.5 15.5, 33 13.5, 38 18 C39 19, 41 21, 44 21 C47 21, 50 18, 51.5 17" 
            stroke="#FFFFFF" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M24 21.5 C28.5 24, 33 26, 37.5 23 L44.5 17 C48 14, 51 21, 55 21.5" 
            stroke="#FFFFFF" 
            strokeWidth="3" 
            strokeLinecap="round" 
            fill="none" 
          />
          
          {/* Classic cuffs/wrists detail lines */}
          <line x1="12" y1="13" x2="6" y2="18.5" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="68" y1="13" x2="74" y2="18.5" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />

          {/* Handshake fingers wrap curves */}
          <path d="M33.5 19.5 C34.5 18, 36.5 18, 37.5 19.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M35.5 22 C36.5 20.5, 38.5 20.5, 39.5 22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M37.5 24.5 C38.5 23, 40.5 23, 41.5 24.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M39.5 27 C40.5 25.5, 42.5 25.5, 43.5 27" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>

      {/* Underneath labels (Rendered inside the wrapper or styled with absolute precision using font systems) */}
      {showText && (
        <div className="mt-2 text-center flex flex-col items-center">
          <span className="font-sans font-black tracking-[0.16em] text-sm sm:text-[15px] uppercase leading-none text-gold-100 whitespace-nowrap">
            Peace Tower of Africa
          </span>
          <span className="font-mono text-[8px] sm:text-[9.5px] font-bold tracking-[0.06em] mt-1 text-gold-400 uppercase whitespace-nowrap">
            Conflict Prevention and Resolution
          </span>
        </div>
      )}
    </div>
  );
}
