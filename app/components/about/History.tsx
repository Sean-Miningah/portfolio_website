/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RxDotFilled } from 'react-icons/rx';

import { cardVariants, yearVariants } from '../../utils/motion';


type Props = {
  institution: string;
  year: number | string;
  location: string;
  certification: string;
  description: string;
  link?: string;
}

function History({
  institution,
  year,
  location,
  certification,
  description,
  link
}: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once:true, amount: 0.8 }}
      className="flex flex-col gap-1"
    >
      <motion.div
        variants={yearVariants}
        className="w-fit py-3 relative"
      >
        <div className="absolute -left-[49px]">
          <RxDotFilled size={32} className="text-orange-100"/>
        </div>
        <p className="text-3xl font-medium text-orange-100">{year}</p>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="max-w-2xl"
      >
        <div
          className="
            pt-2 pb-2 px-6 border-[1px] border-orange-100 rounded-xl flex flex-col"
        >
          <p 
            className="
              text-orange-100
              font-poppins 
              text-2xl 
              hover:underline 
              py-3 
              transition 
              ease-in-out
            "
            >
              <span className="font-bold text-orange-100">{institution}</span>, {location}
          </p>
          <p className="font-poppins text-orange-100 text-xl pb-4 font-medium">
            {certification}
          </p>
          <p className="text-orange-100"> 
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
    
  )
}

export default History