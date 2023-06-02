import { AiOutlineClose } from 'react-icons/ai'

interface Props{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void
}


export default function Drawer({ 
  isOpen, 
  setIsOpen 
}: Props){
  return (
    <main
      className={
        "fixed overflow-hidden z-20 bg-lime-600 bg-opacity-25 inset-0 transform ease-in-out" + 
        (isOpen 
          ? "transition-opacity opacity opacity-100 duration-500 translate-x-0 "
          : "transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          "w-screen max-w-lg right-0 absolute bg-lime-600 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? " translate-x-0 ": " translate-x-full")
        }
      >
        <article 
          className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full"
        >
          <div 
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose size={30}/>
          </div>
          <div 
            className="
              flex
              flex-col
              items-center
              justify-center
              space-y-10
              pt-24
            "
          >
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              <p className="text-l font-poppins text-2xl">Home</p>
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              <p className="text-l font-poppins text-2xl">About</p>
            </a>
            <a
              href="#Projects"
              onClick={() => setIsOpen(false)}
            >
              <p className="text-l font-poppins text-2xl">Projects</p>
            </a>
          </div>
        </article>
      </section>
      <section 
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  )
}