import {
  medium,
  facebook,
  linkedIn,
  instagran
} from '../../../../assets';

import * as S from './styles';

function SocialNetworks() {

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
      <S.Icon
        src={icon}
        alt={logoName}
      />
    </a>
  )

  return (
    <S.Container>
      <div>
        {renderSocialNetworks("https://medium.com/@1STi", medium, 'Logo Medium')}
        {renderSocialNetworks("https://pt-br.facebook.com/ola1STi/", facebook, 'Logo Facebook')}
      </div>
      <div>
        {renderSocialNetworks("https://br.linkedin.com/company/1sti", linkedIn, 'Logo LinkedIn')}
        {renderSocialNetworks("https://www.instagram.com/ola_1sti/", instagran, 'Logo Instagran')}
      </div>
    </S.Container>
  );
}

export default SocialNetworks;
