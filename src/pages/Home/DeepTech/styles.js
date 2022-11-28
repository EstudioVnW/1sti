import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 4rem;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;
