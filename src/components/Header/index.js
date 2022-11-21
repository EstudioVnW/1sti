import Menu from "./Menu";
import HeaderText from "./HeaderText";
import Button from "../Buttons";
import * as S from './styles';

import Video from '../../assets/video/headerVideo.mp4';


function App() {
  return (
    <S.Container>
      <Menu />
      <HeaderText />
      <S.Video src={Video} autoPlay controls />
      <S.ContentButton>
        <Button hasIcon>
          Entenda Deep Tech
        </Button>
        <Button noColor>
          Nossos clientes
        </Button>
      </S.ContentButton>
    </S.Container>
  );
}

export default App;
