import React from 'react'
import {
    TestimonialsContainer,
    TopLine,
    Description,
    ContentWrapper,
    ColumnOne,
    Testimonial,
    ColumnTwo,
} from "./TestElements";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegLightbulb } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <TestimonialsContainer>
        <TopLine>
            Testimonials
        </TopLine>
        <Description>
            What People are Saying
        </Description>
        <ContentWrapper>
            <ColumnOne>
                <Testimonial>
                    <IoMdCheckmarkCircleOutline />
                        {""}
                        <h3>Sean Michales</h3>
                        <p>"The gratest experience of my life! Lorem ipsum dolor sit amet consecteutur adipiscing elit</p>
                </Testimonial>
                <Testimonial>
                    <FaRegLightbulb />
                        <h3>Sarah Kin</h3>
                        <p>"The gratest experience of my life! Lorem ipsum dolor sit amet consecteutur adipiscing elit</p>
                </Testimonial>
            </ColumnOne>
            <ColumnTwo>
                image
            </ColumnTwo>
        </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials