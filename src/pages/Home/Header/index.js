import * as S from './styles';

//Component
import Menu from '../../../components/Header';
import ContentHeader from './ContentHeader';

//Video
import Video from '../../../assets/video/headerVideo.mp4';

function Header() {
  return (
    <S.Container>
      <Menu />
      <S.Video src={Video} autoPlay controls />
      <ContentHeader />
    </S.Container>
  );
}

export default Header;
