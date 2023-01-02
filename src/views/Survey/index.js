import React, { useState } from "react";
import Button from '../../components/elements/Button';
import StarRatingComponent from 'react-star-rating-component';
import validator from 'validator'
import { TestimonialService } from "../../services/testimonialService";
import { Triangle } from 'react-loader-spinner'

const Survey = ({
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

    return    (
        <section style={{ paddingTop: 0, marginTop: 100, marginLeft:120, marginRight:120, marginBottom:40, backgroundColor: sendingLoader === true ? '#0e1012' : '#6163ff', minHeight:400, position:'relative', borderRadius:'1em',transition: "all .2s",}}>
        <div style={{paddingLeft:'40%'}}>

        {sendingLoader && <Triangle
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
                
              />}
        </div>
        {!sendingLoader && !emailSent && <div>

        {showSectionOne && 
        <div>
        <div className="row">
            <div className="col" style={{marginTop:'5%', marginLeft:'10%'}}>
            <input type="email" placeholder="Email*" style={{maxWidth:'80%', width:'100%', borderRadius:'0.25em'}} onChange={onEmailChange}/>
            {emailError && <div style={{ color: 'red' }}>Please enter a valid Email address</div>}
          
            </div>
        </div>
        <div className="row">
            <div className="col" style={{marginTop:'5%', marginLeft:'10%', marginBottom:'0%'}}>
                <textarea placeholder="Like*" style={{maxWidth:'80%', width:'100%', borderRadius:'0.5em'}} rows={4} onChange={onLikeChange}/>
                {likeError && <div style={{ color: 'red' }}>Please enter something that you like about the training</div>}
            </div>

        </div>
        <div className="row">
            <div className="col" style={{marginTop:'5%', marginLeft:'10%', marginBottom:'3%'}}>
                <textarea placeholder="Dislike" style={{maxWidth:'80%', width:'100%', borderRadius:'0.5em'}} rows={4} onChange={onDislikeChange}/>
            </div>
        </div>
        <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="col" style={{ marginLeft:'38%', marginBottom:'3%', marginRight:'27%'}}>
        <Button tag="a" type="submit" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 20, color: '#6163ff'}} onClick={onSectionOneNext}>
                    Next
                    </Button>

            </div>
        </div>
        </div>
        }

        {showSectionTwo && <div>

<div className="row" style={{marginTop:'5%', marginLeft:'10%', marginBottom:'0%'}}>
    <div className="col-md-3">
    <h4>Trainer Rating:</h4>
    </div>
    <div className="col-md-9" style={{paddingTop:'2.5%'}}>
    <StarRatingComponent 
  name="rate1" 
  starCount={5}
  value={trainerRating}
 onStarClick={onTrainingStarClicked}
/>

    </div>
</div>
<div className="row" style={{ marginLeft:'10%', marginBottom:'0%'}}>
<div className="col-md-3">
    <h4>Content Rating:</h4>
    </div>
    <div className="col-md-9" style={{paddingTop:'2.5%'}}>
    <StarRatingComponent 
  name="rate1" 
  starCount={5}
  value={contentRating}
 onStarClick={onContentStarClicked}
/>
    </div>
    {sectionTwoError && <div style={{ color: 'red' }}>{sectionTwoError}</div>}

</div>

<div className="row" style={{  marginBottom:'0%'}}>
<div className="col" style={{ marginLeft:'10%', marginBottom:'3%'}}>
                <textarea placeholder="Please share emails for references" style={{maxWidth:'80%', width:'100%', borderRadius:'0.5em'}} rows={4} onChange={onReferencesChange}/>
            </div>
</div>

<div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
<div className="col" style={{ marginLeft:'38%', marginBottom:'3%', marginRight:'27%'}}>
<Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 20, color: '#6163ff'}} onClick={submitFeedback}>
            Submit
            </Button>

    </div>
</div>
</div>}
        </div>}

        { emailSent && <div style={{ padding:'15%', marginLeft:'15%'}}>
                <img src={require("../../assets/images/success.png")} style={{ height: 70, width: 70, alignSelf: 'center', borderRadius: 50, marginLeft:'24%' }} />
                <span style={{marginLeft:'10%'}}>
                {error === true ? 'Please try again after some time' :
                'Thank you for your feedback.'} </span>
              </div>}


        </section>
    );
}

export default Survey;