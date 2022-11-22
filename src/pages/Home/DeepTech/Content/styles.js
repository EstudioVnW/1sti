import styled from 'styled-components'

export const Container = styled.div`
  /* padding-top: 9rem; */
  display: flex;
  align-items: center;
  /* width: 65%; */
`;

export const ContentSlider = styled.div`
  max-width: 290px;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_ice);
  line-height: 1.5rem;
`;

export const SubText = styled(Text)`
  padding-top: 1rem;
  padding-bottom: 4.5rem;
  font-weight: 500;
  color: var(--color_grey);
`;

export const IconArrow = styled.img`
  padding-right: 1rem;
`;
