import styled from 'styled-components'

export const Text = styled.h2`
  padding-top: 2rem;
  max-width: 37rem;
  font-size: 1.875rem;
  font-family: 'CabinetGrotesk-Bold';
  color: var(--color_lightBlue);

  @media(max-width: 768px) {
    padding-bottom: .875rem;
    max-width: 324px;
    font-size: 1.375rem;
  }
`;
