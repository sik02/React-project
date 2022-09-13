import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
} from "./TripsElements";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Trips = () => {
    const data = useStaticQuery(graphql`
        query TripsQuery {
            allTripsJson {
                edges {
                  node {
                    alt
                    button
                    name
                    img
                  }
                }
              }
        }
    `)
    function getTrips(data){
        const tripsArray = []
        data.allTripsJson.edges.forEach((item, index) => {
            tripsArray.push(
                <div key={index}>
                    <Img src={item.node.img} />
                </div>
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