import { SiAboutdotme } from "react-icons/si";

import { education } from "../data/data";
import History from "./about/History";

type Props = {}

function About({}: Props) {
  return (
    <section
      id="about"
      className="
        flex 
        flex-col 
        items-center 
        justify-center 
        bg-green-800 
        text-white 
        font-poppins 
        py-2
        px-4
        md:p-5 
        lg:p-10
        "
    >
      <div className="flex flex-row max-w-md justify-around items-center pb-4">
        <SiAboutdotme size={42} className="text-orange-200"/>
      </div>

      <div className="border-l-2 border-orange-200 pl-8 py-5 flex flex-col gap-3">
        {education.map((edu, i) => (  
          <History 
            key={i} 
            institution={edu.institution}
            year={edu.year}
            location={edu.location}
            certification={edu.certification}
            description={edu.description} 
          />
        ))}
      </div>
    </section>
  )
}

export default About