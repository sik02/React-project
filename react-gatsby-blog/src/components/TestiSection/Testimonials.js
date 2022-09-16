import React from 'react'
import {
    TestimonialsContainer,
    TopLine,
    Description,
    ContentWrapper,
    ColumnOne,
    Testimonial,
    ColumnTwo,
    Images,
} from "./TestElements";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegLightbulb } from 'react-icons/fa';
import { useStaticQuery, graphql} from "gatsby";

const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query{
            allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["testimage", "testimage2"]}}) {
                edges {
                  node {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
        }
    `)
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
                        <IoMdCheckmarkCircleOutline css={` color: #f9b19b; font-size: 2rem; margin-bottom: 1rem; `} />
                        <h3>Sean Michales</h3>
                        <p>"The gratest experience of my life! Lorem ipsum dolor sit amet consecteutur adipiscing elit. The moutains and tehs made it super easy bto book my trip and accmmodation."</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`color: #f9b19b; font-size: 2rem; margin-bottom: 1rem;`} />
                        <h3>Sarah Kin</h3>
                        <p>"The gratest experience of my life! Lorem ipsum dolor sit amet consecteutur adipiscing elit. The moutains and tehs made it super easy bto book my trip and accmmodation."</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((image, key) => (
                        <Images key={key} fluid={image.node.childImageSharp.fluid} />
                    ))}
                    
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials