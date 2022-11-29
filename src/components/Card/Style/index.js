import * as S from './styles';

// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { iconMore } from '../../../assets';

function Card({
    smallCard,
    screen,
    firstTitle,
    secondTitle,
    subtitle,
    route
  }) {
  const navigate = useNavigate();
  
  // const handleClick = (route) => {
  //   navigate(route);
  // }

  return (
    <S.Container
      smallCard={smallCard}
      screen={screen === firstTitle}
    >
      <>
        <S.Title> {firstTitle} </S.Title>
        <S.Title> {secondTitle} </S.Title>
      </>
      <S.Text> {subtitle} </S.Text>
      <S.Button onClick={() => navigate(route)}>
        <S.ButtonText>Saiba mais</S.ButtonText>
        <img src={iconMore} alt='Icone de de saiba mais' />
      </S.Button>
    </S.Container>
  );
}

export default Card;
