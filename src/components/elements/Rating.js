import React from 'react';

const Rating = ({
    currentRating,
    leftMargin,
    ...props
})=>{
    
    let remainingRating = 5 - currentRating;
    currentRating = currentRating > 5 ? 5 : currentRating;
    let result = [];
    for (let index = 0; index < currentRating; index++) {
        result.push("Y")
    }
    for (let index = 0; index < remainingRating; index++) {
        result.push("N")
    }
    return (
        <span style={{marginLeft:leftMargin}}>
            {result.map((value, index) => {
                return value == 'Y' ? <span className='fa fa-star checked' style={{paddingLeft:1}}></span> : <span className='fa fa-star' style={{paddingLeft:1}}></span>

            })}
        </span>
    );
}

export default Rating;