import React from 'react'
import {
  AboutSection,
  H5Text,
  H2Text,
  AboutContainer,
  AboutMe,
  AboutImageContainer,
  AboutImage,
  AboutContent,
  AboutCard,
  AboutP,
  AboutBtn,
  AboutIcon,
  AboutArticle,
  H5Text_Article,
  SmallText,
} from './AboutElements';

import ME from '../../assets/image/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <>
      <AboutSection id='about'>
        <H5Text>Get to Know</H5Text>
        <H2Text>About Me</H2Text>
        <AboutContainer>
          <AboutMe>
            <AboutImageContainer>
              <AboutImage src={ME} alt="About Image" />
            </AboutImageContainer>
          </AboutMe>
          <AboutContent>
            <AboutCard>
              <AboutArticle>
                <AboutIcon><FaAward /></AboutIcon>
                <H5Text_Article>Experience</H5Text_Article>
                <SmallText>3+ Years Working</SmallText>
              </AboutArticle>
              <AboutArticle>
                <AboutIcon><FiUsers /></AboutIcon>
                <H5Text_Article>Clients</H5Text_Article>
                <SmallText>200+ Worldwide</SmallText>
              </AboutArticle>
              <AboutArticle>
                <AboutIcon><VscFolderLibrary /></AboutIcon>
                <H5Text_Article>Projects</H5Text_Article>
                <SmallText>80+ Completed</SmallText>
              </AboutArticle>
            </AboutCard>

            <AboutP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc gravida lobortis magna, sit amet facilisis enim semper ac. Integer orci sem,
            mattis et gravida id, malesuada et diam. Ut mollis.
            </AboutP>
            <AboutBtn href="#contact">Let's Talk</AboutBtn>
          </AboutContent>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default About