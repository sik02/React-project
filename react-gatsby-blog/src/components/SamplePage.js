import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SamplePage = () => {
    const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "travel-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Img
      fluid={[
          data.desktopImage.childImageSharp.fluid,

      ]}
    />
    )
}

export default SamplePage