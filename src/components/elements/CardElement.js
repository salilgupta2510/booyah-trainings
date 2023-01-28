import React, {useState} from 'react';
import {Box, Paper, Typography, Grid, CssBaseline, Card, CardContent, CardActions} from '@material-ui/core';
import '../../assets/scss/core/elements/_card.scss';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';


const CardElement = ({
    data,
    ...props
})=>{

    const card = (
        <React.Fragment >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className='card-text-color'>
              {data.title}
            </Typography>
            <Typography variant="body2">
              {data.description}
            </Typography>
          </CardContent>
          <CardActions>
          <div className="features-tiles-item-content center-content">
                  <ButtonGroup style={{marginLeft:26}}>
                    <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 14, color: '#6163ff'}} >
                    Register
                    </Button>
                    <Button tag="a" color="white" wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 14, color: '#6163ff' }} >Explore
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