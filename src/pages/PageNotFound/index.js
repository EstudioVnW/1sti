import { useNavigate } from 'react-router-dom';

import Menu from '../../components/Header/Menu';
import Title from '../../components/Title';
import Button from '../../components/Buttons';

import { pageNotFound } from '../../assets';

import * as S from './styles';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Menu />
      <S.Main>
        <S.Image src={pageNotFound} alt='Imagem Figurativa' />
        <Title>
          Página não encontrada
        </Title>
        <Button onClick={() => navigate('/')}>
          Voltar ao início
        </Button>
      </S.Main>
    </S.Container>
  );
}

export default PageNotFound;
