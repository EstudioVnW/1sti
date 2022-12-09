import styled from 'styled-components';

import {
  insightsDeeptech,
} from '../../../assets';

export const Container = styled.div`
  width: 100vw;

  @media(max-width: 950px) {
    background-color: var(--color_lightBlack);
  }
`

export const Content = styled.div`
  margin: auto;
  padding: 7rem 3.188rem 1rem 3.188rem;
  max-width: 1440px;
  background-color: var(--color_white);

  @media(max-width: 950px) {
    padding: 7rem 3.188rem 1rem 3.188rem;
    width: 93%;
  }

  @media(max-width: 425px) {
    padding: 7rem 1rem 1rem 1rem;
  }
`

export const ContentWrap = styled.div`
  padding: 12.5rem 0 0 0;
  padding-top: ${props => props.second && '0'} ;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  background-color: var(--color_white);
  gap: 1rem;
  
  @media(max-width: 950px) {
    margin: auto;
    padding: ${props => props.second ? '7.063rem 0 0 0;' : '3.375rem 0 0 0'};
    gap: 0;
    max-width: 288px;
    justify-content: center;
  }

  @media(max-width: 425px) {
    max-width: 100%;
  }
`

export const Figure = styled.figure`
  margin-bottom: 4.344rem;
  position: relative;
  display: flex;
  width: 49%;

  @media(max-width: 950px) {
    margin-bottom: 4.063rem;
    width: 100%;
    height: initial;
    flex-direction: column;
  }
`;

export const ContImage = styled.span`
  position: relative;
  max-width: 100%;
  width: 602px;
  height: 602px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.editorial && `var(--color_darkPurple)`};
  border-radius: 50%;

  ${props => props.editorial && `
    background-image: url(${insightsDeeptech});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    `}
    
    :hover {
      border-radius: initial;
      transition: all 0.2s ease 0s;
    }
    
    @media(max-width: 1341px) {
      width: 502px;
      height: 502px;
      background-position-y: 11rem;
    }
    
    @media(max-width: 1141px) {
      width: 402px;
      height: 402px;
  }

  @media(max-width: 950px) {
    width: 100%;
    height: initial;
    min-height: 288px;
    flex-direction: column;
    background-position-y: center;
  }
`;

export const ImageInsights = styled.img`
  width: 100%;
  max-width: 602px;
  border-radius: 50%;
  align-self: center;
`

export const Figcaption = styled.figcaption`
  position: absolute;
  top: 3.688rem;
  width: 100%;
  text-align: center;

  h2 {
    padding-bottom: .5rem;
  }

  @media(max-width: 950px) {
    position: relative;
    top: ${props => props.editorial ? '288px' : '0'};
    padding-top: 1.25rem;
  }
`

export const Title = styled.h2`
  font-size: .875rem;
  font-family: 'CabinetGrotesk-bold';
  color: ${props => props.editorial ? `var(--color_white)` : `var(--color_darkGrey)`};
  letter-spacing: 1.4px;

  @media(max-width: 950px) {
    color: var(--color_darkGrey);
  }
`

export const SubTitle = styled.h3`
  margin: auto;
  max-width: 390px;
  font-size: 2.375rem;
  font-family: 'GoshaSans-bold';
  color: ${props => props.editorial ? `var(--color_white)` : `var(--color_black)`};

  @media(max-width: 950px) {
    font-size: 1.75rem;
    color: var(--color_lightBlack);
  }
`

export const Image = styled.img`
  width: 57%;
  max-width: 293px;
  height: 264px;
  object-fit: cover;

  @media(max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;


export const FrigcArticle = styled.figcaption`
  padding-left: 1rem;
  width: 48%;
  max-width: 274px;
  display: flex;
  flex-direction: column;
  
  @media(max-width: 950px) {
    margin: auto;
    padding-top: 1.25rem;
    padding-left: 0;
    text-align: center;
    width: 100%;
  }
`;

export const Text = styled.p`
  padding-top: .813rem;
  font-size: 1.75rem;
  font-family: 'GoshaSans-bold';
  color: var(--color_lightBlack);
`
