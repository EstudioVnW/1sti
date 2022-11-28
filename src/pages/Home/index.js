import Header from './Header';
import Services from './Services';
import ActiveJourneys from './ActiveJourneys';
import Insights from './Insights';
import DeepTech from './DeepTech';
import StayPerInside from './StayPerInside';
import Footer from '../../components/Footer';

import * as S from './styles';

function Home() {
  return (
    <div>
      <Header />
      <S.Main>
        <Services />
        <ActiveJourneys />
        <Insights />
        {/* <DeepTech />
        <StayPerInside /> */}
      </S.Main>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
