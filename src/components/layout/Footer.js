import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterSocial from './partials/FooterSocial';
import { Link } from 'react-router-dom';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    // <footer
    //   {...props}
    //   className={classes}
    // >
    //   <div className="container">
    //     <div className={
    //       classNames(
    //         'site-footer-inner',
    //         topDivider && 'has-top-divider'
    //       )}>
    //       <div className="footer-top space-between text-xxs">
    //         <Logo showCopyRight={true} />
    //         <div>
    //         <ul className='list-reset h5' style={{fontWeight:8, color:'#9ca9b3'}}>
    //           <li>
    //           <Link style={{fontSize:16, color:'#9ca9b3'}}>Home</Link>
    //           </li>
    //           <li>
    //           <Link style={{fontSize:16, color:'#9ca9b3'}}>About Us</Link>
    //           </li><li>
    //           <Link style={{fontSize:16, color:'#9ca9b3'}}>Training Calendar</Link>
    //           </li><li>
    //           <Link style={{fontSize:16, color:'#9ca9b3'}}>Become KMP</Link>
    //           </li>
    //         </ul>
    //         </div>
    //         <div>
    //         <ul className='list-reset h5' style={{fontWeight:8, color:'#9ca9b3'}}>
    //           <li>
    //           <Link style={{fontSize:16, color:'#9ca9b3'}}>Know Your Trainer</Link>
    //           </li>
    //           <li>
    //           <Link style={{fontSize:16, color:'#9ca9b3'}}>Testimonials</Link>
    //           </li><li>
    //           <Link style={{fontSize:16, color:'#9ca9b3'}}>Privacy Policy</Link>
    //           </li>
    //         </ul>
    //         </div>
    //         <FooterSocial showPhoneNumber={true} />
    //       </div>
    //     </div>
    //   </div>
    // </footer>
<footer>
<div className='container row'>
<div className='site-footer-inner has-top-divider'>

<div className='footer-top space-between text-xxs'>


  <div className='col-md-3'>

 <Logo showCopyRight={true} />

  </div>
  <div className='col-md-4' style={{marginTop:60}}>
      <div className='row'>
        <div className='col-md-6'>
             <ul className='list-reset h5' style={{fontWeight:8, color:'#9ca9b3'}}>
               <li>
               <Link to="/" style={{fontSize:16, color:'#9ca9b3'}}>Home</Link>
               </li>
               <li>
               <Link to="/Policy" style={{fontSize:16, color:'#9ca9b3'}}>About Us</Link>
               </li><li>
               <Link  to="/calendar" style={{fontSize:16, color:'#9ca9b3'}}>Training Calendar</Link>
               </li><li>
               <Link to="/KSD" style={{fontSize:16, color:'#9ca9b3'}}>Become KMP</Link>
               </li>
             </ul>
        </div>
        <div className='col-md-6'>
        <ul className='list-reset h5' style={{fontWeight:8, color:'#9ca9b3'}}>
              <li>
               <Link to="/KnowYourTrainer" style={{fontSize:16, color:'#9ca9b3'}}>Know Your Trainer</Link>
               </li>
               <li>
               <Link to="/Testimonial" style={{fontSize:16, color:'#9ca9b3'}}>Testimonials</Link>
               </li><li>
               <Link to="/Policy" style={{fontSize:16, color:'#9ca9b3'}}>Privacy Policy</Link>
               </li>
             </ul>
        </div>

      </div>
  </div>
  <div className='col-md-5'>
  <FooterSocial showPhoneNumber={true} />
  </div>
</div>
</div>


</div>
</footer>

  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;