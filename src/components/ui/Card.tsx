import type { ReactNode } from "react";
import { motion } from "motion/react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
