import React from 'react'
import{
    Section,
    Container,
    ColumnLeft,
    ColumnRight
} from './InfoSectionElements';
import { Button } from '../Button';
import ImageOne from '../../assets/image/house1.jpg';

const InfoSection = ({
    heading, 
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    reverse,
}) => {
  return (
    <>
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={ImageOne} alt="home" />
                </ColumnRight>
            </Container>
        </Section>

    </>
  )
}

export default InfoSection