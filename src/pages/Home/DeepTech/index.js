import * as S from './styles';

import SideBox from '../../../components/Card/ServiceBox';
import Content from './Content';
import SubTitle from '../../../components/SubTitle';

function Insights() {
  return (
    <S.Container>
      <SideBox
        full
        width='26rem'
        title='Pioneirismo'
        secondTitle='Deep Tech'
        subTitle='Deep Tech and the Amplified Organisation provides
        readers with a powerful and pivotal multi-disciplinary approach
        to deep tech which has been created to elevate value propositions,
        scale platforms and amplify the impact of organisations.'
        buttonText='Saiba mais'
      >
        <SubTitle>
          Deep Tech and the Amplified Organisation provides readers with a powerful
          and pivotal multi-disciplinary approach to deep tech which has been created
          to elevate value propositions, scale platforms and amplify the impact of organisations.
        </SubTitle>
      </SideBox>
      <Content />
    </S.Container>
  );
}

export default Insights;
