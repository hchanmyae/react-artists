import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from "../typings";


type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
  return (
    <div className="bg-[url('../public/banner/hero_banner.png')] bg-center bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto">
       
            <div className='h-screen flex items-center'>
                <div className="flex flex-wrap justify-center  min-w-full">
                    <motion.div 
                    initial={{        
                        opacity: 0,  
                     }}
                     animate={{
                       
                        opacity: 1,
                       
                     }}
                     transition={{
                        duration: 1.5,
                     }}
                    className="px-20 text-center  ">
                        <h1 className="font-bold mb-2 text-white text-4xl md:text-7xl"> {pageInfo?.title}</h1> 
                        <p className=' text-4md lg:max-w-full'>{pageInfo?.stubitle}</p>
                        <div className='py-5'>
                            <a target="_blank" href={pageInfo?.btn_link} rel="noreferrer" className="text-sm text-bold uppercase py-3 px-8 bg-[rgb(243,121,32)] hover:bg-[rgb(245,135,57)] text-white rounded-sm hover:shadow-xl transition duration-300">{pageInfo?.btn}</a>
                        </div>  
                    </motion.div>
                </div>  
            </div>
        </div>

        
        

    </div>


 
    
  )
}



export default Hero