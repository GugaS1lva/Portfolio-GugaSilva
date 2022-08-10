import Head from "next/head"
import Link from "next/link"

function Curriculo() {
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

            {/*  */}{/*  */}{/*  */}{/*  */}{/*  */}{/*  ↓↓ HEADER ↓↓  */}{/*  */}{/*  */}{/*  */}{/*  */}{/*  */}

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

            {/*  */}{/*  */}{/*  */}{/*  */}{/*  */}{/*  ↓↓ MAIN ↓↓  */}{/*  */}{/*  */}{/*  */}{/*  */}{/*  */}

            <main className="curriculumContainer">
                <section className="centralColumn">
                    <div className="title">
                        <div className="square"></div>
                        <h2>Currículo</h2>
                    </div>

                    <section className="experience">
                        <div className="titleCV">
                            <h3>Experiência</h3>
                            <Link href="/curriculum">
                                <a>BAIXAR CV</a>
                            </Link>
                            {/* CRIAR BOTÃO BAIXAR CURRÍCULO */}
                        </div>

                        <div className="exampleCard">
                            <div className="infos">
                                <strong>2022 - Atual</strong> <br />
                                <span>CARGO</span>
                                <p>Nome da Empresa</p>
                                <p>Localização da Empresa</p>
                            </div>

                            <div className="desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio.
                                    <br /><br />

                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.
                                </p>
                            </div>
                        </div>

                        <div className="exampleCard">
                            <div className="infos">
                                <strong>2021 - 2022</strong> <br />
                                <span>CARGO</span>
                                <p>Nome da Empresa</p>
                                <p>Localização da Empresa</p>
                            </div>

                            <div className="desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio.
                                    <br /><br />

                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="formation">
                        <h4>Formação Acadêmica</h4>

                        <div className="exampleCard">
                            <div className="infos">
                                <strong>
                                    2022 - Atual <br />
                                    Previsão 2026
                                </strong> <br />

                                <span className="titleUfal">Universidade Federal de Alagoas - UFAL</span>
                                <p>Física - Bacharelado</p>
                                <p>Maceió - AL</p>
                            </div>

                            <div className="desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio.
                                    <br /><br />

                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="skills">
                        <h4>Tecnologias</h4>
                        
                        {/* <div className="skillsContainer">
                            <div className="skill">
                                <div className="square"></div>
                                <p>HTML5</p>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Semântica</li>
                                        <li>Elementos</li>
                                        <li>Atributos</li>
                                        <li>Formulários</li>
                                    </ul>
                                </div>
                            </div>
                            =======
                            <div className="skill">
                                <div className="square"></div>
                                <p>CSS3</p>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Herança</li>
                                        <li>Cascata</li>
                                        <li>Especificidade</li>
                                        <li>Box Model</li>
                                        <li>Flexbox/Grid</li>
                                        <li>Media Queries</li>
                                        <li>Animações Simples</li>
                                        <li><mark>Sass, Less, PostCSS</mark></li>
                                    </ul>
                                </div>
                            </div>
                            =======
                            <div className="skill">
                                <div className="square"></div>
                                <p>JAVASCRIPT</p>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Sintax</li>
                                        <li>DOM</li>
                                        <li>Fetch API/<mark>(Ajax (XHR))</mark></li>
                                        <li><mark>ES6+ & Modules</mark></li>
                                        <li><mark>FP - Programação Funcional</mark></li>
                                        <li><mark>Prorotype, POO</mark></li>
                                    </ul>
                                </div>
                            </div>
                            =======
                            <div className="skill">
                                <div className="square"></div>
                                <p>FRAMEWORK CSS</p>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Bootstrapp</li>
                                        <li>Tailwind</li>
                                        <li>Materialize</li>
                                    </ul>
                                </div>
                            </div>
                            =======
                            <div className="skill">
                                <div className="square"></div>
                                <p>VERSIONAMENTO DE CÓDIGO</p>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Git</li>
                                        <li>GitHub</li>
                                        <li>GitLab</li>
                                    </ul>
                                </div>
                            </div>
                            =======
                            <div className="skill">
                                <div className="square"></div>
                                <p>GERENCIADOR DE PACOTES</p>
                                <div className="skillDesc">
                                    <ul>
                                        <li>NPM</li>
                                        <li>YARN</li>
                                    </ul>
                                </div>
                            </div>
                            =======
                            <div className="skill">
                                <div className="square"></div>
                                <p>BIBLIOTECAS/FRAMEWORKS JS</p>
                                <div className="skillDesc">
                                    <ul>
                                        <li>React</li>
                                        <li>Angular</li>
                                        <li>Vue</li>
                                    </ul>
                                </div>
                            </div>
                            =======
                            <div className="skill">
                                <div className="square"></div>
                                <p>TESTES</p>
                                <div className="skillDesc">
                                    <ul>
                                        <li><mark>Cypress</mark></li>
                                        <li>Jest</li>
                                        <li><mark>Enzyme</mark></li>
                                    </ul>
                                </div>
                            </div>
                            =======
                            <div className="skill">
                                <div className="square"></div>
                                <p>SSR</p>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Next.js (REACT)</li>
                                        <li><mark>Universal (ANGULAR)</mark></li>
                                        <li><mark>Nuxt.js (VUE)</mark></li>
                                    </ul>
                                </div>
                            </div>
                            =======
                            <div className="skill">
                                <div className="square"></div>
                                <p>BUNDLERS</p>
                                <div className="skillDesc">
                                    <ul>
                                        <mark>
                                            <li>Webpack</li>
                                        </mark>
                                        <li><mark>Parcel</mark></li>
                                        <li><mark>esbuild</mark></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </section>

                </section>
            </main>

            {/*  */}{/*  */}{/*  */}{/*  */}{/*  */}{/*  ↓↓ FOOTER ↓↓  */}{/*  */}{/*  */}{/*  */}{/*  */}{/*  */}

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
                        <a href="mailto:contatogustavosilva017@outlook.com" target="_blank">contatogustavosilva017@outlook.com</a>
                    </div>

                    <div className="network">
                        <h3>Redes Sociais</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Curriculo