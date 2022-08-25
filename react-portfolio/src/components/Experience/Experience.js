import React from 'react'
import {
  ExpSection,
  H5Text,
  H2Text,
  H3Text,
  H4Text,
  SmallText,
  ExpContainer,
  Container,
  Content,
  Article_Detail,
  Detail,
  IconBox,
} from './ExpElements';

import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <>
      <ExpSection id='experience'>
        <H5Text>What</H5Text>
        <H2Text>My Experience</H2Text>
        <ExpContainer>
          <Container>
            <H3Text>Frontend Development</H3Text>
            <Content>

              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>HTML</H4Text>
                  <SmallText>Experienced</SmallText>
                </Detail>

              </Article_Detail>
              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>CSS</H4Text>
                  <SmallText>Intermediate</SmallText>
                </Detail>

              </Article_Detail>
              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>JavaScript</H4Text>
                  <SmallText>Experienced</SmallText>
                </Detail>

              </Article_Detail>
              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>Bootstrap</H4Text>
                  <SmallText>Experienced</SmallText>
                </Detail>

              </Article_Detail>

              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>Tailwind</H4Text>
                  <SmallText>Experienced</SmallText>
                </Detail>

              </Article_Detail>
              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>React</H4Text>
                  <SmallText>Experienced</SmallText>
                </Detail>

              </Article_Detail>


            </Content>
          </Container>

          <Container>
            <H3Text>Backend Development</H3Text>
            <Content>

              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>Node JS</H4Text>
                  <SmallText>Experienced</SmallText>
                </Detail>

              </Article_Detail>
              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>MongoDB</H4Text>
                  <SmallText>Intermediate</SmallText>
                </Detail>

              </Article_Detail>
              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>PHP</H4Text>
                  <SmallText>Experienced</SmallText>
                </Detail>

              </Article_Detail>
              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>MySQL</H4Text>
                  <SmallText>Experienced</SmallText>
                </Detail>


              </Article_Detail>
              <Article_Detail>
                <IconBox><BsPatchCheckFill /></IconBox>
                <Detail>
                  <H4Text>Python</H4Text>
                  <SmallText>Experienced</SmallText>
                </Detail>

              </Article_Detail>


            </Content>
          </Container>
        </ExpContainer>
      </ExpSection>
    </>
  )
}

export default Experience