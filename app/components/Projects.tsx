import React from 'react';
import { BiCodeBlock } from 'react-icons/bi'

type Props = {}

function Projects({}: Props) {
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
      items-center
      '
    >
      <div className="flex flex-row gap-2 items-center p-4">
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
          "
      >
        <div>one</div>
        <div>two</div>
      </div>
    </div>
  )
}

export default Projects