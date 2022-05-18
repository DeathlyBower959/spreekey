import styled from 'styled-components'
import InstagramIcon from '../components/InstagramIcon'
import TwitterIcon from '../components/TwitterIcon'
import EmailIcon from '../components/EmailIcon'

import LandingKitsune from '../images/uncompressed/LandingKitsune.png'

const LandingPage = () => {
  const comissionsOpen = false
  return (
    <PageWrapper>
      <HeaderWrapper style={{ backgroundImage: `url(${LandingKitsune})` }}>
        ✧ spreekey ✧
      </HeaderWrapper>
      <SubHeader>avid character designer and illustrator</SubHeader>
      <StatusWrapper $comissionsOpen={comissionsOpen}>
        {comissionsOpen ? 'OPEN' : 'CLOSED'}
      </StatusWrapper>
      <Socials>
        <Social>
          <InstagramIcon width={25} />
        </Social>
        <Social>
          <TwitterIcon width={25} />
        </Social>
        <Social>
          <EmailIcon width={25} />
        </Social>
      </Socials>
      <ContentWrapper></ContentWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.div``

const HeaderWrapper = styled.div`
  text-align: center;
  padding: 2em 0;
  font-size: clamp(1em, 9vw, 3em);
  margin: 1em;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const SubHeader = styled.div`
  padding: 0 0.5em;
  text-align: center;
`

const StatusWrapper = styled.div`
  color: ${props => (props.$comissionsOpen ? 'green' : 'red')};

  text-align: center;
  font-size: 1.25em;
  margin-top: 0.25em;
`

const Socials = styled.div`
  display: flex;
  gap: 2em;
  justify-content: center;
  margin: 0.75em 0;
`

const Social = styled.div`
  fill: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid white;
  border-radius: 50%;
  padding: 0.75em;
`

const ContentWrapper = styled.div`
  background-color: #333;
`

export default LandingPage
