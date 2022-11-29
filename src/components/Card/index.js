import * as S from './styles';

import Card from './Style';
import ServiceBox from './ServiceBox';

function Services({
  smallCard,
  width,
  service,
  screen,
  title,
  buttonText,
  children
}) {
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
          {children}
        </ServiceBox>}
      <Card
        smallCard={smallCard}
        screen={screen}
        firstTitle='Estratégia'
        secondTitle='Digital'
        subtitle='A tecnologia como meio para transformações profundas'
        route='/estrategia-digital'
      />
      <Card
        smallCard={smallCard}
        screen={screen}
        firstTitle='Backbones'
        secondTitle='Digitais'
        subtitle='Acelerando inovações com agilidade aumentada'
        route='/backbones-digitais'
      />
      <Card
        smallCard={smallCard}
        screen={screen}
        firstTitle='Plataformas'
        secondTitle='Digitais'
        subtitle='O caminho para o presente e o futuro dos negócios'
        route='/plataformas-digitais'
      />
      <Card
        smallCard={smallCard}
        screen={screen}
        firstTitle='Inovação'
        secondTitle='Deep Tech'
        subtitle='Tecnologias visionárias para inovação de alto impacto'
        route='/inovacao-deep-tech'
      />
      <Card
        smallCard={smallCard}
        screen={screen}
        firstTitle='Deep'
        secondTitle='Analytics'
        subtitle='Amplificando análise de dados para multiplicar oportunidades'
        route='/deep-analytics'
      />
    </S.Container>
  );
}

export default Services;
