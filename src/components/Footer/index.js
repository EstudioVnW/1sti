import {
  logoPactoGlobal,
  linkedIn,
  instagran,
  medium,
  facebook
} from '../../assets';
import Button from '../Buttons';

import * as S from './styles';

function Footer() {
  const renderSocialNetworks = (
    link,
    icon,
    logoName
  ) => (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <S.LogoIcon
        src={icon}
        alt={logoName}
      />
    </a>
  )

  return (
    <S.Container>
      <S.Content>
        <S.LogoPactoGlobal src={logoPactoGlobal} alt='Logo WE SUPPORT' />
        <S.Box>
          <S.Title>ECOSSISTEMA DEEP TECH</S.Title>
          <S.Text>Sofya</S.Text>
          <S.Text>Vai na Web</S.Text>
          <S.Text>Instituto Precisa Ser</S.Text>
        </S.Box>
        <S.Box>
          {renderSocialNetworks("https://br.linkedin.com/company/1sti", linkedIn, 'Logo LinkedIn')}
          {renderSocialNetworks("https://www.instagram.com/ola_1sti/", instagran, 'Logo Instagran')}
          {renderSocialNetworks("https://medium.com/@1STi", medium, 'Logo Medium')}
          {renderSocialNetworks("https://pt-br.facebook.com/ola1STi/", facebook, 'Logo Facebook')}
        </S.Box>
        <S.Box>
          <S.Text fontSize='1.625rem' paddingBottom='1rem'>Come work with us!</S.Text>
          <S.Text fontSize='1.125rem' paddingBottom='1.5rem'>We are always looking for talent to empower deep tech transformations.</S.Text>
          <Button>See openings</Button>
        </S.Box>
      </S.Content>
    </S.Container>
  );
}

export default Footer;
