import * as S from './styles';

function Title({ colorBlack, children }) {
  return (
    <S.Title colorBlack={colorBlack}> {children} </S.Title>
  );
}

export default Title;
