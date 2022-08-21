import React from 'react'
import { menuData } from '../../assets/data/MenuData';
import{
    Nav,
    Logo,
    MenuBars,
    NavMenu,
    NavMenuLinks,
    NavBtn,
} from './NavbarElements';
import { Button } from '../Button';

const Navbar = () => {
  return (
    <>
        <Nav>
            <Logo to="/">Logo</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar