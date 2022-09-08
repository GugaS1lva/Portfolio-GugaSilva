import Link from 'next/link'
import React from 'react'
import { TemplateHomeContainer } from './style'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

export const HomeMain = () => {
  return (
    <TemplateHomeContainer>
      <main className='mt-[220px] mb-[110px]'>
        <section className='flex w-[900px] h-[600px] bg-white'>
          <div className='flex flex-col justify-between text-center bg-[#F4ECE6] w-[40%] h-[100%] shadow-lg shadow-[#0050FF]/100'>
            <div className='flex flex-col items-center'>
              <img className='w-[200px] h-[200px] rounded-full m-10' src="/images/perfil-clone.jpeg" alt="#" />
              <strong className='text-3xl leading-9 pb-6 border-[#0050FF] border-solid border-b-2 font-poppins'>Gustavo<br /> Silva</strong>
              <span className='text-lg tracking-[5px] mt-8'>DESENVOLVEDOR WEB</span>
            </div>

            <div className='bg-white p-5 pb-3'>
              <div className='flex justify-center'>
                <Link href="https://www.linkedin.com/in/guga-silva-124706233" target="_blank" >
                  <a className='text-black pb-2 hover:pb-0 hover:text-[#0050FF] hover:border-[#0050FF] hover:border-solid hover:border-b-2' target="_blank"><FaLinkedinIn className='text-[25px] ml-[10px] mr-[10px]' /></a>
                </Link>
                <Link href="https://www.github.com/GugaS1lva" target={"_blank"} >
                  <a className='text-black pb-2 hover:pb-0 hover:text-[#0050FF] hover:border-[#0050FF] hover:border-solid hover:border-b-2' target="_blank"><FaGithub className='text-[25px] ml-[10px] mr-[10px]' /></a>
                </Link>
                <Link href="https://wa.me/558281828018" target="_blank" >
                  <a className='text-black pb-2 hover:pb-0 hover:text-[#0050FF] hover:border-[#0050FF] hover:border-solid hover:border-b-2' target="_blank"><FaWhatsapp className='text-[25px] ml-[10px] mr-[10px]' /></a>
                </Link>
                <Link href="https://www.instagram.com/50repolhoscozidos/" target="_blank" >
                  <a className='text-black pb-2 hover:pb-0 hover:text-[#0050FF] hover:border-[#0050FF] hover:border-solid hover:border-b-2' target="_blank"><FaInstagram className='text-[25px] ml-[10px] mr-[10px]' /></a>
                </Link>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-between w-[58%] p-9'>
            <div>
              <h2 className='font-poppins font-bold text-8xl'>Olá</h2>

              <h3 className='text-2xl mt-5 mb-10 font-bold'>Meu perfil e meus projetos</h3>

              <div>
                <Link href="/curriculum">
                  <a className='items-center bg-[#0050FF] text-white font-bold rounded-full pt-2 pb-2 pl-6 pr-6 mr-3 border-2 border-[#0050FF] hover:bg-white hover:text-black hover:border-2 hover:border-[black]'>CURRÍCULO</a>
                </Link>
                <Link href="/projects">
                  <a className='items-center bg-[#0050FF] text-white font-bold rounded-full pt-2 pb-2 pl-6 pr-6 mr-3 border-2 border-[#0050FF] hover:bg-white hover:text-black hover:border-2 hover:border-[black]'>PROJETOS</a>
                </Link>
              </div>
            </div>

            <div>
              <p className='mt-7'>
                Sou um Desenvolvedor Frontend Júnior, ambicioso, hiperfocado e buscando crescer na área. Sempre fui um estudante/pesquisador autodidata em várias áreas (muitas colho benefícios até hoje) mas agora estou apontando tudo que tenho e me dedicando ao máximo ao ramo digital.
                <br /><br />
                Atualmente estou estudando desenvolvimento frontend e algumas outras tecnologias que complementam esse processo, como HTML5, CSS3, JavaScript, TypeScript, ReactJS, NextJS, NodeJS, Git e GitHub, alguns Frameworks CSS como Tailwind e Bootstrap e Testes de Software com Jest.
                Meu objetivo é me tornar um profissional competente, disciplinado e conhecido na área de tecnologia.
              </p>
            </div>
          </div>
        </section>
      </main>
    </TemplateHomeContainer>
  )
}
