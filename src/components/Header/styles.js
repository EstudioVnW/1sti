import styled from 'styled-components'

export const Container = styled.header`
  max-height: 100vh;
  background: var(--color_lightBlack);

  @media(max-width: 768px) {
    height: initial;
  }
`;
