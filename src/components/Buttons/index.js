import { play } from '../../assets';

import * as S from './styles';

function Button({ noColor, hasIcon, children }) {
    return (
      <S.Button noColor={noColor}>
        {hasIcon && <S.IconPlay src={play} alt='Play Entenda Deep Tech' />}
        {children}
      </S.Button>
    );
  }
  
  export default Button;
  