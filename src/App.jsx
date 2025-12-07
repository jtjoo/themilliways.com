import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import Header from './components/Header';
import DisappearSection from './components/DisappearSection';
import BandcampSection from './components/BandcampSection';
import PatreonSection from './components/PatreonSection';
import PaypalSection from './components/PaypalSection';
import ThirdAirSection from './components/ThirdAirSection';
import BlueskySection from './components/BlueskySection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <Header />
      <main className="container">
        <DisappearSection />
        <BandcampSection />
        <PatreonSection />
        <PaypalSection />
        <ThirdAirSection />
        <BlueskySection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
