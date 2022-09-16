import React from 'react'
import {
    EmailContainer,
    EmailContent,
    FormWrap,
} from "./EmailElements";
import { Button } from "../Button";

const Email = () => {
  return (
    <EmailContainer>
        <EmailContent>
            <h1>Get Access to Exclusive Offers</h1>
            <p>Sign up for your newsletter below to get $100 off your first trip!</p>
            <form action="#">
                <FormWrap>
                    <label htmlFor="email">
                        <input type="email" placeholder="Enter your email" id="email" />
                    </label>
                    <Button 
                        as="button"
                        type="submit"
                        primary="true"
                        round="true"
                        css={`
                            height: 48px;

                            @media screen and (max-width: 768px){
                                width: 100%;
                                min-width: 350px;
                            }

                            @media screen and (max-width: 400px){
                                width: 100%;
                                min-width: 250px;
                            }
                        `}
                    >
                        Sign up
                        </Button>
                </FormWrap>
            </form>
        </EmailContent>
    </EmailContainer>
  )
}

export default Email