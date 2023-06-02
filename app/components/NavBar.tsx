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
        md:sticky 
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
          Sean Miningah
        </p>
      </a>
      

      <div className="hidden md:flex gap-3 items-center cursor-wait">
        <div 
          className="
            font-poppins
            hover:scale-125
            transition
            ease-out
          "
          >
          <a href="#about">
            Home
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
          <a href="#projects">
            Projects
          </a>
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