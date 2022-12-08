import Insights from './Insights';
import Footer from '../../components/Footer';
import Menu from '../../components/Header/Menu';

function ServicesScreen() {
  return (
    <>
      <Menu />
      <main>
        <Insights service />
      </main>
      <Footer />
    </>
  );
}

export default ServicesScreen;
