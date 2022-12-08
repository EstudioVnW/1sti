import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
`

export const Content = styled.div`
  margin: auto;
  padding: 7rem 3rem 1rem 4.563rem;
  max-width: 1440px;
  background: pink;

  @media(max-width: 768px) {
    /* padding-top: rem;
    padding: 1.813rem 1rem 0 2.063rem;
    height: initial; */
  }
`

export const ContentInsights = styled.div`
  padding: 12.5rem 0 4.906rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: red;
  gap: 1rem;
  
  @media(max-width: 768px) {
    padding: 3.375rem 0 4.125rem 0;
    flex-direction: column;
  }
`

export const Figure = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  /* background: ${props => props.editorial && `var(--color_purple)`}; */
  border-radius: 50%;
  width: 100%;
  /* height: 100%; */

  @media(max-width: 768px) {
    /* padding-bottom: 3.375rem; */
    max-width: 288px;
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

  @media(max-width: 768px) {
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

  @media(max-width: 768px) {
    color: var(--color_darkGrey);
  }
`

export const SubTitle = styled.h3`
  max-width: 390px;
  font-size: 2.375rem;
  font-family: 'GoshaSans-bold';
  color: ${props => props.editorial ? `var(--color_white)` : `var(--color_black)`};

  @media(max-width: 768px) {
    font-size: 1.75rem;
    color: var(--color_lightBlack);
  }
` 

export const Text = styled.p`
  font-size: 1.75rem;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_lightBlack);
  line-height: 1.2rem;

  @media(max-width: 768px) {
  }
`

export const Image  = styled.img`
  place-self: center;
  width: 45%;
`;
