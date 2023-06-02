import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  offscreen: {
    x: 500,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export const yearVariants: Variants = {
  offscreen: {
    x:-500,
    opacity: 0
  },
  onscreen: {
    x:0,
    opacity:1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export const fadeIn = (
  direction:string, 
  type:string, 
  delay:number, 
  duration:number
  ) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    }
  }
})