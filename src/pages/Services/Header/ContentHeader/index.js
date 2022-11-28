import { photoServices } from '../../../../assets';

import * as S from './styles';

function ContentHeader() {
  return (
    <S.ContentHeader>
      <S.ContentText>
        <div>
          <S.Title>Serviços</S.Title>
          <S.SubTitle>
            Explore novos caminhos para resolver os desafios mais complexos
            de sua organização
          </S.SubTitle>
        </div>
        <S.Image src={photoServices} alt='Foto de uma abelha em cima de uma flor' mobile />
        <S.Text>
          Experiência profunda em arquitetura digital, iniciativas estratégicas e de missão crítica,
          sendo ploneira em Deep Tech, a 1sti está pronta para inserir sua empresa em uma jornada de
          tecnologia com alma e impacto, que:
        </S.Text>
      </S.ContentText>
      <S.Image src={photoServices} alt='Foto de uma abelha em cima de uma flor' />
    </S.ContentHeader>
  );
}

export default ContentHeader;
