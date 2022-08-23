import React from 'react'
import {
    Headers,
    HeaderContainer,
    H5Text,
    H1Text,
    H5TextLight,
    BtnContainer,
    BtnLeft,
    ImageContainer,
    Image,
    SocialContainer,
    Contact,
    SocialIcon,
} from './HeaderElements';
import CV from '../../assets/image/cv.pdf';
import Me from '../../assets/image/me.png';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const Header = () => {
    return (
        <Headers>
            <HeaderContainer>
                <H5Text>Hello I`m</H5Text>
                <H1Text>KimJunSik</H1Text>
                <H5TextLight>Fullstack Developer</H5TextLight>
                <BtnContainer>
                    <BtnLeft href={CV} download>Download CV</BtnLeft>
                    <BtnLeft primary={true}>Let`s talk</BtnLeft>
                </BtnContainer>
                <SocialContainer>
                    <SocialIcon href="https://linkden.com" target="_blank"><BsLinkedin /></SocialIcon>
                    <SocialIcon href="https://github.com" target="_blank"><FaGithub /></SocialIcon>
                    <SocialIcon href="https://dribbble.com" target="_blank"><FiDribbble /></SocialIcon>
                </SocialContainer>
                <ImageContainer>
                    <Image src={Me} alt="me" />
                </ImageContainer>
                <Contact href="#contact">Scroll Down</Contact>
            </HeaderContainer>
        </Headers>

    )
}

export default Header