import tw from "tailwind-styled-components/dist/tailwind";

export const TemplateContactContainer = tw.div``

export const ContactContent = tw.main`
    lg:mb-[50px]
    sm:mb-[-450px]
    mt-[200px] mb-[-850px]
`

export const CentralColumn = tw.section`
    flex flex-col items-center
`

export const Form = tw.form`
    lg:w-[700px]
    sm:w-[600px] sm:px-[70px]
    font-bold text-sm bg-white py-[50px] px-[30px] my-[100px] w-[300px] shadow-[-10px_15px_10px_#00000038] 
`

export const InputContainer = tw.div`
    sm:flex-row
    mb-[60px] w-full flex flex-col
`

export const InputNameContainer = tw.div`
    sm:mr-5 
    w-full
`

export const InputAdditionalNameContainer = tw.div`
    sm:ml-5 sm:mt-0
    w-full mt-[40px]
`

export const InputEmailContainer = tw.div`
    w-full
`

export const InputSubjectContainer = tw.div`
    w-full
`

export const InputMessageContainer = tw.div`
    w-full
`