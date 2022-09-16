import Link from "next/link";
import React from 'react'
import { FaSquareFull, FaGithubAlt } from "react-icons/fa";
import {
    TemplateProjectsContainer,
    ProjectsContent,
    CentralColumn,
    Desc,
    CardProject,
    InfoProject,
    TitleProject,
} from './style'

export const ProjectsMain = () => {
    return (
        <TemplateProjectsContainer>
            <ProjectsContent>
                <CentralColumn>
                    {/* ↓↓↓↓↓ ATOMIC DESIGN ↓↓↓↓↓  ↓↓↓↓↓ ATOMIC DESIGN ↓↓↓↓↓ */}
                    <div className="flex items-center">
                        <FaSquareFull className="text-xl mr-2 text-[#0050FF]" />
                        <h2 className="font-poppins font-bold text-white text-4xl">Projetos</h2>
                    </div>

                    <Desc>
                        <p>
                            Aqui ficam apenas três projetos que foram selecionados por terem funcionalidades distintas mas igualmente importantes para um Desenvolvedor. <br />
                            Esses três projetos serão subtituídos por novos conforme o avanço das minhas habilidades. <br />
                            Caso deseje verificar todos os meus repositórios, é só clicar no OctoCat ao lado:
                            <Link href="https://github.com/GugaS1lva?tab=repositories"><a target="_blank"><FaGithubAlt className="inline mx-3 text-3xl hover:text-[#61dfd9] hover:scale-110" /></a></Link>
                        </p>
                    </Desc>

                    <CardProject>
                        <InfoProject>
                            <TitleProject>
                                <Link href="https://github.com/GugaS1lva/Portfolio-GugaSilva">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#0050FF] hover:underline">Guga Silva | Portfólio</h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Função</h3>
                            </TitleProject>
                            <p className="p-10 w-[320px] sm:w-[100%] lg:w-[482px] lg:mt-[-15px]">
                                Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais. <br /><br />
                                É o projeto mais profissional, descritivo e organizado que já construí do total zero e sem nenhuma ajuda (me orgulho disso). <br /><br />
                                Continuarei atualizando-o com novos projetos cada vez mais complexos e que agreguem valor à minha carreira como Desenvolvedor.
                            </p>
                        </InfoProject>

                        <div className="block bg-[url('/images/projects/portfolio.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center"></div>
                    </CardProject>

                    <CardProject>
                        <InfoProject>
                            <TitleProject>
                                <Link href="https://github.com/GugaS1lva/GitHub-API_Profile.Search">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#0050FF] hover:underline">Profile Search | GitHub-API </h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Buscador de Usuários do GitHub</h3>
                            </TitleProject>
                            <p className="p-10 w-[320px] sm:w-[100%] lg:w-[482px] lg:text-sm">
                                Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu aprimorei bastante as minhas habilidades em consumo de API's, em leitura de documentações e refatoração de código. <br /><br />
                                Se checar o código verá meu esforço em manter todas as variáves sendo reaproveitadas da maneira mais eficiente que pude pensar, na época. <br /><br />
                                Apesar de sua funcionalidade ser simples, implementa-la, evitando erros e tornando o código mais limpo possível que foi o verdadeiro desafio.
                            </p>
                        </InfoProject>

                        <div className="block bg-[url('/images/projects/github.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center"></div>
                    </CardProject>

                    <CardProject>
                        <InfoProject>
                            <TitleProject>
                                <Link href="https://github.com/GugaS1lva/Fr.Mentor-08--Fylo.Dark_Master">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#0050FF] hover:underline">Fylo Dark Master</h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Landingpage</h3>
                            </TitleProject>
                            <p className="p-10 w-[320px] sm:w-[100%] lg:w-[482px] lg:text-sm">
                                Esse projeto foi feito apenas com HTML e CSS. <br /><br />
                                O desafio pessoal dessa vez era criar essa Landingpage no tempo mais curto possível, desde que ficasse no ar e com o mínimo de erros de código possível. Levei uma noite para construíla do zero e sem supervisão. <br /><br />
                                Alguns botões contém animações e na ultima seção tem espaço pra ser implantado validações de email com integração com backend.
                            </p>
                        </InfoProject>

                        <div className="block bg-[url('/images/projects/fylo.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center"></div>
                    </CardProject>
                </CentralColumn>
            </ProjectsContent>
        </TemplateProjectsContainer>
    )
}
