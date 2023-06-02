import Image from 'next/image';
import React from 'react';

import { CiTwitter } from 'react-icons/ci';
import { SiGmail } from 'react-icons/si';
import { BsPhoneFill } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';

type Props = {}

function Contacts({}: Props) {
  return (
    <section 
      id="contacts"
      className="
        py-4 
        md:py-8 
        px-2 
        md:px-6
        flex
        flex-col
        gap-2
        md:gap-4
        lg:gap-6
        items-center
      "
    >
      <div className="font-bold text-green-800 uppercase py-14">My Contacts</div>
      <div
        className="flex flex-row w-full items-center justify-between md:max-w-[600px]"
      >
        <div
          className="hidden md:block relative w-1/3 h-[200px]"
        >
          <Image 
            fill
            alt="contact image"
            src='/images/contact.svg'
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="flex flex-col gap-5"
        >
          <a
            href="mailto:seanpminingah.com?subject = Feedback&body = Message"
            target="_blank"
            className="cursor-pointer flex flex-row gap-4 items-center min-w-[200px]"
          >
            <SiGmail size={50} className="text-green-800"/>
            <p className="text-green-900"> seanpminingah@gmail.com</p>
          </a>
          <a
            href="https://twitter.com/SeanMiningah"
            target="_blank"
            className="cursor-pointer flex flex-row gap-4 items-center min-w-[200px]"
          >
            <CiTwitter size={50} className="text-green-800"/>
            <p className="text-green-900"> @SeanMiningah</p>
          </a>
          <a
            href="tel:254720871556"
            target="_blank"
            className="cursor-pointer flex flex-row gap-4 items-center min-w-[200px]"
          >
            <BsPhoneFill size={50} className="text-green-800"/>
            <p className="text-green-900"> +254720761556</p>
          </a>
          <a
            href="https://github.com/Sean-Miningah"
            target="_blank"
            className="flex flex-row gap-4 items-center min-w-[200px] cursor-pointer"
          >
            <FaGithubAlt size={50} className="text-green-800"/>
            <p className="text-green-900">github.com/Sean-Miningah</p>
          </a>
        </div> 
      </div>
    </section >
  )
}

export default Contacts