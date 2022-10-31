import Link from 'next/link'
import React from 'react'
import { FaSquareFull } from "react-icons/fa";
import {
  TemplateCurriculumContainer,
  CurriculumContent,
  CentralColumn,
  Experience,
  CVContain,
  ExampleCard,
  Infos,
  Desc,
  Formation,
  SkillsContainer,
  Skills,
  Skill,
  SkillTitle,
} from './style'

export const CurriculumMain = () => {
  return (
    <TemplateCurriculumContainer>
      <CurriculumContent>
        <CentralColumn>
          {/* ↓↓↓↓↓ ATOMIC DESIGN ↓↓↓↓↓  ↓↓↓↓↓ ATOMIC DESIGN ↓↓↓↓↓ */}
          <SkillTitle>
            <FaSquareFull className="text-xl mr-2 text-[#8257E6]" />
            <h2 className='font-poppins text-white font-bold text-4xl'>Currículo</h2>
          </SkillTitle>

          <Experience>
            <CVContain>
              {/* ↓↓↓↓↓ ATOMIC DESIGN ↓↓↓↓↓  ↓↓↓↓↓ ATOMIC DESIGN ↓↓↓↓↓ */}
              <h3 className='font-poppins text-white font-bold text-2xl mr-4'>Experiência</h3>

              <Link href="/cv/Curriculo-WebDeveloper-Gustavo-Silva.zip" download="curriculo-dev-gugasilva.pdf" type="application/zip" target="_blank">
                <a className='ml-4 items-center bg-[#8257E6] text-white font-bold py-[8px] px-[35px] rounded-full hover:bg-[#191522] hover:text-white hover:py-[6px] hover:px-[33px] hover:border-2 hover:border-solid hover:border-white'>BAIXAR CV</a>
              </Link>
            </CVContain>

            <ExampleCard>
              <Infos>
                <strong className='font-poppins text-xl text-[#8257E6]'>2022 - Atual</strong> <br />
                <span className='text-lg leading-10'>CARGO</span>
                <p>Nome da Empresa</p>
                <p>Localização da Empresa</p>
              </Infos>

              <Desc>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio.
                  <br /><br />

                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.
                </p>
              </Desc>
            </ExampleCard>

            <ExampleCard>
              <Infos>
                <strong className='font-poppins text-xl text-[#8257E6]'>2021 - 2022</strong> <br />
                <span className='text-lg leading-10'>CARGO</span>
                <p>Nome da Empresa</p>
                <p>Localização da Empresa</p>
              </Infos>

              <Desc>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio.
                  <br /><br />

                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.
                </p>
              </Desc>
            </ExampleCard>
          </Experience>

          <Formation>
            <h4 className='font-poppins text-white text-2xl font-bold'>Formação Acadêmica</h4>

            <ExampleCard>
              <Infos>
                <strong className='font-poppins text-xl text-[#8257E6]'>
                  2022 - Atual <br />
                  Previsão 2026
                </strong> <br />

                <span className="text-lg">Universidade Federal de Alagoas - UFAL</span>
                <p>Física - Bacharelado</p>
                <p>Maceió - AL</p>
              </Infos>

              <div className='w-[300px] border-t-2 border-gray-200 sm:border-none mt-6 pt-1'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio.
                  <br /><br />

                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.
                </p>
              </div>
            </ExampleCard>
          </Formation>

          <SkillsContainer>
            <h4 className='font-poppins font-bold text-3xl mb-[20px] '>Habilidades Técnicas</h4>

            <Skills>
              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>HTML5</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Semântica</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Elementos</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Atributos</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Formulários</li>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>CSS3</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Herança</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Cascata</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Especificidade</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Box Model</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Flexbox/Grid</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Media Queries</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Animações Simples</li>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Sass, Less, PostCSS</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>JAVASCRIPT</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Sintax</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>DOM</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Fetch API/<mark className='bg-[#292338] text-white line-through decoration-[#797979]'>(Ajax (XHR))</mark></li>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>ES6+ & Modules</li>
                    </mark>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>FP - Programação Funcional</li>
                    </mark>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Prorotype, POO</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>FRAMEWORK CSS</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Bootstrapp</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Tailwind</li>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Materialize</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>VERSIONAMENTO DE CÓDIGO</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Git</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>GitHub</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>GitLab</li>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>GERENCIADOR DE PACOTES</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>NPM</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>YARN</li>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>BIBLIOTECAS/<br />FRAMEWORKS JS</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>React</li>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Angular</li>
                    </mark>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Vue</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>TESTES</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Cypress</li>
                    </mark>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Jest</li>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Enzyme</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>SSR</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Next.js (REACT)</li>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Universal (ANGULAR)</li>
                    </mark>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Nuxt.js (VUE)</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#8257E6] border-b-2 border-b-[#8257E6] mb-4'>BUNDLERS</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Webpack</li>
                    </mark>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>Parcel</li>
                    </mark>
                    <mark className='bg-[#292338] text-white line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#8257E6]'>esbuild</li>
                    </mark>
                  </ul>
                </div>
              </Skill>
            </Skills>
          </SkillsContainer>
        </CentralColumn>
      </CurriculumContent>
    </TemplateCurriculumContainer>
  )
}
