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
            <FaSquareFull className="text-xl mr-2 text-[#0050FF]" />
            <h2 className='font-poppins font-bold text-4xl'>Currículo</h2>
          </SkillTitle>

          <Experience>
            <CVContain>
              {/* ↓↓↓↓↓ ATOMIC DESIGN ↓↓↓↓↓  ↓↓↓↓↓ ATOMIC DESIGN ↓↓↓↓↓ */}
              <h3 className='font-poppins font-bold text-2xl mr-4'>Experiência</h3>

              <Link href="/cv/curriculo-dev-gugasilva.zip" download="curriculo-dev-gugasilva.pdf" type="application/zip" target="_blank">
                <a className='ml-4 items-center bg-[#0050FF] text-white font-bold py-[8px] px-[35px] rounded-full hover:bg-[#E6DACE] hover:text-black hover:py-[6px] hover:px-[33px] hover:border-2 hover:border-solid hover:border-[#0050FF]'>BAIXAR CV</a>
              </Link>
            </CVContain>

            <ExampleCard>
              <Infos>
                <strong className='font-poppins text-xl text-[#0050FF]'>2022 - Atual</strong> <br />
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
                <strong className='font-poppins text-xl text-[#0050FF]'>2021 - 2022</strong> <br />
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
            <h4 className='font-poppins text-2xl font-bold'>Formação Acadêmica</h4>

            <ExampleCard>
              <Infos>
                <strong className='font-poppins text-xl text-[#0050FF]'>
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
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>HTML5</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Semântica</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Elementos</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Atributos</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Formulários</li>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>CSS3</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Herança</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Cascata</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Especificidade</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Box Model</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Flexbox/Grid</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Media Queries</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Animações Simples</li>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Sass, Less, PostCSS</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>JAVASCRIPT</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Sintax</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>DOM</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Fetch API/<mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>(Ajax (XHR))</mark></li>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>ES6+ & Modules</li>
                    </mark>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>FP - Programação Funcional</li>
                    </mark>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Prorotype, POO</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>FRAMEWORK CSS</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Bootstrapp</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Tailwind</li>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Materialize</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>VERSIONAMENTO DE CÓDIGO</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Git</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>GitHub</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>GitLab</li>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>GERENCIADOR DE PACOTES</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>NPM</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>YARN</li>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>BIBLIOTECAS/<br />FRAMEWORKS JS</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>React</li>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Angular</li>
                    </mark>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Vue</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>TESTES</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Cypress</li>
                    </mark>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Jest</li>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Enzyme</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>SSR</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Next.js (REACT)</li>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Universal (ANGULAR)</li>
                    </mark>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Nuxt.js (VUE)</li>
                    </mark>
                  </ul>
                </div>
              </Skill>

              <Skill>
                <SkillTitle>
                  <h2 className='font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4'>BUNDLERS</h2>
                </SkillTitle>

                {/* ATOMIC DESIGN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <div>
                  <ul>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Webpack</li>
                    </mark>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Parcel</li>
                    </mark>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>esbuild</li>
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
