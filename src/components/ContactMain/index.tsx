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
                        <FaSquareFull className="text-xl text-[#0050FF]" />
                        <h2 className='text-4xl font-bold font-poppins ml-2'>Contato</h2>
                    </div>

                    <Form>
                        <InputContainer>
                            <InputNameContainer>
                                <label className='after:content-["*"] after:text-[#0050FF] after:text-lg after:ml-1' htmlFor="iname">Nome</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' type="text" name="name" id="iname" autoComplete="name" required />
                            </InputNameContainer>

                            <InputAdditionalNameContainer>
                                <label className='after:content-["*"] after:text-[#0050FF] after:text-lg after:ml-1' htmlFor="ilname">Sobrenome</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' type="text" name="lname" id="ilname" autoComplete="additional-name" required />
                            </InputAdditionalNameContainer>
                        </InputContainer>

                        <InputContainer>
                            <InputEmailContainer>
                                <label className='after:content-["*"] after:text-[#0050FF] after:text-lg after:ml-1' htmlFor="iemail">E-mail</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' type="email" name="email" id="iemal" autoComplete="email" required />
                            </InputEmailContainer>
                        </InputContainer>

                        <InputContainer>
                            <InputSubjectContainer>
                                <label htmlFor="isubject">Assunto</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' type="text" name="subject" id="isubject" />
                            </InputSubjectContainer>
                        </InputContainer>

                        <InputContainer>
                            <InputMessageContainer>
                                <label htmlFor="imessage">Mensagem</label>
                                <textarea className='flex flex-col w-full h-[150px] resize-none border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' name="message" id="imessage" cols={30} rows={10}></textarea>
                            </InputMessageContainer>
                        </InputContainer>

                        <div className="flex flex-col items-center sm:items-start">
                            <input className='bg-[#0050FF] text-white font-bold py-[10px] px-[40px] rounded-full mr-[10px] border-2 border-transparent hover:border-[#0050FF] hover:bg-white hover:text-black hover:cursor-pointer' type="submit" value="ENVIAR" />
                        </div>
                    </Form>
                </CentralColumn>
            </ContactContent>
        </TemplateContactContainer>
    )
}
