import * as S from './styles';

function SubTitle({ maxWidth, children }) {
  return (
    <S.Text maxWidth={maxWidth}> {children} </S.Text>
  );
}

export default SubTitle;
