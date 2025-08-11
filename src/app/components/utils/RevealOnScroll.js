"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
  children,
  once = true,
  rootMargin = "0px 0px -10% 0px",
  className = "reveal",
  visibleClassName = "is-visible",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;

    // Respect reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible, once, rootMargin]);

  return (
    <div ref={ref} className={`${className}${visible ? ` ${visibleClassName}` : ""}`}>
      {children}
    </div>
  );
}
