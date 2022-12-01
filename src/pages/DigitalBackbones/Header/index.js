//Component
import Header from '../../../components/Header';
import SubTitle from '../../../components/SubTitle/SubTitle-blue';
import Title from '../../../components/Title';

import { backbones } from '../../../assets';

import * as S from './styles';

function HeaderScreen() {

  const ContentHeader = () => (
    <S.Container>
      <S.ContentText>
        <div>
          <>
            <Title>backbones</Title>
            <Title>Digitais</Title>
          </>
          <SubTitle>
           Acelerando inovações com agilidade aumentada
          </SubTitle>
          <S.Image src={backbones} alt='Foto de uma abelha em cima de uma flor' mobile />
        </div>
        <div>
          <S.Text>
            Agilize a inserção e garanta a continuidade de sua empresa na economia digital,
            com uma fundação tecnológica escalável e flexível que viabiliza inovações e criação
            de novas capacidades na velocidade necessária para adaptação a mudanças e aproveitamento
            de oportunidades de mercado.
          </S.Text>
          <S.Text subText>
            Os backbones Digitais construídos pela 1STi implementam uma
            espinha dorsal de tecnologia de missão crítica com interoperabilidade, escalabilidade e
            integridade costuradas em seu DNA, abrindo caminho para que sua equipe desenvolva plataformas
            digitais que geram inovações profundas.
          </S.Text>
        </div>
      </S.ContentText>
      <S.Image src={backbones} alt='Foto de uma abelha em cima de uma flor' />
    </S.Container>
  )
  return (
    <Header>
      {ContentHeader()}
    </Header>
  );
}

export default HeaderScreen;
