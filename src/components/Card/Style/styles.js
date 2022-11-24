import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 3.75rem 3rem 3.708rem 4.563rem;
  background: var(--color_black);
  width: 33.33%;
  height: 28.458rem;
  border: 1px solid #0B1617;
  cursor: pointer;

  :hover {
    box-shadow: inset 0px 0px 70px #AF39E6;

    h4 {
      color: var(--color_ciano);
    }
  }

  @media(max-width: 768px) {
    padding-left: 2.125rem;
    width: 50%;
  }

  @media(max-width: 390px) {
    flex-direction: column;
    width: 100vw;
  }
`

export const Title = styled.h3`
  font-size: 1.875rem;
  font-weight: 500;
  font-family: 'GoshaSans';
  color: var(--color_white);

  @media(max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.h4`
  padding-top: 2.25rem;
  max-width: 307px;
  font-size: 1.375rem;
  font-weight: 500;
  font-family: 'CabinetGrotesk-Medium';
  line-height: 2.1rem;
  color: var(--color_grey);

  @media(max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Button = styled.button`
  display: flex;
  position: absolute;
  bottom: 3.708rem;
  background: transparent;
`;

export const ButtonText = styled.p`
  padding-right: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_purple);
`;
