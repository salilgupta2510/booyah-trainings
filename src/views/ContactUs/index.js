import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../../components/elements/ButtonGroup';
import Button from '../../components/elements/Button';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner'

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
  const [emailSent, setEmailSent] = useState(false);
  const [sendingLoader, setSendingLoader] = useState(false);
  const [error, setError] = useState("");

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
      setSendingLoader(true)
      emailjs.sendForm('service_ypwhqa8', 'template_sq4cabb', form.current, 'xgUyV3c2jUpeFJVM8')
        .then((result) => {
          console.log(result.text);
          setSendingLoader(false)

          setEmailSent(true);
        }, (error) => {
          console.log(error.text);
          setError("There was an issue in sending your response, Please try again!")
          setSendingLoader(false)
        });
    }

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
              {sendingLoader && <Triangle
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
              />}
              {!emailSent && !sendingLoader && <>
                <h1 style={{ color: '#ffffff' }} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                  Get In Touch
                </h1>
                <form ref={form} onSubmit={sendEmail}>
                  {/* <label style={styles.label}>Name</label> */}
                  <input placeholder='Your Name' style={styles.input} type="text" name="user_name" />
                  {/* <label style={styles.label}>Mobile Number</label> */}
                  <input placeholder='Contact Number' style={styles.input} type="number" name="user_number" />
                  {/* <label style={styles.label}>Email*</label> */}
                  <input placeholder='Email' style={styles.input} ref={emailRef} type="email" name="email" />
                  {emailError && <div style={{ color: 'red' }}>Please enter your email address</div>}
                  {/* <label style={{marginTop: 50, ...styles.label}}>Message</label> */}
                  <textarea placeholder='Let Us Know' style={styles.input} name="message" />
                </form>
                {error && <h5 style={{ color: 'red' }}>{error}</h5>}
                <div>
                  <ButtonGroup>
                    <Button tag="button" color="primary" wideMobile onClick={() => sendEmail()}>
                      Send
                    </Button>
                  </ButtonGroup>
                </div>
              </>} { emailSent && <>
                <img src={require("../../assets/images/success.png")} style={{ height: 70, width: 70, alignSelf: 'center', borderRadius: 50 }} />
                <h3 >Sent Successfully</h3>
                <Link to="/" ><h6>Go To Home</h6></Link>

              </>}
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}

const styles = {
  label: { color: '#ffffff' },
  input: {
    width: "100%",
    marginTop: 8,
    display: "inline-block",
    marginBottom: 20,
    borderRadius: 5,
    lineHeight: 2,
    paddingLeft: 10
  }
}

export default ContactUs;