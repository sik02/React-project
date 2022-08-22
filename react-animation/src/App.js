import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/HeroSections/Hero';
import { SliderData } from './assets/data/SliderData';

function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData}/>
    </>
  );
}

export default App;
