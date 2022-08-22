import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/HeroSections/Hero';
import Dropdown from './components/Dropdown/Dropdown';
import InfoSection from './components/InfoSection/InfoSection';
import { SliderData } from './assets/data/SliderData';
import { InfoData } from './assets/data/InfoData ';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
