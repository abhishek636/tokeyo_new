"use client";

import React, { FC } from "react";
import { motion, type Easing } from "framer-motion";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" as Easing 
    } 
  },
};

const FadeInOnScroll: FC<FadeInOnScrollProps> = ({ children, className }) => {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      // Change `once: true` to `once: false` or remove it
      viewport={{ once: false, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;