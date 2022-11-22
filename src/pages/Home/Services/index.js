import * as S from './styles';

import ServiceBox from './ServiceBox';

function Services() {

  return (
    <S.Container>
      <S.Box>
        <S.Title> Serviços </S.Title>
        <S.Text>
          O que podemos fazer para elevar propostas de valor,
          escalar soluções com agilidade aumentada e amplificar
          resultados com tecnologias emergentes e inovação profunda:
        </S.Text>
      </S.Box>
      <ServiceBox
        firstTitle='Estratégia'
        secondTitle='Digital'
        subtitle='A tecnologia como meio para transformações profundas'
      />
      <ServiceBox
        firstTitle='Backbones'
        secondTitle='Digitais'
        subtitle='Acelerando inovações com agilidade aumentada'
      />
      <ServiceBox
        firstTitle='Plataformas'
        secondTitle='Digitais'
        subtitle='O caminho para o presente e o futuro dos negócios'
      />
      <ServiceBox
        firstTitle='Inovação'
        secondTitle='Deep Tech'
        subtitle='Tecnologias visionárias para inovação de alto impacto'
      />
      <ServiceBox
        firstTitle='Deep'
        secondTitle='Analytics'
        subtitle='Amplificando análise de dados para multiplicar oportunidades'
      />
    </S.Container>
  );
}

export default Services;