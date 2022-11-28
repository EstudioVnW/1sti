import Button from '../../Buttons';
import Title from '../../Title/TextBreak';
import * as S from './styles';

function SideBox({
  width,
  height,
  full,
  title,
  secondTitle,
  children,
  buttonText
}) {
  return (
    <S.Container
     width={width}
     height={height}
     full={full}
    >
      <Title 
        title={title}
        secondTitle={secondTitle}
      />
      { children }
      {buttonText && (
        <Button>
          {buttonText}
        </Button>
      )}
    </S.Container>
  );
}

export default SideBox;
