import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = (props) => {
  const { children } = props;
  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">
        {children}
      </main>
      {children.props.location.pathname !== "/Calendar" && <Footer />}
    </>
  )
};

export default LayoutDefault;