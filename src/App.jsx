import React from 'react';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Expertise from './sections/Expertise/Expertise';
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs';
import Process from './sections/Process/Process';
import Expansion from './sections/Expansion/Expansion';
import Footer from './sections/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';

const App = () => {
  return (
    <div className="w-full bg-[#050507] min-h-screen text-white overflow-x-hidden">
      <main id="main-content">
        <Hero />
        <About />
        <Expertise />
        <WhyChooseUs />
        <Process />
        <Expansion />
      </main>
      <Footer />
      <GetInTouch />
    </div>
  );
};

export default App;
