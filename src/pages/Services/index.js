import Header from '../../components/Header/Menu';
import Services from '../../components/Card';
import Footer from '../../components/Footer';

import { photoServices } from '../../assets';

import * as S from './styles';

function ServicesScreen() {
  const renderContentHeader = () => (
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
  )
  return (
    <div>
      <Header />
      {renderContentHeader()}
      <main>
        <Services service>
          <ul>
            <li>Eleva proposta de valor</li>
            <li>Escala soluções com agilidade aumentada, e</li>
            <li>Amplifica resultados com tecnologias emergentes e inovação profunda.</li>
          </ul>
        </Services>
      </main>
      <Footer />
    </div>
  );
}

export default ServicesScreen;
