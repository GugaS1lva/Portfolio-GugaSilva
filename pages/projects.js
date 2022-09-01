import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import Head from "next/head"
import Link from "next/link"

function Projetos() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link ref="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
                <link rel="shortcut icon" href="/images/tech-icon.png" type="image/x-icon" />
                <title>Guga Silva | Portfólio</title>
            </Head>

            <header>
                <div className="me">
                    <div className="square"></div>

                    <strong>Gustavo Silva</strong>

                    <span>/ DEV FRONTEND</span>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>SOBRE MIM</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/curriculum">
                                <a>CURRÍCULO</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a>PROJETOS</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>CONTATO</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="projectsContainer">
                <section className="centralColumn">
                    <div className="title">
                        <div className="square"></div>
                        <h2>Projetos</h2>
                    </div>
                    <div className="desc">
                        <p>
                            Aqui ficam apenas três projetos que foram selecionados por terem funcionalidades distintas mas igualmente importantes para um Desenvolvedor. <br />
                            Esses três projetos serão subtituídos por novos conforme o avanço das minhas habilidades <br />
                            Caso deseje verificar todos os meus repositórios, é só clicar no OctoCat ao lado <a href="https://github.com/GugaS1lva?tab=repositories" target="_blank">🐙</a>
                        </p>
                    </div>

                    <div className="cardProject">
                        <div className="infoProject">
                            <div className="titleProject">
                                <a href="https://github.com/GugaS1lva/Portfolio-GugaSilva" target="_blank">
                                    <h1>Guga Silva | Portfólio</h1>
                                </a>
                                <h3>Função</h3>
                            </div>
                            <p>
                                Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais. <br /><br />
                                É o projeto mais profissional, descritivo e organizado que eu já construí do total zero e sem nenhuma ajuda, me orgulho disso. <br /><br />
                                Continuarei atualizando-o com novos projetos cada vez mais complexos e que agreguem na minha carreira como Desenvolvedor.
                            </p>
                        </div>

                        <div className="imageProject-01"></div>
                    </div>

                    <div className="cardProject">
                        <div className="infoProject">
                            <div className="titleProject">
                                <a href="https://github.com/GugaS1lva/GitHub-API_Profile.Search" target="_blank">
                                    <h1>Profile Search | GitHub-API </h1>
                                </a>
                                <h3>Buscador de Usuários do GitHub</h3>
                            </div>
                            <p>
                                Esse projeto foi feito com HTML, CSS e JavaScript. Nele eu aprimorei bastante as minhas habilidades em consumo de API's, em leitura de documentações e refatoração de código. <br /><br />
                                Se checar o código verá meu esforço em manter todas as variáves sendo reaproveitadas da maneira mais eficiente que pude pensar, na época. <br /><br />
                                Apesar de sua funcionalidade ser simples, implementa-la, evitando erros e tornando o código mais limpo possível que foi o verdadeiro desafio.
                            </p>
                        </div>

                        <div className="imageProject-02"></div>
                    </div>

                    <div className="cardProject">
                        <div className="infoProject">
                            <div className="titleProject">
                                <a href="https://github.com/GugaS1lva/Fr.Mentor-08--Fylo.Dark_Master" target="_blank">
                                    <h1>Fylo Dark Master</h1>
                                </a>
                                <h3>Landingpage</h3>
                            </div>
                            <p>
                                Esse projeto foi feito apenas com HTML e CSS. <br /><br />
                                O desafio pessoal dessa vez era criar essa Landingpage no tempo mais curto possível, desde que ficasse no ar e com o mínimo de erros de código possível. Levei uma noite para construíla do zero e sem supervisão. <br /><br />
                                Alguns botões contém animações e na ultima seção tem espaço pra ser implantado validações de email com integração com backend.
                            </p>
                        </div>

                        <div className="imageProject-03"></div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="copy">
                    <p>
                        © 2022 by Gustavo Silva.
                        All rights reserved.
                    </p>
                </div>

                <div className="social">
                    <div className="phone">
                        <h3>Telefone</h3>
                        <span>(82) 9 8752-4230</span>
                        <span>(82) 9 8182-8018</span>
                    </div>

                    <div className="email">
                        <h3>Email</h3>
                        <a href="mailto:contatogustavosilva017@outlook.com">contatogustavosilva017@outlook.com</a>
                    </div>

                    <div className="network">
                        <h3>Redes Sociais</h3>
                        <div className="network-container">
                            <Link href="https://www.linkedin.com/in/guga-silva-124706233">
                                <a target="_blank"><FaLinkedinIn /></a>
                            </Link>
                            <Link href="https://www.github.com/GugaS1lva">
                                <a target="_blank"><FaGithub /></a>
                            </Link>
                            <Link href="https://wa.me/558281828018" target="_blank" >
                                <a target="_blank"><FaWhatsapp /></a>
                            </Link>
                            <Link href="https://www.instagram.com/50repolhoscozidos/">
                                <a target="_blank"><FaInstagram /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Projetos