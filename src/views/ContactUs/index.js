import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../../components/elements/ButtonGroup';
import Button from '../../components/elements/Button';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner'
import { QueryService } from '../../services/queryService';

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
  const nameRef = useRef();
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [sendingLoader, setSendingLoader] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [comments, setComments] = useState('');

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

  const onEmailChange = (event) =>{
    setEmail(event.target.value);
    setEmailError(false);
  }

  const onNameChange = (event) =>{
    setName(event.target.value);
    setNameError(false);
  }

  const onMobileChange = (event) =>{
    setMobileNo(event.target.value);
  }

  const onCommentsChange = (event) =>{
    setComments(event.target.value);
  }
  
  const validateValue = async() =>{
    if (!emailRef.current.value) { setEmailError(true) } 
    if (!nameRef.current.value) { setNameError(true) } 
  }

  const createResponseObj = () =>{
    let trainingEnquiry = {
      trainingEnquiryId : 0,
      trainingRequestNumber : '',
      userId : 0,
      userName : name,
      email : email,
      mobileNo : mobileNo,
      requestedOn : new Date,
      comments : comments
    }
    return trainingEnquiry;
  }


  const sendEmail = async () => {
    setEmailError(false);
    setNameError(false);
    console.log(emailRef.current.value, form.value);
    setSendingLoader(true);
    await validateValue();
    if(email === '' || name === ''){
      setSendingLoader(false);
      
    }
    else{
      var enquiry = createResponseObj();
      await QueryService.PostTrainingQuery(enquiry);
      setSendingLoader(false);
      setEmailSent(true);

    }

    // if (!emailRef.current.value) { setEmailError(true) } else {
    //   setSendingLoader(true)
      // emailjs.sendForm('service_ypwhqa8', 'template_sq4cabb', form.current, 'xgUyV3c2jUpeFJVM8')
      //   .then((result) => {
      //     console.log(result.text);
      //     setSendingLoader(false)

      //     setEmailSent(true);
      //   }, (error) => {
      //     console.log(error.text);
      //     setError("There was an issue in sending your response, Please try again!")
      //     setSendingLoader(false)
      //   });
    // }

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
                <h1 style={{ color: '#ffffff' }} className="mt-0 mb-16" >
                  Post Your Query
                </h1>
                <form ref={form} onSubmit={sendEmail}>
                  {/* <label style={styles.label}>Name</label> */}
                  <input placeholder='Your Name' style={styles.input} type="text" name="user_name" ref={nameRef} onChange={onNameChange} />
                  {nameError && <div style={{ color: 'red' }}>Please enter your name</div>}
                  {/* <label style={styles.label}>Email*</label> */}
                  <input placeholder='Email' style={styles.input} ref={emailRef} type="email" name="email" onChange={onEmailChange}/>
                  {emailError && <div style={{ color: 'red' }}>Please enter your email address</div>}
                  {/* <label style={styles.label}>Mobile Number</label> */}
                  <input placeholder='Contact Number' style={styles.input} type="number" name="user_number" onChange={onMobileChange} />
                  {/* <label style={{marginTop: 50, ...styles.label}}>Message</label> */}
                  <textarea placeholder='Let Us Know' style={styles.input} name="message" onChange={onCommentsChange}/>
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
                <p>Your request for KMP enrolment has been sent successfully. Vikas will connect with you within 24 hours with further details. Alternatively, you can connect with him over WhatsApp / Call @ +91 98100 47018</p>
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