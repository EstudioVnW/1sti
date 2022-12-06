import styled from 'styled-components'

export const ContentHeader = styled.div`
  padding: 7rem 3rem 0 4.563rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background: var(--color_lightBlack);

  @media(max-width: 768px) {
    padding-top: rem;
    padding: 1.813rem 1rem 0 2.063rem;
    height: initial;
  }
`

export const ContentText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

export const SubTitle = styled.h2`
  max-width: 37rem;
  font-size: 1.875rem;
  font-family: 'CabinetGrotesk-Bold';
  color: var(--color_lightBlue);

  @media(max-width: 768px) {
    padding-bottom: .875rem;
    font-size: 1.375rem;
  }
` 

export const Text = styled.p`
  padding-top: 2rem;
  max-width: 23rem;
  font-size: 1.125rem;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_white);
  line-height: 32px;

  @media(max-width: 768px) {
    padding-top: 1.25rem;
  }
`

export const Image  = styled.img`
  place-self: center;
  width: 45%;
  display: ${props => props.mobile ? 'none' : 'flex'};

  @media(max-width: 768px) {
    min-width: 70%;
    display: ${props => props.mobile ? 'flex' : 'none'};
  }
`;
