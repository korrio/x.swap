import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import {BrowserView, MobileView} from 'react-device-detect';


import {isMobile} from 'react-device-detect';

const Logo = () => {
    if(isMobile) {
        return (
          <StyledLogo to="/">
          {/* <img src={chef} height="32" style={{ marginTop: -4 }} /> */}
          
          <StyledText>
          PHX{' '}
            
          </StyledText>
        </StyledLogo>
        )
    }
    return (
      <StyledLogo to="/">
      {/* <img src={chef} height="32" style={{ marginTop: -4 }} /> */}
      
      <StyledText>
      PhonenixETH{' '}
        <span>
          <MasterChefText>MasterHunter</MasterChefText>
        </span>
      </StyledText>
    </StyledLogo>
    );
};


const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: ${(props) => props.theme.color.grey[600]};
  font-family: 'Reem Kufi', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`


const StyledTextMobile = styled.span`
  color: ${(props) => props.theme.color.grey[600]};
  font-family: 'Reem Kufi', sans-serif;
  font-size: 17px;
  font-weight: 700;
  margin-right: 2px;
  letter-spacing: 0.03em;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`


const MasterChefText = styled.span`
  font-family: Noto Sans;
`

export default Logo
