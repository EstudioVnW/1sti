import * as S from './styles';
import Button from "../../Buttons";

function ContentHeader() {
  const renderContentText = () => (
    <>
      <S.Title>Tecnologia <br /> com Alma e Impacto</S.Title>
      <S.SubTitle line>–</S.SubTitle>
      <S.SubTitle>Para grandes desafios</S.SubTitle>
      <S.Text>
        Explore novos caminhos para resolver os desafios mais complexos de sua organização.
        Pioneira em Deep Tech, a 1STi está pronta para inserir sua empresa em uma jornada de
        tecnologiacom alma e impacto.
      </S.Text>
    </>
  )

  const renderContentButtons = () => (
    <S.ContentButton>
      <Button hasIcon>
        Entenda Deep Tech
      </Button>
      <Button noColor>
        Nossos clientes
      </Button>
    </S.ContentButton>
  )

  return (
    <S.Container>
      {renderContentText()}
      {renderContentButtons()}
    </S.Container>
  );
}

export default ContentHeader;
