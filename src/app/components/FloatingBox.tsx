"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

interface FloatingBoxProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  amplitude?: number;
  className?: string;
  axis?: "x" | "y";
}

const FloatingBox: FC<FloatingBoxProps> = ({
  children,
  duration = 5,
  delay = 0,
  amplitude = 10,
  className = "",
  axis = "y"
}) => {
  const floatingVariants = {
    animate: {
      [axis]: [0, -amplitude, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }
    }
  };

  return (
    <motion.div
      animate={{
        [axis]: [0, -amplitude, 0],
      } as any}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingBox;