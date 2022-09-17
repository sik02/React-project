import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductInfo,
    TextWrap,
    ProductTitle,
} from "./TripsElements";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button } from "../Button";
import { ImLocation } from "react-icons/im";
import Images from '../../assets/images/travel-1.jpg'


const Trips = ({heading}) => {
    const data = useStaticQuery(graphql`
    
    query MyQuery {
        allTripsJson {
          edges {
            node {
              alt
              button
              name
              img
              fluid
            }
          }
        }
      }
      
    `)
    function getTrips(data) {
        const tripsArray = []
        const ImageArray = []
        data.allTripsJson.edges.forEach((item, index) => {
            tripsArray.push(
                <ProductCard key={index}>
                    {/* {data.allFile.edges.map((image, key) => (
                            <Img key={key} fluid={data.allFile.image.node.childImageSharp.fluid} />
                    ))} */}
                    
                    {/* <Img key={index} fluid={data.allFile.image.node.childImageSharp.fluid} /> */}
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>{item.node.name}</ProductTitle>
                        </TextWrap>
                        <Button 
                            to="/trips"
                            primary="true"
                            round="true"
                            css={`
                                position: absolute;
                                top: 420px;
                                font-size: 14px;
                            `}
                        >{item.node.button}</Button>
                    </ProductInfo>
                </ProductCard>
            )
        })
        return tripsArray
    }

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>{getTrips(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Trips