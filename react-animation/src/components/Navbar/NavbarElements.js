import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`

export const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

export const Logo = styled(Link)`
    ${NavLink};
    font-style: italic;
`

export const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        color: #fff;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin: 0 -48px 0 0;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavMenuLinks = styled(Link)`
    ${NavLink};
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin: 0 24px 0 0;

    @media screen and (max-width: 768px){
        display: none;
    }
`