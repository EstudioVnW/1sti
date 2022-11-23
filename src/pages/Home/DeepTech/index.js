import * as S from './styles';

import SideBox from '../../../components/SideBox';
import Content from './Content';

function Insights() {
  return (
    <S.Container>
      <SideBox
        width='20%'
        title='Pioneirismo'
        secondTitle='Deep Tech'
        subTitle='Deep Tech and the Amplified Organisation provides
        readers with a powerful and pivotal multi-disciplinary approach
        to deep tech which has been created to elevate value propositions,
        scale platforms and amplify the impact of organisations.'
        buttonText='Saiba mais'
      />
      <Content />
    </S.Container>
  );
}

export default Insights;
