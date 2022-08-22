import styled, { css } from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

export const HeroSlide = styled.div`
    z-index: 1;
`

export const HeroSlider = styled.div`

`

export const HeroImage = styled.i`

`

export const HeroContent = styled.div`

`

export const Arrow = styled(IoMdArrowRoundForward)`

`

export const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

export const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin: 0 1rem 0 0;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: #cd853f;
        transform: scale(1.05);
    }
`

export const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`

export const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`