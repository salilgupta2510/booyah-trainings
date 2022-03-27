import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../../components/elements/ButtonGroup';
import Button from '../../components/elements/Button';
import Cta from '../../components/sections/Cta';
import emailjs from '@emailjs/browser';

// eslint-disable-next-line
const propTypes = {
  ...SectionProps.types
}
// eslint-disable-next-line
const defaultProps = {
  ...SectionProps.defaults
}
const ContactUs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const form = useRef();
  const emailRef = useRef();
  const [emailError, setEmailError] = useState(false);

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  // eslint-disable-next-line
  const tilesClasses = classNames(
    'tiles-wrap center-content'
  );

  const sendEmail = () => {
    console.log(emailRef.current.value, form.value)
    if (!emailRef.current.value) { setEmailError(true) } else {

    }
    // emailjs.sendForm('service_ypwhqa8', 'template_sq4cabb', form.current, 'xgUyV3c2jUpeFJVM8')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };


  return (
    <section
      {...props}
      className={outerClasses}
      style={{ paddingTop: 0, marginTop: 150 }}
    >
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 10 }}>
          <div className="hero-content">
            <div style={{
              borderRadius: 5,
              backgroundColor: "#25282c",
              padding: 20,
              width: '70%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
               <h1 style={{color: '#ffffff'}} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Get In Touch
            </h1>
              <form ref={form} onSubmit={sendEmail}>
                <label style={styles.label}>Name</label>
                <input style={styles.input} type="text" name="user_name" />
                <label style={styles.label}>Mobile Number</label>
                <input style={styles.input} type="number" name="user_number" />
                <label style={styles.label}>Email*</label>
                <input style={styles.input} ref={emailRef} type="email" name="email" />
                {emailError && <div style={{ color: 'red' }}>Please enter your email address</div>}
                <label style={{marginTop: 50, ...styles.label}}>Message</label>
                <textarea style={styles.input} name="message" />
              </form>
              <div>
                <ButtonGroup>
                  <Button tag="button" color="primary" wideMobile onClick={() => sendEmail()}>
                    Send Enquiry
                  </Button>
                </ButtonGroup>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}

const styles = {
  label: {color: '#ffffff'},
  input: {
    width: "100%",
    marginTop: 8,
    display: "inline-block",
    marginBottom: 20,
    borderRadius: 5,
    lineHeight: 2,
  }
}

export default ContactUs;