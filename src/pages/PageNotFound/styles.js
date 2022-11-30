import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--color_lightBlack);
`

export const Main = styled.main`
  margin: auto;
  padding-top: 4.625rem; /* tamanho da header */
  max-width: 260px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    text-align: center;
  }

  button {
    margin-top: 2rem;
  }
`;

export const Image = styled.img`
  padding-bottom: 1.375rem;
`
