import styled from 'styled-components'

export const Container = styled.div`
  padding: 7rem 3rem 6.938rem 4.563rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background: var(--color_lightBlack);

  @media(max-width: 768px) {
    padding: 7rem 1rem 0 2.063rem;
    height: initial;
  }
`

export const ContentText = styled.div`
  padding-bottom: 5rem;
  height: 100%;
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

export const Text = styled.p`
  padding-top: ${props => props.subText ? '2rem' : '7.313rem'};
  max-width: 485px;
  font-size: 1.125rem;
  font-family: ${props => props.subText ? 'CabinetGrotesk-Medium' : 'CabinetGrotesk-Extrabold'};
  color: var(--color_white);
  line-height: 32px;

  @media(max-width: 768px) {
    padding-top: ${props => props.subText ? '1.5rem' : '4rem'};
  }
`

export const Image = styled.img`
  padding-top: 6.625rem;
  margin-right: 3.375rem;
  width: 617.54px;
  min-width: 385px;
  display: ${props => props.mobile ? 'none' : 'flex'};
  place-self: flex-start;
  object-fit: contain;

  @media(max-width: 990px) {
    margin-right: 0;
  }

  @media(max-width: 768px) {
    padding-top: 3.188rem;
    margin: ${props => props.firstImg && 'auto'};
    width: 100%;
    min-width: 361.10px;
    max-width: 343px;
    display: ${props => props.mobile ? 'flex' : 'none'};
  }

  @media(max-width: 768px) {
    min-width: auto;
  }

`;

export const ContentCards = styled.div`
  max-width: 625.54px;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  margin: 0 .466rem .488rem 0;
  width: 7.346rem;
  height: 8.204rem;
  box-shadow: inset 0px 0px 20px #AD7CC4;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardText = styled.p`
  padding-top: 1rem;
  max-width: 95.77px;
  font-size: .688rem;
  font-family: 'CabinetGrotesk-Bold';
  color: var(--color_white);
  text-align: center;
`;
