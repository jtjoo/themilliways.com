import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import Header from './components/Header';
import SubvertSection from './components/SubvertSection';
import DisappearSection from './components/DisappearSection';
import ThirdAirSection from './components/ThirdAirSection';
import IanSection from './components/IanSection';
import BandcampSection from './components/BandcampSection';
import PatreonSection from './components/PatreonSection';
import PaypalSection from './components/PaypalSection';
import BlueskySection from './components/BlueskySection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <Header />
      <main className="container">
        <SubvertSection />
        <DisappearSection />
        <IanSection />
        <ThirdAirSection />
        <BandcampSection />
        <PatreonSection />
        <PaypalSection />
        <BlueskySection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
