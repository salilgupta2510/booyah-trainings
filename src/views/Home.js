import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Cta from '../components/sections/Cta';
import AboutCoach from '../components/sections/AboutCoach';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <AboutCoach invertMobile topDivider imageFill className="illustration-section-02" />
      <Cta split />
    </>
  );
}

export default Home;