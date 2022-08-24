import styled from 'styled-components';

export const AboutSection = styled.section`
    margin: 8rem 0 0 0;
`

export const H5Text = styled.h5`
    font-weight: 500;
    text-align: center;
    color: rgba(255,255,255,0.6);  
`

export const H2Text = styled.h2`
    font-weight: 500;
    text-align: center;
    color: #4db5ff;
    margin: 0 0 3rem 0;
`

export const AboutContainer = styled.div`
    width: 75%
    margin: 0 auto;
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        gap : 0;
    }

    @m
`

export const AboutMe = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(
        45deg,
        transparent,
        #4db5ff;,
        transparent
    );
    display: grid;
    place-items: center;

    @media screen and (max-width: 1024px){
        width: 50%;
        margin: 2rem auto 4rem;
    }

    @media screen and (max-width: 600px){
        width: 65%;
        margin: 0 auto 3rem;
    }
`

export const AboutImageContainer = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: all 400ms ease;

    &:hover{
        transform: rotate(0);
    }
`

export const AboutImage = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
`

export const AboutContent = styled.div`
    @media screen and (max-width: 600px){
        text-align: center;
    }
`

export const AboutCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 600px){
        grid-template-cloumns: 1fr 1fr;
        gap: 1rem;
    }
`

export const AboutP = styled.p`
    margin: 2rem 0 2.6rem;
    color: rgba(255,255,255,0.6);

    @media screen and (max-width: 1024px){
        margin: 1rem 0 1.5rem;
    }

    @media screen and (max-width: 600px){
        margin: 1.5rem 0;
    }
`

export const AboutBtn = styled.a`
    width: max-content;
    display: inline-block;
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid #4db5ff;
    transition: all 400ms ease;
    background: #4db5ff;;
    color: #1f1f38;

    &:hover{
        background: #fff;
        color: #1f1f38;
        border-color: transparent;
    }
`

export const AboutIcon = styled.div`
    color: #4db5ff;
    font-size: 1.4rem;
    margin: 0 0 1rem 0;
`

export const H5Text_Article = styled(H5Text)`
    font-size: 0.95rem;
    color: #fff;
`

export const AboutArticle = styled.article`
    background: #2c2c6c;
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: all 400ms ease;

    &:hover{
        background: transparent;
        border-color: rgba(77,181,255,0.4);
        cursor: default;
    }
`

export const SmallText = styled.small`
    font-size: 0.7rem;
    color: rgba(255,255,255,0.6);
`
