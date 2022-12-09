import styled from 'styled-components'

export const Title = styled.h3`
  font-size: 4rem;
  font-family: 'GoshaSans-Bold';
  color: ${props => props.colorBlack ? `var(--color_lightBlack)` : `var(--color_white)`};

  @media(max-width: 768px) {
    font-size: 3.375rem;
  }
`;
