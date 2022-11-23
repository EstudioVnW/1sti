import * as S from './styles';

import SideBox from '../../../components/SideBox';
import ImageContent from './ImageContent';

function Insights() {
  return (
    <S.Container>
      <SideBox
        width='20%'
        title='Insights'
        subTitle='A abordagem Deep Tech para temas do presente e futuro.'
        buttonText='Acesse nosso arquivo'
      />
      <ImageContent />
    </S.Container>
  );
}

export default Insights;
