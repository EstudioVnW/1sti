import { play } from '../../assets';

import * as S from './styles';

function Button({ noBackground, hasIcon, children }) {
    return (
      <S.Button noBackground={noBackground}>
        {hasIcon && <S.IconPlay src={play} alt='Play Entenda Deep Tech' />}
        {children}
      </S.Button>
    );
  }
  
  export default Button;
  