import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;

  @media(max-width: 950px) {
    background-color: var(--color_lightBlack);
  }
`

export const Content = styled.div`
  margin: auto;
  padding: 7rem 3.188rem 1rem 3.188rem;
  max-width: 1440px;
  background-color: var(--color_white);

  @media(max-width: 950px) {
    padding: 7rem 3.188rem 1rem 3.188rem;
    width: 93%;
  }

  @media(max-width: 425px) {
    padding: 7rem 1rem 1rem 1rem;
  }
`

export const ContentWrap = styled.div`
  padding: 12.5rem 0 0 0;
  padding-top: ${props => props.second && '0'} ;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  background-color: var(--color_white);
  gap: 1rem;
  
  @media(max-width: 950px) {
    margin: auto;
    padding: ${props => props.second ? '0' : '3.375rem 0 0 0'};
    gap: 0;
    max-width: 288px;
    justify-content: center;
  }

  @media(max-width: 425px) {
    max-width: 100%;
  }

`

export const Figure = styled.figure`
  padding-bottom: 4.344rem;
  position: relative;
  display: flex;
  /* background: ${props => props.editorial && `var(--color_purple)`}; */
  /* border-radius: 50%; */
  width: 49%;

  @media(max-width: 950px) {
    padding-bottom: 4.063rem;
    width: 100%;
    flex-direction: column;
  }
`;

export const ImageInsights = styled.img`
  width: 602px;
  /* border-radius: 50%; */
  /* height: 90%; */
  align-self: center;
  /* transform: ${props => props.editorial && `scale(0.7)`}; */
  /* transform-origin: bottom; */
  
  @media(max-width: 1341px) {
    width: 502px;
  }

  @media(max-width: 1141px) {
    width: 402px;
  }

  @media(max-width: 945px) {
    width: 302px;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const Figcaption = styled.figcaption`
  position: absolute;
  top: 3.688rem;
  text-align: center;

  h2 {
    padding-bottom: .5rem;
  }

  @media(max-width: 950px) {
    position: relative;
    top: 0;
    padding-top: 1.25rem;
  }
`

export const Title = styled.h2`
  font-size: .875rem;
  font-family: 'CabinetGrotesk-bold';
  color: ${props => props.editorial ? `var(--color_white)` : `var(--color_darkGrey)`};
  letter-spacing: 1.4px;

  @media(max-width: 950px) {
    color: var(--color_darkGrey);
  }
`

export const SubTitle = styled.h3`
  max-width: 390px;
  font-size: 2.375rem;
  font-family: 'GoshaSans-bold';
  color: ${props => props.editorial ? `var(--color_white)` : `var(--color_black)`};

  @media(max-width: 950px) {
    font-size: 1.75rem;
    color: var(--color_lightBlack);
  }
`

export const Image = styled.img`
  width: 57%;
  max-width: 293px;
  height: 264px;
  object-fit: cover;

  @media(max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;


export const FrigcArticle = styled.figcaption`
  padding-left: 1rem;
  width: 48%;
  max-width: 274px;
  display: flex;
  flex-direction: column;
  
  @media(max-width: 950px) {
    margin: auto;
    padding-top: 1.25rem;
    padding-left: 0;
    text-align: center;
    width: 100%;
  }
`;

export const Text = styled.p`
  padding-top: .813rem;
  font-size: 1.75rem;
  font-family: 'GoshaSans-bold';
  color: var(--color_lightBlack);
`