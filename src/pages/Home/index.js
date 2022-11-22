import Header from "../../components/Header";
import ActiveJourneys from "./ActiveJourneys";
import Insights from "./Insights";
import Services from "./Services";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <ActiveJourneys />
        <Insights />
      </main>
    </div>
  );
}

export default Home;
