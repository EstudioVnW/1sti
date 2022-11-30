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
            Tecnologias visionárias para inovação de alto impacto
          </SubTitle>
          <S.Image src={digitalStrategy} alt='Foto de uma abelha em cima de uma flor' mobile />
        </div>
        <div>
          <S.Text>
            Considere a implementação de tecnologias de alto impacto,
            em alinhamento às necessidades ou oportunidades identificadas
            de seu negócio, aplicando na prática tendências avançadas de tecnologia.
          </S.Text>
          <S.Text subText>
            Os serviços de inovação deep tech da 1STi envolvem temas como computação quântica,
            processamento de linguagem natural e inteligência artificial aplicada, com aplicabilidade
            e segurança, para responder a questões complexas de sua empresa de forma única e à frente do mercado.
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

