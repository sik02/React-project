import styled from 'styled-components';

export const ExpSection = styled.section`
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

export const H3Text = styled.h3`
    text-align: center;
    margin: 0 0 2rem 0;
    color: #4db5ff;
`

export const H4Text = styled.h4`
    font-weight: 500;
`

export const SmallText = styled.small`

`

export const ExpContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 75%;
    margin: 0 auto;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 600px){
        gap: 1rem;
    }

`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;

    @media screen and (max-width: 1024px){
        padding: 1rem;
    }
`

export const Container = styled.div`
    background: #2c2c6c;
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: all 400ms ease;

    &:hover{
        background: transparent;
        border-color: rgba(77,181,255,0.4);
        cursor: default;
    }

    @media screen and (max-width: 1024px){
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
    }

    @media screen and (max-width: 600px){
        width: 100%:
        padding: 2rem 1rem;
    }

`


export const Article_Detail = styled.article`
    display: flex;
    gap: 1rem;
`

export const Detail = styled.div`

`

export const IconBox = styled.div`
    margin-top: 6px 0 0 0;
    color: #4db5ff;
`

