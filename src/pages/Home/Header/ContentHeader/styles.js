import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 0 0 5.625rem;
  position: absolute;
  top: 7.375rem;

  @media(max-width: 768px) {
    position: initial;
    top: 0;
    padding-left: 2.063rem;
    padding-right: 1rem;
  }
`
export const Title = styled.h1`
  padding-top: 3.438rem;
  padding-bottom: 1rem;
  font-size: 3.375rem;
  font-weight: 700;
  font-family: 'GoshaSans-Bold';
  color: var(--color_white);

  @media(max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 0;
  }
`

export const SubTitle = styled.h2`
  font-size: 2.125rem;
  font-weight: 700;
  font-family: 'GoshaSans-Bold';
  color: var(--color_white);
` 

export const Text = styled.h3`
  padding-top: 2rem;
  max-width: 25rem;
  font-size: 1.25rem;
  font-family: 'CabinetGrotesk-Bold';
  color: var(--color_white);
  line-height: 32px;

  @media(max-width: 768px) {
    padding-top: 1.25rem;
  }
`
export const ContentButton  = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  
  /* button {
    margin: 2.438rem 1.875rem 0 0;

    @media(max-width: 768px) {
      margin-right: 1.563rem 0 .5rem 0;
    }
  } */
`;
