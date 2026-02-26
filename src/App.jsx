import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import FeaturedWorks from './components/FeaturedWorks';
import Skills from './components/Skills';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="portfolio">
      <Hero />
      <Experience />
      <FeaturedWorks />
      <Skills />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
