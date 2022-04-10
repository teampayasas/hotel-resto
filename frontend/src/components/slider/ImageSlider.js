import React, { useState } from 'react'
import '../slider/Slider.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
//IMAGES
import Bedroom from '../../images/bedroom.jpg';
import Recepcionists from '../../images/receptionists.jpg';
import Restaurant from '../../images/restaurant.jpg';
import Hotel from '../../images/hotel.jpg';

function ImageSlider() {
  return (
      <AliceCarousel autoPlay autoPlayInterval="2500">
        <img src={Hotel} className="sliderimg"/>
        <img src={Recepcionists} className="sliderimg"/>
        <img src={Restaurant} className="sliderimg"/>
        <img src={Bedroom} className="sliderimg"/>
      </AliceCarousel>
    )
}

export default ImageSlider

// Previous way for image gallery
// const ImageSlider = ( {slides} ) => {
//     const [current, setCurrent] = useState(0);
//     const length = slides.length;
//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1)
//     }

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1)
//     }

//     if(!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//     }

      

    //   <section className='holder'>
    //   <section className="slider">
    //       <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
    //       <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
    //   {SliderData.map((slide, index) => {
    //     return (
    //         <div className={index === current ? 'slide active' : 'slide'} 
    //         key={index}>
    //             {index === current && (
    //             <img src={slide.image} alt={slide.description} className='image'/>
    //             )}
    //         </div>
    //     )
    //     })}
    //     <section className='holder-form'> 
    //         {/* <BookingForm /> */}
    //         <FunDetails/>
    //     </section>
    //   </section>
    //   </section>