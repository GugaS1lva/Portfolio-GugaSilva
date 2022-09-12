import tw from "tailwind-styled-components/dist/tailwind";

export const TemplateCurriculumContainer = tw.div`
    sm:mb-[-650px]
    lg:mb-[-100px]
    mb-[-900px]
`

export const CurriculumContent = tw.main`
    sm:mt-[200px] sm:mb-[110px] 
    mt-[150px] mb-0
`

export const CentralColumn = tw.section`
    flex flex-col items-center
`

export const Experience = tw.section`
    sm:w-[550px]
    lg:w-[700px]
`

export const CVContain = tw.div`
    sm:mt-24 sm:justify-between
    flex items-center justify-center mt-10
`

export const ExampleCard = tw.div`
    sm:flex-row sm:px-[40px]
    flex flex-col items-center bg-white my-14 py-10 px-5 shadow-[-10px_15px_10px_#00000038]
`

export const Infos = tw.div`
    w-[300px]
`

export const Desc = tw.div`
    sm:border-none
    w-[300px] border-t-2 border-gray-200 mt-6 pt-1
`

export const Formation = tw.section`
    sm:w-[550px]
    lg:w-[700px]
    flex flex-col mt-12 w-[340px]
`

export const SkillsContainer = tw.section`
    sm:w-[600px] sm:p-[50px]
    lg:w-[800px]
    flex flex-wrap bg-white my-[100px] p-[30px] w-[320px] shadow-[-10px_15px_10px_#00000038] 
`

export const Skills = tw.div`
    sm:flex-row
    flex flex-wrap w-[700px] justify-center
`

export const Skill = tw.div`
    bg-[#F4ECE6] rounded-[10px] w-[200px] m-4 py-[5px] px-[10px] shadow-[-10px_15px_10px_#00000038]
`

export const SkillTitle = tw.div`
    flex items-center
`

