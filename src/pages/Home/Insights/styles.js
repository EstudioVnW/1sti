import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 4rem;
  width: 100vw;
  display: flex;
  flex-direction: row;

  @media(max-width: 950px) {
    padding-top: 0;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  margin: auto;
  @media(max-width: 950px) {
    padding-left: 2rem;
    width: 100vw;
    overflow: scroll;
  }
`;
