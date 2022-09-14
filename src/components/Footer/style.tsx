import tw from "tailwind-styled-components/dist/tailwind";

export const TemplateFooterContainer = tw.div`
    lg:flex-row lg:justify-between lg:mt-0
    sm:mt-[550px]
    bg-white flex flex-col-reverse w-full p-5 mt-[900px] justify-center
`

export const CopyContainer = tw.div`
    flex justify-center items-center text-[#424242]
`

export const Copy = tw.p`
    lg:mt-0
    text-xs flex flex-col items-center mt-[50px]
`

export const SocialContainer = tw.div`
    lg:flex-row lg:items-center
    flex flex-col-reverse
`