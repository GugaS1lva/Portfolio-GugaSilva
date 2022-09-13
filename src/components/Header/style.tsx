import tw from "tailwind-styled-components/dist/tailwind";

export const TemplateHeaderContainer = tw.div`
    flex justify-end items-center bg-white px-9 py-8 w-full h-[92px] fixed z-10
`

export const LogoContainer = tw.a`
    flex flex-col items-center lg:flex lg:items-center absolute top-5 left-8 sm:top-8 sm:left-9 sm:flex-row
`

export const NavigatorContent = tw.nav`
    border-gray-200 absolute top-5 right-5 p-3 rounded-lg
`

export const NavContainer = tw.div`
    flex flex-col items-end
`