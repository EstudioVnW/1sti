import React, { useState } from "react";

import * as S from './styles';

import {
  bookDeepTech,
  purpleLeftArrow,
  purpleRightArrow
} from '../../../../assets';

function ImageContent() {
  const [currentContent, setCurrentContent] = useState(0);

  const sliderText = [
    {
      idx: 0,
      text: `“A powerful blueprint for developing a 21st-century purposeful organisation.
      CEOs, designers and technologists alike will all take inspiration from this
      transdisciplinary approach to Deep Tech.”`,
      subText: `— Dave Gray, Founder of XPLANE and author
      of The Connected Company, Gamestorming and Liminal Thinking`
    },
    {
      idx: 1,
      text: `“At a time when the adoption of advanced technologies is accelerating,
      Deep Tech and the Amplified Organisation and its authors show how a systemic
      view and the relationships between these new technologies, humanity and the environment
      are of fundamental importance, since moments of true evolution never have technology as an end
      in itself.”`,
      subText: `— Giuliano Michel Fernandes, Head of Marketing and Communications, CBMM`
    },
  ];

  const renderSlider = () => (
    <S.ContentSlider>
      <S.ContentText>
        {sliderText.map(i => (
          <S.SliderTextContent>
            <S.Text>
              {i.text}
            </S.Text>
            <S.SubText>
              {i.subText}
            </S.SubText>
          </S.SliderTextContent>
        ))}
      </S.ContentText>
      <>
        <S.IconArrow src={purpleLeftArrow} alt='Voltar' />
        <S.IconArrow src={purpleRightArrow} alt='Próximo' />
      </>
    </S.ContentSlider>
  )

  return (
    <S.Container>
      <S.BookImage src={bookDeepTech} alt='Imagem do livro Deep Tech' />
      {renderSlider()}
    </S.Container>
  );
}

export default ImageContent;


