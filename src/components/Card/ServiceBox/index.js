import { useNavigate } from 'react-router-dom';

import Button from '../../Buttons';
import Title from '../../Title/TextBreak';

import * as S from './styles';

function SideBox({
  width,
  height,
  full,
  title,
  route,
  children,
  buttonText,
  secondTitle
}) {
  const navigate = useNavigate();

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
      {children}
      {buttonText && (
        <a href={route}>
          <Button>
            {buttonText}
          </Button>
        </a>
      )}
    </S.Container>
  );
}

export default SideBox;
