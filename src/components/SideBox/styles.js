import styled from 'styled-components'

export const Container = styled.div`
  padding: 3.75rem 3rem 3.708rem 4.563rem;
  width: ${props => props.width || '33.33%'};
  height: 28.458rem;

  @media(max-width: 768px) {
    width: ${props => props.full && '100vw'};
  }
`;
