import Link from "next/link";
import React from 'react'
import { TemplateProjectsContainer } from './style'
import { FaSquareFull, FaGithubAlt } from "react-icons/fa";

export const ProjectsMain = () => {
    return (
        <TemplateProjectsContainer>
            <main className="flex justify-center bg-[#E6DACE] mt-[200px]">
                <section className="flex flex-col items-center mb-[100px]">
                    <div className="flex items-center">
                        <FaSquareFull className="text-xl mr-2 text-[#0050FF]" />
                        <h2 className="font-poppins font-bold text-4xl">Projetos</h2>
                    </div>
                    <div className="text-center w-[850px] mt-8 text-xl">
                        <p>
                            Aqui ficam apenas três projetos que foram selecionados por terem funcionalidades distintas mas igualmente importantes para um Desenvolvedor. <br />
                            Esses três projetos serão subtituídos por novos conforme o avanço das minhas habilidades. <br />
                            Caso deseje verificar todos os meus repositórios, é só clicar no OctoCat ao lado:
                            <Link href="https://github.com/GugaS1lva?tab=repositories"><a target="_blank"><FaGithubAlt className="inline mx-3 text-3xl hover:text-[#0050FF]" /></a></Link>
                        </p>
                    </div>

                    <div className="flex bg-white my-[50px] w-[900px] h-[415px] shadow-lg shadow-[#0050FF]/100">
                        <div className="pt-[50px]">
                            <div className="border-l-[10px] border-l-[#0050FF] pl-[30px]">
                                <Link href="https://github.com/GugaS1lva/Portfolio-GugaSilva">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#0050FF] hover:underline">Guga Silva | Portfólio</h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Função</h3>
                            </div>
                            <p className="p-10 w-[500px] h-[300px]">
                                Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais. <br /><br />
                                É o projeto mais profissional, descritivo e organizado que eu já construí do total zero e sem nenhuma ajuda, me orgulho disso. <br /><br />
                                Continuarei atualizando-o com novos projetos cada vez mais complexos e que agreguem na minha carreira como Desenvolvedor.
                            </p>
                        </div>

                        <div className="block bg-[url('/images/portfolio.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center"></div>
                    </div>

                    <div className="flex bg-white my-[50px] w-[900px] h-[415px] shadow-lg shadow-[#0050FF]/100">
                        <div className="pt-[50px]">
                            <div className="border-l-[10px] border-l-[#0050FF] pl-[30px]">
                                <Link href="https://github.com/GugaS1lva/GitHub-API_Profile.Search">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#0050FF] hover:underline">Profile Search | GitHub-API </h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Buscador de Usuários do GitHub</h3>
                            </div>
                            <p className="p-10 pt-5 text-[0.93rem] w-[500px] h-[300px]">
                                Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu aprimorei bastante as minhas habilidades em consumo de API's, em leitura de documentações e refatoração de código. <br /><br />
                                Se checar o código verá meu esforço em manter todas as variáves sendo reaproveitadas da maneira mais eficiente que pude pensar, na época. <br /><br />
                                Apesar de sua funcionalidade ser simples, implementa-la, evitando erros e tornando o código mais limpo possível que foi o verdadeiro desafio.
                            </p>
                        </div>

                        <div className="block bg-[url('/images/github.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center"></div>
                    </div>

                    <div className="flex bg-white my-[50px] w-[900px] h-[415px] shadow-lg shadow-[#0050FF]/100">
                        <div className="pt-[50px]">
                            <div className="border-l-[10px] border-l-[#0050FF] pl-[30px]">
                                <Link href="https://github.com/GugaS1lva/Fr.Mentor-08--Fylo.Dark_Master">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#0050FF] hover:underline">Fylo Dark Master</h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Landingpage</h3>
                            </div>
                            <p className="p-10 w-[500px] h-[300px]">
                                Esse projeto foi feito apenas com HTML e CSS. <br /><br />
                                O desafio pessoal dessa vez era criar essa Landingpage no tempo mais curto possível, desde que ficasse no ar e com o mínimo de erros de código possível. Levei uma noite para construíla do zero e sem supervisão. <br /><br />
                                Alguns botões contém animações e na ultima seção tem espaço pra ser implantado validações de email com integração com backend.
                            </p>
                        </div>

                        <div className="block bg-[url('/images/fylo.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center"></div>
                    </div>
                </section>
            </main>
        </TemplateProjectsContainer>
    )
}
