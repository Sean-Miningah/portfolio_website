import { SiKaggle, SiLinkedin, SiGithub } from 'react-icons/si';
import { RiMenuFoldLine } from 'react-icons/ri';

type Props = {
  setIsOpen: (value: boolean) => void;
}


const NavBar = ({ setIsOpen }: Props) => {
  return (
    <div
      className="
        flex 
        py-4 
        px-6
        justify-between 
        items-center 
        sticky 
        top-0 
        z-10
        shadow-md
        bg-orange-100
        "
    >
      <a
        href="#about"
      >
        <p
          className="text-l font-sigmar md:text-2xl lg:text-4xl" 
        >
          Sean
        </p>
      </a>
      
      <div className="flex flex-row gap-4">
        <div className="hidden md:flex gap-3 items-center cursor-wait">
          <div 
            className="
              font-poppins
              hover:scale-125
              transition-all
              ease-out
              duration-75
              cursor-pointer
            "
          >
            <a href="#about">
              About
            </a>
          </div>
          <div 
            className="
              font-poppins
              hover:scale-125
              transition
              ease-out
            "
          >
            <a href="#skills">
              Skills
            </a>
          </div>
          <div
            className="
              font-poppins
              hover:scale-125
              transition
              ease-out
            "
          >
            <a href="#projects">
              Projects
            </a>
          </div>
          <div 
            className="
              font-poppins
              hover:scale-125
              transition
              ease-out
            "
            >
            <a href="#contacts">
              Contact
            </a>
          </div>
        </div>

        <div>
          <a 
            href='/resume/resume.pdf'
            download
            className="
              py-2 
              px-3 
              border-[1px] 
              border-green-600 
              rounded-md 
              hover:bg-green-700 
              hover:text-orange-300 
              transition-all 
              cursor-pointer
            ">Resume</a>
        </div>
      </div>
      
      
      <div
        onClick={() => setIsOpen(true)}
        className="
          block
          md:hidden
        "
      >
        <RiMenuFoldLine size={30}/>
      </div>
    </div>
  )
}

export default NavBar;