import React from 'react'
import { motion } from "framer-motion";
import { Brand } from "../typings";

type Props = {
    brands: Brand[];
}

function Brands({brands}: Props) {
   
  return (
    <div className='p-3 max-w-7xl mx-auto  text-black'>
        <motion.div 
            initial={{       
                opacity: 0,
              }}
              transition={{
                  duration: 1,
              }}
              whileInView={{ opacity:1 ,x:0 }}
              viewport={{ once: true}}
            className="w-full">
                {brands.map((brandtitle) => (
                        <div key={brandtitle._id} className='text-left py-5 px-5 border-b-gray-200 border-b-2 last:border-b-0 '>
                            <div className='text-center flex flex-col justify-start'>
                                <div  className='text-amber-600 py-3 flex flex-row font-bold'>
                                    <p>{brandtitle.title}</p>
                                </div>
                                <div className="flex flex-row flex-wrap ">
                                {brandtitle.brand.map((bname, index) => (
                                    <div key={index} className='w-1/2  md:w-1/3 lg:w-1/4 xl:w-1/5 '>
                                        <p className='text-left text-sm py-3 pr-3'>{bname}</p>
                                    </div>
                                ))}
                                </div>
                                
                            </div>
                        </div>
                    ))}
        </motion.div>
    </div>
  )
}

export default Brands