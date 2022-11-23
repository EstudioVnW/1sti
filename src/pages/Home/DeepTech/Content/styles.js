import styled from 'styled-components'

export const Container = styled.div`
  /* padding-top: 9rem; */
  display: flex;
  /* align-items: center; */
  /* margin: auto; */
  /* width: 50%; */
  /* width: 65%; */
`;

export const BookImage = styled.img`
  margin-top: -5rem;
`;


export const ContentSlider = styled.div`
  align-self: center;
  
  div:last-child{ 
    background: pink;
  }
`;

export const ContentText = styled.div`
  display: flex;
  /* :hover {
    animation: go-back 1s;
  }

  @keyframes go-back {
    0% {
        transform: translateX(500px);
    }
    100% {
        transform: translateX(0);
    }
  } */
`;

export const SliderTextContent = styled.div`
  height: auto;
  width: 290px;
`;

export const Text = styled.p`
  display: ${props => props.isVisible === 1 && 'none'};
  font-size: 1rem;
  font-family: 'CabinetGrotesk-Medium';
  line-height: 1.5rem;
  color: var(--color_ice);

  :hover {
    /* display: ${props => props.isVisible === 1 ? 'block' : 'none'}; */
  }
`;

export const SubText = styled(Text)`
  /* display: ${props => props.isVisible === 1 && 'none'}; */
  padding-top: 1rem;
  padding-bottom: 4.5rem;
  font-weight: 500;
  color: var(--color_grey);

  :hover {
    /* display: ${props => props.isVisible === 1 ? 'block' : 'none'}; */
  }
`;

export const IconArrow = styled.img`
  padding-right: 1rem;
  cursor: pointer;
`;
