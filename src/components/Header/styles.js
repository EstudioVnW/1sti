import styled from 'styled-components'

export const Container = styled.header`
  height: 100vh;
  background: var(--color_lightBlack);

  @media(max-width: 768px) {
    height: initial;
  }
`;

export const Video = styled.video`
  width: 100vw;
  height: 100vh;

  @media(max-width: 768px) {
    height: initial;
  }
`;
