import Link from 'next/link';
import React from 'react'
import { FaSquareFull } from "react-icons/fa";
import {
    TemplateHeaderContainer,
    LogoContainer,
} from './style';

export const Header = () => {
    return (
        <TemplateHeaderContainer>
            <Link href="/">
                <LogoContainer>
                    <div className='flex items-center'>
                        <FaSquareFull />
                        <strong className='text-2xl font-poppins ml-3 mr-3'>Gustavo Silva</strong>
                    </div>

                    <span className='text-lg'>/ DEV FRONTEND</span>
                </LogoContainer>
            </Link>

            <nav>
                <ul className='flex'>
                    <li>
                        <Link href="/">
                            <a className='text-black m-1 p-2 uppercase text-sm hover:text-[#0050FF]'>sobre mim</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/curriculum">
                            <a className='text-black m-1 p-2 uppercase text-sm hover:text-[#0050FF]'>curriculo</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/projects">
                            <a className='text-black m-1 p-2 uppercase text-sm hover:text-[#0050FF]'>projetos</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a className='text-black m-1 p-2 uppercase text-sm hover:text-[#0050FF]'>contato</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </TemplateHeaderContainer>
    )
}
