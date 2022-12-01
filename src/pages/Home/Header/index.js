import React, { useState, useRef } from 'react';
import * as S from './styles';

//Component
import Header from '../../../components/Header';
import ContentHeader from './ContentHeader';

//Video
import Video from '../../../assets/video/headerVideo.mp4';

function HeaderScreen() {
  const vidRef = useRef();
  const [play, setPlay] = useState(false);

  const handleClick = () => {
    if(play){
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
    setPlay(!play);
  }

  return (
    <Header>
      <S.Video  autoPlay controls ref={vidRef} muted>
        <source src={Video} />
      </S.Video>
      <ContentHeader handleClick={handleClick} />
    </Header>
  );
}

export default HeaderScreen;
