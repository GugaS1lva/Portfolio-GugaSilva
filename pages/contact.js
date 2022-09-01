import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import Head from "next/head"
import Link from "next/link"

function Contact() {
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

            <main className="contactContainer">
                <div className="title">
                    <div className="square"></div>
                    <h2>Contato</h2>
                </div>
                {/* action="#" method="POST" */}
                <form>
                    <div className="inputContainer">
                        <div className="nameContainer">
                            <label for="iname">Nome <span clasName="requiredSymbol">*</span></label>
                            <input type="text" name="name" id="iname" autoComplete="name" required />
                        </div>

                        <div className="additionalName">
                            <label for="ilname">Sobrenome <span clasName="requiredSymbol">*</span></label>
                            <input type="text" name="lname" id="ilname" autoComplete="additional-name" required />
                        </div>
                    </div>

                    <div className="inputContainer">
                        <div>
                            <label for="iemail">E-mail <span clasName="requiredSymbol">*</span></label>
                            <input type="email" name="email" id="iemal" autocomplete="email" required />
                        </div>
                    </div>

                    <div className="inputContainer">
                        <div>
                            <label for="isubject">Assunto</label>
                            <input type="text" name="subject" id="isubject" />
                        </div>
                    </div>

                    <div className="inputContainer">
                        <div>
                            <label for="imessage">Mensagem</label>
                            <textarea name="message" id="imessage" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    <div className="buttonContainer">
                        <input type="submit" value="ENVIAR" />
                    </div>
                </form>
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

export default Contact