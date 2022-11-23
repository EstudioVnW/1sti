import styled from 'styled-components'

export const Container = styled.footer`
  padding: 2.563rem 4.563rem;
  width: 100vw;
  background: var(--color_lightBlack);
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
`;

export const LogoPactoGlobal = styled.img`
  padding-top: 2.563rem;
  align-self: self-start;
  object-fit: contain;
`;

export const LogoIcon = styled.img`
  padding-left: 1.643rem;
  width: 3.938rem;
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
