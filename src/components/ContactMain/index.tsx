import React from 'react'
import { FaSquareFull } from "react-icons/fa";
import { 
    TemplateContactContainer,
    ContactContent,
    CentralColumn,
    Form,
    InputContainer,
    InputNameContainer,
    InputAdditionalNameContainer,
    InputEmailContainer,
    InputSubjectContainer,
    InputMessageContainer,
} from './style'

export const ContactMain = () => {
    return (
        <TemplateContactContainer>
            <ContactContent>
                <CentralColumn>
                    {/* ATOMIC DESIIIIIGNNNN !!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                    <div className="flex items-center justify-center">
                        <FaSquareFull className="text-xl text-[#8257E6]" />
                        <h2 className='text-4xl font-bold font-poppins ml-2'>Contato</h2>
                    </div>

                    <Form>
                        <InputContainer>
                            <InputNameContainer>
                                <label className='after:content-["*"] after:text-[#8257E6] after:text-lg after:ml-1' htmlFor="iname">Nome</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#8257E6] font-bold hover:border-b-[3px] hover:border-[#8257E6] hover:text-[#8257E6] focus:border-b-[3px] focus:border-[#8257E6]' type="text" name="name" id="iname" autoComplete="name" required />
                            </InputNameContainer>

                            <InputAdditionalNameContainer>
                                <label className='after:content-["*"] after:text-[#8257E6] after:text-lg after:ml-1' htmlFor="ilname">Sobrenome</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#8257E6] font-bold hover:border-b-[3px] hover:border-[#8257E6] hover:text-[#8257E6] focus:border-b-[3px] focus:border-[#8257E6]' type="text" name="lname" id="ilname" autoComplete="additional-name" required />
                            </InputAdditionalNameContainer>
                        </InputContainer>

                        <InputContainer>
                            <InputEmailContainer>
                                <label className='after:content-["*"] after:text-[#8257E6] after:text-lg after:ml-1' htmlFor="iemail">E-mail</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#8257E6] font-bold hover:border-b-[3px] hover:border-[#8257E6] hover:text-[#8257E6] focus:border-b-[3px] focus:border-[#8257E6]' type="email" name="email" id="iemal" autoComplete="email" required />
                            </InputEmailContainer>
                        </InputContainer>

                        <InputContainer>
                            <InputSubjectContainer>
                                <label htmlFor="isubject">Assunto</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#8257E6] font-bold hover:border-b-[3px] hover:border-[#8257E6] hover:text-[#8257E6] focus:border-b-[3px] focus:border-[#8257E6]' type="text" name="subject" id="isubject" />
                            </InputSubjectContainer>
                        </InputContainer>

                        <InputContainer>
                            <InputMessageContainer>
                                <label htmlFor="imessage">Mensagem</label>
                                <textarea className='flex flex-col w-full h-[150px] resize-none border-b-2 border-[#585858] text-[#8257E6] font-bold hover:border-b-[3px] hover:border-[#8257E6] hover:text-[#8257E6] focus:border-b-[3px] focus:border-[#8257E6]' name="message" id="imessage" cols={30} rows={10}></textarea>
                            </InputMessageContainer>
                        </InputContainer>

                        <div className="flex flex-col items-center sm:items-start">
                            <input className='bg-[#8257E6] text-white font-bold w-[140px] h-[40px] pt-2 pb-2 pl-6 pr-6 rounded-full mr-3 border-2 border-transparent hover:border-[#191522] hover:bg-white hover:text-[#191522] hover:cursor-pointer' type="submit" value="ENVIAR" />
                        </div>
                    </Form>
                </CentralColumn>
            </ContactContent>
        </TemplateContactContainer>
    )
}
