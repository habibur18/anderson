'use client'

import { motion } from "framer-motion"

export const FadeIn = ({
  children,
  delay = 0
}) => {
  return (
    (<motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>)
  );
}

export const SlideIn = ({
  children,
  direction = "right",
  delay = 0
}) => {
  return (
    (<motion.div
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>)
  );
}

export const ScaleIn = ({
  children,
  delay = 0
}) => {
  return (
    (<motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>)
  );
}

