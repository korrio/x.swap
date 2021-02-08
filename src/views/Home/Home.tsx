import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/logo_ Phoenix_1.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={120} />}
        title="PhonenixETH is Ready"
        subtitle="Stake PhonenixETH LP tokens to claim your very own yummy PhonenixETH!"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <StyledInfo>
        <Button text="🔪 See the Menu" to="/farms" variant="secondary" />
        </StyledInfo>
       
      </div>
    </Page>
  )
}



const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[900]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
