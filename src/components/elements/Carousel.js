import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Box, Paper, Typography, Grid, CssBaseline, Card, CardContent, Button} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MobileStepper from '@mui/material/MobileStepper';
import { makeStyles } from "@mui/styles";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import '../../assets/scss/core/elements/_carousel.scss';
import Rating from './Rating';
import Image from '../elements/Image';
import Pagination from './Pagination';
import TestimonialBackground from '../../assets/images/TestimonialBackground.jpeg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
    root: {
      display: "flex",
      flexGrow: 1
    },
    dot: {
      backgroundColor: "default"
    },
    dotActive: {
      backgroundColor: "rgb(255, 69, 27)"
    }
  });

const Caraousel = ({
    testimonialData,
    showImages,
    style,
    ...props
}) =>{
    const classes = useStyles();
    const theme = useTheme();
   
    const [activeStep, setActiveStep] = useState(0);
    
    const carouselImages = [
            {path: require('../../assets/images/carousel/2.jpg'), description:'Attend Online Workshop and Learn from Anywhere'},
            {path: require('../../assets/images/carousel/1.jpeg'), description:'Collaboration using Interactive Mural Boards'},
            {path: require('../../assets/images/carousel/3.jpg'), description:'Engaging and Fun-Filled Learning Experience'},
            {path: require('../../assets/images/carousel/4.jpg'), description:'Focus and Attention to each participant'},
            {path: require('../../assets/images/carousel/5.jpg'), description:'Get Answer to all your questions'},
    ];

    const maxSteps = testimonialData && testimonialData.length ? testimonialData.length : 0;
    const maxStepsImages = carouselImages && carouselImages.length ? carouselImages.length : 0;

      const handleStepChange = (step) => {
            setActiveStep(step);
      };

      const handleDotsClick = (step) =>{
        setActiveStep(step);
      }

    return(
     <div>
{showImages === true ?
<>

        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          animateTransitions={false}
          interval={showImages === true ? 5000 : 10000}
          >
         {carouselImages.map((image, i) => (
              <Box
              // key={i}
              sx={{ display: "flex", justifyContent: "center" }}>
                  <article style={{height:'100%', position:'relative',  textAlign:'center'}}>
                  <img  src={image.path} alt="background" style={{objectFit:'cover', width:'1124px', height:'400px'}} />
                  
                  <div style={{backgroundColor:'#6163ff', position:'absolute',position:'absolute',top:8, right:16, padding:8, opacity:0.8, borderRadius:10, fontSize:"2vw" }} className="carousel-heading">
                  {image.description}
                  </div>
                  </article>
            </Box>
          ))}
        </AutoPlaySwipeableViews>
        <Grid item xs={12} style={{marginLeft:'43%'}}
        >
      <Pagination dots={showImages === true ? maxStepsImages : maxSteps} index={activeStep} onChangeIndex={(step)=>handleDotsClick(step)} propStyle={style} {...props}/>
        </Grid> 
        </>
        :
        <Paper
        square={false}
      sx={{
        padding: "1rem",
        borderRadius: "20px",
        width: { xs: "290px", sm: "auto" }
      }}
      style={{marginLeft:'5.5%', marginRight:'5.5%', marginTop:30, 
      backgroundImage: showImages === true ? '': `url(${TestimonialBackground})`
      ,backgroundRepeat:'no-repeat'
      ,backgroundSize:'cover'
      ,backgroundAttachment:'fixed'
      }}

      elevation={9}
    >
      <Grid container>
        <Grid item xs={12}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            animateTransitions={false}
            interval={10000}>
            
          {testimonialData && typeof testimonialData !== "string" && testimonialData.length > 0 && testimonialData.map((item, i) => (
              <Box id="testimonials"
                key={item.testimonialId}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    width: {
                      xs: "300px",
                      sm: "250px",
                      md: "350px",
                      lg: "380px",
                      xl: "450px"
                    },
                    height: { xs: "105vh", sm: "auto", md: "80vh", lg: "60vh" },
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px",
                    margin: { xs: 0, sm: "10px" }
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body2"
                      align="justify"
                      style={{fontStyle:'italic', fontWeight:'bolder', color:'#fff', fontFamily:'Lobster', fontSize:20, marginTop:15}}
                    >
                      {item.like}
                    </Typography>
                  </CardContent>
                  <Stack direction="row" align="center">
                    <Typography component="h6" align="center">
                    <span style={{ fontStyle:'italic', fontWeight:'bolder', color:'#fff', fontFamily:'Lobster',  marginLeft:45 }}>Trainer Rating: 
                    <Rating currentRating={item.trainerRating} leftMargin={9} {...props}/>
                    </span>
                      <Typography component="h6" align="center">
                      <span style={{ fontStyle:'italic', fontWeight:'bolder', color:'#fff', fontFamily:'Lobster', marginLeft:45 }}>Content Rating: 
                    <Rating currentRating={item.contentRating} leftMargin={6} {...props}/>
                    </span>
                      </Typography>
                    </Typography>
                  </Stack>
                </Card>
              </Box>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>
        <Grid item xs={12} style={{marginLeft:'43%', marginTop:20}}>
      <Pagination dots={showImages === true ? maxStepsImages : maxSteps} index={activeStep} onChangeIndex={(step)=>handleDotsClick(step)} />
        </Grid> 
      </Grid>
    </Paper>}
        </div>
      
    
    )
}

export default Caraousel;