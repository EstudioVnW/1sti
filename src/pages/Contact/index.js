import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '../../components/Header/Menu';
import Footer from '../../components/Footer';
import Title from '../../components/Title';

import {
  globe,
  redArrow,
  whiteArrow,
  arrowUpBlue,
  bookDeepTech
} from  '../../assets';

import * as S from './styles';

function ContactScreen() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleChange = (ev) => {
    const { value } = ev.target;

    setEmail(value);
  }

  const renderContentContact = () => (
    <S.Header>
      <Title>
        Contact
      </Title>
      <S.HeaderSubtitle>
        We train business, from the frontline to the executive,
        in the new business discipline of Deep Tech.
        We advise and guide business to make strong and powerful decisions
        on the principles of deep tech.
      </S.HeaderSubtitle>
      <S.HeaderSubtitle>
        Contact us to work with Deep Tech and amplify your organization : <S.TextEmail>ola@1sti.com.br</S.TextEmail>
      </S.HeaderSubtitle>
    </S.Header>
  )

  const renderContent = () => (
    <S.Content>
      <S.ContentBox>
        <S.Title>BOOK</S.Title>
        <S.Text>
          How to elevate, scale and
          amplify your business through the New
          4Ps of platforms, purpose, people and planet.
        </S.Text>
        <S.ButtonDeep
          href="https://deeptechamplified.com"
          target="_blank" 
          rel="noreferrer"
        >
          <img src={globe} alt='Icone de um globo' />
          <S.Text ciano>deeptechamplified.com</S.Text>
          <S.ImgArrowUp src={arrowUpBlue} alt='Icon arrow up' />
        </S.ButtonDeep>
        <S.ImgBook src={bookDeepTech} alt='Imagem do livro Deep Tech' />
      </S.ContentBox>
      <S.ContentBox>
        <S.Title>NEWSLETTER</S.Title>
        <S.Text>
          Subscribe to our newsletter to be the
          first to hear the latest news about Deep
          Tech and receive updates, exclusive content,
          and more.
        </S.Text>
        <S.ContentBoxEmail>
          <S.Input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='enter your email for updates'
          />
        </S.ContentBoxEmail>
      </S.ContentBox>
      <S.ContentBox>
        <S.Title>CAREERS</S.Title>
        <S.Text>
          Our positions are for everyone.
          Explore our current open opportunities and
          <S.Underline 
            href='https://1sti.solides.jobs/'
            target="_blank" 
            rel="noreferrer"
          >
            join us
          </S.Underline>!
        </S.Text>
      </S.ContentBox>
    </S.Content>
  )

  return (
    <S.Container>
      <Menu />
        {renderContentContact()}
      <S.Main>
        {renderContent()}
      </S.Main>
      <Footer />
    </S.Container>
  );
}

export default ContactScreen;
