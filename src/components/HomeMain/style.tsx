import tw from "tailwind-styled-components/dist/tailwind";

export const TemplateHomeContainer = tw.div`
    lg:mb-[0px]
    sm:mb-[-650px]
    mb-[-750px]
`

export const HomeContent = tw.main`
    2xl:
    xl: xl:w-[1100px]
    lg: lg:w-[900px]
    md:w-[700px] md:mb-[150px]
    sm:w-[600px] sm:mb-[250px]
    bg-white w-[340px] mt-[150px] mb-[0px]
`

export const CentralCard = tw.section`
    lg:flex 
`

export const LeftCard = tw.div`
    bg-[#32264F] flex flex-col justify-between text-center text-white shadow-[-10px_15px_10px_#00000077]
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
    lg:max-w-[700px] lg:px-[50px] lg:text-start lg:shadow-none
    sm:p-[50px] sm:pt-0 
    bg-white pt-0 text-center px-[25px] shadow-[-10px_15px_10px_#00000077] 
`