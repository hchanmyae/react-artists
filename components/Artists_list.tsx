import React from 'react';
import Slider from 'react-slick';


type Props = {}

function Artists_list({}: Props) {

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
    const artistCards = [
        {

          imageSrc:
            'https://cdn.shopify.com/s/files/1/2098/9809/files/Drummer_Stan_Bicknell.jpg?v=1601350527',
          title: 'ADAM NEELY',
         
        },
        {

          imageSrc:
            'https://cdn.shopify.com/s/files/1/2098/9809/files/DJBeatmaker_Clark_Kent.jpg?v=1601350467',
          title: 'PAUL TURNER',
         
        },
        {

            imageSrc:
              'https://cdn.shopify.com/s/files/1/2098/9809/files/Drummer_Stan_Bicknell.jpg?v=1601350527',
            title: 'CLARK KENT',
           
          },
        {

          imageSrc:
            'https://cdn.shopify.com/s/files/1/2098/9809/files/Bassist_Paul_Turner.jpg?v=1601350438',
          title: 'STAN BICKNELL',
         
        },
        {

          imageSrc:
            'https://cdn.shopify.com/s/files/1/2098/9809/files/Small_750x750_2x_VivianCampbell.jpg?v=1614746950',
          title: 'JOSE RIOS',
          
        },
        {

            imageSrc:
              'https://cdn.shopify.com/s/files/1/2098/9809/files/Keyboardist_Michael_Blankenship.jpg?v=1601350631',
            title: 'MATEUS ASATO',
         
          },

          {

            imageSrc:
              'https://cdn.shopify.com/s/files/1/2098/9809/files/Guitarist_Plini.jpg?v=1601350599',
            title: 'PLINI',
           
          },
          {

            imageSrc:
              'https://cdn.shopify.com/s/files/1/2098/9809/files/Guitarist_Mateus_Asato.jpg?v=1601350574',
            title: 'MIKE BLANKENSHIP',
        
          },
      ]
    
  return (
    <div className='max-w-full '>
      <Slider {...sliderSettings}>
            {artistCards.map((card, index) => (
                <div className='text-center py-5 px-5 flex flex-col justify-center items-center' key={index}>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <img alt={card.title} src={card.imageSrc} width="351px" height="351px" />
                        <h2 className='capitalize text-2xl md:text-3xl py-5'>{card.title}</h2>
                    </div>
                </div>
            ))}
      </Slider>
    </div>
  )
}

export default Artists_list