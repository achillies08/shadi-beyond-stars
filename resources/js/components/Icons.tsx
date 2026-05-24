import React from 'react';

export const LogoIcon = () => (
    <svg className="w-11 h-11 object-contain opacity-90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="92" stroke="url(#goldRing)" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="75" stroke="url(#goldRing)" strokeWidth="0.8" opacity="0.6" />
        <rect x="60" y="60" width="80" height="80" stroke="url(#goldRing)" strokeWidth="0.8" opacity="0.55" />
        <line x1="60" y1="60" x2="100" y2="100" stroke="url(#goldRing)" strokeWidth="0.7" opacity="0.45" />
        <line x1="140" y1="60" x2="100" y2="100" stroke="url(#goldRing)" strokeWidth="0.7" opacity="0.45" />
        <line x1="60" y1="140" x2="100" y2="100" stroke="url(#goldRing)" strokeWidth="0.7" opacity="0.45" />
        <line x1="140" y1="140" x2="100" y2="100" stroke="url(#goldRing)" strokeWidth="0.7" opacity="0.45" />
        <g opacity="0.9">
            <path d="M70 110 C62 105 58 100 62 94 C65 89 70 90 72 95 L74 105 C76 108 78 112 82 114 C86 116 92 115 95 118 C98 121 96 126 93 126 C88 126 82 122 76 118 L70 110Z" fill="url(#handGrad)" />
            <circle cx="78" cy="108" r="2.5" fill="#D4AC5E" opacity="0.5" />
            <circle cx="83" cy="114" r="1.8" fill="#D4AC5E" opacity="0.4" />
            <circle cx="75" cy="112" r="1.5" fill="#D4AC5E" opacity="0.35" />
        </g>
        <g opacity="0.9">
            <path d="M130 110 C138 105 142 100 138 94 C135 89 130 90 128 95 L126 105 C124 108 122 112 118 114 C114 116 108 115 105 118 C102 121 104 126 107 126 C112 126 118 122 124 118 L130 110Z" fill="url(#handGrad2)" />
        </g>
        <ellipse cx="100" cy="120" rx="7" ry="5" fill="none" stroke="url(#goldRing)" strokeWidth="1.2" />
        <polygon points="100,112 105,117 100,122 95,117" fill="url(#diamondGrad)" opacity="0.9" />
        <g opacity="0.45" stroke="#D4AC5E" strokeWidth="1">
            <line x1="100" y1="8" x2="100" y2="15" /><line x1="100" y1="185" x2="100" y2="192" />
            <line x1="8" y1="100" x2="15" y2="100" /><line x1="185" y1="100" x2="192" y2="100" />
            <line x1="35" y1="35" x2="40" y2="40" /><line x1="160" y1="35" x2="165" y2="40" />
            <line x1="35" y1="165" x2="40" y2="160" /><line x1="160" y1="165" x2="165" y2="160" />
        </g>
        <defs>
            <linearGradient id="goldRing" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#E8C060" /><stop offset="50%" stopColor="#D4AC5E" /><stop offset="100%" stopColor="#E8C060" /></linearGradient>
            <linearGradient id="handGrad" x1="60" y1="90" x2="100" y2="130" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#E8C060" /><stop offset="100%" stopColor="#A07020" /></linearGradient>
            <linearGradient id="handGrad2" x1="140" y1="90" x2="100" y2="130" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#E8C060" /><stop offset="100%" stopColor="#A07020" /></linearGradient>
            <linearGradient id="diamondGrad" x1="95" y1="112" x2="105" y2="122" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#F5DFA0" /><stop offset="100%" stopColor="#D4AC5E" /></linearGradient>
        </defs>
    </svg>
);

export const WhatsAppIcon = ({ width = 15, height = 15 }: { width?: number; height?: number }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);
