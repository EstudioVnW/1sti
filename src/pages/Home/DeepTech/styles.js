import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 14.346rem;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media(max-width: 768px) {
    padding-top: 9rem;
    flex-direction: column;
  }
`;
