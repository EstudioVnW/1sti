import * as S from './styles';

//Component
import Header from '../../../components/Header';
import ContentHeader from './ContentHeader';

function HeaderScreen() {
  return (
    <S.Container>
      <Header>
        <ContentHeader />
      </Header>
    </S.Container>
  );
}

export default HeaderScreen;
