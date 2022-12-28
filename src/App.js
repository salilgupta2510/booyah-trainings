import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
// Views 
import Home from './views/Home';
import KSD from './components/sections/KSD'
import KSI from './components/sections/KSI';
import Calendar from './views/Calendar/index';
import KnowYourTrainer from './views/KnowYourTrainer/index';
import Policy from './views/Policy/index';
import Testimonial from './views/Testimonials';
import ContactUs from './views/ContactUs';
// import KnowYourTrainer from './components/sections/KnowYourTrainer';
import TrainingCalendarPage from './views/TrainingCalendar/TrainingCalendarPage';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    onTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/Testimonial" component={Testimonial} layout={LayoutDefault} hideFooter={false} />
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} hideFooter={false} />
          <AppRoute exact path="/KSD" component={KSD} layout={LayoutDefault} hideFooter={false} />
          <AppRoute exact path="/KSI" component={KSI} layout={LayoutDefault} hideFooter={false} />
          <AppRoute exact path="/KnowYourTrainer" component={KnowYourTrainer} layout={LayoutDefault} hideFooter={true} />
          <AppRoute exact path="/Policy" component={Policy} layout={LayoutDefault} hideFooter={false} />
          <AppRoute exact path="/queryForm" component={ContactUs}layout={LayoutDefault} hideFooter={false} />
          <AppRoute exact path="/calendar" component={TrainingCalendarPage} layout={LayoutDefault} hideFooter={false}/>
        
        {/* <ToastContainer/> */}
        </Switch>
      )} />
  );
}

export default App;