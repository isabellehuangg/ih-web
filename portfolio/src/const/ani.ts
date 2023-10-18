// Testing out animations ..
import type { Variants } from "framer-motion";

export const fadeInAnimation = (direction: string, type: string, delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const a1 = fadeInAnimation("up", "tween", 0.3, 0.7);
export const a2 = fadeInAnimation("up", "tween", 0.5, 0.7);
export const a3 = fadeInAnimation("up", "tween", 0.6, 0.7);
export const a4 = fadeInAnimation("up", "tween", 0.7, 0.7);
export const a5 = fadeInAnimation("up", "tween", 0.8, 0.7);
export const a6 = fadeInAnimation("up", "tween", 0.9, 0.7);
export const a7 = fadeInAnimation("up", "tween", 1.1, 0.7);