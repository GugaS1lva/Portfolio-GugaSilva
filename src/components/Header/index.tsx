import Link from 'next/link';
import React, { useState } from 'react'
import { FaSquareFull } from "react-icons/fa";
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

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <button onClick={() => setShowMenuMobile(!showMenuMobile)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>

                    <div className={`${showMenuMobile ? '' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
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
                    </div>
                </div>
            </nav>
        </TemplateHeaderContainer>
    )
}
