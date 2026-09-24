import React from 'react';

export function NationalEmblem({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="National Emblem of India"
    >
      {/* Lions Capital Silhouette - Stylized Government Gold / Navy */}
      <g fill="currentColor">
        {/* Central Lion Head */}
        <circle cx="50" cy="28" r="14" />
        <path d="M42 22 C42 16, 58 16, 58 22 C64 24, 62 34, 58 38 C54 42, 46 42, 42 38 Z" />
        {/* Left Lion Head */}
        <circle cx="30" cy="30" r="11" />
        <path d="M22 26 C22 20, 36 22, 36 28 C38 34, 32 38, 28 38 C24 38, 20 34, 22 26 Z" />
        {/* Right Lion Head */}
        <circle cx="70" cy="30" r="11" />
        <path d="M78 26 C78 20, 64 22, 64 28 C62 34, 68 38, 72 38 C76 38, 80 34, 78 26 Z" />
        {/* Torso & Mane Pillar */}
        <path d="M34 40 L66 40 L62 65 L38 65 Z" opacity="0.9" />
        {/* Abacus Base */}
        <rect x="22" y="66" width="56" height="12" rx="2" fill="currentColor" />
        {/* Ashoka Chakra in Center of Abacus */}
        <circle cx="50" cy="72" r="5" fill="#FFFFFF" />
        <circle cx="50" cy="72" r="4.5" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="72" r="1.2" fill="currentColor" />
        {/* Bull on Right, Horse on Left symbols */}
        <circle cx="32" cy="72" r="2.5" fill="#FFFFFF" />
        <circle cx="68" cy="72" r="2.5" fill="#FFFFFF" />
        {/* Bell-shaped Lotus Base */}
        <path d="M28 80 C28 80, 36 94, 50 94 C64 94, 72 80, 72 80 Z" fill="currentColor" opacity="0.85" />
        {/* Base Pedestal */}
        <rect x="20" y="96" width="60" height="5" rx="1.5" fill="currentColor" />
        {/* Text Satyameva Jayate Indicator */}
        <rect x="30" y="104" width="40" height="3" rx="1" fill="currentColor" opacity="0.75" />
      </g>
    </svg>
  );
}

export function StateSealTamilNadu({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Government of Tamil Nadu Seal"
    >
      {/* Outer circular gold/green border */}
      <circle cx="50" cy="50" r="47" fill="#FFFFFF" stroke="#0F5132" strokeWidth="3" />
      <circle cx="50" cy="50" r="43" fill="#eaf6ea" stroke="#FF9933" strokeWidth="1.5" />
      
      {/* Gopuram (Temple Tower) Outline */}
      <path
        d="M32 68 L68 68 L65 58 L35 58 Z"
        fill="#0F5132"
      />
      <path
        d="M36 56 L64 56 L62 46 L38 46 Z"
        fill="#0F5132"
      />
      <path
        d="M40 44 L60 44 L58 35 L42 35 Z"
        fill="#0F5132"
      />
      <path
        d="M44 33 L56 33 L54 24 L46 24 Z"
        fill="#0F5132"
      />
      {/* Kalasam peaks */}
      <rect x="48.5" y="18" width="3" height="6" fill="#FF9933" />
      <circle cx="50" cy="18" r="2.5" fill="#FF9933" />
      
      {/* Ashoka Lion crest in center */}
      <circle cx="50" cy="74" r="5" fill="#000080" />
      <path d="M47 79 L53 79 L51 84 L49 84 Z" fill="#000080" />
      
      {/* Two Rice Grain Stalks flanking */}
      <path
        d="M20 50 C20 68, 30 80, 42 84 M80 50 C80 68, 70 80, 58 84"
        stroke="#138808"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
