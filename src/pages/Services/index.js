import Header from './Header';
import Services from './ContentServices';
import Footer from '../../components/Footer';

function ServicesScreen() {
  return (
    <>
      <Header />
      <main>
        <Services service />
      </main>
      <Footer />
    </>
  );
}

export default ServicesScreen;
