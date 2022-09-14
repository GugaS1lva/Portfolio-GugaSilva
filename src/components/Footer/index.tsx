import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { 
  TemplateFooterContainer,
  CopyContainer,
  Copy,
  SocialContainer,

 } from './style'


export const Footer = () => {
  return (
    <TemplateFooterContainer>
      <CopyContainer>
        <Copy>
          <span>© 2022</span>
          <span>by Gustavo Silva.</span>
          <span>All rights reserved.</span>
        </Copy>
      </CopyContainer>

      <SocialContainer>
        {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <div className=' flex flex-col items-center m-4'>
          <h3 className='font-bold text-sm'>Email</h3>
          <a className='border-b-[1px] border-transparent hover:border-[#0050FF] hover:text-[#0050FF]' href="mailto:contatogustavosilva017@outlook.com">contatogustavosilva017@outlook.com</a>
        </div>

        {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <div className='flex flex-col items-center mb-4 mx-4'>
          <h3 className='font-bold text-sm'>Telefone</h3>
          <span>(82) 9 8752-4230</span>
          <span>(82) 9 8182-8018</span>
        </div>

        {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <div className='flex flex-col items-center m-4'>
          <h3 className='font-bold text-sm'>Redes Sociais</h3>
          <div className='flex p-5 items-center justify-center'>
            <Link href="https://www.linkedin.com/in/guga-silva-124706233">
              <a className='text-xl pl-1 pr-1 pb-1 border-b-2 border-b-solid border-b-transparent hover:border-b-[#0050FF] hover:text-[#0050FF]' target="_blank"><FaLinkedinIn /></a>
            </Link>
            <Link href="https://www.github.com/GugaS1lva">
              <a className='text-xl pl-1 pr-1 pb-1 border-b-2 border-b-solid border-b-transparent hover:border-b-[#0050FF] hover:text-[#0050FF]' target="_blank"><FaGithub /></a>
            </Link>
            <Link href="https://wa.me/558281828018" target="_blank" >
              <a className='text-xl pl-1 pr-1 pb-1 border-b-2 border-b-solid border-b-transparent hover:border-b-[#0050FF] hover:text-[#0050FF]' target="_blank"><FaWhatsapp /></a>
            </Link>
            <Link href="https://www.instagram.com/50repolhoscozidos/">
              <a className='text-xl pl-1 pr-1 pb-1 border-b-2 border-b-solid border-b-transparent hover:border-b-[#0050FF] hover:text-[#0050FF]' target="_blank"><FaInstagram /></a>
            </Link>
          </div>
        </div>
      </SocialContainer>
    </TemplateFooterContainer>
  )
}
