import React from 'react';

import { languages, frameworks } from '../data/data';
import SkillCard from './skills/SkillCard';


type Props = {}

function Skills({}: Props) {
  return (
    <div
      className="
        px-5
        my-5
        w-full
        flex
        flex-col
        gap-4
        "
    >
      <div
        className="
          flex
          flex-row
          md:flex-col
          justify-between
          md:justify-evenly
          items-cetner
          gap-4
          py-5
        "
      >
        <div className="flex items-center justify-around">
          <p className="font-semibold text-2xl font-poppins text-green-900 py-2">Programming Languages</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-9">
          {languages.map((value, i) => (
            <SkillCard 
              key={i}
              name={value.name}
              icon={value.icon}
              index={i}
              description={value.description}
            />
          ))}
        </div>
      </div>
      <div
        className="
          flex
          flex-row
          md:flex-col
          justify-between
          md:justify-evenly
          items-cetner
          gap-4
          py-5
          border-t-[1px]
          border-green-600
          md:border-t-0
        "
      >
        <div className="flex items-center justify-around">
          <p className="font-semibold text-2xl font-poppins text-green-900 py-2">Frameworks</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-9">
          {frameworks.map((value, i) => (
            <SkillCard 
              key={i}
              name={value.name}
              icon={value.icon}
              index={i}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills