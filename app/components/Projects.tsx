import React, { useState } from 'react';
import { BiCodeBlock } from 'react-icons/bi'

import { SafeProject } from '../interfaces/types';
import { projects } from '../data/data';
import ProjectCard from './projects/ProjectCard';




type Props = {}

function Projects({}: Props) {
  const [carActive, setCarActive] = useState<number>(0);

  return (
    <div
      id="#projects"
      className='
      bg-green-900
      w-full
      text-orange-100
      py-6
      px-5
      flex
      flex-col
      '
    >
      <div className="flex flex-row gap-2 items-center p-4 justify-center">
        <BiCodeBlock size={45} className="text-orange-100"/>
        <p className="text-4xl">Projects</p>
      </div>
      <div
        className="
          flex 
          flex-col 
          lg:flex-row 
          gap-3 
          py-3 
          lg:gap-5 
          min-h-[70vh]
          h-[500px]
          "
      >
        {projects.map((proj:SafeProject, i) => (
          <ProjectCard 
            key={i}
            values={proj}
            index={i}
            active={carActive}
            handleClick={setCarActive}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects