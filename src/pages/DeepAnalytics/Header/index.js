//Component
import Header from '../../../components/Header';
import SubTitle from '../../../components/SubTitle/SubTitle-blue';
import { digitalStrategy } from '../../../assets';

import * as S from './styles';
import Title from '../../../components/Title';

function HeaderScreen() {

  const ContentHeader = () => (
    <S.Container>
      <S.ContentText>
        <div>
          <>
            <Title>Deep</Title>
            <Title>Analytics</Title>
          </>
          <SubTitle>
            Amplificando análise de dados para multiplicar oportunidades
          </SubTitle>
          <S.Image src={digitalStrategy} alt='Foto de uma abelha em cima de uma flor' mobile />
        </div>
        <div>
          <S.Text>
            Aumente o poder dos dados criando um núcleo de inteligência
            capaz de aprofundar as análises usando hiper relacionamento
            e processamento de nova geração. O Deep Analytics é capaz de
            extrair informação a partir da fala, imagens e vídeos, documentos digitalizados,
            robôs digitais de extração e bancos de dados em qualquer fonte, públicos e privados.
          </S.Text>
          <S.Text subText>
            Conecte os seus processos a esse centro de inteligência e habilite a inteligência artificial
            para criar experiências personalizadas, otimizar a alocação e distribuição de recursos,
            construir plataformas de dados com visão 360 graus e descobrir continuamente oportunidades
            de eficiência operacional e financeira.
          </S.Text>
        </div>
      </S.ContentText>
      <S.Image src={digitalStrategy} alt='Foto de uma abelha em cima de uma flor' />
    </S.Container>
  )
  return (
    <Header>
      {ContentHeader()}
    </Header>
  );
}

export default HeaderScreen;
