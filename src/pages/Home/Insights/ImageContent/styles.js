import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 9rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  
  h3 {
    font-size: 1.75rem;
  }

  @media(max-width: 950px) {
    padding-top: 0rem;
    width: 100vw;
    flex-wrap: nowrap;
    width: 65%;
  }
`;

export const Content = styled.div`
  width: 33.33%;
  padding-right: 2rem;
  text-align: center;

  @media(max-width: 950px) {
    padding-right: 1rem;
    width: 100vw;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 395px;

  @media(max-width: 950px) {
    width: 70vw;
  }

`;

export const Figcaption = styled.figcaption`
  padding: 1.25rem 0;
  font-size: .875rem;
  font-family: 'CabinetGrotesk-Bold';
  color: var(--color_lightGrey);
  text-transform: uppercase;
`;
