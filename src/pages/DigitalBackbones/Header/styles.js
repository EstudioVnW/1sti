import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 7rem 3rem 0 4.563rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background: var(--color_lightBlack);
  overflow: hidden;
  
  @media(max-width: 768px) {
    padding: 7rem 1rem 0 2.063rem;
    height: initial;
  }
`

export const ContentText = styled.div`
  padding-top: 1.875rem;
  padding-bottom: 5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  div {
    z-index: 1;
  }
`

export const Title = styled.h1`
  padding-bottom: 2.375rem;
  font-size: 4rem;
  font-family: 'GoshaSans-Bold';
  color: var(--color_white);

  @media(max-width: 768px) {
    padding-bottom: .5rem;
    font-size: 3.375rem;
  }
`

export const Text = styled.p`
  padding-top: ${props => props.subText ? '2rem' : '7.313rem'};
  max-width: 485px;
  font-size: 1.125rem;
  font-family: ${props => props.subText ? 'CabinetGrotesk-Medium' : 'CabinetGrotesk-Extrabold'};
  color: var(--color_white);
  line-height: 32px;
  z-index: 1;

  @media(max-width: 768px) {
    padding-top: ${props => props.subText ? '1.5rem' : '4rem'};
  }
`

export const Image = styled.img`
  position: absolute;
  top: -94px;
  right: -460px;
  width: 110rem;
  min-width: 385px;
  display: ${props => props.mobile ? 'none' : 'flex'};
  place-self: flex-start;
  object-fit: contain;

  @media(max-width: 990px) {
    margin-right: 0;
  }

  @media(max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    min-width: 100%;
    max-width: 343px;
    display: ${props => props.mobile ? 'flex' : 'none'}; 
  }

  @media(max-width: 425px) {
    left: -20%;
    width: 130%;
    max-width: initial;
  }
`;
