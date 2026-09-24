import React from 'react';

// 3D Isometric Layered Digital Twin City Illustration (Image 3 Left Card)
export function IsometricDigitalTwin({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Isometric Digital Twin City Layers"
    >
      <defs>
        <linearGradient id="layerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eaf6ea" />
          <stop offset="100%" stopColor="#d1e7dd" />
        </linearGradient>
        <linearGradient id="buildingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#138808" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0F5132" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="buildingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34a853" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#138808" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e8e8f5" stopOpacity="0.6" />
        </linearGradient>
        <filter id="cardGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#138808" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Floating Level 1: Bottom Geological / Elevation Contour Layer */}
      <g transform="translate(0, 140)" filter="url(#cardGlow)">
        {/* Isometric Rhombus Plane */}
        <polygon points="160,20 280,85 160,150 40,85" fill="#f0f7f2" stroke="#138808" strokeWidth="2.5" />
        <polygon points="40,85 160,150 160,162 40,97" fill="#c3e6cb" stroke="#138808" strokeWidth="2" />
        <polygon points="160,150 280,85 280,97 160,162" fill="#a3cfbb" stroke="#138808" strokeWidth="2" />
        
        {/* Topographic Contour Lines */}
        <path d="M70,82 Q120,60 160,80 T250,83" stroke="#138808" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        <path d="M90,95 Q140,80 180,100 T230,95" stroke="#138808" strokeWidth="1.5" fill="none" />
        <path d="M120,110 Q160,100 200,120" stroke="#138808" strokeWidth="1.5" fill="none" />
        {/* Small Parcel zoning blocks on base */}
        <polygon points="90,88 120,72 135,80 105,96" fill="#81c784" opacity="0.6" />
        <polygon points="170,110 210,90 225,98 185,118" fill="#aed581" opacity="0.6" />
      </g>

      {/* Floating Level 2: Middle Cadastral & Infrastructure Grid Layer */}
      <g transform="translate(0, 75)">
        {/* Transparent grid layer */}
        <polygon points="160,20 280,85 160,150 40,85" fill="#ffffff" fillOpacity="0.82" stroke="#138808" strokeWidth="2.2" />
        {/* Internal grid mesh lines */}
        <line x1="80" y1="63" x2="200" y2="128" stroke="#138808" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="120" y1="41" x2="240" y2="106" stroke="#138808" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="100" y1="118" x2="220" y2="53" stroke="#138808" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="140" y1="139" x2="260" y2="74" stroke="#138808" strokeWidth="1" strokeOpacity="0.4" />
        
        {/* Land Use Sub-divisions */}
        <polygon points="110,75 145,56 160,64 125,83" fill="#c8e6c9" stroke="#138808" strokeWidth="1.2" />
        <polygon points="170,72 215,48 230,56 185,80" fill="#fff9c4" stroke="#e65100" strokeWidth="1.2" strokeOpacity="0.7" />
        <polygon points="135,100 175,78 190,86 150,108" fill="#e1f5fe" stroke="#000080" strokeWidth="1.2" strokeOpacity="0.6" />
      </g>

      {/* Floating Level 3: Top 3D Isometric Buildings & Digital Twin Cityscape */}
      <g transform="translate(0, 10)">
        {/* Top Floating Glass Substrate */}
        <polygon points="160,20 280,85 160,150 40,85" fill="none" stroke="#138808" strokeWidth="2.5" />
        
        {/* Building 1 - Central Skyscraper */}
        <g transform="translate(145, 10)">
          {/* Top */}
          <polygon points="15,-10 35,2 15,14 -5,2" fill="#c8e6c9" stroke="#138808" strokeWidth="1.5" />
          {/* Left Face */}
          <polygon points="-5,2 15,14 15,64 -5,52" fill="url(#buildingGrad1)" stroke="#138808" strokeWidth="1.5" />
          {/* Right Face */}
          <polygon points="15,14 35,2 35,52 15,64" fill="url(#buildingGrad2)" stroke="#138808" strokeWidth="1.5" />
          {/* Architectural Window Grid */}
          <line x1="0" y1="18" x2="10" y2="24" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="0" y1="32" x2="10" y2="38" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="0" y1="46" x2="10" y2="52" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="20" y1="24" x2="30" y2="18" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="20" y1="38" x2="30" y2="32" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="20" y1="52" x2="30" y2="46" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />
        </g>

        {/* Building 2 - Left Tower */}
        <g transform="translate(105, 30)">
          <polygon points="12,-5 28,4 12,13 -4,4" fill="#d1e7dd" stroke="#138808" strokeWidth="1.5" />
          <polygon points="-4,4 12,13 12,48 -4,39" fill="#207e37" stroke="#138808" strokeWidth="1.5" />
          <polygon points="12,13 28,4 28,39 12,48" fill="#2fa84f" stroke="#138808" strokeWidth="1.5" />
        </g>

        {/* Building 3 - Right Modern Block */}
        <g transform="translate(180, 25)">
          <polygon points="15,-6 32,3 15,12 -2,3" fill="#eaf6ea" stroke="#138808" strokeWidth="1.5" />
          <polygon points="-2,3 15,12 15,44 -2,35" fill="#138808" stroke="#138808" strokeWidth="1.5" />
          <polygon points="15,12 32,3 32,35 15,44" fill="#3bb75e" stroke="#138808" strokeWidth="1.5" />
        </g>

        {/* Building 4 - Front Low-rise Research Block */}
        <g transform="translate(135, 60)">
          <polygon points="14,-4 30,5 14,14 -2,5" fill="#c8e6c9" stroke="#138808" strokeWidth="1.5" />
          <polygon points="-2,5 14,14 14,34 -2,25" fill="#0f5132" stroke="#138808" strokeWidth="1.5" />
          <polygon points="14,14 30,5 30,25 14,34" fill="#1e7e34" stroke="#138808" strokeWidth="1.5" />
        </g>
        
        {/* Data Stream Signal / Radar Wave */}
        <circle cx="160" cy="18" r="8" fill="none" stroke="#FF9933" strokeWidth="1.5" strokeDasharray="2 2">
          <animate attributeName="r" values="4;14;4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="18" r="3" fill="#FF9933" />
      </g>
    </svg>
  );
}

// 3D Isometric Geospatial Grid & Node Platform (Image 3 Right Card)
export function IsometricGeospatialPlatform({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Isometric Geospatial Platform Grid"
    >
      <defs>
        <filter id="geoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#138808" floodOpacity="0.15" />
        </filter>
        <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#138808" />
          <stop offset="100%" stopColor="#0F5132" />
        </linearGradient>
      </defs>

      {/* Ground Projection Shadow */}
      <polygon points="160,105 285,175 160,245 35,175" fill="#f0f7f2" stroke="#138808" strokeWidth="2.5" filter="url(#geoGlow)" />
      {/* 3D Base Thickness */}
      <polygon points="35,175 160,245 160,256 35,186" fill="#c3e6cb" stroke="#138808" strokeWidth="2" />
      <polygon points="160,245 285,175 285,186 160,256" fill="#a3cfbb" stroke="#138808" strokeWidth="2" />

      {/* Perspective Coordinate Grid Lines (4x4 Grid) */}
      {/* Diagonals from top-left to bottom-right */}
      <line x1="66" y1="157" x2="191" y2="227" stroke="#138808" strokeWidth="2" strokeOpacity="0.65" />
      <line x1="97" y1="140" x2="222" y2="210" stroke="#138808" strokeWidth="2" strokeOpacity="0.65" />
      <line x1="128" y1="122" x2="253" y2="192" stroke="#138808" strokeWidth="2" strokeOpacity="0.65" />

      {/* Diagonals from top-right to bottom-left */}
      <line x1="254" y1="157" x2="129" y2="227" stroke="#138808" strokeWidth="2" strokeOpacity="0.65" />
      <line x1="223" y1="140" x2="98" y2="210" stroke="#138808" strokeWidth="2" strokeOpacity="0.65" />
      <line x1="192" y1="122" x2="67" y2="192" stroke="#138808" strokeWidth="2" strokeOpacity="0.65" />

      {/* Highlighted Geospatial Cell / Parcel */}
      <polygon points="160,140 191,157 160,175 129,157" fill="#c8e6c9" fillOpacity="0.8" stroke="#138808" strokeWidth="2.5" />

      {/* Coordinate Pin Markers (As seen in Image 3 right card) */}
      
      {/* Pin 1 - Center North (160, 95) */}
      <g transform="translate(160, 92)">
        <ellipse cx="0" cy="18" rx="8" ry="4" fill="#000000" fillOpacity="0.15" />
        <path
          d="M0 16 C-1 16 -10 6 -10 -2 C-10 -9 -5 -14 0 -14 C5 -14 10 -9 10 -2 C10 6 1 16 0 16 Z"
          fill="#138808"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <circle cx="0" cy="-2" r="3.5" fill="#FFFFFF" />
      </g>

      {/* Pin 2 - East Node (222, 127) */}
      <g transform="translate(222, 127)">
        <ellipse cx="0" cy="18" rx="8" ry="4" fill="#000000" fillOpacity="0.15" />
        <path
          d="M0 16 C-1 16 -10 6 -10 -2 C-10 -9 -5 -14 0 -14 C5 -14 10 -9 10 -2 C10 6 1 16 0 16 Z"
          fill="#138808"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <circle cx="0" cy="-2" r="3.5" fill="#FFFFFF" />
      </g>

      {/* Pin 3 - West Node (98, 127) */}
      <g transform="translate(98, 127)">
        <ellipse cx="0" cy="18" rx="8" ry="4" fill="#000000" fillOpacity="0.15" />
        <path
          d="M0 16 C-1 16 -10 6 -10 -2 C-10 -9 -5 -14 0 -14 C5 -14 10 -9 10 -2 C10 6 1 16 0 16 Z"
          fill="#138808"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <circle cx="0" cy="-2" r="3.5" fill="#FFFFFF" />
      </g>

      {/* Pin 4 - Center Highlight with Saffron Alert (160, 162) */}
      <g transform="translate(160, 162)">
        <ellipse cx="0" cy="18" rx="9" ry="4.5" fill="#000000" fillOpacity="0.2" />
        <circle cx="0" cy="18" r="14" fill="none" stroke="#FF9933" strokeWidth="1.5" strokeDasharray="3 3">
          <animate attributeName="r" values="8;20;8" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <path
          d="M0 16 C-1 16 -11 6 -11 -2 C-11 -10 -6 -15 0 -15 C6 -15 11 -10 11 -2 C11 6 1 16 0 16 Z"
          fill="#FF9933"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <circle cx="0" cy="-2" r="4" fill="#FFFFFF" />
      </g>

      {/* Radar Scan Wave */}
      <path
        d="M60 170 Q160 215 260 170"
        stroke="#138808"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeDasharray="4 4"
        fill="none"
      />
    </svg>
  );
}
