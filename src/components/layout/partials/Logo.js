import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          {/* <Image
            src={require('./../../../assets/images/logo.png')}
            alt="Open"
            width={400}
            height={200} /> */}
          <div style={{ fontSize: 35, fontFamily: 'sans-serif' }}>
            Agile Training by Booyah
          </div>
        </Link>
      </h1>
      {props.showCopyRight && <div className="footer-bottom space-between text-xxs invert-order-desktop">
        <div className="footer-copyright">Copyright © 2021 Booyah Training (OPC) Private Limited</div>
      </div>}
    </div>
  );
}

export default Logo;