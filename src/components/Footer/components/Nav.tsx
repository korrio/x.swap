import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://kovan.etherscan.io/address/0xBd82D8aaF403A866A3241Ae53503A2e5b9E22784"
      >
        Phonenix Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        Phonenixeth-ETH
      </StyledLink> */}
     {/* <StyledLink target="_blank" href="https://discord.gg/sqhXAqc">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/sushiswap">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/sushiswap">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/@sushiswapchef">
        Medium
      </StyledLink>*/}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
color: ${(props) => props.theme.color.red[900]};
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.red[500]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.red[900]};
  }
`

export default Nav
