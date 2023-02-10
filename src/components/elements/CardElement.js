import React, {useState} from 'react';
import {Box, Typography,Card, CardContent, CardActions} from '@material-ui/core';
import '../../assets/scss/core/elements/_card.scss';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';


const CardElement = ({
    data,
    exploreClickEvent,
    findClickEvent,
    ...props
})=>{

  const onClickExplore = (event) =>{
    event.preventDefault();
    exploreClickEvent();
  }

  const onClickRegister = (event)=>{
    event.preventDefault();
    findClickEvent();
  }

  

    const card = (
        <React.Fragment >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className='card-text-color'>
              {data.title}
            </Typography>
            <Typography variant="body2" style={{color: '#E0E0E0', fontSize:14}}>
              {data.description}
            </Typography>
          </CardContent>
          <CardActions>
          <div className="features-tiles-item-content center-content">
                  <ButtonGroup style={{marginLeft:35}}>
                    <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '30%', fontSize: 14, color: '#6163ff'}} className="card-button" onClick={onClickRegister}>
                    Register
                    </Button>
                    <Button tag="a" color="white" wideMobile href="" style={{ borderRadius: 7, width: '30%', fontSize: 14, color: '#6163ff' }} className="card-button" onClick={onClickExplore}>Explore
                    </Button>
                  </ButtonGroup>
                </div>

          </CardActions>
        </React.Fragment>
      );


      return (
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      );
}

export default CardElement;