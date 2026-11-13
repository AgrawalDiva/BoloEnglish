import React from 'react';

export const Mascot = ({
  mood = 'happy', // 'happy' | 'excited' | 'thinking' | 'celebrating' | 'encouraging' | 'speaking'
  size = 'md',    // 'sm' | 'md' | 'lg' | 'xl'
  speech = null,  // Text to show in a speech bubble
  speechSide = 'right', // 'right' | 'top' | 'left'
  className = ''
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48'
  };

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Speech Bubble if requested */}
      {speech && (
        <div
          className={`absolute z-10 bg-white border-2 border-emerald-500 rounded-2xl px-4 py-2.5 shadow-lg text-slate-800 text-xs sm:text-sm font-semibold max-w-[200px] sm:max-w-[260px] animate-fade-in ${
            speechSide === 'top'
              ? 'bottom-full mb-3 left-1/2 -translate-x-1/2 after:content-[""] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-emerald-500'
              : speechSide === 'left'
              ? 'right-full mr-3 top-1/2 -translate-y-1/2 after:content-[""] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:border-8 after:border-transparent after:border-l-emerald-500'
              : 'left-full ml-3 top-1/2 -translate-y-1/2 after:content-[""] after:absolute after:top-1/2 after:right-full after:-translate-y-1/2 after:border-8 after:border-transparent after:border-r-emerald-500'
          }`}
        >
          {speech}
        </div>
      )}

      {/* SVG Mascot Character: Professor Gappu */}
      <svg
        viewBox="0 0 120 120"
        className={`${sizeMap[size] || sizeMap.md} transition-transform duration-300 ${
          mood === 'excited' || mood === 'celebrating' ? 'animate-bounce-slight' : ''
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow */}
        <ellipse cx="60" cy="112" rx="34" ry="7" fill="#000000" opacity="0.12" />

        {/* Outer Body Feather Gradient / Base */}
        <ellipse cx="60" cy="68" rx="38" ry="36" fill="#15803d" />
        <ellipse cx="60" cy="68" rx="35" ry="33" fill="#22c55e" />

        {/* Belly Warm Highlight */}
        <ellipse cx="60" cy="74" rx="26" ry="24" fill="#dcfce7" />

        {/* Wings */}
        {mood === 'celebrating' || mood === 'excited' ? (
          <>
            {/* Wings Raised */}
            <path d="M22 65 C10 45, 12 30, 26 38 C32 42, 34 56, 30 68 Z" fill="#16a34a" />
            <path d="M98 65 C110 45, 108 30, 94 38 C88 42, 86 56, 90 68 Z" fill="#16a34a" />
          </>
        ) : mood === 'thinking' ? (
          <>
            {/* One wing on cheek thinking */}
            <path d="M25 70 C16 65, 18 85, 26 82 C30 80, 32 75, 25 70 Z" fill="#16a34a" />
            <path d="M95 70 C104 60, 92 48, 76 56 C74 62, 86 68, 95 70 Z" fill="#16a34a" />
          </>
        ) : (
          <>
            {/* Standard Relaxed Wings */}
            <ellipse cx="24" cy="72" rx="8" ry="16" transform="rotate(18 24 72)" fill="#16a34a" />
            <ellipse cx="96" cy="72" rx="8" ry="16" transform="rotate(-18 96 72)" fill="#16a34a" />
          </>
        )}

        {/* Big Expressive Eyes */}
        <circle cx="46" cy="54" r="13" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
        <circle cx="74" cy="54" r="13" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />

        {/* Eye Irises */}
        <circle
          cx={mood === 'thinking' ? 44 : mood === 'celebrating' ? 47 : 48}
          cy={mood === 'thinking' ? 51 : 54}
          r="7"
          fill="#0f172a"
        />
        <circle
          cx={mood === 'thinking' ? 72 : mood === 'celebrating' ? 73 : 72}
          cy={mood === 'thinking' ? 51 : 54}
          r="7"
          fill="#0f172a"
        />

        {/* Eye Catchlights (sparkles) */}
        <circle cx="45" cy="51" r="2.5" fill="#ffffff" />
        <circle cx="71" cy="51" r="2.5" fill="#ffffff" />
        <circle cx="49" cy="56" r="1.2" fill="#ffffff" />
        <circle cx="75" cy="56" r="1.2" fill="#ffffff" />

        {/* Eyeglasses Frame */}
        <circle cx="46" cy="54" r="14.5" fill="none" stroke="#0f172a" strokeWidth="2.8" />
        <circle cx="74" cy="54" r="14.5" fill="none" stroke="#0f172a" strokeWidth="2.8" />
        <path d="M60.5 54 Q60 51 59.5 54" stroke="#0f172a" strokeWidth="3" fill="none" />
        {/* Glasses temple sides */}
        <path d="M31.5 54 L24 50" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M88.5 54 L96 50" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />

        {/* Rosy Cheeks */}
        <ellipse cx="32" cy="66" rx="5" ry="3.5" fill="#fca5a5" opacity="0.8" />
        <ellipse cx="88" cy="66" rx="5" ry="3.5" fill="#fca5a5" opacity="0.8" />

        {/* Beak */}
        {mood === 'speaking' || mood === 'celebrating' ? (
          <g>
            <polygon points="60,60 51,70 69,70" fill="#f59e0b" stroke="#b45309" strokeWidth="1.8" />
            {/* Open mouth interior */}
            <polygon points="60,65 54,73 66,73" fill="#dc2626" />
            <polygon points="60,76 54,70 66,70" fill="#d97706" />
          </g>
        ) : (
          <polygon
            points="60,60 52,69 68,69"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        )}

        {/* Cute Feet */}
        <ellipse cx="50" cy="106" rx="6" ry="3.5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.2" />
        <ellipse cx="70" cy="106" rx="6" ry="3.5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.2" />

        {/* Teacher Scholar Pagdi / Cap Accent */}
        <g transform={mood === 'celebrating' ? 'rotate(-6 60 30)' : ''}>
          {/* Base Headband */}
          <rect x="42" y="32" width="36" height="7" rx="3.5" fill="#ea580c" stroke="#9a3412" strokeWidth="1.5" />
          {/* Turban crest / Cap Diamond */}
          <path d="M30 32 L60 20 L90 32 L60 38 Z" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
          {/* Golden Badge Ornament */}
          <circle cx="60" cy="32" r="4.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
          <circle cx="60" cy="32" r="2" fill="#ea580c" />
          {/* Golden Tassel */}
          <path d="M60 24 Q82 25 84 35" stroke="#facc15" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="84" cy="35" r="2.5" fill="#eab308" />
        </g>
      </svg>
    </div>
  );
};
