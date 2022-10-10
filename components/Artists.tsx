import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'
import { motion } from "framer-motion";
import { urlFor } from '../sanity';
import { Artist } from "../typings";


type Props = {
  artists: Artist[];
}

function Artists({artists}: Props) {
  const sliderSettings = {
    infinite: false,
    centerPadding: "60px",
    rows: 3,
    slidesPerRow: 1,
    slidesToShow: 3,
    swipeToSlide: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2

        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 1
        }
      }
    ]
  };

  return (
    <div className='h-full p-3'>
      <motion.div 
        initial={{                         
          opacity: 0,       
        }}
        transition={{
            duration: 1,
        }}
        whileInView={{ opacity:1 ,x:0 }}
        viewport={{ once: true}}
        className="flex  justify-center">
          <h1 className='font-bold mb-2 text-white text-2xl md:text-5xl text-center'>
            #MONOCREATORS #GOPLAY
          </h1>
      </motion.div>
      <motion.div 
      initial={{                         
        opacity: 0,
      }}
      transition={{
          duration: 1,
      }}
      whileInView={{ opacity:1 ,x:0 }}
      viewport={{ once: true}}
      className="max-w-7xl mx-auto my-10">

      <Slider {...sliderSettings}>
        {artists.map((artist, index) => (
                <div key={index} className='text-center py-5 px-5 flex flex-col justify-center items-center'>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <img alt={artist.name} src={urlFor(artist?.Image).url()} width="351px" height="351px" />
                        
                        <h2 className='capitalize font-bold text-2xl md:text-3xl py-5'>{artist.name}</h2>
                    </div>
                </div>
            ))}
      </Slider>

      </motion.div>
    </div>
  )
}

export default Artists