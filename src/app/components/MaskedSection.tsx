"use client";

import { useRef, useEffect } from "react";
import styles from "./page.module.css";
import PartnersMarquee from "./PartnersMarquee"; // server component

export default function MaskedSection() {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    if (stickyMask.current) {
      stickyMask.current.style.webkitMaskSize =
        (initialMaskSize + maskSizeProgress) * 100 + "%";
    }
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (!container.current || !stickyMask.current) return 0;
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <main className={styles.mainmask}>
      <div ref={container} className={styles.containermask}>
        <div ref={stickyMask} className={styles.stickyMask}>
          {/* Server-rendered component */}
          <PartnersMarquee />
        </div>
      </div>
    </main>
  );
}
