import Header from "../../components/Header";
import Services from "./Services";
import ActiveJourneys from "./ActiveJourneys";
import Insights from "./Insights";
import DeepTech from "./DeepTech";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <ActiveJourneys />
        <Insights />
        <DeepTech />
      </main>
    </div>
  );
}

export default Home;
