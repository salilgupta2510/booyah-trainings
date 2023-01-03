import React, { useState } from "react";
import Button from '../../components/elements/Button';
import StarRatingComponent from 'react-star-rating-component';
import validator from 'validator'
import { TestimonialService } from "../../services/testimonialService";
import { Triangle } from 'react-loader-spinner'

import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import ButtonGroup from '../../components/elements/ButtonGroup';


const Survey = ({
    className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
    ...props
}) =>{

    const [showSectionOne, setShowSectionOne] = useState(true);
    const [showSectionTwo, setShowSectionTwo] = useState(false);
    const [sendingLoader, setSendingLoader] = useState(false);

    const [error, setError] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    

    const [like, setLike] = useState('');
    const [disLike, setDisLike] = useState('');
    const [trainerRating, setTrainerRating] = useState(0);
    const [contentRating, setContentRating] = useState(0);
    const [references, setReferences] = useState('');
    const [email, setEmail] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [likeError, setLikeError] = useState(false);
    const [sectionTwoError, setSectionTwoError] = useState('');




    function onTrainingStarClicked(nextValue, prevValue, name){
        setTrainerRating(nextValue);
    }
    function onContentStarClicked(nextValue, prevValue, name){
        setContentRating(nextValue);
    }

    function onSectionOneNext(event){
        event.preventDefault();
        if(validateSectionOne() === true){
            setShowSectionOne(false);
            setShowSectionTwo(true);
        }
    }

    const submitFeedback = async(event) =>{
        event.preventDefault();
        if(validateRatings() === true){
            setSendingLoader(true);
            var testimonial = createTestimonialObj();
            let response = await TestimonialService.SaveTestimonial(testimonial);
            if(response !== "Feedback saved sucessfully"){
                setError(true);
            }
            
            setTimeout(() => {
                setSendingLoader(false);
                setEmailSent(true);
            }, 300);
        }
    }

    function validateSectionOne(){
        if(!validator.isEmail(email)){
            setEmailError(true);
            return false;
        }
        else{
            setEmailError(false);
        }
        if(like === null || like === '')
        {
            setLikeError(true);
            return false;
        }
        else{
            setLikeError(false);
        }
        setEmailError(false);
        setLikeError(false);
        return true;
    }

    function validateRatings(){
        if(trainerRating ===0 || contentRating === 0){
            setSectionTwoError("Please provide Trainer and Content Rating");
            return false;
        }
        else{
            setSectionTwoError('');
        }
        return true;
    }

    function onEmailChange(event){
        setEmail(event.target.value);
    }

    function onLikeChange(event){
        setLike(event.target.value);
    }

    function onDislikeChange(event){
        setDisLike(event.target.value);
    }

    function onReferencesChange(event){
        setReferences(event.target.value);
    }

    function onExitBtn(event){
        window.opener = null;
    window.open("", "_self");
    window.close();
    }

    const createTestimonialObj = () =>{
        let testimonial = {
            TestimonialId : 0,
            userName : '',
            email : email,
            like:like,
            dislike:disLike,
            trainerRating:trainerRating,
            contentRating: contentRating,
            sequence:-1,
            addedOn:new Date,
            references: references
        }
        return testimonial;
      }

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

    return    (
        <section
      {...props}
      className={outerClasses}
      style={{ paddingTop: 0, marginTop: 20 }}
    >
      <div className="container" >
        <div className={innerClasses} style={{ paddingBottom: 10 }}>
          <div className="hero-content">
            <div style={{
              borderRadius: 5,
              backgroundColor: sendingLoader === true ? '#0e1012' : '#6163ff',
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
              {showSectionOne &&  !emailSent && !sendingLoader && <>
                <h4 style={{ color: '#ffffff', fontSize:33 }} className="mt-0 mb-16" >
                Feedback
                </h4>
                <form >
                  <input placeholder='Email*' style={styles.requiredInput} type="text" onChange={onEmailChange}  />
                  {emailError && <div style={{ color: 'red' }}>Please enter a valid Email address</div>}
                <textarea placeholder='What do you like about the training' style={styles.requiredInput} onChange={onLikeChange}   />
                {likeError && <div style={{ color: 'red' }}>Please enter something that you like about the training</div>}
                <textarea placeholder='What do you dislike about the training' style={styles.requiredInput} onChange={onDislikeChange}   />
                  
                </form>
                {error && <h5 style={{ color: 'red' }}>{error}</h5>}
                <div>
                  <ButtonGroup>
                    <Button tag="button" color="white" wideMobile onClick={onSectionOneNext} >
                      Next
                    </Button>
                    
                  </ButtonGroup>
                </div>
              </>} 
              {showSectionTwo &&  !emailSent && !sendingLoader && <>
                <form >
                <h4 style={{ color: '#ffffff', fontSize:33 }} className="mt-0 mb-16" >
                Feedback
                </h4>
              <div className="row">
                <div className="col-md-6">
                <h4>Trainer Rating:</h4>
                </div>
                <div className="col-md-6" style={{paddingTop:'2.5%'}}>
<StarRatingComponent 
  name="rate1" 
  starCount={5}
  value={trainerRating}
 onStarClick={onTrainingStarClicked}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                <h4>Content Rating:</h4>
                </div>
                <div className="col-md-6" style={{paddingTop:'2.5%'}}>
                <StarRatingComponent 
  name="rate1" 
  starCount={5}
  value={contentRating}
 onStarClick={onContentStarClicked}/> 
     {sectionTwoError && <div style={{ color: 'red' }}>{sectionTwoError}</div>}
                </div>
              </div>
              <div className="row">
<div className="col">

              <textarea placeholder='Please share reference emails' onChange={onReferencesChange} style={styles.requiredInput} />
</div>
              </div>
          
                  
                </form>
                <div>
                  <ButtonGroup>
                    <Button tag="button" color="white" wideMobile onClick={submitFeedback}>
                      Submit
                    </Button>
                    
                  </ButtonGroup>
                </div>
              </>}
              { emailSent && <>
                <img src={require("../../assets/images/success.png")} style={{ height: 70, width: 70, alignSelf: 'center', borderRadius: 50 }} />
                <p>
                {error === true ? 'Please try again after some time.' :
                'Thank you for your feedback.'}</p>
              </>}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}


const styles = {
    label: { color: '#ffffff' },
    input: {
      width: "100%",
      marginTop: 8,
      display: "inline-block",
      marginBottom: 20,
      borderRadius: 8,
      lineHeight: 2,
      paddingLeft: 10,
    },
    requiredInput: {
      width: "100%",
      marginTop: 8,
      display: "inline-block",
      marginBottom: 20,
      borderRadius: 8,
      lineHeight: 2,
      paddingLeft: 10,
      // borderColor:'red'
    }
  }
export default Survey;