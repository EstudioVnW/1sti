import * as S from './styles';

import {
  bookDeepTech,
  purpleLeftArrow,
  purpleRightArrow
} from '../../../../assets';

function ImageContent() {

  const sliderText = [
    {
      text: `“A powerful blueprint for developing a 21st-century purposeful organisation.
      CEOs, designers and technologists alike will all take inspiration from this
      transdisciplinary approach to Deep Tech.”`,
      subText: `— Dave Gray, Founder of XPLANE and author
      of The Connected Company, Gamestorming and Liminal Thinking`
    },
    {
      title: `“At a time when the adoption of advanced technologies is accelerating,
      Deep Tech and the Amplified Organisation and its authors show how a systemic
      view and the relationships between these new technologies, humanity and the environment
      are of fundamental importance, since moments of true evolution never have technology as an end
      in itself.”`,
      subText: `— Giuliano Michel Fernandes, Head of Marketing and Communications, CBMM`
    },
  ];

  const renderSlider = () => (
    <S.ContentSlider>
      <S.Text>
        “A powerful blueprint for developing a 21st-century purposeful organisation.
        CEOs, designers and technologists alike will all take inspiration from this
        transdisciplinary approach to Deep Tech.”
      </S.Text>
      <S.SubText>
        — Dave Gray, Founder of XPLANE and author
        of The Connected Company, Gamestorming and Liminal Thinking
      </S.SubText>
      <>
        <S.IconArrow src={purpleLeftArrow} alt='Voltar' />
        <img src={purpleRightArrow} alt='Próximo' />
      </>
    </S.ContentSlider>
  )

  return (
    <S.Container>
      <img src={bookDeepTech} alt='Imagem do livro Deep Tech' />
      {renderSlider()}
    </S.Container>
  );
}

export default ImageContent;


