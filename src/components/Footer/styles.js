import styled, { css } from 'styled-components'

export const Container = styled.footer`
  padding: 2.563rem 4.563rem;
  width: 100vw;
  background: var(--color_lightBlack);

  @media(max-width: 768px) {
    padding: 3.75rem 3.188rem;
  }
`;

export const Content = styled.div`
  margin: auto;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid var(--color_lightBlue);

  @media(max-width: 500px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  padding-top: 2.563rem;
  ${props => props.logo && `
    display: flex;
  `}

  @media(max-width: 768px) {
    order: ${props => props.order};
  }

  ${props => props.logo && css`
    @media(max-width: 768px) {
      width: 50%;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: column-reverse;
    }
   
    @media(max-width: 500px) {
      width: auto;
      align-items: flex-start;width: auto;
      align-items: flex-start;

      div:nth-child(1) {
        img {
          margin-bottom: 0;
        }
      }
    }
  `}
`;

export const LogoPactoGlobal = styled.img`
  padding-top: 2.563rem;
  align-self: self-start;
  object-fit: contain;

  @media(max-width: 768px) {
    width: 7rem;
  }
`;

export const LogoIcon = styled.img`
  padding-right: ${props => props.lastItem ? '0' : '1.643rem'};
  widtht: ${props => props.lastItem ? '2.938rem' : '3.938rem'};

  @media(max-width: 768px) {
    margin: 0 0 2rem 2rem;
    padding: 0;
    width: 2.938rem;
  }

  @media(max-width: 500px) {
    margin: 0 2rem 2rem 0;
  }
`;

export const Text = styled.p`
  padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '.6rem'};
  max-width: 396px;
  line-height: 1.7rem;
  font-size: ${props => props.fontSize ? props.fontSize : '1.25rem'};
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_white);
`;

export const Title = styled(Text)`
  padding-bottom: 1rem;
  font-size: .938rem;
  font-family: 'CabinetGrotesk-Bold';
  letter-spacing: 1.5px;
`;
