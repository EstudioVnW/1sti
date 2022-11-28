import Header from './Header';
import Services from '../../components/Card';
import Footer from '../../components/Footer';

function ServicesScreen() {
  return (
    <>
      <Header />
      <main>
        <Services service>
          <ul>
            <li>Eleva proposta de valor</li>
            <li>Escala soluções com agilidade aumentada, e</li>
            <li>Amplifica resultados com tecnologias emergentes e inovação profunda.</li>
          </ul>
        </Services>
      </main>
      <Footer />
    </>
  );
}

export default ServicesScreen;
