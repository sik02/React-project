import React, { useState, useRef, useEffect } from 'react'
import { Button } from '../Button';
import ImageOne from '../../assets/image/house1.jpg';
import ImageTwo from '../../assets/image/house2.jpg';
import ImageThree from '../../assets/image/house3.jpg';
import ImageFour from '../../assets/image/house4.jpg';

import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  Arrow,
  SliderButtons,
  PrevArrow,
  NextArrow,
} from './HeroElements';

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }
    timeout.current = setTimeout(nextSlide, 3000)

    return function (){
      if(timeout.current){
        clearTimeout(timeout.current)
      }
    }

  }, [current, length])

  const nextSlide = () => {
    if(timeout.current){
      clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    if(timeout.current){
      clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  return (
    <>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    {
                      current === 0 
                      ?
                      <HeroImage src={ImageOne} alt={slide.alt} />
                      : current === 1
                      ?
                      <HeroImage src={ImageTwo} alt={slide.alt} />
                      : current === 2
                      ?
                      <HeroImage src={ImageThree} alt={slide.alt} />
                      : 
                      <HeroImage src={ImageFour} alt={slide.alt} />
                    }
                    <HeroContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.price}</p>
                      <Button
                        to={slide.path}
                        primary="true"
                        css={`
                          max-width: 160px;
                        `}
                      >
                        {slide.label}
                        <Arrow />
                      </Button>
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            )
          })}
          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </>

  )
}

export default Hero