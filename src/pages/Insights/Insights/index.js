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
        <Title>Insights</Title>
        <S.ContentInsights>
          <S.Figure>
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
          </S.Figure>
          <S.Figure editorial>
            <S.ImageInsights
              mobile
              editorial
              src={futureOfEducation}
              alt='Foto de uma abelha em cima de uma flor'
            />
            <S.Figcaption>
              <S.Title editorial>EDITORIAL</S.Title>
              <S.SubTitle editorial>
                Deep Tech and the future of education
              </S.SubTitle>
            </S.Figcaption>
          </S.Figure>
        </S.ContentInsights>

        {/* <div>
            <div>
              <S.Image src={girls} alt='Foto de uma abelha em cima de uma flor' mobile />
              <S.Title>ARTICLE</S.Title>
              <S.Text>
                Educational Backbone: new digital operational model
              </S.Text>
            </div>
            <div>
              <S.Image src={girls} alt='Foto de uma abelha em cima de uma flor' mobile />
              <S.Title>EDITORIAL</S.Title>
              <S.Text>
                Subverting the game logic
              </S.Text>
            </div>
          </div> */}
      </S.Content>
    </S.Container>
  );
}

export default Insights;
