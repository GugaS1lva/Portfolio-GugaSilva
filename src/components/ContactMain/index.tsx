import React from 'react'
import { TemplateContactContainer } from './style'
import { FaSquareFull } from "react-icons/fa";

export const ContactMain = () => {
    return (
        <TemplateContactContainer>
            <main className="mt-[200px] mb-[110px]">
                <section className='flex flex-col items-center'>
                    <div className="flex items-center justify-center">
                        <FaSquareFull className="text-xl text-[#0050FF]" />
                        <h2 className='text-4xl font-bold font-poppins ml-2'>Contato</h2>
                    </div>
                    <form className='font-bold text-sm bg-white py-[50px] px-[70px] my-[100px] w-[700px] shadow-[-10px_15px_10px_#00000038]'>
                        <div className="flex mb-[60px] w-full">
                            <div className="nameContainer w-full mr-5">
                                <label className='after:content-["*"] after:text-[#0050FF] after:text-lg after:ml-1' htmlFor="iname">Nome</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' type="text" name="name" id="iname" autoComplete="name" required />
                            </div>
                            <div className="additionalName w-full ml-5">
                                <label className='after:content-["*"] after:text-[#0050FF] after:text-lg after:ml-1' htmlFor="ilname">Sobrenome</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' type="text" name="lname" id="ilname" autoComplete="additional-name" required />
                            </div>
                        </div>
                        <div className="flex mb-[60px] w-full">
                            <div className='w-full'>
                                <label className='after:content-["*"] after:text-[#0050FF] after:text-lg after:ml-1' htmlFor="iemail">E-mail</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' type="email" name="email" id="iemal" autoComplete="email" required />
                            </div>
                        </div>
                        <div className="flex mb-[60px] w-full">
                            <div className='w-full'>
                                <label htmlFor="isubject">Assunto</label>
                                <input className='flex flex-col h-[50px] w-full border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' type="text" name="subject" id="isubject" />
                            </div>
                        </div>
                        <div className="flex mb-[60px] w-full">
                            <div className='w-full'>
                                <label htmlFor="imessage">Mensagem</label>
                                <textarea className='flex flex-col w-full h-[80%] resize-none border-b-2 border-[#585858] text-[#0050FF] font-bold hover:border-b-[3px] hover:border-[#0050FF] hover:text-[#0050FF] focus:border-b-[3px] focus:border-[#0050FF]' name="message" id="imessage" cols={30} rows={10}></textarea>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <input className='bg-[#0050FF] text-white font-bold py-[10px] px-[40px] rounded-full mr-[10px] border-2 border-transparent hover:border-[#0050FF] hover:bg-white hover:text-black hover:cursor-pointer' type="submit" value="ENVIAR" />
                        </div>
                    </form>
                </section>
            </main>
        </TemplateContactContainer>
    )
}
