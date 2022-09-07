import Link from 'next/link'
import React from 'react'
import { TemplateCurriculumContainer } from './style'
import { FaSquareFull } from "react-icons/fa";

export const CurriculumMain = () => {
  return (
    <TemplateCurriculumContainer>
      <main className="mt-[200px] mb-[110px]">
        <section className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <FaSquareFull className="text-xl text-[#0050FF]" />
            <h2 className='text-4xl font-bold font-poppins ml-2'>Currículo</h2>
          </div>

          <section className="w-[700px]">
            <div className="flex items-center justify-between mt-24">
              <h3 className='font-poppins font-bold text-2xl'>Experiência</h3>
              <Link href="/cv/curriculo-dev-gugasilva.zip" download="curriculo-dev-gugasilva.pdf" type="application/zip" target="_blank">
                <a className='items-center bg-[#0050FF] text-white font-bold py-[8px] px-[35px] rounded-full hover:bg-[#E6DACE] hover:text-black hover:py-[6px] hover:px-[33px] hover:border-2 hover:border-solid hover:border-[#0050FF]'>BAIXAR CV</a>
              </Link>
            </div>

            <div className="flex justify-between items-center bg-white my-14 p-14 shadow-lg shadow-[#0050FF]/100">
              <div className="w-[200px]">
                <strong className='font-poppins text-xl text-[#0050FF]'>2022 - Atual</strong> <br />
                <span className='text-lg leading-10'>CARGO</span>
                <p>Nome da Empresa</p>
                <p>Localização da Empresa</p>
              </div>

              <div className="w-[350px] h-[100%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio.
                  <br /><br />

                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center bg-white my-14 p-14 shadow-lg shadow-[#0050FF]/100">
              <div className="w-[200px]">
                <strong className='font-poppins text-xl text-[#0050FF]'>2021 - 2022</strong> <br />
                <span className='text-lg leading-10'>CARGO</span>
                <p>Nome da Empresa</p>
                <p>Localização da Empresa</p>
              </div>

              <div className="w-[350px] h-[100%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio.
                  <br /><br />

                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col mt-12">
            <h4 className='font-poppins text-2xl font-bold'>Formação Acadêmica</h4>

            <div className="flex justify-between items-center bg-white my-14 p-14 shadow-lg shadow-[#0050FF]/100">
              <div className="w-[200px]">
                <strong className='font-poppins text-xl text-[#0050FF]'>
                  2022 - Atual <br />
                  Previsão 2026
                </strong> <br />

                <span className="text-lg">Universidade Federal de Alagoas - UFAL</span>
                <p>Física - Bacharelado</p>
                <p>Maceió - AL</p>
              </div>

              <div className="w-[390px] h-[100%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio.
                  <br /><br />

                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col bg-white my-[100px] p-[50px] shadow-lg shadow-[#0050FF]/100">
            <h4 className='font-poppins font-bold text-3xl mb-[20px] '>Habilidades Técnicas</h4>

            <div className="flex flex-wrap w-[700px] justify-center">
              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">HTML5</p>
                </div>
                <div className="skillDesc">
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Semântica</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Elementos</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Atributos</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Formulários</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">CSS3</p>
                </div>
                <div className="skillDesc">
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
              </div>

              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">JAVASCRIPT</p>
                </div>
                <div className="skillDesc">
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
              </div>

              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">FRAMEWORK CSS</p>
                </div>
                <div className="skillDesc">
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Bootstrapp</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Tailwind</li>
                    <mark className='bg-[#F4ECE6] text-black line-through decoration-[#797979]'>
                      <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Materialize</li>
                    </mark>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">VERSIONAMENTO DE CÓDIGO</p>
                </div>
                <div className="skillDesc">
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>Git</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>GitHub</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>GitLab</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">GERENCIADOR DE PACOTES</p>
                </div>
                <div className="skillDesc">
                  <ul>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>NPM</li>
                    <li className='before:content-["✔"] before:mr-[5px] before:text-[#0050FF]'>YARN</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">BIBLIOTECAS/<br />FRAMEWORKS JS</p>
                </div>
                <div className="skillDesc">
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
              </div>

              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">TESTES</p>
                </div>
                <div className="skillDesc">
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
              </div>

              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">SSR</p>
                </div>
                <div className="skillDesc">
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
              </div>

              <div className="bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-lg shadow-[#0050FF]/100">
                <div className="flex items-center">
                  <div className="square"></div>
                  <p className="font-poppins font-bold text-xl text-[#0050FF] border-b-2 border-b-[#0050FF] mb-4">BUNDLERS</p>
                </div>
                <div className="skillDesc">
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
              </div>
            </div>
          </section>
        </section>
      </main>
    </TemplateCurriculumContainer>
  )
}
