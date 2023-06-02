import { TypeAnimation } from 'react-type-animation';
import { SiGithub, SiKaggle, SiLinkedin } from 'react-icons/si'; 
import Link from 'next/link';

type Props = {}



function Hero({}: Props) {
  return (
    <div
      className="
        flex 
        flex-col 
        md:flex-row 
        md:justify-around
        gap-2
        mx-4
        h-[70%]
        md:h-[620px]
        pt-20
        md:pt-30
        md:px-10
        md:gap-3
        lg:gap-3
        lg:px-20
        pb-20
      "
    >
      <div
        className="lg:w-[450px]"
      >
        <p className="text-xl font-poppins pb-3">Hi my name is Sean and I am</p>
        <TypeAnimation 
          sequence={[
            'Python Developer',
            1000,
            'FullStack Developer',
            2000,
            'Software Engineer',
            3000
          ]}
          wrapper="span"
          cursor={true}
          repeat={2}
          className="
            font-sigmar 
            text-6xl
          "
        />
      </div>
      <div>
        <div className="mr-5 md:border-l-2 py-2 border-green-600">
          <div className="flex flex-row md:flex-col gap-3 items-center pl-2">
  
            <a
              href="https://github.com/Sean-Miningah"
              target="_blank"
            >
              <SiGithub 
                size={25} 
                className="text-green-800 hover:scale-125 transition-all ease-out"
              />
            </a>

            <a
              href="https://www.kaggle.com/seanminingah"
              target="_blank"
            >
            <SiKaggle 
              size={60} 
              className="text-green-800 hover:scale-125 transition-all ease-out"
            />
            </a>

            <a
              href="https://www.linkedin.com/in/sean-miningah-876418163/"
              target="_blank"
            >
              <SiLinkedin 
                size={25} 
                className="text-green-800 hover:scale-125 transition-all ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero