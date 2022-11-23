import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`;

export const BookImage = styled.img`
  margin-top: -5rem;
`;

export const ContentSlider = styled.div`
  align-self: center;
  position: relative;
`;

export const ContentText = styled.div`
  display: flex;
`;

export const SliderTextContent = styled.div`
  height: auto;
  min-height: 376px;
  width: 290px;
  display: ${props => props.currentSlider ? 'flex' : 'none'};
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-family: 'CabinetGrotesk-Medium';
  line-height: 1.5rem;
  color: var(--color_ice);
`;

export const SubText = styled(Text)`
  padding-top: 1rem;
  padding-bottom: 4.5rem;
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
