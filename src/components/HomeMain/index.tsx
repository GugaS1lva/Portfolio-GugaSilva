import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { 
  TemplateHomeContainer, 
  HomeContent,
  CentralCard,
  LeftCard,
  LeftInfoContainer,
  LeftIconContainer,
  IconsContainer,
  RightCard,
} from './style'

export const HomeMain = () => {
  return (
    <TemplateHomeContainer>
      <HomeContent>
        <CentralCard>
          <LeftCard>
            <LeftInfoContainer>
              <img className='w-[200px] h-[200px] border-4 border-white rounded-full m-10' src="/images/profile/perfil-03-clone.jpeg" alt="#" />
              <strong className='text-3xl leading-9 pb-6 border-[#0050FF] border-solid border-b-2 font-poppins'>Gustavo Silva</strong><br />
              <span className='text-lg tracking-[5px] mt-[15px] mb-[40px]'>DESENVOLVEDOR WEB</span>
            </LeftInfoContainer>

            <LeftIconContainer>
              <IconsContainer>
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
              </IconsContainer>
            </LeftIconContainer>
          </LeftCard>

          <RightCard>
            <div>
              <h2 className='font-poppins font-bold text-8xl pt-[40px]'>Olá</h2>

              <h3 className='text-2xl mt-5 mb-10 font-bold'>Meu perfil e meus projetos</h3>

              <div className='mb-[60px]'>
                <Link href="/curriculum">
                  <a className='items-center bg-[#0050FF] text-white font-bold rounded-full pt-2 pb-2 pl-6 pr-6 mr-3 border-2 border-[#0050FF] hover:bg-white hover:text-black hover:border-2 hover:border-[black]'>CURRÍCULO</a>
                </Link>
                <Link href="/projects">
                  <a className='items-center bg-[#0050FF] text-white font-bold rounded-full pt-2 pb-2 pl-6 pr-6 mr-3 border-2 border-[#0050FF] hover:bg-white hover:text-black hover:border-2 hover:border-[black]'>PROJETOS</a>
                </Link>
              </div>
            </div>

            <div>
              <p className='mt-7 px-[10px] pb-[30px] text-start'>
                Sou um Desenvolvedor Frontend Júnior, ambicioso, hiperfocado e buscando crescer na área. Sempre fui um estudante/pesquisador autodidata em várias áreas (muitas colho benefícios até hoje) mas agora estou apontando tudo que tenho e me dedicando ao máximo ao ramo digital.
                <br /><br />
                Atualmente estou estudando desenvolvimento Frontend e algumas outras tecnologias que complementam esse processo, como HTML, CSS, JS, TS, React, Next, Node, Git e GitHub, alguns Frameworks-CSS como Tailwind e Bootstrap, Gerenciadores de Pacotes (NPM e YARN) e Testes de Software com Jest.
                Meu objetivo é me tornar um profissional competente, relevante na área de tecnologia.
              </p>
            </div>
          </RightCard>
        </CentralCard>
      </HomeContent>
    </TemplateHomeContainer>
  )
}
