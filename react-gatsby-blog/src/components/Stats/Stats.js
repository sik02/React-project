import React from 'react'
import {
    StatsContainer,
    Heading,
    Wrapper,
    StatsBox, 
    Icon,
    Title,
    Description,
} from "./StatsElements";

import { StatsData } from "../../data/StatsData";


const Stats = () => {
  return (
    <StatsContainer>
        <Heading>Why Choose Us?</Heading>
        <Wrapper>
            {StatsData.map((item, index) => {
                return (
                    <StatsBox key={index}>
                        <Icon>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                    </StatsBox>
                )
            })}
        </Wrapper>
    </StatsContainer>
  )
}

export default Stats