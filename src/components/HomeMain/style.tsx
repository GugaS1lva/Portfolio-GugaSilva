import tw from "tailwind-styled-components/dist/tailwind";

export const TemplateHomeContainer = tw.div``

export const HomeContent = tw.main`
    2xl:
    xl: xl:w-[1100px]
    lg: lg:w-[900px]
    md: md:w-[700px]
    sm: sm:w-[600px]
    bg-white w-[340px] mt-[150px] mb-[100px]
`

export const CentralCard = tw.section`
    lg:flex 
    text-center h-[600px]
`

export const LeftCard = tw.div`
    lg:shadow-[-10px_15px_10px_#00000038]
    bg-[#F4ECE6] flex flex-col justify-between 
`

export const LeftInfoContainer = tw.div`
    flex flex-col items-center px-[70px]
`

// RESERVADO PARA O TÍTULO 


export const LeftIconContainer = tw.div`
    bg-white flex justify-center p-[20px]
`

export const IconsContainer = tw.div`
    lg:border-none
    flex border-b-2 border-black pb-3
`

export const RightCard = tw.div`
    lg:pt-0 lg:max-w-[700px]
    sm:
    bg-white pt-[50px] p-[35px]
`