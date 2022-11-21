import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  
  @media(max-width: 768px) {
    padding-left: 3.188rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Icon = styled.img`
  padding: 0 2.518rem 2.518rem 0;
`;
