import styled from 'styled-components'

export const Text = styled.p`
  padding-top: 1.625rem;
  padding-bottom: 2.25rem;
  max-width: ${props => props.maxWidth ? props.maxWidth : '19rem'};
  font-size: 1.125rem;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_white);
  line-height: 1.7rem;
`;
