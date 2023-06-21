import { SiAboutdotme } from "react-icons/si";

import { education, experience } from "../data/data";
import History from "./about/History";
import Image from "next/image";

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
      <div className="flex flex-row max-w-md gap-4 items-center pb-4">
        {/* <div className="relative w-28 h-28 rounded-3xl overflow-hidden">
          <Image alt="Sean's Selfie" src='/images/profile_photo/sean-self.jpg' fill className="object-cover"/>
        </div> */}
        <div>
          <p className="text-orange-200 text-5xl">About Me</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 pt-3 pb-10">
        <p className="text-orange-200 text-3xl font-semibold">Experience</p>
        <hr/>
        {experience.map((exp, i) => (  
          <History 
            key={i} 
            institution={exp.company}
            year={exp.year}
            location={exp.location}
            certification={exp.position_title}
            description={exp.description} 
          />
        ))}
      </div>
      <div className="border-l-2 border-orange-200 pl-8 py-5 flex flex-col gap-3">
        <p className="text-orange-200 text-3xl font-semibold">Education Background</p>
        <hr/>
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