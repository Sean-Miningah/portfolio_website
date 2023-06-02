import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GoMarkGithub } from "react-icons/go";
import { TbWorldWww } from 'react-icons/tb';

import { SafeProject } from '@/app/interfaces/types';
import { fadeIn } from '@/app/utils/motion';


interface Props<Project> {
  values:Project;
  index: number;
  active: number;
  handleClick: (value: number) => void;
}

function ProjectCard({
  index,
  active,
  handleClick,
  values
}: Props<SafeProject>) {
  return (
    <motion.div
    variants={fadeIn('right', 'spring', index * 0.8, 0.75)}
    className={`relative ${
      active === index ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(index)}
  >
    <div className=" relative w-full h-full bg-orange-900 opacity-50 rounded-[24px]">
      <Image
        src={values.image}
        alt="planet-04"
        fill
        className="absolute w-full h-full object-cover rounded-[24px] filter brightness-110"
      />
    </div>
    {active !== index ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {values.name}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-green-900/70 rounded-b-[24px] mt-[24px]">
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-semibold sm:text-[32px] text-[24px] text-orange-100">
            {values.name}
          </h2>
          <div className="flex flex-row gap-4">
            { values.github_link && (
              <a
                href={values.github_link}
                className="cursor-pointer"
                target="_blank"
              >
                <GoMarkGithub size={28} className="text-orange-100"/>
              </a>
            )}
            
            <a 
              href={values.website_link} 
              className="cursor-pointer"
              target="_blank"
              >
              <TbWorldWww size={28} />
            </a>
          </div>
        </div>
        
        <p 
          className="
           font-normal 
           text-orange-100
           text-[16px] 
           leading-[20.16px]
           uppercase
          ">
         {values.description}
        </p>
          
        <div className="flex flex-row gap-1 flex-wrap">
          {values.concepts.map((concept, i) => (
            <p 
              key={i}
              className="
                font-poppins 
                font-light 
                text-orange-100
                text-sm
              "
            >
              {concept}
            </p>
          ))}
        </div>
        
        
      </div>
    )}
  </motion.div>
  )
}

export default ProjectCard