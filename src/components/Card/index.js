import * as S from './styles';

import Card from './Style';
import ServiceBox from './ServiceBox';

function Services({ service, title, children, width, buttonText }) {
  return (
    <S.Container>
     {service
       && <ServiceBox
        full
        paddingTopShort
        title={title}
        width={width}
        buttonText={buttonText}
      >
        { children }
      </ServiceBox>}
      <Card
        firstTitle='Estratégia'
        secondTitle='Digital'
        subtitle='A tecnologia como meio para transformações profundas'
      />
      <Card
        firstTitle='Backbones'
        secondTitle='Digitais'
        subtitle='Acelerando inovações com agilidade aumentada'
      />
      <Card
        firstTitle='Plataformas'
        secondTitle='Digitais'
        subtitle='O caminho para o presente e o futuro dos negócios'
      />
      <Card
        firstTitle='Inovação'
        secondTitle='Deep Tech'
        subtitle='Tecnologias visionárias para inovação de alto impacto'
      />
      <Card
        firstTitle='Deep'
        secondTitle='Analytics'
        subtitle='Amplificando análise de dados para multiplicar oportunidades'
      />
    </S.Container>
  );
}

export default Services;
