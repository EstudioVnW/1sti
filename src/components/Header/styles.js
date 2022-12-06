import styled from 'styled-components'

export const Container = styled.header`
  min-height: 100vh;
  background: var(--color_lightBlack);

  @media(max-width: 768px) {
    height: initial;
  }
`;
