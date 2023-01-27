import React, {useEffect} from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Cta from '../components/sections/Cta';
import AboutCoach from '../components/sections/AboutCoach';
import InfoSection from '../components/sections/partials/InfoSection';
import TrainingCalendar from '../components/sections/TrainingCalendar';
import WhyUS from '../components/sections/WhyUs';
import Testimonials from '../components/sections/Testimonials';
import { useLocation} from 'react-router-dom';
import { gtag } from 'ga-gtag';
import Caraousel from '../components/elements/Carousel.js';

const Home = () => {
  // gtag('event', 'conversion', { 'send_to': 'AW-11057596411/A-XQCKK-zocYEPuP1pgp' });
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.scrollTo(0,0);
  }, [routePath]);

  const sectionHeader = {
    title: 'Kanban Management Professional (KMP)',
    paragraph: 'Kanban Management Professional credential is granted upon the completion of two classes. Kanban System Design, which teaches the basics of Kanban, flow, and how to design a Kanban system. Kanban Systems Improvement, which teaches how to evolve, improve, and scale a Kanban system. KMPs should be able to design a Kanban system and evolve and scale it beyond the team.'
  };

  const CarouselPaginationstyle = {
    root: {
      position: 'relative',
      bottom: 45,
      right: 8,
      display: 'flex',
      flexDirection: 'row',
      // marginLeft:'40%'
    },
  };
  
  return (
    <>
  
      {/* <Hero className="illustration-section-01" /> */}
      {/* <InfoSection data={sectionHeader} invertMobile imageFill className="illustration-section-01" /> */}
      <Caraousel showImages={true} style={CarouselPaginationstyle}/>
      <TrainingCalendar invertMobile imageFill className="illustration-section-02" calenderLimit={4} showHeader={true} showTrainerInfo={true} showSearchOption={false} />
      <WhyUS invertMobile imageFill className="illustration-section-02" />
      <Testimonials invertMobile imageFill className="illustration-section-02" showHeader={true} countToFetch={6} showCarousel={true} />
      {/* <AboutCoach invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;