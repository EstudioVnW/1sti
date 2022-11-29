//Component
import Header from '../../../components/Header';
import SubTitle from '../../../components/SubTitle/SubTitle-blue';
// import ContentHeader from './ContentHeader';
import { digitalStrategy } from '../../../assets';

import * as S from './styles';
import Title from '../../../components/Title';

function HeaderScreen() {

  const ContentHeader = () => (
    <S.Container>
      <S.ContentText>
        <div>
          <>
            <Title>Inovação</Title>
            <Title>Deep Tech </Title>
          </>
          <SubTitle>
            A tecnologia como meio para transformações profundas
          </SubTitle>
          <S.Image src={digitalStrategy} alt='Foto de uma abelha em cima de uma flor' mobile />
        </div>
        <div>
          <S.Text>
            Amplifique a estratégia de negócios com a dimensão digital pensando tecnologia
            como parte integrante do todo, alavancando otimizações e inovações de alto impacto.
            Conte com um trabalho de inteligência e aconselhamento para analisar e qualificar demandas
            e capacidades de sua organização, fundamentando a definição de focos de atuação e visão de futuro,
            com clareza dos passos a serem adotados e dos investimentos a serem realizados para a execução.
          </S.Text>
          <S.Text subText>
            A prática de Estratégia Digital da 1STi conta com especialistas em tecnologia, arquitetura
            organizacional e análise de missão crítica, permitindo a construção de modelos operacionais
            digitais consistentes e conectados aos objetivos de sua área ou negócio.
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
