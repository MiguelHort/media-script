import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

import { ArrowLeft, Home, Instagram, Youtube, Twitter, Smartphone, Smile, Recycle, Image, Copy } from 'lucide-react';

function Home0() {

    var [legendaPronta, setLegendaPronta] = useState(["Clique no botão para gerar a Legenda"]);

    async function GerarTexto() {
        var input = document.getElementById("meuInput");
        var valorDigitado = input.value;

        const API_KEY = "AIzaSyD5PMVUKP2DDjb3XwKGBggq3_tQ_da9l5E";

        const genAI = new GoogleGenerativeAI(API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `Crie uma legenda para um post do Instagram com o título: ${valorDigitado}, legenda simples com no maximo 5 linhas, como se fosse um especialista na area falando. (tudo na formatação normal de texto, sem negrito, sem links)`;

        try {
            const result = await model.generateContent(prompt);
            const response = result.response;
            const text = response.text();
            setLegendaPronta(text);
        } catch (error) {
            console.error("Erro ao gerar legenda:", error);
        }

        return text;

    }

    var [hashtagPronta, setHashtagPronta] = useState(["Clique no botão para gerar as Hashtags"]);

    async function GerarHashtag() {
        var input = document.getElementById("meuInput");
        var valorDigitado = input.value;

        const API_KEY = "AIzaSyD5PMVUKP2DDjb3XwKGBggq3_tQ_da9l5E";

        const genAI = new GoogleGenerativeAI(API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `Crie 10 hashtags para um post do Instagram com o título: ${valorDigitado}, boas hashtags, criativas, como se fosse um especialista na area falando. (tudo na formatação normal de texto, sem negrito, sem links)(uma hashtag do lado da outra pulando espaços entre elas, tudo em letra minuscula, no maximo 2 palavras na hashtag)`;

        try {
            const result = await model.generateContent(prompt);
            const response = result.response;
            const text = response.text();
            setHashtagPronta(text);
        } catch (error) {
            console.error("Erro ao gerar legenda:", error);
        }

        return text;

    }

    function CopiarLegenda() {
        navigator.clipboard.writeText(legendaPronta);
    }

    function CopiarHashtag() {
        navigator.clipboard.writeText(hashtagPronta);
    }

    function Limpar() {
        setLegendaPronta("Clique no botão para gerar a Legenda");
        setHashtagPronta("Clique no botão para gerar as Hashtags");
    }



    return (
        <main className='flex flex-col w-screen h-[100dvh]  bg-zinc-950'>
            <header className='flex w-full h-[10dvh] border-b-[1px] border-zinc-600'>
                <div className='flex justify-center items-center  w-[15%] border-r-[1px] border-zinc-600'>
                    <p className='text-white font-normal text-xl'><span className='font-bold'>Bold</span> Social Media</p>
                </div>
                <div className='flex flex-1 items-center pl-6  w-[15%] border-r-[1px] border-zinc-600'>
                    <p className='text-white font-normal text-xl'>Titulo</p>
                </div>
                <div className='flex flex-1 items-center pl-6  w-[15%]'>
                    <p className='text-white font-normal text-xl'>Resultado</p>
                </div>     
            </header>
            <main className='flex w-full h-[90dvh]'>
                <div className='flex flex-col w-[15%] border-r-[1px] border-zinc-600 text-white list-none px-3 pt-6'>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Home className='w-4 stroke-white' />Home</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Instagram className='w-4 stroke-white' />Instagram</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Youtube className='w-4 stroke-white' />Youtube</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Twitter className='w-4 stroke-white' />Twitter</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Smartphone className='w-4 stroke-white' />Tiktok</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Smile className='w-4 stroke-white' />Whatsapp</li>
                </div>
                <div className='flex justify-cente w-[85%] text-white'>
                    <div className='flex flex-col justify-between items-center flex-1 h-auto p-6 border-r-[1px] border-zinc-600'>
                        <div className='flex justify-center items-center w-full'>
                            <input className='w-full outline-none pl-4 py-2 rounded-l bg-transparent border-[1px] border-zinc-600' type="text" placeholder='Qual o titulo?' id="meuInput" />
                            <button className='flex justify-center items-center w-16 h-full rounded-r bg-zinc-600 border-[1px] border-zinc-600 cursor-pointer hover:opacity-80'  type="submit" onClick={() => { GerarTexto(); GerarHashtag(); }}>
                                <Recycle />
                            </button>
                        </div>
                        <button className='bg-rose-700 text-white w-full h-10 font-medium rounded hover:cursor-pointer hover:opacity-70 hover:duration-500' type="submit" onClick={() => {Limpar()}}>Limpar</button>
                    </div>
                    <div className='flex flex-col flex-1 p-6 overflow-y-auto'>
                        <div className='flex flex-col gap-8 h-auto p-8 bg-zinc-800 rounded'>
                            <div className='flex justify-center items-center min-h-[200px] bg-zinc-300 rounded'>
                                <Image />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between pr-5'>
                                   <h3 className='text-lg font-semibold'>Legenda</h3> 
                                   <button className='text-white text-sm hover:opacity-70' onClick={() => {CopiarLegenda()}}><Copy className='w-5' /></button>
                                </div>
                                
                                <p className='text-sm text-zinc-400'>{legendaPronta}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between pr-5'>
                                  <h3 className='text-lg font-semibold'>Hashtags</h3>  
                                  <button className='text-white text-sm hover:opacity-70' onClick={() => {CopiarHashtag()}}><Copy className='w-5' /></button>
                                </div>
                                
                                <p className='text-sm text-zinc-400'>{hashtagPronta}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    )
}

export default Home0;