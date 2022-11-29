import * as S from './styles';

import SideBox from '../../../components/Card/ServiceBox';
import ImageContent from './ImageContent';
import SubTitle from '../../../components/SubTitle';

function Insights() {
  return (
    <S.Container>
      <SideBox
        full
        width='25rem'
        title='Insights'
        subTitle='A abordagem Deep Tech para temas do presente e futuro.'
        buttonText='Acesse nosso arquivo'
      >
        <SubTitle>
          A abordagem Deep Tech para temas do presente e futuro.
        </SubTitle>
      </SideBox>
      <S.Content>
        <ImageContent />
      </S.Content>
    </S.Container>
  );
}

export default Insights;
