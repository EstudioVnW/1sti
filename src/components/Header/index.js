import Menu from "./Menu";
import HeaderText from "./HeaderText";
import Button from "../Buttons";
import * as S from './styles';

import Video from '../../assets/video/headerVideo.mp4';


function App() {
  return (
    <>
      <Menu />
      <HeaderText />
      <S.Video controls src={Video} autoPlay/>
     {/* <S.ContentButton>
        <Button hasIcon>
          Entenda Deep Tech
        </Button>
        <Button noBackground>
          Nossos clientes
        </Button>
      </S.ContentButton> */}
    </>
  );
}

export default App;
