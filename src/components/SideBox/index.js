import Button from '../Buttons';
import SubTitle from '../SubTitle';
import Title from '../Title/TextBreak';
import * as S from './styles';

function SideBox({
  width,
  full,
  title,
  secondTitle,
  subTitle,
  buttonText
}) {
  return (
    <S.Container width={width} full={full}>
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
