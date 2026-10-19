import React from 'react';

interface NamvietLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const NamvietLogo: React.FC<NamvietLogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'dark',
  size = 'md',
}) => {
  // Height scale helper
  const sizeStyles = {
    sm: { height: 40, width: variant === 'mark' ? 42 : variant === 'horizontal' ? 170 : 130 },
    md: { height: 56, width: variant === 'mark' ? 60 : variant === 'horizontal' ? 240 : 180 },
    lg: { height: 76, width: variant === 'mark' ? 82 : variant === 'horizontal' ? 320 : 250 },
    xl: { height: 110, width: variant === 'mark' ? 120 : variant === 'horizontal' ? 440 : 340 },
  }[size];

  const isLight = theme === 'light';

  // The Multimodal "V" Emblem
  const renderMark = () => (
    <svg
      viewBox="0 0 500 360"
      className="overflow-visible"
      style={{ height: '100%', width: 'auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Core Electric Blue & Cyan Gradients */}
        <linearGradient id="nvCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="50%" stopColor="#0080FF" />
          <stop offset="100%" stopColor="#0038A8" />
        </linearGradient>

        <linearGradient id="nvRibbonGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#00B4D8" />
          <stop offset="35%" stopColor="#0077B6" />
          <stop offset="70%" stopColor="#0096C7" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>

        <linearGradient id="nvShipHull" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B2545" />
          <stop offset="100%" stopColor="#021124" />
        </linearGradient>

        <linearGradient id="nvRedKeel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#9B1B28" />
        </linearGradient>

        <linearGradient id="nvContainerBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0077B6" />
          <stop offset="100%" stopColor="#03045E" />
        </linearGradient>

        <linearGradient id="nvContainerBlue2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>

        <linearGradient id="nvHighwayGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0096C7" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#48CAE4" />
        </linearGradient>

        <linearGradient id="nvTrainBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>

        <linearGradient id="nvPlaneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        <filter id="cyanNeon" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 1. BACKGROUND GLOW & SPEED TRAILS (THE "V" ROUTE GEOMETRY) */}
      <path
        d="M 50 40 L 265 240 L 440 70"
        stroke="url(#nvCyanGlow)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
        filter="url(#cyanNeon)"
      />
      <path
        d="M 75 60 L 265 245 L 420 85"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeDasharray="8 6"
        opacity="0.8"
      />

      {/* 2. THE SIGNATURE BOTTOM AERODYNAMIC SWOOP RIBBON (UNDER THE V) */}
      <path
        d="M 50 45 C 90 120 180 280 270 250 C 330 230 380 180 430 80 C 410 130 350 240 270 265 C 170 295 90 140 45 40 Z"
        fill="url(#nvRibbonGrad)"
        filter="url(#cyanNeon)"
      />
      <path
        d="M 60 55 C 110 140 180 270 270 245 C 330 225 385 165 425 90"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* 3. LEFT ARM OF THE "V": CARGO SHIP & CONTAINERS */}
      {/* Ship Hull Wedge */}
      <g transform="translate(0, 0)">
        {/* Blue hull base */}
        <polygon
          points="70,55 185,155 175,175 60,75"
          fill="url(#nvShipHull)"
        />
        {/* Red Waterline Keel Stripe */}
        <polygon
          points="62,72 178,172 174,180 58,80"
          fill="url(#nvRedKeel)"
        />
        {/* White Forecastle & Bow */}
        <polygon
          points="85,25 110,48 102,60 78,38"
          fill="#FFFFFF"
        />
        {/* Superstructure Bridge & Radar Mast */}
        <rect x="98" y="20" width="8" height="15" rx="1" fill="#FFFFFF" />
        <rect x="100" y="10" width="3" height="10" fill="#CBD5E1" />
        <line x1="97" y1="14" x2="106" y2="14" stroke="#0284C7" strokeWidth="1.5" />
        {/* Stacked Cargo Containers on Deck */}
        <g>
          {/* Row 1 Containers (Deep Blue) */}
          <rect x="105" y="52" width="18" height="12" rx="1" fill="url(#nvContainerBlue1)" />
          <rect x="124" y="68" width="18" height="12" rx="1" fill="url(#nvContainerBlue2)" />
          <rect x="143" y="84" width="18" height="12" rx="1" fill="url(#nvContainerBlue1)" />
          <rect x="162" y="100" width="16" height="12" rx="1" fill="url(#nvContainerBlue2)" />
          {/* Row 2 Containers (Electric Blue) */}
          <rect x="112" y="42" width="16" height="11" rx="1" fill="url(#nvContainerBlue2)" />
          <rect x="129" y="57" width="16" height="11" rx="1" fill="url(#nvContainerBlue1)" />
          <rect x="147" y="73" width="16" height="11" rx="1" fill="url(#nvContainerBlue2)" />
          {/* Row 3 Top Containers */}
          <rect x="120" y="32" width="15" height="10" rx="1" fill="#0284C7" />
          <rect x="136" y="47" width="15" height="10" rx="1" fill="#38BDF8" />
        </g>
      </g>

      {/* 4. CENTER CROOK: FREIGHT TRAIN & TOWER CONTAINERS */}
      <g transform="translate(0, 0)">
        {/* Vertical Stacked Intermodal Terminal Containers */}
        <rect x="188" y="130" width="18" height="38" rx="2" fill="url(#nvContainerBlue1)" stroke="#38BDF8" strokeWidth="0.8" />
        <line x1="188" y1="142" x2="206" y2="142" stroke="#38BDF8" strokeWidth="0.8" />
        <line x1="188" y1="155" x2="206" y2="155" stroke="#38BDF8" strokeWidth="0.8" />
        <rect x="207" y="115" width="20" height="53" rx="2" fill="url(#nvContainerBlue2)" stroke="#00E5FF" strokeWidth="0.8" />
        <line x1="207" y1="132" x2="227" y2="132" stroke="#00E5FF" strokeWidth="0.8" />
        <line x1="207" y1="149" x2="227" y2="149" stroke="#00E5FF" strokeWidth="0.8" />

        {/* High-Speed Bullet Locomotive emerging on track */}
        <g transform="rotate(-36 295 130)">
          {/* Locomotive Body */}
          <path
            d="M 270 100 C 275 88 290 85 305 92 L 340 108 L 335 128 L 275 118 Z"
            fill="url(#nvTrainBody)"
          />
          {/* Windshield */}
          <path d="M 285 92 L 305 98 L 302 106 L 282 102 Z" fill="#0B192C" />
          {/* Red & Blue Aerodynamic Livery Bands */}
          <path d="M 278 108 L 338 122 L 336 125 L 277 112 Z" fill="#E63946" />
          <path d="M 275 113 L 335 127 L 334 130 L 274 116 Z" fill="#0066FF" />
          {/* Headlights */}
          <circle cx="282" cy="107" r="2.5" fill="#00E5FF" filter="url(#cyanNeon)" />
          <circle cx="295" cy="112" r="2" fill="#00E5FF" />
        </g>
      </g>

      {/* 5. RIGHT ARM OF THE "V": HIGHWAY CONVOY OF TRUCKS */}
      <g>
        {/* Glowing highway lane */}
        <polygon
          points="255,230 420,90 435,98 270,240"
          fill="url(#nvHighwayGrad)"
        />
        {/* Speed lines */}
        <line x1="265" y1="230" x2="425" y2="92" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="12 8" />

        {/* Truck 1 (Lower Right) */}
        <g transform="translate(262, 195) rotate(-38)">
          {/* Trailer Box with NAMVIET text styling */}
          <rect x="0" y="0" width="38" height="15" rx="1.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="0.8" />
          <text x="5" y="10" fill="#0048BA" fontSize="5" fontWeight="900" fontFamily="sans-serif">
            NAMVIỆT
          </text>
          {/* Cab */}
          <path d="M 38 3 L 48 4 L 46 14 L 38 14 Z" fill="#E2E8F0" />
          <rect x="42" y="4" width="4" height="4" fill="#0B192C" />
          {/* Wheels */}
          <circle cx="6" cy="16" r="2.5" fill="#1E293B" />
          <circle cx="12" cy="16" r="2.5" fill="#1E293B" />
          <circle cx="44" cy="16" r="2.5" fill="#1E293B" />
        </g>

        {/* Truck 2 (Mid Right) */}
        <g transform="translate(315, 150) rotate(-38)">
          <rect x="0" y="0" width="36" height="14" rx="1.5" fill="#FFFFFF" stroke="#0077B6" strokeWidth="0.8" />
          <text x="4" y="9" fill="#0048BA" fontSize="4.5" fontWeight="900" fontFamily="sans-serif">
            NAMVIỆT
          </text>
          <path d="M 36 2 L 45 3 L 44 13 L 36 13 Z" fill="#F8FAFC" />
          <circle cx="6" cy="15" r="2.2" fill="#1E293B" />
          <circle cx="11" cy="15" r="2.2" fill="#1E293B" />
          <circle cx="41" cy="15" r="2.2" fill="#1E293B" />
        </g>

        {/* Truck 3 (Upper Right) */}
        <g transform="translate(365, 108) rotate(-38)">
          <rect x="0" y="0" width="32" height="12" rx="1.5" fill="#FFFFFF" stroke="#00B4D8" strokeWidth="0.8" />
          <text x="4" y="8" fill="#0048BA" fontSize="4" fontWeight="800" fontFamily="sans-serif">
            NAMVIỆT
          </text>
          <path d="M 32 2 L 40 3 L 39 11 L 32 11 Z" fill="#FFFFFF" />
          <circle cx="5" cy="13" r="2" fill="#1E293B" />
          <circle cx="36" cy="13" r="2" fill="#1E293B" />
        </g>
      </g>

      {/* 6. SUMMIT: CLIMBING CARGO AIRPLANE */}
      <g transform="translate(350, 10) rotate(-18)">
        {/* Aircraft Fuselage */}
        <path
          d="M 50 35 C 70 30 110 32 125 36 C 130 38 126 43 118 45 L 30 52 C 24 51 22 47 28 44 Z"
          fill="url(#nvPlaneGrad)"
        />
        {/* Cockpit Glass */}
        <path d="M 115 36 C 120 37 122 39 120 41 L 114 41 Z" fill="#03045E" />
        {/* Main Swept Wing */}
        <polygon
          points="62,42 20,80 32,82 78,44"
          fill="#E2E8F0"
          stroke="#0284C7"
          strokeWidth="0.8"
        />
        {/* Far Wing */}
        <polygon
          points="80,34 95,5 104,7 92,34"
          fill="#CBD5E1"
        />
        {/* Jet Engine Turbofan */}
        <rect x="52" y="55" width="16" height="7" rx="3.5" fill="#334155" />
        <circle cx="66" cy="58.5" r="2.5" fill="#00E5FF" filter="url(#cyanNeon)" />
        {/* Vertical Stabilizer / Tail */}
        <polygon
          points="30,46 10,20 22,20 40,48"
          fill="#0066FF"
        />
        {/* Red / White tail tip accent */}
        <polygon points="12,23 10,20 16,20" fill="#E63946" />
        {/* Contrail / Thrust Jet Trails */}
        <line x1="10" y1="20" x2="-25" y2="10" stroke="#00E5FF" strokeWidth="2" opacity="0.6" strokeDasharray="8 4" />
        <line x1="45" y1="58" x2="10" y2="65" stroke="#38BDF8" strokeWidth="2" opacity="0.7" />
      </g>
    </svg>
  );

  // The Exact 3D Metallic "NAMVIỆT" + "— LOGISTICS • —" Wordmark
  const renderWordmark = () => (
    <svg
      viewBox="0 0 540 135"
      className="overflow-visible"
      style={{ height: '100%', width: 'auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Specular 3D Metallic Blue Gradient for NAMVIET */}
        <linearGradient id="nvTextMetallic" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#48CAE4" />
          <stop offset="35%" stopColor="#0096C7" />
          <stop offset="50%" stopColor="#0077B6" />
          <stop offset="65%" stopColor="#00529B" />
          <stop offset="85%" stopColor="#03045E" />
          <stop offset="100%" stopColor="#001845" />
        </linearGradient>

        <linearGradient id="nvTextHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="30%" stopColor="#90E0EF" />
          <stop offset="70%" stopColor="#0077B6" />
          <stop offset="100%" stopColor="#00B4D8" />
        </linearGradient>

        <linearGradient id="nvLineTaperLeft" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
          <stop offset="70%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>

        <linearGradient id="nvLineTaperRight" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0077B6" />
          <stop offset="30%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </linearGradient>

        <filter id="wordmarkGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Chiseled 3D Typography: NAMVIỆT */}
      <g id="namviet-text">
        {/* Subtle 3D shadow layer */}
        <text
          x="270"
          y="76"
          textAnchor="middle"
          fontSize="72"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', 'Arial Black', sans-serif"
          letterSpacing="4"
          fill={isLight ? '#06162D' : '#010B18'}
          opacity="0.9"
        >
          NAMVIỆT
        </text>

        {/* Primary Gradient Text Layer */}
        <text
          x="270"
          y="74"
          textAnchor="middle"
          fontSize="72"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', 'Arial Black', sans-serif"
          letterSpacing="4"
          fill="url(#nvTextMetallic)"
          stroke="#48CAE4"
          strokeWidth="1.2"
        >
          NAMVIỆT
        </text>

        {/* Crisp Specular Light Overlay for metallic facet reflection */}
        <text
          x="270"
          y="74"
          textAnchor="middle"
          fontSize="72"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', 'Arial Black', sans-serif"
          letterSpacing="4"
          fill="none"
          stroke="url(#nvTextHighlight)"
          strokeWidth="0.8"
          opacity="0.85"
        >
          NAMVIỆT
        </text>
      </g>

      {/* SUB-LINE: "— LOGISTICS • —" WITH TAPERED PRECISION LINES */}
      <g id="logistics-bar" transform="translate(0, 100)">
        {/* Left Tapered Needle Line */}
        <polygon
          points="25,12 135,10 135,14 25,12"
          fill="url(#nvLineTaperLeft)"
        />

        {/* "LOGISTICS" Typography */}
        <text
          x="260"
          y="18"
          textAnchor="middle"
          fontSize="24"
          fontWeight="800"
          fontFamily="'Space Grotesk', 'Plus Jakarta Sans', sans-serif"
          letterSpacing="12"
          fill={isLight ? '#00529B' : '#38BDF8'}
        >
          LOGISTICS
        </text>

        {/* The Signature Geometric Sphere / Dot */}
        <circle
          cx="398"
          cy="12"
          r="6"
          fill="#00E5FF"
          filter="url(#wordmarkGlow)"
        />
        <circle cx="398" cy="12" r="3" fill="#FFFFFF" />

        {/* Right Tapered Needle Line */}
        <polygon
          points="415,10 515,12 415,14 415,10"
          fill="url(#nvLineTaperRight)"
        />
      </g>
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div
        className={`inline-flex items-center justify-center select-none ${className}`}
        style={{ height: sizeStyles.height }}
      >
        {renderMark()}
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div
        className={`inline-flex items-center gap-2 select-none group ${className}`}
        style={{ height: sizeStyles.height }}
      >
        <div style={{ height: sizeStyles.height * 0.95, width: 'auto' }} className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
          {renderMark()}
        </div>
        <div style={{ height: sizeStyles.height * 0.85, width: 'auto' }} className="flex-shrink-0">
          {renderWordmark()}
        </div>
      </div>
    );
  }

  // Full stacked logo: Mark above Wordmark (as in the official master asset)
  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none group ${className}`}
      style={{ minHeight: sizeStyles.height }}
    >
      <div
        className="w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ height: sizeStyles.height * 0.72 }}
      >
        {renderMark()}
      </div>
      <div
        className="w-full flex items-center justify-center -mt-1"
        style={{ height: sizeStyles.height * 0.38 }}
      >
        {renderWordmark()}
      </div>
    </div>
  );
};
