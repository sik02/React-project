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


const Trips = () => {
    const data = useStaticQuery(graphql`
        query TripsQuery {
            allTripsJson {
                edges {
                  node {
                    alt
                    button
                    name
                  }
                }
            }
        }
    `)
    function getTrips(data) {
        const tripsArray = []
        data.allTripsJson.edges.forEach((item, index) => {
            tripsArray.push(
                <ProductCard key={index}>
                    <Img src={item.node.img} fluid={item.node.fluid}/>
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>{item.node.name}</ProductTitle>
                        </TextWrap>
                        <Button to="/trips">{item.node.button}</Button>
                    </ProductInfo>
                </ProductCard>
            )
        })
        return tripsArray
    }

    return (
        <ProductsContainer>
            <ProductsHeading>Heading</ProductsHeading>
            <ProductWrapper>{getTrips(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Trips