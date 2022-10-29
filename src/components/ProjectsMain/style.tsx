import tw from "tailwind-styled-components/dist/tailwind";

export const TemplateProjectsContainer = tw.div``

export const ProjectsContent = tw.main`
    flex justify-center mt-[200px]
`

export const CentralColumn = tw.section`
    lg:w-[100%] lg:mb-[100px]
    sm:w-[600px] sm:mb-[-450px]
    flex flex-col items-center w-[300px] mb-[-800px]
`

export const Desc = tw.div`
    lg:w-[850px]
    sm:text-xl sm:w-[600px]
    text-center mt-8 w-[320px] text-white
`

export const CardProject = tw.div`
    lg:w-[900px] lg:h-[415px] lg:flex-row
    sm:text-base sm:w-[600px]
    flex flex-col h-[830px] bg-white my-[50px] w-[310px] text-sm shadow-[-10px_15px_10px_#00000038]
`

export const InfoProject = tw.div`
    pt-[50px]
`

export const TitleProject = tw.div`
    border-l-[10px] border-l-[#8257E6] pl-[30px]
`