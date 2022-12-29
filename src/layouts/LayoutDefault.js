import React from 'react';
import Header from '../components/layout/HeaderV2';
import Footer from '../components/layout/Footer';

const LayoutDefault = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div style={{ marginTop: 65 }}>
        <main className="site-content">
          {children}
        </main>
      </div>
      {children.props.location.pathname !== "/Calendar" && <Footer />}
    </>
  )
};

export default LayoutDefault;