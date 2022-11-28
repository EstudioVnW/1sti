import * as S from './styles';

//Component
import Header from '../../../components/Header';
import ContentHeader from './ContentHeader';

//Video
import Video from '../../../assets/video/headerVideo.mp4';

function HeaderScreen() {
  return (
    <Header>
      <S.Video src={Video} autoPlay controls />
      <ContentHeader />
    </Header>
  );
}

export default HeaderScreen;
