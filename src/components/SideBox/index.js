import Button from '../Buttons';
import SubTitle from '../SubTitle';
import Title from '../Title/TextBreak';
import * as S from './styles';

function SideBox({
  width,
  title,
  secondTitle,
  subTitle,
  buttonText
}) {
  return (
    <S.Container width={width}>
      <Title 
        title={title}
        secondTitle={secondTitle}
      />
      <SubTitle>
        {subTitle}
      </SubTitle>
      {buttonText && (
        <Button>
          {buttonText}
        </Button>
      )}
    </S.Container>
  );
}

export default SideBox;
