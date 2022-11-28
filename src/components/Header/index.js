import * as S from './styles';

//Component
import Menu from './Menu';

function Header({ children }) {
  return (
    <S.Container>
      <Menu />
      { children }
    </S.Container>
  );
}

export default Header;
