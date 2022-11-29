import { play } from '../../assets';

import * as S from './styles';

function Button({ noColor, hasIcon, onClick, children }) {
    return (
      <S.Button noColor={noColor} onClick={onClick}>
        {hasIcon && <S.IconPlay src={play} alt='Play Entenda Deep Tech' />}
        {children}
      </S.Button>
    );
  }
  
  export default Button;
  