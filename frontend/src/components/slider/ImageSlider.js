import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import '../slider/Slider.css'
import BookingForm from '../forms/BookForm';
import FunDetails from '../HotelFun'


const ImageSlider = ( {slides} ) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

  return (
      <section className='holder'>
      <section className="slider">
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
      {SliderData.map((slide, index) => {
        return (
            <div className={index === current ? 'slide actice' : 'slide'} 
            key={index}>
                {index === current && (
                <img src={slide.image} alt={slide.description} className='image'/>
                )}
            </div>
        )
        })}
        <section className='holder-form'> 
            {/* <BookingForm /> */}
            <FunDetails/>
        </section>
      </section>
      </section>
    )
}

export default ImageSlider