import React from 'react'
import {
  ServiceSection,
  H5Text,
  H2Text,
  H3Text,
  ServiceContainer,
  ServiceArticle,
  Head,
  List,
  ListItem,
  Icon,
  ListP,
} from './ServicesElements';

import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <>
      <ServiceSection id='services'>
        <H5Text>What I Offer</H5Text>
        <H2Text>Services</H2Text>
        <ServiceContainer>

          <ServiceArticle>
            <Head>
              <H3Text>UI/UX Design</H3Text>
            </Head>
            <List>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
            </List>
            
          </ServiceArticle>

          <ServiceArticle>
            <Head>
              <H3Text>Web Development</H3Text>
            </Head>
            <List>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
            </List>
            
          </ServiceArticle>

          <ServiceArticle>
            <Head>
              <H3Text>Content Creation</H3Text>
            </Head>
            <List>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
              <ListItem>
                <Icon><BiCheck /></Icon>
                <ListP>Lorem, ipsum dolor sit amet consectuer elit course classad.</ListP>
              </ListItem>
            </List>
            
          </ServiceArticle>

          

        </ServiceContainer>
      </ServiceSection>
    </>
  )
}

export default Services