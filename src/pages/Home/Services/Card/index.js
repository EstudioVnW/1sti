import * as S from './styles';

function ServiceBox({
  title,
  subtitle,
  button
}) {

  return (
    <S.Container>
      <S.Title> {title} </S.Title>
      <S.Text> {subtitle} </S.Text>
      {button && <S.Button>Saiba mais + </S.Button>}
    </S.Container>
  );
}

export default ServiceBox;
