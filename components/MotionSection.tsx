"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// ==========================================
// Types — strictly typed, no "any" escapes
// ==========================================

type StaggerProps = {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
};

type ItemProps = {
  children: React.ReactNode;
  y?: number;
  className?: string;
};

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

// ==========================================
// Stagger Container Component
// ==========================================

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0 },
  },
};

export function StaggerIn({
  children,
  delay = 0,
  stagger = 0.06,
  className,
}: StaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        ...containerVariants,
        visible: {
          ...containerVariants.visible,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// ==========================================
// Stagger Item Component (Children of StaggerIn)
// ==========================================

function createItemVariants(y: number): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function StaggerItem({
  children,
  className,
  y = 14,
}: ItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      variants={createItemVariants(y)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// ==========================================
// Standalone FadeIn Component
// ==========================================

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 12,
}: FadeInProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}