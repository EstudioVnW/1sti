import * as S from './styles';

function ServiceBox({ firstTitle, secondTitle, subtitle }) {

  return (
    <S.Container>
      <>
        <S.Title> {firstTitle} </S.Title>
        <S.Title> {secondTitle} </S.Title>
      </>
      <S.Text> {subtitle} </S.Text>
      <S.Button>
        <S.ButtonText>Saiba mais</S.ButtonText>
        <S.TagMore>+</S.TagMore>
      </S.Button>
    </S.Container>
  );
}

export default ServiceBox;
