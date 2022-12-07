import { useNavigate } from 'react-router-dom';
import * as S from './styles';

import SideBox from '../../../components/Card/ServiceBox';
import {
  cogna,
  marisa,
  laureate,
  sulamerica,
  cruzeiroDoSul,
  somosEducacao,
  hospitalSirioLibanes
} from '../../../assets';
import SubTitle from '../../../components/SubTitle';
import Button from '../../../components/Buttons';

function ActiveJourneys() {
  const navigate = useNavigate();

  const renderContentEducation = () => (
    <>
      <S.Title>educação</S.Title>
      <S.ContentLogos education>
        <S.Figure>
          <S.Logo src={cogna} alt='Logo Cogna' />
        </S.Figure>
        <S.Figure>
          <S.Logo src={somosEducacao} alt='Logo Somos' />
        </S.Figure>
        <S.Figure>
          <S.Logo src={cruzeiroDoSul} alt='Logo Cruzeiro Do Sul' />
        </S.Figure>
        <S.Figure>
          <S.Logo src={laureate} alt='Logo Laureate' />
        </S.Figure>
      </S.ContentLogos>
    </>
  )

  const renderContentBusiness = (
    title,
    image,
    altName
  ) => (
    <S.ContentBusiness>
      <S.Title> {title} </S.Title>
      <S.Logo src={image} alt={altName} />
    </S.ContentBusiness>
  )

  const renderButton = (descktop) => (
    <S.ContentButton descktop={descktop}>
      <Button onClick={() => navigate('/contato')}>
        Inicie sua jornada
      </Button>
    </S.ContentButton>
  )

  return (
    <S.Container id="ActiveJourneys">
      <SideBox
        width='21rem'
        height
        full
        title='Jornadas'
        secondTitle='Ativas'
      >
        <SubTitle maxWidth='13rem'>
          Onde estamos e com quais soluções geramos impactos ampliados.
        </SubTitle>
        {renderButton('descktop')}
      </SideBox>
      <S.ContentLogoOfTheJourneys>
        {renderContentEducation()}
        <S.ContentLogos>
          {renderContentBusiness('saúde', hospitalSirioLibanes, 'Hospital Sirio Libanes')}
          {renderContentBusiness('seguros', sulamerica, 'Shopping Sulamerica')}
          {renderContentBusiness('varejo', marisa, 'Loja Marisa')}
        </S.ContentLogos>
        {renderButton()}
      </S.ContentLogoOfTheJourneys>
    </S.Container>
  );
}

export default ActiveJourneys;
