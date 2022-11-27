import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Cta from '../components/sections/Cta';
import AboutCoach from '../components/sections/AboutCoach';
import InfoSection from '../components/sections/partials/InfoSection';
import TrainingCalendar from '../components/sections/TrainingCalendar';
import WhyUS from '../components/sections/WhyUs';

const Home = () => {

  const sectionHeader = {
    title: 'Kanban Management Professional (KMP)',
    paragraph: 'This credential is granted upon the completion of two classes. Kanban System Design, which teaches the basics of Kanban, flow, and how to design a Kanban system. Kanban Systems Improvement, which teaches how to evolve, improve, and scale a Kanban system. KMPs should be able to design a Kanban system and evolve and scale it beyond the team.'
  };
  
  return (
    <>
      {/* <Hero className="illustration-section-01" /> */}
      <InfoSection data={sectionHeader} invertMobile topDivider imageFill className="illustration-section-01" />
      <TrainingCalendar invertMobile topDivider imageFill className="illustration-section-02" />
      <WhyUS invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <AboutCoach invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;