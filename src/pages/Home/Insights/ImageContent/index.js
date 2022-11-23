import * as S from './styles';

import {
  conch,
  increasedAgility,
  futureOfEducation
} from '../../../../assets';

import Title from '../../../../components/Title';

function ImageContent() {

  const renderContent = (
    img,
    altName,
    figcaption,
    text
  ) => (
    <S.Content>
      <img src={img} alt={altName} />
      <S.Figcaption> {figcaption} </S.Figcaption>
      <Title>
        {text}
      </Title>
    </S.Content>
  )

  return (
    <S.Container>
      {renderContent(increasedAgility, 'altName', 'artigo', 'O que é Agilidade Aumentada?')}
      {renderContent(futureOfEducation, 'altName', 'editorial', 'Deep Tech e o Futuro da Educação')}
      {renderContent(conch, 'altName', 'ensaio visual', 'Horizonte Digital')}
    </S.Container>
  );
}

export default ImageContent;


