"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ==========================================
// Types
// ==========================================

type StaggerProps = HTMLMotionProps<"div"> & {
  delay?: number;
  stagger?: number;
};

type ItemProps = HTMLMotionProps<"div"> & {
  y?: number;
};

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

// ==========================================
// Stagger Container Component
// ==========================================

export function StaggerIn({
  children,
  delay = 0,
  stagger = 0.06,
  className,
  ...rest
}: StaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className} {...(rest as any)}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { 
            staggerChildren: stagger, 
            delayChildren: delay 
          },
        },
      }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ==========================================
// Stagger Item Component (Children of StaggerIn)
// ==========================================

export function StaggerItem({ 
  children, 
  className, 
  y = 14, 
  ...rest 
}: ItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className} {...(rest as any)}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(className)}
      {...rest}
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
  ...rest
}: FadeInProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className} {...(rest as any)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}