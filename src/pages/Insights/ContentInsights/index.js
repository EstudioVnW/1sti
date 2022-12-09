import {
  girls,
  insightsIdeia,
  photoServices,
  futureOfEducation,
  insightsDeeptech,
} from '../../../assets';
import Title from '../../../components/Title';

import * as S from './styles';

function Insights() {
  return (
    <S.Container>
      <S.Content>
        <Title colorBlack>Insights</Title>
        <S.ContentWrap>
          <S.Figure>
            <S.ContImage>
              <S.ImageInsights
                mobile
                src={insightsIdeia}
                alt='Foto de uma abelha em cima de uma flor'
              />
            <S.Figcaption>
              <S.Title>ARTICLE</S.Title>
              <S.SubTitle>
                What is Augmented Agility?
              </S.SubTitle>
            </S.Figcaption>
            </S.ContImage>
          </S.Figure>
          <S.Figure editorial>
            <S.ContImage editorial>
              {/* <S.ImageInsights
                mobile
                editorial
                src={futureOfEducation}
                alt='Foto de uma abelha em cima de uma flor'
              /> */}
            <S.Figcaption editorial>
              <S.Title editorial>EDITORIAL</S.Title>
              <S.SubTitle editorial>
                Deep Tech and the future of education
              </S.SubTitle>
            </S.Figcaption>
            </S.ContImage>
          </S.Figure>
        </S.ContentWrap>

        <S.ContentWrap second>
          <S.Figure>
            <S.Image src={girls} alt='Foto de uma abelha em cima de uma flor' mobile />
            <S.FrigcArticle>
              <S.Title>ARTICLE</S.Title>
              <S.Text>
                Educational Backbone and a new digital operational model
              </S.Text>
            </S.FrigcArticle>
          </S.Figure>
          <S.Figure>
            <S.Image src={girls} alt='Foto de uma abelha em cima de uma flor' mobile />
            <S.FrigcArticle>
              <S.Title>EDITORIAL</S.Title>
              <S.Text>
                Digital Horizon
              </S.Text>
            </S.FrigcArticle>
          </S.Figure>
          <S.Figure>
            <S.Image src={girls} alt='Foto de uma abelha em cima de uma flor' mobile />
            <S.FrigcArticle>
              <S.Title>EDITORIAL</S.Title>
              <S.Text>
                Subverting the game logic
              </S.Text>
            </S.FrigcArticle>
          </S.Figure>
          <S.Figure>
            <S.Image src={girls} alt='Foto de uma abelha em cima de uma flor' mobile />
            <S.FrigcArticle>
              <S.Title>EDITORIAL</S.Title>
              <S.Text>
                Subverting the game logic
              </S.Text>
            </S.FrigcArticle>
          </S.Figure>
        </S.ContentWrap>
      </S.Content>
    </S.Container>
  );
}

export default Insights;
