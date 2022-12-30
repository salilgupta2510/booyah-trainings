import React, { useState } from "react";
import Button from '../../components/elements/Button';
import StarRatingComponent from 'react-star-rating-component';

const Survey = ({
    ...props
}) =>{

    const [trainingRating, setTrainingRating] = useState(1);
    const [contentRating, setContentRating] = useState(1);
    const [showSectionOne, setShowSectionOne] = useState(false);
    const [showSectionTwo, setShowSectionTwo] = useState(true);



    function onStarClicked(nextValue, prevValue, name){
        setTrainingRating(nextValue);
    }

    function onSectionOneNext(event){
        event.preventDefault();
        setShowSectionOne(false);
        setShowSectionTwo(true);
    }

    return    (
        <section style={{ paddingTop: 0, marginTop: 100, marginLeft:120, marginRight:120, marginBottom:40, backgroundColor:'#6163ff', minHeight:400, position:'relative', borderRadius:'1em',transition: "all .2s",}}>
        {showSectionOne && 
        <div>

        <div className="row">
            <div className="col" style={{marginTop:'5%', marginLeft:'10%', marginBottom:'0%'}}>
                <textarea placeholder="Like" style={{maxWidth:'80%', width:'100%', borderRadius:'0.5em'}} rows={4}/>
            </div>

        </div>
        <div className="row">
            <div className="col" style={{marginTop:'5%', marginLeft:'10%', marginBottom:'3%'}}>
                <textarea placeholder="Dislike" style={{maxWidth:'80%', width:'100%', borderRadius:'0.5em'}} rows={4}/>
            </div>
        </div>
        <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="col" style={{ marginLeft:'38%', marginBottom:'3%', marginRight:'27%'}}>
        <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 20, color: '#6163ff'}} onClick={onSectionOneNext}>
                    Next
                    </Button>
                  
            </div>
        </div>
        </div>
        }

        {showSectionTwo && <div>

<div className="row">
    <div className="col" style={{marginTop:'5%', marginLeft:'10%', marginBottom:'0%'}}>
    <StarRatingComponent 
  name="rate1" 
  starCount={5}
  value={trainingRating}
 onStarClick={onStarClicked}
/>
    </div>
</div>
<div className="row">
    <div className="col" style={{marginTop:'5%', marginLeft:'10%', marginBottom:'0%'}}>
    <StarRatingComponent 
  name="rate1" 
  starCount={5}
  value={trainingRating}
 onStarClick={onStarClicked}
/>
    </div>
</div>

<div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
<div className="col" style={{ marginLeft:'38%', marginBottom:'3%', marginRight:'27%'}}>
<Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 20, color: '#6163ff'}} onClick={onSectionOneNext}>
            Next
            </Button>
           
    </div>
</div>
</div>}


        </section>
    );
}

export default Survey;