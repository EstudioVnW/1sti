import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 4rem;
  padding-bottom: 14.947rem;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media(max-width: 1034px) {
    div:first-child {
      padding: 4.188rem 0 0 2rem;
    }

    div, div {
        div:first-child {
        padding: 0 0 3.284rem 0;
      }
    }
  }

  @media(max-width: 845px) {
    padding-bottom: 12.625rem;
    flex-direction: column;   
  }
`

export const ContentLogoOfTheJourneys = styled.div`
  margin: auto;
  padding-top: 9rem;
  align-self: center;
  width: 60%;
  max-width: 836.72px;

  @media(max-width: 845px) {
    padding: 0 2.024rem;
    width: 100%;
    align-self: start;
  }
`

export const ContentBusiness = styled.div`
  @media(max-width: 768px) {
    padding-bottom: 3.284rem;
  }
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

  @media(max-width: 768px) {
    text-align: left;
  }
`;

export const ContentLogos = styled.div`
  padding-bottom: ${props => props.education && '3.145rem'};
  display: flex;
  justify-content: ${props => props.education ? 'space-between' : 'space-around'};
  flex-wrap: wrap;

  @media(max-width: 540px) {
    padding-top: ${props => props.education || '3rem'};
    padding-bottom: 0;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const Figure = styled.figure`
  @media(max-width: 768px) {
    width: 50%;
  }
`;

export const Logo = styled.img`
  margin-top: 1.458rem;
  width: auto;
  object-fit: contain;
`;

export const ContentButton = styled.div`
  display: ${props => props.descktop ? 'flex' : 'none'};

  @media(max-width: 768px) {
    display: ${props => props.descktop ? 'none' : 'flex'};
  }
`;
