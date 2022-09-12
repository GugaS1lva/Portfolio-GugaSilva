import Link from 'next/link';
import React, { useState } from 'react'
import { FaSquareFull, FaBars } from "react-icons/fa";
import {
    TemplateHeaderContainer,
    LogoContainer,
} from './style';

export const Header = () => {
    const [showMenuMobile, setShowMenuMobile] = useState(false)

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

            <nav className="border-gray-200 absolute top-5 right-5 p-3 rounded-lg">
                <div className="flex flex-col items-end">
                    <button onClick={() => setShowMenuMobile(!showMenuMobile)} type="button" className="text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <FaBars className='w-7 h-7' />
                    </button>

                    <div className={`${showMenuMobile ? '' : 'hidden'} lg:block lg:w-auto`}>
                        <ul className="flex flex-col items-center justify-center py-1 rounded-lg lg:flex-row lg:text-sm lg:bg-white bg-white">
                            <li className='pb-5'>
                                <Link href="/">
                                    <a className='font-normal text-black uppercase text-sm hover:text-[#0050FF] px-4 py-2]'>sobre mim</a>
                                </Link>
                            </li>

                            <li className='pb-5'>
                                <Link href="/curriculum">
                                    <a className='font-normal text-black uppercase text-sm hover:text-[#0050FF] px-4 py-2]'>curriculo</a>
                                </Link>
                            </li>

                            <li className='pb-5'>
                                <Link href="/projects">
                                    <a className='font-normal text-black uppercase text-sm hover:text-[#0050FF] px-4 py-2]'>projetos</a>
                                </Link>
                            </li>

                            <li className='pb-5'>
                                <Link href="/contact">
                                    <a className='font-normal text-black uppercase text-sm hover:text-[#0050FF] px-4 py-2]'>contato</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </TemplateHeaderContainer>
    )
}
