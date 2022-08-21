import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logout, auth } from "../../../_actions/user_action";
import { FaBars } from "react-icons/fa"
import {
    Nav,
    NavbarContainer,
    NavLogoContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./NavBarElement";

import { IconContext} from 'react-icons/lib';

import { animateScroll as scroll } from 'react-scroll';


const Navber = ({ toggle }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Login, setLogin] = useState(true);
    const onLogoClick = () => {
        navigate('/')
    }
    const onLoginClick = () => {
        navigate('/login')
    }
    const onRegisterClick = () => {
        navigate('/register')
    }

    const onLogoutClick = () => {
        dispatch(logout()).then((res) => {
            if (res.payload.isAuth === false) {
                alert("이미 로그아웃 상태입니다.!");
            } else {
                alert("로그아웃 성공");
                navigate("/");
            }
        });
    }

    const CheckLogin = () => {
        dispatch(auth()).then((res) => {
            if (res.payload.isAuth === false) {
                setLogin(false);
            } else {
                setLogin(true);
            }
        })
    }

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[]);

    return (
        <>  
            
            {CheckLogin()}
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogoContainer>
                            <NavLogo to='/' onClick={toggleHome}>Logo</NavLogo>
                        </NavLogoContainer>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    name='about'
                                    to="about" 
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="discover"
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="services"
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="signup"
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Sign up</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            {
                                Login
                                ?
                                <NavBtnLink to="/" onClick={onLogoutClick}>Logout</NavBtnLink>
                                :
                                <>
                                <NavBtnLink to="/login">Login</NavBtnLink>
                                <NavBtnLink to="/register">Register</NavBtnLink>
                                </>
                            }
                            
                            
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>

        </>

    )

}

export default Navber