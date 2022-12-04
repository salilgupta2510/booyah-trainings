import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import KSD from './views/KSD/index';
import KSI from './views/KSI';
import Calendar from './views/Calendar/index';
// import KnowYourTrainer from './views/KnowYourTrainer/index';
import Policy from './views/Policy/index';
import Testimonial from './views/Testimonials';
import ContactUs from './views/ContactUs';
import KnowYourTrainer from './components/sections/KnowYourTrainer';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
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
        </Switch>
      )} />
  );
}

export default App;