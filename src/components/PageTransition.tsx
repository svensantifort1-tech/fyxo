import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode, useState, useEffect } from "react";

const JetTrail = ({ isAnimating }: { isAnimating: boolean }) => {
  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      <svg
        className="jet-transition"
        width="80"
        height="40"
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Trail */}
        <line
          x1="0" y1="20" x2="-120" y2="20"
          stroke="url(#trail-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          className="jet-trail-line"
        />
        <defs>
          <linearGradient id="trail-grad-t" x1="0" y1="0" x2="-120" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Fuselage */}
        <path d="M60 20 L20 16 L8 20 L20 24 Z" fill="hsl(var(--foreground))" opacity="0.9" />
        {/* Nose */}
        <path d="M60 20 L72 19 L72 21 Z" fill="hsl(var(--foreground))" opacity="0.7" />
        {/* Wings */}
        <path d="M30 20 L22 8 L18 9 L24 20" fill="hsl(var(--foreground))" opacity="0.8" />
        <path d="M30 20 L22 32 L18 31 L24 20" fill="hsl(var(--foreground))" opacity="0.8" />
        {/* Tail fins */}
        <path d="M12 20 L8 12 L6 13 L10 20" fill="hsl(var(--foreground))" opacity="0.6" />
        <path d="M12 20 L8 28 L6 27 L10 20" fill="hsl(var(--foreground))" opacity="0.6" />
        {/* Engine glow */}
        <circle cx="10" cy="20" r="3" fill="hsl(var(--accent))" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="0.3s" repeatCount="indefinite" />
        </circle>
        {/* Speed lines */}
        <line x1="0" y1="20" x2="-60" y2="20" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
        <line x1="5" y1="16" x2="-40" y2="14" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        <line x1="5" y1="24" x2="-40" y2="26" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      </svg>
    </div>
  );
};

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 0.6, 0.36, 1] as [number, number, number, number],
      delay: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.25,
      ease: [0.22, 0.6, 0.36, 1] as [number, number, number, number],
    },
  },
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPath) {
      setIsAnimating(true);
      setPrevPath(location.pathname);
      const timer = setTimeout(() => setIsAnimating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, prevPath]);

  return (
    <>
      <JetTrail isAnimating={isAnimating} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
