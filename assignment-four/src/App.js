import './App.css';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Hero />
      <InfoSection />
      <Quote />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
