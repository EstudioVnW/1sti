import * as S from './styles';

//Component
import Menu from '../../../components/Header/Menu';
import ContentHeader from './ContentHeader';

function Header() {
  return (
    <S.Container>
      <Menu />
      <ContentHeader />
    </S.Container>
  );
}

export default Header;
