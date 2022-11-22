import styled from 'styled-components'

export const Container = styled.section`
  background: var(--color_lightBlack);
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Box = styled.div`
  padding: 3.75rem 3rem 3.708rem 4.563rem;
  width: 33.33%;
  height: 28.458rem;
`;

export const Title = styled.h3`
  padding-bottom: 1.625rem;
  font-size: 2.875rem;
  font-family: 'GoshaSans-Bold';
  color: var(--color_white);
  `;

export const Text = styled.h4`
  max-width: 19rem;
  font-size: 1.125rem;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_white);
  line-height: 1.7rem;
`;