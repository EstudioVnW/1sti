import styled from 'styled-components'

export const Button = styled.button`
  margin: 2.438rem 1.875rem 0 0;
  padding: 0 1.438rem;
  height: 3.688rem;
  font-size: 1.063rem;
  font-family: 'CabinetGrotesk-Medium';
  color: ${props => props.noColor ? `var(--color_white)` : `var(--color_lightBlack)`};
  background: ${props => props.noColor ? 'transparent' : `var(--color_white)`};
  border: 1px solid var(--color_white);
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media(max-width: 768px) {
    margin-top: 1.563rem;
    margin-right: .5rem;
  }
`;

export const IconPlay = styled.img`
  padding-right: 0.5rem;
`;
