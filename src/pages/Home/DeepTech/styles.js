import styled from 'styled-components'

export const Container = styled.section`
  margin: auto;
  padding-top: 14.346rem;
  width: 100vw;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media(max-width: 768px) {
    padding-top: 9rem;
    flex-direction: column;
  }
`;
