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
                            <Link href="/cv/curriculo-dev-gugasilva.zip" download="curriculo-dev-gugasilva.pdf" type="application/zip" target="_blank">
                                <a>BAIXAR CV</a>
                            </Link>
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

                    <section className="skillsContainer">
                        <h4>Habilidades Técnicas</h4>

                        <div className="skills">
                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>HTML5</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Semântica</li>
                                        <li>Elementos</li>
                                        <li>Atributos</li>
                                        <li>Formulários</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>CSS3</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Herança</li>
                                        <li>Cascata</li>
                                        <li>Especificidade</li>
                                        <li>Box Model</li>
                                        <li>Flexbox/Grid</li>
                                        <li>Media Queries</li>
                                        <li>Animações Simples</li>
                                        <mark>
                                            <li>Sass, Less, PostCSS</li>
                                        </mark>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>JAVASCRIPT</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Sintax</li>
                                        <li>DOM</li>
                                        <li>Fetch API/<mark>(Ajax (XHR))</mark></li>
                                        <mark>
                                            <li>ES6+ & Modules</li>
                                        </mark>
                                        <mark>
                                            <li>FP - Programação Funcional</li>
                                        </mark>
                                        <mark>
                                            <li>Prorotype, POO</li>
                                        </mark>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>FRAMEWORK CSS</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Bootstrapp</li>
                                        <li>Tailwind</li>
                                        <mark>
                                            <li>Materialize</li>
                                        </mark>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>VERSIONAMENTO DE CÓDIGO</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Git</li>
                                        <li>GitHub</li>
                                        <li>GitLab</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>GERENCIADOR DE PACOTES</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <li>NPM</li>
                                        <li>YARN</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>BIBLIOTECAS/<br />FRAMEWORKS JS</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <li>React</li>
                                        <mark>
                                            <li>Angular</li>
                                        </mark>
                                        <mark>
                                            <li>Vue</li>
                                        </mark>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>TESTES</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <mark>
                                            <li>Cypress</li>
                                        </mark>
                                        <li>Jest</li>
                                        <mark>
                                            <li>Enzyme</li>
                                        </mark>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>SSR</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <li>Next.js (REACT)</li>
                                        <mark>
                                            <li>Universal (ANGULAR)</li>
                                        </mark>
                                        <mark>
                                            <li>Nuxt.js (VUE)</li>
                                        </mark>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div class="skillTitle">
                                    <div className="square"></div>
                                    <p>BUNDLERS</p>
                                </div>
                                <div className="skillIcon">
                                    {/*  */}
                                </div>
                                <div className="skillDesc">
                                    <ul>
                                        <mark>
                                            <li>Webpack</li>
                                        </mark>
                                        <mark>
                                            <li>Parcel</li>
                                        </mark>
                                        <mark>
                                            <li>esbuild</li>
                                        </mark>
                                    </ul>
                                </div>
                            </div>
                        </div>
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