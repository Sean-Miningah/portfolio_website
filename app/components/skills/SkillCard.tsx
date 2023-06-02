'use client';

import { IconType } from 'react-icons';
import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../../utils/motion';


type Props = {
  name: string;
  icon: IconType;
  description: string;
  handleClick?: (value: number) => void;
  active?: boolean;
  index: number;
}

function SkillCard({
  name,
  icon : Icon, 
  index,
}: Props) {
  return (
    // <motion.div
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once:false, amount:0.25 }}
    //   variants={fadeIn('right', 'spring', index * 0.8, 0.75)}
    //   className="flex flex-col justify-center items-center gap-3"
    // >
    //   <Icon size={45} className="text-green-900"/>
    //   <p className="text-green-950 font-thin">{name}</p>
    // </motion.div>
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{
        once:false,
        amount:0.25
      }}
      variants={fadeIn('left', 'spring', index, 0.75)}
      className="flex flex-col justify-center items-center gap-3"
    >
      <Icon size={45} className="text-green-900"/>
      <p className="text-green-950 font-thin">{name}</p>
    </motion.div>
  )
}

export default SkillCard