import Link from "next/link"

function Contact() {
    return (
        <>
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

            <>CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - CONTATO - </>

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

export default Contact