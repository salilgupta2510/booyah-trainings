import React from 'react';
import Header from '../components/layout/HeaderV2';
import Footer from '../components/layout/Footer';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState, useRef } from 'react';

const LayoutDefault = (props) => {
  const [show, setShow] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const target = useRef(null);
  const targetEmail = useRef(null);

  const { children } = props;
  return (
    <>
      <Header />
      <div style={{ marginTop: 85 }}>
        <main className="site-content">
          {children}
        </main>
      </div>
      {children.props.location.pathname !== "/Calendar" && <Footer />}
    </>
  )
};

export default LayoutDefault;