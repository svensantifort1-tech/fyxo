const LightningBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMaxYMin meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="lg-heavy">
          <feGaussianBlur stdDeviation="12" result="b1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b2" />
          <feMerge><feMergeNode in="b1" /><feMergeNode in="b2" /></feMerge>
        </filter>
        <filter id="lg-soft"><feGaussianBlur stdDeviation="25" /></filter>
        <filter id="lg-mid"><feGaussianBlur stdDeviation="6" /></filter>
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

      {/* All lightning shifted to top-right quadrant: x ~900-1350, y ~20-500 */}

      {/* Ambient glow */}
      <path
        d="M1320 20 Q1290 60 1265 100 Q1245 135 1225 165 Q1200 205 1175 240 Q1155 270 1135 305 Q1115 340 1095 370 Q1070 410 1045 445 Q1030 468 1015 490"
        fill="none" stroke="hsl(217, 91%, 60%)" strokeWidth="35" filter="url(#lg-soft)" opacity="0.18"
      />

      {/* Main bolt */}
      <path
        d="M1320 20 Q1292 58 1268 98 Q1248 132 1228 163 Q1203 203 1178 238 Q1158 268 1138 303 Q1118 338 1098 368 Q1073 408 1048 443 Q1033 466 1018 488"
        fill="none" stroke="url(#bg-main)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#lg-heavy)" opacity="0.75"
      />

      {/* Branch 1 - top */}
      <path d="M1292 58 Q1270 45 1255 58 Q1240 70 1225 62" fill="none" stroke="url(#bg-br)" strokeWidth="2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.5" />
      <path d="M1255 58 Q1245 48 1235 52" fill="none" stroke="url(#bg-br)" strokeWidth="1.2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.3" />
      <path d="M1255 58 Q1250 70 1238 76" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.25" />

      {/* Branch 2 - upper right */}
      <path d="M1268 98 Q1290 110 1300 135 Q1308 155 1325 162" fill="none" stroke="url(#bg-br)" strokeWidth="1.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.45" />
      <path d="M1300 135 Q1312 130 1318 138" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.22" />

      {/* Branch 3 - upper left */}
      <path d="M1228 163 Q1200 150 1185 158 Q1170 165 1155 155" fill="none" stroke="url(#bg-br)" strokeWidth="2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.5" />
      <path d="M1185 158 Q1175 148 1165 152" fill="none" stroke="url(#bg-br)" strokeWidth="1.1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.28" />
      <path d="M1185 158 Q1182 170 1172 175" fill="none" stroke="url(#bg-br)" strokeWidth="0.9" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.22" />

      {/* Branch 4 - mid right */}
      <path d="M1178 238 Q1200 250 1210 275 Q1218 295 1235 305" fill="none" stroke="url(#bg-br)" strokeWidth="1.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.42" />
      <path d="M1210 275 Q1222 270 1228 278" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.22" />
      <path d="M1210 275 Q1208 290 1220 298" fill="none" stroke="url(#bg-br)" strokeWidth="0.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 5 - mid left, long */}
      <path d="M1158 268 Q1130 255 1115 262 Q1100 270 1085 258 Q1072 248 1058 255" fill="none" stroke="url(#bg-br)" strokeWidth="2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.48" />
      <path d="M1115 262 Q1105 252 1095 258" fill="none" stroke="url(#bg-br)" strokeWidth="1.1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.28" />
      <path d="M1085 258 Q1078 270 1065 275" fill="none" stroke="url(#bg-br)" strokeWidth="0.9" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.22" />
      <path d="M1115 262 Q1110 278 1098 282" fill="none" stroke="url(#bg-br)" strokeWidth="0.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 6 - mid-lower right */}
      <path d="M1138 303 Q1158 318 1165 345 Q1170 365 1185 375" fill="none" stroke="url(#bg-br)" strokeWidth="1.6" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.38" />
      <path d="M1165 345 Q1178 340 1182 350" fill="none" stroke="url(#bg-br)" strokeWidth="0.9" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 7 - lower left */}
      <path d="M1098 368 Q1075 355 1060 362 Q1045 370 1030 358 Q1018 348 1005 355" fill="none" stroke="url(#bg-br)" strokeWidth="1.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.4" />
      <path d="M1060 362 Q1052 352 1042 358" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.25" />
      <path d="M1030 358 Q1022 368 1012 365" fill="none" stroke="url(#bg-br)" strokeWidth="0.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.18" />
      <path d="M1060 362 Q1058 378 1045 382" fill="none" stroke="url(#bg-br)" strokeWidth="0.9" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 8 - lower right */}
      <path d="M1098 368 Q1118 385 1122 410 Q1125 430 1140 440" fill="none" stroke="url(#bg-br)" strokeWidth="1.5" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.32" />

      {/* Branch 9 - bottom left */}
      <path d="M1048 443 Q1030 432 1018 440 Q1005 448 992 438" fill="none" stroke="url(#bg-br)" strokeWidth="1.6" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.35" />
      <path d="M1018 440 Q1010 432 1000 436" fill="none" stroke="url(#bg-br)" strokeWidth="0.9" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />

      {/* Branch 10 - bottom right */}
      <path d="M1048 443 Q1062 458 1060 478 Q1058 492 1068 502" fill="none" stroke="url(#bg-br)" strokeWidth="1.4" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.3" />
      <path d="M1060 478 Q1072 475 1078 482" fill="none" stroke="url(#bg-br)" strokeWidth="0.8" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.18" />

      {/* Secondary bolt */}
      <path
        d="M1300 35 Q1278 72 1258 115 Q1240 150 1222 190 Q1200 235 1180 275 Q1162 310 1142 348 Q1120 390 1100 425 Q1085 452 1068 478"
        fill="none" stroke="url(#bg-br)" strokeWidth="1.8" strokeLinecap="round" filter="url(#lg-heavy)" opacity="0.28"
      />
      <path d="M1258 115 Q1240 105 1228 112 Q1218 120 1205 112" fill="none" stroke="url(#bg-br)" strokeWidth="1.2" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.22" />
      <path d="M1222 190 Q1240 200 1248 222" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />
      <path d="M1142 348 Q1122 338 1110 345 Q1100 352 1088 342" fill="none" stroke="url(#bg-br)" strokeWidth="1.1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.2" />
      <path d="M1180 275 Q1162 265 1150 272" fill="none" stroke="url(#bg-br)" strokeWidth="1" strokeLinecap="round" filter="url(#lg-mid)" opacity="0.18" />
    </svg>
  );
};

export default LightningBackground;
