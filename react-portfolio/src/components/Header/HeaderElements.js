import styled from 'styled-components';

export const Headers = styled.div`
    height: 100vh;
    padding: 7rem 0 0 0;
    overflow: hidden;

    @media screen and (max-width: 1024px){
        height: 68vh;
    }

    @media screen and (max-width: 600px){
        height: 100vh;
    }
`

export const HeaderContainer = styled.div`
    text-align: center;
    height: 100%;
    position: relative;
    width: 75%;
    margin: 0 auto;

    @media screen and (max-width: 1024px){
        width: 86%;
    }

    @media screen and (max-width: 600px){
        width: 90%;
    }
`

export const H5Text = styled.h5`
    color: #fff;
    font-weight: 500;
`

export const H1Text = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
`

export const H5TextLight = styled(H5Text)`
    color: rgba(255,255,255,0.6);
`

export const BtnContainer = styled.div`
    margin: 2.5rem 0 0 0;
    display: flex;
    gap: 1.2rem;  
    justify-content: center;
`

export const BtnLeft = styled.a`
    background: ${({ primary }) => (primary ? '#4db5ff' : 'transparent')};
    width: max-content;
    display: inline-block;
    color: ${({ primary }) => (primary ? '#1f1f38' : '#4db5ff')};
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid #4db5ff;
    transition: all 400ms ease;

    &:hover{
        background: #fff;
        color: ##1f1f38;
    }
`

export const ImageContainer = styled.div`
    background: linear-gradient(#4db5ff, transparent);
    width: 22rem;
    height: 30rem;
    position: relative;
    left: calc(50% - 11rem);
    margin: 4rem 0 0 0;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
    padding: 5rem; 1.5rem 1.5rem 1.5rem;
`

export const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
`

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;

    ::after{
        content: '';
        width: 1px;
        height: 2rem;
        background: #4db5ff;
    }

    @media screen and (max-width: 600px){
        display: none;
    }
`

export const SocialIcon = styled.a`
    color: #4db5ff;
    transition: all 400ms ease;

    &:hover{
        color: #fff;
    }
`

export const Contact = styled.a`
    position: absolute;
    color: #4db5ff;
    right: -2.3rem;
    bottom: 5rem;
    transtion: all 400ms ease;
    transform: rotate(90deg);
    font-weight: 200;
    font-size: 0.9rem;

    &:hover{
        color: #fff;
    }

    @media screen and (max-width: 600px){
        display: none;
    }
`




