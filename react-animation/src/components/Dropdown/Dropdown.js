import React from 'react'
import { 
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  BtnWrap, 
} from './DropdownElements'
import { Button } from '../Button';
import { menuData } from '../../assets/data/MenuData';

const Dropdown = ({isOpen, toggle}) => {
  return (
    <>
      <DropdownContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <DropdownWrapper>
          <DropdownMenu>
            {menuData.map((item, index) => (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            ))}
          </DropdownMenu>
          <BtnWrap>
            <Button primary="true" round="true" big="true" to="/contact">
              Contact Us
            </Button>
          </BtnWrap>
        </DropdownWrapper>

      </DropdownContainer>
    </>
  )
}

export default Dropdown