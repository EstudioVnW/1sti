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

function ActiveJourneys() {
  const renderContentEducation = () => (
    <div>
      <S.Title>educação</S.Title>
      <S.ContentLogos paddingBottom>
        <S.Logo src={cogna} alt='Logo Cogna' />
        <S.Logo src={somosEducacao} alt='Logo Somos' />
        <S.Logo src={cruzeiroDoSul} alt='Logo Cruzeiro Do Sul' />
        <S.Logo src={laureate} alt='Logo Laureate' />
      </S.ContentLogos>
    </div>
  )

  const renderContentBusiness = (
    title,
    image,
    altName
  ) => (
    <div>
      <S.Title> {title} </S.Title>
      <S.Logo src={image} alt={altName} />
    </div>
  )

  return (
    <S.Container>
      <SideBox
        width='28%'
        title='Jornadas'
        secondTitle='Ativas'
        subTitle='Onde estamos e com quais soluções geramos impactos ampliados.'
        buttonText='Inicie sua jornada'
      />
      
      <S.ContentLogoOfTheJourneys>
        {renderContentEducation()}
        <S.ContentLogos>
          {renderContentBusiness('saúde', hospitalSirioLibanes, 'Hospital Sirio Libanes')}
          {renderContentBusiness('seguros', sulamerica, 'Shopping Sulamerica')}
          {renderContentBusiness('varejo', marisa, 'Loja Marisa')}
        </S.ContentLogos>
      </S.ContentLogoOfTheJourneys>

    </S.Container>
  );
}

export default ActiveJourneys;
