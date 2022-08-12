// import { library } from "@fortawesome/fontawesome-svg-core"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { fas } from "@fortawesome/free-solid-svg-icons"
// library.add(fas)
import Head from "next/head"
import Link from "next/link"

function Home() {
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

            <main className="indexContainer">
                <section className="centralCard">
                    <div className="leftCard">
                        <div className="leftInfoContainer">
                            <img src="/images/perfil-clone.jpeg" alt="" />
                            <strong>Gustavo<br /> Silva</strong>
                            <span>DESENVOLVEDOR WEB</span>
                        </div>

                        <div className="leftIconContainer">
                            {/* <FontAwesomeIcon icon="coffee" />
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            <FontAwesomeIcon icon="fa-solid fa-paper-plane" /> */}
                        </div>
                    </div>

                    <div className="rightCard">
                        <div className="topInfoContainer">
                            <h2>Olá</h2>

                            <h3>Meu perfil e meus projetos</h3>

                            <div className="buttonsContainer">
                                <Link href="/curriculum">
                                    <a>CURRÍCULO</a>
                                </Link>
                                <Link href="/projects">
                                    <a>PROJETOS</a>
                                </Link>
                            </div>
                        </div>

                        <div className="botInfoContainer">
                            <p>
                                Olá, meu nome é Gustavo Antonio da Silva. Sou pró-ativo, direto e dinâmico. Capaz de demonstrar uma sociabilidade bastante atraente, dependendo do que a situação exigir.
                                <br /><br />
                                Tenho muitos objetivos e posso comprometer-me para alcançá-los. Procuro manter uma posição de dominância tanto em termos de autoridade pessoal e controle quanto no âmbito social. Gosto de sentir que sou apreciado e respeitado pelos outros.
                            </p>
                        </div>
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
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home