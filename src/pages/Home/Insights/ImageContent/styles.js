import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 9rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 65%;
  
  h3 {
    font-size: 1.75rem;
  }
  `;

export const Content = styled.div`
  max-width: 295px;
  text-align: center;
`;

export const Figcaption = styled.figcaption`
  padding: 1.25rem 0;
  font-size: .875rem;
  font-family: 'CabinetGrotesk-Bold';
  color: var(--color_lightGrey);
  text-transform: uppercase;
`;
