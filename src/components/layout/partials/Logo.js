import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

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
      style={{ marginTop: 100 }}
    >
      <h1 className="m-0">
        <Link to="/">
          <div style={{ fontSize: 35, fontFamily: 'sans-serif' }}>
            <Image
              src={require('./../../../assets/images/logo_v1.5.jpeg')}
              alt="Open"
              width={100}
              height={60} />
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