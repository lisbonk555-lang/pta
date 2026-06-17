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
  const textColor = variant === "dark" ? "#040914" : variant === "gold" ? "#d4a317" : "#FFFFFF";
  const subtextColor = variant === "dark" ? "#193566" : variant === "gold" ? "#ffffff" : "#F1F6FC";

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlg3jZTJ-cBJVTHiQxkmI6yqtJ-ucL1_yImGkjJ8oiA&s"
        alt="Peace Tower of Africa Official Logo"
        style={{ width: size, height: size, objectFit: 'contain' }}
        className="rounded-full shadow-md select-none border border-gold-500/30"
        referrerPolicy="no-referrer"
      />

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
