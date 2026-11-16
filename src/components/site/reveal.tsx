"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react"

type RevealProps = HTMLMotionProps<"div"> & {
  as?: "div" | "li"
  delay?: number
  y?: number
}

export function Reveal({ as = "div", delay = 0, y = 24, children, ...props }: RevealProps) {
  const reduce = useReducedMotion()
  const motionProps = {
    initial: reduce ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }
  if (as === "li") {
    return (
      <motion.li {...motionProps} {...(props as HTMLMotionProps<"li">)}>
        {children}
      </motion.li>
    )
  }
  return (
    <motion.div {...motionProps} {...props}>
      {children}
    </motion.div>
  )
}
