'use client';

import { useRef, useEffect, useCallback } from "react";
import styles from "./page.module.css";
import PartnersMarquee from "./PartnersMarquee"; // server component

export default function MaskedSection() {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  const getScrollProgress = useCallback(() => {
    if (!container.current || !stickyMask.current) return 0;
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  }, [easing]);

  const animate = useCallback(() => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    if (stickyMask.current) {
      stickyMask.current.style.webkitMaskSize =
        (initialMaskSize + maskSizeProgress) * 100 + "%";
    }
    requestAnimationFrame(animate);
  }, [getScrollProgress, initialMaskSize, targetMaskSize]);

  useEffect(() => {
    requestAnimationFrame(animate);
  }, [animate]);

  return (
    <main className={styles.mainmask}>
      <div ref={container} className={styles.containermask}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <PartnersMarquee />
        </div>
      </div>
    </main>
  );
}
