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
                        <FaSquareFull className="text-xl mr-2 text-[#8257E6]" />
                        <h2 className="font-poppins font-bold text-white text-4xl">Projetos</h2>
                    </div>

                    <Desc>
                        <p>
                            Aqui ficam apenas alguns projetos que foram selecionados por terem funcionalidades distintas mas igualmente importantes para um Desenvolvedor. <br />
                            Esses três projetos serão subtituídos por novos conforme o avanço das minhas habilidades. <br />
                            Caso deseje verificar todos os meus repositórios, é só clicar no OctoCat ao lado:
                            <Link href="https://github.com/GugaS1lva?tab=repositories"><a target="_blank"><FaGithubAlt className="inline mx-3 text-3xl hover:text-[#a47cff] hover:scale-110" /></a></Link>
                        </p>
                    </Desc>

                    <CardProject>
                        <InfoProject>
                            <TitleProject>
                                <Link href="https://gym-project-master.vercel.app/">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#8257E6] hover:underline">Gym Project 🔗</h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Landingpage</h3>
                            </TitleProject>
                            <p className="p-10 w-[320px] sm:w-[100%] lg:w-[482px] lg:mt-[-15px]">
                                Foi feita em três dias de código. Utilizei React, Tailwind, Swiper, AOS, Node, HTML e CSS. <br /><br />
                                Resolvi treinar minha pontualidade em transformar um Layout Figma num site na internet. Fiz toda a base de código + hospedagem na vercel. <br /><br />
                                Foram usadas ferramentas legais para melhorar a exp do usuário, experimente os slides e a rolagem dinâmica da página, não vai se arrepender. ☕
                            </p>
                        </InfoProject>

                        <Link href="https://gym-project-master.vercel.app/">
                            <a target="_blank" className="hover:scale-105 hover:rounded-lg transition-all  lg:hover:border-t-2 lg:hover:border-r-2 lg:hover:border-b-2 lg:hover:border-l-0 hover:border-t-0 hover:border-r-2 hover:border-b-2 hover:border-l-2 block bg-[#1B1B1E] bg-[url('/images/projects/gym-preview.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-right">
                            </a>
                        </Link>
                    </CardProject>

                    <CardProject>
                        <InfoProject>
                            <TitleProject>
                                <Link href="https://hoobank-master.vercel.app/">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#8257E6] hover:underline">HooBank Master 🔗</h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Landingpage</h3>
                            </TitleProject>
                            <p className="p-10 w-[320px] sm:w-[100%] lg:w-[482px] lg:mt-[-15px]">
                                Essa Landingpage foi feita em duas dias de código. Utilizei apenas React (Vite.JS) e Tailwind pra deixar tudo pronto. <br /><br />
                                Foi construído pra consolidar meus conhecimentos, como um treinamento pessoal. <br /><br />
                                Responsivo, com boas práticas de codificação e a utilização de temas/templates para facilitar a refatoração dos próximos programadores.
                            </p>
                        </InfoProject>

                        <Link href="https://hoobank-master.vercel.app/">
                            <a target="_blank" className="hover:scale-105 hover:rounded-lg transition-all  lg:hover:border-t-2 lg:hover:border-r-2 lg:hover:border-b-2 lg:hover:border-l-0 hover:border-t-0 hover:border-r-2 hover:border-b-2 hover:border-l-2 block bg-[url('/images/projects/hoobank.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center">
                            </a>
                        </Link>
                    </CardProject>

                    <CardProject>
                        <InfoProject>
                            <TitleProject>
                                <Link href="https://fr-mentor-10-interactive-rating-component.vercel.app/">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#8257E6] hover:underline">Time Tracking Dashboard 🔗</h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Painel de Controle de Tempo</h3>
                            </TitleProject>
                            <p className="p-10 w-[320px] sm:w-[100%] lg:w-[482px] lg:text-sm">
                                Projeto feito com: HTML, CSS, JS, React, Next, Node e TailwindCSS <br /><br />
                                A ideia desse projeto é ser um componente - 'Painel de Gestão de Tempo' do usuário. Serve para gerir a quantidade de horas gasta em determinadas atividades como a quantidade de horas gasta no Trabalho ou Estudando por semana. <br /><br />
                                As horas podem ser medidas Diariamente, Semanalmente ou Mensalmente de acordo com a preferência do usuário. <br /><br />
                            </p>
                        </InfoProject>

                        <Link href="https://fr-mentor-10-interactive-rating-component.vercel.app/">
                            <a target="_blank" className="hover:scale-105 hover:rounded-lg transition-all  lg:hover:border-t-2 lg:hover:border-r-2 lg:hover:border-b-2 lg:hover:border-l-0 hover:border-t-0 hover:border-r-2 hover:border-b-2 hover:border-l-2 block bg-[url('/images/projects/desktop-design.jpg')] w-[100%] h-[100%] bg-no-repeat bg-cover lg:bg-[length:530px_415px] bg-center">
                            </a>
                        </Link>
                    </CardProject>

                    <CardProject>
                        <InfoProject>
                            <TitleProject>
                                <Link href="https://rocketpay-sable.vercel.app/">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#8257E6] hover:underline">Rocketpay 🔗</h1>
                                    </a>
                                </Link>
                                <h3 className="font-poppins font-bold text-xl my-2">Digital Credit Card</h3>
                            </TitleProject>
                            <p className="p-10 mt-[-20px] w-[320px] sm:w-[100%] lg:w-[482px] lg:text-sm">
                                RocketPay é um componente que simula o preenchimento de um formulário de cartão de crédito digital. <br /><br />
                                Projeto feito com: HTML, CSS, JS, Vite, IMask <br /><br />
                                O preenchimendo dos campos acontecem em tempo real, você mesmo pode experimentar. Para ajudar o usuário, no fim do formulário há um sumário com todos os cartões disponíveis, basta apenas digitar os números correspondentes de cada cartão no primeiro campo (Número do Cartão *) e pronto, seu cartão será selecionado automaticamente.<br /><br />
                            </p>
                        </InfoProject>

                        <Link href="https://rocketpay-sable.vercel.app/">
                            <a target="_blank" className="hover:scale-105 hover:rounded-lg transition-all  lg:hover:border-t-2 lg:hover:border-r-2 lg:hover:border-b-2 lg:hover:border-l-0 hover:border-t-0 hover:border-r-2 hover:border-b-2 hover:border-l-2 block bg-[#121314] bg-[url('/images/projects/rocketpay.png')] w-[100%] h-[100%] bg-no-repeat bg-cover lg:bg-[length:488px_356px] bg-center">
                            </a>
                        </Link>
                    </CardProject>

                    <CardProject>
                        <InfoProject>
                            <TitleProject>
                                <Link href="https://gugas1lva.github.io/GitHub-API_Profile.Search/">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#8257E6] hover:underline">Profile Search | GitHub-API 🔗</h1>
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

                        <Link href="https://gugas1lva.github.io/GitHub-API_Profile.Search/">
                            <a target="_blank" className="hover:scale-105 hover:rounded-lg transition-all  lg:hover:border-t-2 lg:hover:border-r-2 lg:hover:border-b-2 lg:hover:border-l-0 hover:border-t-0 hover:border-r-2 hover:border-b-2 hover:border-l-2 block bg-[url('/images/projects/github.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center">
                            </a>
                        </Link>
                    </CardProject>

                    <CardProject>
                        <InfoProject>
                            <TitleProject>
                                <Link href="https://github.com/GugaS1lva/Portfolio-GugaSilva">
                                    <a target="_blank">
                                        <h1 className="font-poppins font-bold text-2xl text-[#8257E6] hover:underline">Guga Silva | Portfólio 🔗</h1>
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

                        <Link href="https://github.com/GugaS1lva/Portfolio-GugaSilva">
                            <a target="_blank" className="hover:scale-105 hover:rounded-lg transition-all  lg:hover:border-t-2 lg:hover:border-r-2 lg:hover:border-b-2 lg:hover:border-l-0 hover:border-t-0 hover:border-r-2 hover:border-b-2 hover:border-l-2 block bg-[url('/images/projects/portfolio.png')] w-[100%] h-[100%] bg-no-repeat bg-cover bg-center">
                            </a>
                        </Link>
                    </CardProject>
                </CentralColumn>
            </ProjectsContent>
        </TemplateProjectsContainer>
    )
}
