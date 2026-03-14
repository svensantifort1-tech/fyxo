const LightningBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1400 900"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="lg-heavy">
          <feGaussianBlur stdDeviation="26" result="b1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b2" />
          <feMerge><feMergeNode in="b1" /><feMergeNode in="b2" /></feMerge>
        </filter>
        <filter id="lg-soft"><feGaussianBlur stdDeviation="50" /></filter>
        <filter id="lg-mid"><feGaussianBlur stdDeviation="12" /></filter>
        <linearGradient id="bg-main" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(217, 91%, 70%)" stopOpacity="0.9" />
          <stop offset="40%" stopColor="hsl(210, 85%, 65%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(200, 80%, 55%)" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="bg-br" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(200, 80%, 55%)" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <path
        d="M1260 5 Q1200 80 1150 155 Q1110 210 1080 260 Q1040 330 1000 380 Q960 430 920 490 Q880 545 840 590 Q790 655 740 720 Q710 760 680 800"
        fill="none" stroke="hsl(217, 91%, 60%)" strokeWidth="55" filter="url(#lg-soft)" opacity="0.18"
      />

      {/* Main bolt - smooth curves */}
      <path
        d="M1260 5 Q1210 70 1155 148 Q1115 205 1085 255 Q1045 325 1005 375 Q965 425 925 485 Q885 540 845 588 Q795 650 745 718 Q715 758 685 800"
        fill="none" stroke="url(#bg-main)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#lg-heavy)" opacity="0.75"
      />

      {/* === BRANCHES FROM MAIN BOLT === */}

      {/* Branch 1 - top right, curves left */}
      <path d="M1210 70 Q1170 50 1140 80 Q1110 105 1080 90" fill="none" stroke="url(#bg-br)" strokeWidth="2.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.5" />
      <path d="M1140 80 Q1120 60 1095 70" fill="none" stroke="url(#bg-br)" strokeWidth="1.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.3" />
      <path d="M1140 80 Q1130 100 1105 115" fill="none" stroke="url(#bg-br)" strokeWidth="1.2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.25" />

      {/* Branch 2 - upper right */}
      <path d="M1155 148 Q1190 170 1210 210 Q1225 240 1250 255" fill="none" stroke="url(#bg-br)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.45" />
      <path d="M1210 210 Q1230 200 1245 215" fill="none" stroke="url(#bg-br)" strokeWidth="1.3" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.25" />

      {/* Branch 3 - upper left */}
      <path d="M1085 255 Q1040 230 1005 250 Q970 265 940 245" fill="none" stroke="url(#bg-br)" strokeWidth="2.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.5" />
      <path d="M1005 250 Q985 230 960 240" fill="none" stroke="url(#bg-br)" strokeWidth="1.4" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.28" />
      <path d="M1005 250 Q1000 275 975 285" fill="none" stroke="url(#bg-br)" strokeWidth="1.2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.22" />

      {/* Branch 4 - mid right */}
      <path d="M1005 375 Q1045 395 1065 440 Q1080 475 1110 490" fill="none" stroke="url(#bg-br)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.42" />
      <path d="M1065 440 Q1085 430 1100 445" fill="none" stroke="url(#bg-br)" strokeWidth="1.3" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.22" />
      <path d="M1065 440 Q1060 465 1080 480" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 5 - mid left, long */}
      <path d="M965 425 Q920 395 880 410 Q840 425 805 400 Q775 380 745 395" fill="none" stroke="url(#bg-br)" strokeWidth="2.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.48" />
      <path d="M880 410 Q860 390 840 400" fill="none" stroke="url(#bg-br)" strokeWidth="1.4" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.28" />
      <path d="M805 400 Q790 420 765 425" fill="none" stroke="url(#bg-br)" strokeWidth="1.2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.22" />
      <path d="M880 410 Q870 435 845 445" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 6 - mid-lower right */}
      <path d="M925 485 Q960 510 975 555 Q985 585 1010 600" fill="none" stroke="url(#bg-br)" strokeWidth="2.2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.38" />
      <path d="M975 555 Q995 545 1005 560" fill="none" stroke="url(#bg-br)" strokeWidth="1.1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 7 - lower left */}
      <path d="M845 588 Q800 565 765 580 Q730 595 700 575 Q675 558 650 570" fill="none" stroke="url(#bg-br)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.4" />
      <path d="M765 580 Q750 560 730 568" fill="none" stroke="url(#bg-br)" strokeWidth="1.3" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.25" />
      <path d="M700 575 Q685 590 665 588" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.18" />
      <path d="M765 580 Q760 605 740 615" fill="none" stroke="url(#bg-br)" strokeWidth="1.1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 8 - lower right */}
      <path d="M845 588 Q880 615 890 660 Q895 690 920 705" fill="none" stroke="url(#bg-br)" strokeWidth="2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.32" />

      {/* Branch 9 - bottom left */}
      <path d="M745 718 Q705 700 675 715 Q645 728 620 710" fill="none" stroke="url(#bg-br)" strokeWidth="2.2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.35" />
      <path d="M675 715 Q660 700 640 708" fill="none" stroke="url(#bg-br)" strokeWidth="1.2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 10 - bottom right */}
      <path d="M745 718 Q775 745 770 785 Q768 810 785 830" fill="none" stroke="url(#bg-br)" strokeWidth="2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.3" />
      <path d="M770 785 Q790 780 800 795" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.18" />

      {/* === SECONDARY BOLT === */}
      <path
        d="M1200 40 Q1155 110 1110 185 Q1075 245 1040 310 Q1000 375 965 435 Q930 500 890 565 Q850 630 810 695 Q785 740 755 780"
        fill="none" stroke="url(#bg-br)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lg-heavy)" opacity="0.28"
      />
      {/* Secondary branches */}
      <path d="M1110 185 Q1080 165 1055 180 Q1035 192 1015 178" fill="none" stroke="url(#bg-br)" strokeWidth="1.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.22" />
      <path d="M1040 310 Q1070 330 1085 365" fill="none" stroke="url(#bg-br)" strokeWidth="1.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />
      <path d="M890 565 Q860 550 835 565 Q815 575 795 560" fill="none" stroke="url(#bg-br)" strokeWidth="1.6" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />
      <path d="M965 435 Q935 415 910 430" fill="none" stroke="url(#bg-br)" strokeWidth="1.4" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.18" />
    </svg>
  );
};

export default LightningBackground;
