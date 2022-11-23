import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 4rem;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ContentLogoOfTheJourneys = styled.div`
  padding-top: 9rem;
  align-self: center;
  width: 60%;
`

export const Title = styled.h5`
  padding-bottom: 1.625rem;
  height: 0px;
  font-size: .875rem;
  font-family: 'CabinetGrotesk-Bold';
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color_lightBlue);
  border-bottom: 2px solid var(--color_lightBlue);
`;

export const ContentLogos = styled.div`
  padding-bottom: ${props => props.paddingBottom && '2.75rem'};
  display: flex;
  justify-content: ${props => props.paddingBottom ? 'space-between' : 'space-around'};
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  margin-top: 1.458rem;
  width: auto;
  object-fit: contain;
`;


