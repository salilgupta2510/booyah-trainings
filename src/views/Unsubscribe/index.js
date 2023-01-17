import React, { useState } from "react";
import { Container, TextField, Button, Slide, LinearProgress } from "@material-ui/core";
import { Triangle } from 'react-loader-spinner'
import { useNavigate, useParams} from 'react-router-dom';
import { NewsletterService } from "../../services/newsletterService";

const Unsubscribe = () =>{

    const [stayClicked, setStayClicked] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [unsubscribed, setUnsubscribed] = useState(false);
    const [unsubscribeResponse, setUnsubscribeResponse] = useState('');
    // const uid  = useParams();

    // let userId = uid["uid"];
    // console.log(window.location.search.split('='));

    const unsubscribeBtnClick = async() =>{
        setShowLoader(true);
        let uid= window.location.search.split('=')[1];
        let response = await NewsletterService.UnsubscribeNewsLetter(uid.toString());
        setUnsubscribeResponse(response);
        setUnsubscribed(true);
        setShowLoader(false);
    }

    const stayBtnClick = async() =>{
        setShowLoader(true);
        setStayClicked(true);
        setShowLoader(false);
    }

    return(
        <section >
        <Container maxWidth="md" style={{ backgroundColor: '#6163ff',
        borderRadius: 5,
              marginTop:30}}>
              {
                showLoader && <div style={{marginLeft:'40%'}}>
 <Triangle
                height="100"
                width="100"
                color='white'
                ariaLabel='loading'
              />
                </div>
              }
            {stayClicked && 
            <div>
           
              <h1 style={{fontFamily: 'Lato',fontSize: 24,fontWeight: 900,letterSpacing: '0em',
textAlign: 'center'}}>Thank You!</h1>
   <h1 style={{fontFamily: 'Lato',fontSize: 24,fontWeight: 900,letterSpacing: '0em',
textAlign: 'center'}}>You have been successfully resubscribed! 🤗</h1>
               </div>
              }
              {!stayClicked && !unsubscribed &&
           <>
                <h1 style={{fontFamily: 'Lato',fontSize: 24,fontWeight: 900,letterSpacing: '0em',
textAlign: 'center'}}>Uh-oh! Are you sure you want to unsubscribe from our emails?</h1>
            <div style={{paddingTop:20, paddingBottom:20}}>
      <Button variant="contained" style={{marginLeft:'10%'}} onClick={unsubscribeBtnClick}>Yes, unsubscribe me</Button>
      <Button variant="contained" style={{marginLeft:'35%'}} onClick={stayBtnClick}>I'd rather stay</Button>

        </div>
           </>
              }
              {unsubscribed && 
           <>
                <h1 style={{fontFamily: 'Lato',fontSize: 24,fontWeight: 900,letterSpacing: '0em',
textAlign: 'center'}}>{unsubscribeResponse}</h1>
            <div style={{paddingTop:20, paddingBottom:20}}>
        </div>
           </>
              }
              </Container>
        </section>
    )
}

export default Unsubscribe;