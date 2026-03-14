const LightningBackground = () => {
  // Static lightning bolt paths from top-right to bottom-left with branches
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1400 900"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="lg-heavy">
          <feGaussianBlur stdDeviation="28" result="b1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b2" />
          <feMerge>
            <feMergeNode in="b1" />
            <feMergeNode in="b2" />
          </feMerge>
        </filter>
        <filter id="lg-soft">
          <feGaussianBlur stdDeviation="45" />
        </filter>
        <filter id="lg-mid">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <linearGradient id="bg-main" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(217, 91%, 70%)" stopOpacity="0.9" />
          <stop offset="40%" stopColor="hsl(210, 85%, 65%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(200, 80%, 55%)" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="bg-branch" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(200, 80%, 55%)" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <path
        d="M1240 10 L1120 150 L1160 170 L1010 320 L1060 345 L880 510 L930 535 L760 720"
        fill="none"
        stroke="hsl(217, 91%, 60%)"
        strokeWidth="50"
        filter="url(#lg-soft)"
        opacity="0.2"
      />

      {/* Main bolt core */}
      <path
        d="M1240 10 L1120 150 L1160 170 L1010 320 L1060 345 L880 510 L930 535 L760 720"
        fill="none"
        stroke="url(#bg-main)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#lg-heavy)"
        opacity="0.75"
      />

      {/* Branch top-right */}
      <path
        d="M1120 150 L1060 110 L1020 170 L970 135"
        fill="none" stroke="url(#bg-branch)" strokeWidth="3" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.5"
      />
      {/* Sub-branch */}
      <path
        d="M1020 170 L990 140 L960 175"
        fill="none" stroke="url(#bg-branch)" strokeWidth="1.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.3"
      />

      {/* Branch mid-left */}
      <path
        d="M1010 320 L940 275 L900 330 L845 290 L810 350"
        fill="none" stroke="url(#bg-branch)" strokeWidth="3" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.45"
      />
      {/* Sub-branch */}
      <path
        d="M900 330 L860 310 L835 355"
        fill="none" stroke="url(#bg-branch)" strokeWidth="1.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.25"
      />

      {/* Branch mid-right */}
      <path
        d="M1060 345 L1110 400 L1080 440 L1130 470"
        fill="none" stroke="url(#bg-branch)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.4"
      />

      {/* Branch lower-left */}
      <path
        d="M880 510 L810 475 L775 520 L720 490"
        fill="none" stroke="url(#bg-branch)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.35"
      />
      {/* Sub-branch */}
      <path
        d="M775 520 L740 505 L715 540"
        fill="none" stroke="url(#bg-branch)" strokeWidth="1.2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2"
      />

      {/* Branch lower-right */}
      <path
        d="M930 535 L970 590 L940 630"
        fill="none" stroke="url(#bg-branch)" strokeWidth="2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.3"
      />

      {/* Secondary bolt */}
      <path
        d="M1180 60 L1070 190 L1105 210 L970 370 L1005 390 L850 560 L760 700"
        fill="none" stroke="url(#bg-branch)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lg-heavy)" opacity="0.3"
      />
      {/* Secondary branch */}
      <path
        d="M970 370 L910 340 L880 390 L840 365"
        fill="none" stroke="url(#bg-branch)" strokeWidth="1.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.25"
      />
      {/* Secondary branch 2 */}
      <path
        d="M1070 190 L1030 240 L1060 265"
        fill="none" stroke="url(#bg-branch)" strokeWidth="1.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2"
      />
    </svg>
  );
};

export default LightningBackground;
