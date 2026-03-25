import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "accent";
  padding?: "sm" | "md" | "lg" | "xl";
}

const sectionVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const paddings = {
  sm: "py-12",
  md: "py-16", 
  lg: "py-20",
  xl: "py-24"
};

const backgrounds = {
  white: "bg-white",
  gray: "bg-gray-50",
  accent: "bg-accent/30"
};

const SectionWrapper = ({ 
  children, 
  className,
  id,
  background = "white",
  padding = "lg"
}: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={sectionVariants}
      className={cn(
        "w-full",
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      <div className="section-wrapper">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
