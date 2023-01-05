import React, { useState } from "react";
import validator from 'validator'
import { TestimonialService } from "../../services/testimonialService";
import { Triangle } from 'react-loader-spinner'
import classNames from 'classnames';
import { Container, TextField, Button, Slide } from "@material-ui/core";
import { Error} from '@material-ui/icons'

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
    const [showSectionThree, setShowSectionThree] = useState(false);
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
    const [trainerRatingError, setTrainerRatingError] = useState(false);
    const [contentRatingError, setContentRatingError] = useState(false);

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
      if(!validator.isEmail(email) || like === null || like === ''){
        if(!validator.isEmail(email)){
          setEmailError(true);
        }
        if(like === null || like === '')
        {
            setLikeError(true);
        }
        return false;
      }
        setEmailError(false);
        setLikeError(false);
        return true;
    }

    function validateRatings(){
      let isError = false;
      if(trainerRating === 0){
        setTrainerRatingError(true);
        isError = true;
      }
      else{
        setTrainerRatingError(false);
      }
      if(contentRating === 0){
        setContentRatingError(true);
        isError = true;
      }
      else{
        setContentRatingError(false);
      }
      if(isError === true){
        return false;
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

      const NextClicked = () =>{
        if(validateSectionOne() === true){
          setShowSectionTwo(true);
          setShowSectionOne(false);
      }
      }

      const Next2Clicked = () =>{
        setShowSectionTwo(false);
        setShowSectionThree(true);
      }

      const trainerRatingClicked = (event, value)=>{
        setTrainerRating(value);
        setTrainerRatingError(false);
      }

      const contentRatingClicked = (event, value)=>{
        setContentRating(value);
        setContentRatingError(false);
      }

    
    return    (
        <section
      {...props}
      className={outerClasses}
      style={{ paddingTop: 0, marginTop: 20 }}
    >
    {!emailSent && !sendingLoader &&
      <Container maxWidth="md" style={{ backgroundColor: sendingLoader === true ? '#0e1012' : '#6163ff',
        borderRadius: 5,
              marginTop:30}}>
        <h3 style={{paddingTop:15}}>Feedback</h3>
      <Slide direction="left" in={showSectionOne} mountOnEnter unmountOnExit id="sectionOneSlide">
      <div id="sectionOne">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          backgroundColor='white'
          fullWidth
          onChange={onEmailChange}
          error = {emailError}
        />
      </div>
        <div>

        <TextField
          id="outlined-multiline-static"
          label="What do you like about us?"
          multiline
          rows={4}
          fullWidth
          required
          style={{marginTop:20}}
          onChange={onLikeChange}
          error={likeError}
        />

      
        </div>
        <div style={{paddingTop:20, paddingBottom:20}}>
      <Button variant="contained" onClick={NextClicked}>Next</Button>

        </div>
      </div>
     </Slide>
        <Slide direction="left" in={showSectionTwo} mountOnEnter unmountOnExit id="sectionTwoSlide">
        <div id="sectionTwo">
        <div>

<TextField
  id="outlined-multiline-static"
  label="What do you dislike about us?"
  multiline
  rows={4}
  fullWidth
  onChange={onDislikeChange}
  style={{marginTop:20}}
/>


</div>
 <div style={{paddingTop:20, paddingBottom:20}}>
      <Button variant="contained" onClick={Next2Clicked}>Next</Button>

        </div>
        </div>
        </Slide>
        <Slide direction="left" in={showSectionThree} mountOnEnter unmountOnExit id="sectionThreeSlide">
        <div id="sectionThree">

        <div style={{color:'#eceded', marginBottom:5}}>How would you rate our Trainer?</div>
        <div style={{marginTop:15}}>
        <img 
        src={require('./../../assets/images/icons/angryFace.png')}
          className= {trainerRating === 1 ? "emoji-selected" : "emoji-hover"}
          onClick={event => trainerRatingClicked(event,1)}
        />
         <img 
        src={require('./../../assets/images/icons/slightlyFrowningFace.png')}
        className= {trainerRating === 2 ? "emoji-selected" : "emoji-hover"}
        onClick={event => trainerRatingClicked(event,2)}
        />
         <img 
        src={require('./../../assets/images/icons/neutralFace.png')}
        className= {trainerRating === 3 ? "emoji-selected" : "emoji-hover"}
        onClick={event => trainerRatingClicked(event,3)}
        />
         <img 
        src={require('./../../assets/images/icons/slightlySmilingFace.png')}
        className= {trainerRating === 4 ? "emoji-selected" : "emoji-hover"}
        onClick={event => trainerRatingClicked(event,4)}
        />
         <img 
        src={require('./../../assets/images/icons/starStruck.png')}
        className= {trainerRating === 5 ? "emoji-selected" : "emoji-hover"}
        onClick={event => trainerRatingClicked(event,5)}
        />
       {trainerRatingError && <Error style={{color:'red'}}/>}
        </div>
        <div style={{color:'#eceded', marginBottom:15, marginTop:10}}>How would you rate our Content?</div>
        <div style={{marginTop:15}}>
        <img 
        src={require('./../../assets/images/icons/angryFace.png')}
        className= {contentRating === 1 ? "emoji-selected" : "emoji-hover"}
        onClick={event => contentRatingClicked(event,1)}
        />
         <img 
        src={require('./../../assets/images/icons/slightlyFrowningFace.png')}
        className= {contentRating === 2 ? "emoji-selected" : "emoji-hover"}
        onClick={event => contentRatingClicked(event,2)}
        />
         <img 
        src={require('./../../assets/images/icons/neutralFace.png')}
        className= {contentRating === 3 ? "emoji-selected" : "emoji-hover"}
        onClick={event => contentRatingClicked(event,3)}
        />
         <img 
        src={require('./../../assets/images/icons/slightlySmilingFace.png')}
        className= {contentRating === 4 ? "emoji-selected" : "emoji-hover"}
        onClick={event => contentRatingClicked(event,4)}
        />
         <img 
        src={require('./../../assets/images/icons/starStruck.png')}
        className= {contentRating === 5 ? "emoji-selected" : "emoji-hover"}
        onClick={event => contentRatingClicked(event,5)}
        />
       {contentRatingError && <Error style={{color:'red'}}/>}
        </div>
 <div style={{paddingTop:20, paddingBottom:20}}>
      <Button variant="contained" onClick={submitFeedback}>Submit</Button>

        </div>
        </div>
        </Slide>
      </Container>
      }
      {sendingLoader && <Triangle
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
                style={{ marginTop:50}}
              />}
      { emailSent && <div style={{ marginTop:50}}>
                <img src={require("../../assets/images/success.png")} style={{ height: 70, width: 70, alignSelf: 'center', borderRadius: 50 }} />
                <p>
                {error === true ? 'Please try again after some time.' :
                'Thank you for your feedback.'}</p>
              </div>}
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
    }
  }
export default Survey;