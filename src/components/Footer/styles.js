import styled, { css } from 'styled-components'

export const Container = styled.footer`
  padding: 6.542rem 4.563rem 2.5rem 4.563rem;
  width: 100vw;
  background: var(--color_lightBlack);

  @media(max-width: 768px) {
    padding: 3.75rem 2.031rem;
  }
`;

export const Content = styled.div`
  margin: auto;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid var(--color_lightBlue);
`;

export const Box = styled.div`
  padding-top: 2.563rem;
  ${props => props.logo && `
    display: flex;
  `}

  :hover {
    button {
      color: var(--color_white);
      background-color: transparent;
      border: 1px solid var(--color_white);
      transition: .3s;
    }
  }

  @media(max-width: 768px) {
    width: ${props => props.logo ? 'initial' : '20rem'};
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column-reverse;
    order: ${props => props.order};
    
    button {
      margin-top: 0;
    }
  }
`;

export const LogoPactoGlobal = styled.img`
  padding-top: 2.563rem;
  align-self: self-start;
  object-fit: contain;

  @media(max-width: 768px) {
    width: 5.438rem;
  }
`;

export const LogoIcon = styled.img`
  padding-right: ${props => props.lastItem ? '0' : '1.643rem'};

  @media(max-width: 768px) {
    margin: 0 0 2rem 2rem;
    padding: 0;
    width: 2.177rem;
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
