import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BookImage = styled.img`
  max-width: 541px;

  @media(max-width: 768px) {
    margin-left: -2rem;
    width: 100%;
  }
`;

export const ContentSlider = styled.div`
  padding-left: 4.563rem;
  align-self: center;
  position: relative;

  @media(max-width: 768px) {
    padding-left: 2rem;
    align-self: flex-start;
  }
`;

export const ContentText = styled.div`
  padding-bottom: 4.5rem;
  display: flex;

  @media(max-width: 768px) {
    padding-bottom: .813rem;
  }
`;

export const SliderTextContent = styled.div`
  height: auto;
  min-height: 376px;
  width: 290px;
  display: ${props => props.currentSlider ? 'flex' : 'none'};
  justify-content: center;
  flex-direction: column;
  
  @media(max-width: 768px) {
    justify-content: flex-start;
    min-height: 300px;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-family: 'CabinetGrotesk-Medium';
  line-height: 1.5rem;
  color: var(--color_ice);
`;

export const SubText = styled(Text)`
  padding-top: 1rem;
  font-weight: 500;
  color: var(--color_grey);
`;

export const IconArrow = styled.img`
  margin-right: 1rem;
  position: relative;
  bottom: 0;
  opacity: ${props =>
    (props.currentSlider === 0 && !props.next)
      || (props.currentSlider === 1 && props.next)
      ? '.5'
      : '1'
  };
  cursor: ${props =>
    (props.currentSlider === 0 && !props.next)
      || (props.currentSlider === 1 && props.next)
      ? 'initial'
      : 'pointer'
  };
`;
