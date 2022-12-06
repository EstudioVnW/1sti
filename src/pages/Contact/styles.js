import {
  arrowUpBlue,
  redArrow,
  whiteArrow,
} from '../../assets';

import styled from 'styled-components'

export const Header = styled.header`
  padding: 7rem 3rem 5.625rem 5.8rem;
  width: 100vw;
  background: var(--color_lightBlack);

  @media(max-width: 768px) {
    padding: 7rem 3.188rem 4.188rem 3.188rem;
    height: initial;
  }
`

export const HeaderSubtitle = styled.p`
  padding: 5.25rem 0 0 5.20rem;
  max-width: 50rem;
  font-size: 1.75rem;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_white);
  line-height: 2.2rem;

  :nth-child(3) {
    padding: 1.5rem 0 0 5.20rem;
  }

  @media(max-width: 768px) {
    padding: 3.313rem 0 0 0;
    font-size: 1.375rem;
    line-height: 2rem;

    :nth-child(3) {
      padding: 1.5rem 0 0 0;
    }
  }
`

export const TextEmail = styled(HeaderSubtitle)`
  padding: 0;
  display: inline;
  color: var(--color_ciano);

  @media(max-width: 768px) {
    font-size: 1.375rem;
    font-family: 'CabinetGrotesk-Bold';
    font-weight: bold;
  }
`

export const Main = styled.main`
  padding-left: 11rem;
  gap: 7.438rem;
  width: 100vw;
  background: var(--color_lightBlack);
  
  @media(max-width: 768px) {
    padding-left: 3.18811rem;
  }
`

export const Content = styled.div`
  padding-right: 2rem;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

export const ContentBox = styled.div`
  max-width: 293px;

  @media(max-width: 768px) {
    padding-bottom: 6.813rem;
  }
`

export const Title = styled.h3`
  font-size: 1.25rem;
  font-family: 'CabinetGrotesk-Extrabold';
  color: var(--color_white);
  letter-spacing: 2px;

  @media(max-width: 768px) {
    padding-bottom: 1.313rem;
  }
`

export const Text = styled.p`
  margin-left: ${props => props.ciano && '.688rem'} ;
  font-size: 1.25rem;
  font-family: 'CabinetGrotesk-Medium';
  color: ${props => props.ciano ? `var(--color_ciano)` : `var(--color_white)`} ;
  border-bottom: ${props => props.ciano && `1px solid var(--color_ciano)`} ;
`

export const Underline = styled(Text)`
  text-decoration: underline;
  display: inline;
`

export const ContentRow = styled.div`
  padding-top: .975rem;
  display: flex;
  cursor: pointer;

  :hover {
    p { font-weight: bold }
    background: no-repeat 90% url(${arrowUpBlue});
    background-position-y: bottom;
  }
`

export const ImgBook = styled.img`
  margin-left: -2rem;
  max-width: 365px;
  @media(max-width: 425px) {
    width: 100%;
  }
`

export const ContentBoxEmail = styled.div`
  padding: .975rem 0 .5rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color_red);
  background: no-repeat 90% url(${redArrow});

  @media(max-width: 768px) {
    padding: 1.5rem 0 .5rem 0;
    border-color: var(--color_white);
    background: none;

   ::after{
      content: '';
      margin-right: .625rem;
      width: 20px;
      background: no-repeat 90% url(${whiteArrow});
    }
  }
`

export const Input = styled.input`
  font-size: 1rem;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_red);
  background: var(--color_lightBlack);
  border: none;

  ::placeholder{
    color: var(--color_red);
  }

  @media(max-width: 768px) {
    color: var(--color_white);
    width: 100%;

    ::placeholder{
      color: var(--color_white);
    }
  }
`
