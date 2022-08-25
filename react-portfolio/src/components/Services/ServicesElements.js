import styled from 'styled-components';

export const ServiceSection = styled.section`

`

export const H5Text = styled.h5`

`

export const H2Text = styled.h2`

`

export const H3Text = styled.h3`
    color: #1f1f38;
    font-size: 1rem;
    text-align: center;
`

export const ServiceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    width: 75%;
    margin: 0 auto;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`

export const ServiceArticle = styled.article`
    background: #2c2c6c;
    border-radius: 0 0 2rem 2rem;
    border: 1px solid #4db5ff;
    height: fix-content;
    transition: all 400ms ease;

    &:hover{
        background: transparent;
        border-color: rgba(77,181,255,0.4);
        cursor: default;
    }

    @media screen and (max-width: 1024px){
        height: auto;
    }
`

export const Head = styled.div`
    background: #4db5ff;
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 2rem 1rem rgba(0,0,0,0.1);
`

export const List = styled.ul`
    padding: 2rem;
`

export const ListItem = styled.li`
    display: flex;
    gap: 1rem;
    margin: 0 0 0.8rem 0;
`

export const Icon = styled.div`
    color: #4db5ff;
    margin: 2px 0 0 0;
`

export const ListP = styled.p`
    font-size: 0.9rem;
`