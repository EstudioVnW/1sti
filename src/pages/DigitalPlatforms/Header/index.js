//Component
import Header from '../../../components/Header';
import SubTitle from '../../../components/SubTitle/SubTitle-blue';

import { platforms } from '../../../assets';

import * as S from './styles';
import Title from '../../../components/Title';

function HeaderScreen() {
  const ContentHeader = () => (
    <S.Container>
      <S.ContentText>
        <div>
          <>
            <Title>Plataformas</Title>
            <Title>Digitais</Title>
          </>
          <SubTitle>
            O caminho para o presente e o futuro dos negócioscom agilidade aumentada
          </SubTitle>
          <S.Image src={platforms} alt='Foto de uma abelha em cima de uma flor' mobile />
        </div>
        <div>
          <S.Text>
            Concretize sua estratégia digital através de uma plataforma que aumenta
            a eficácia operacional e habilita o desenvolvimento de novos produtos ou
            serviços, com agilidade que proporciona vantagens de mercado a seus negócios.
          </S.Text>
          <S.Text subText>
            Os squads de agilidade aumentada da 1STi estão a postos para construir arquiteturas
            adequadas à escalabilidade, com discovery conjunto e desenvolvimento de plataformas
            prontas para a experiência físico-digital, com visão AI nativa e aplicada, habilitando
            o alcance de novos modelos de negócio, novos mercados ou novas fontes de receita.
          </S.Text>
        </div>
      </S.ContentText>
      <S.Image src={platforms} alt='Foto de uma abelha em cima de uma flor' />
    </S.Container>
  )
  return (
    <Header>
      {ContentHeader()}
    </Header>
  );
}

export default HeaderScreen;
