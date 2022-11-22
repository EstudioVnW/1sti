import * as S from '../styles';

function Title({
  title,
  secondTitle
}) {
  return (
    <>
      <S.Title> {title} </S.Title>
      {secondTitle && <S.Title> {secondTitle} </S.Title>}
    </>
  );
}

export default Title;
