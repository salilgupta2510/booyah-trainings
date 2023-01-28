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
            {path: require('../../assets/images/carousel/1.jpeg'), description:'Collaboration using Interactive Mural Boards'},
            {path: require('../../assets/images/carousel/2.jpg'), description:'Attend Online Workshop and Learn from Anywhere'},
            {path: require('../../assets/images/carousel/3.jpg'), description:'Engaging and Fun-Filled Learning Experience'},
            {path: require('../../assets/images/carousel/4.jpg'), description:'Focus and Attention to each participant'},
            {path: require('../../assets/images/carousel/5.jpg'), description:'Get Answer to all your questions'},
    ];

    const items = [
        {
          description: `Raja is fully enthusiastic and gives 100% to the work/projects in
          which he assigned to. I've seen him not only excel at the core
          elements of his job -- like consulting, sales and process improvement
          -- but also learn other tasks that extend well beyond the scope of his
          role, like email marketing, event planning, and other planning for
          organization related improvements/activities. I know him well from
          start of his career at SICPA (since 2004). He has vast experience and
          knowledge in the ink/printing industry. He is also six sigma
          professional and governs the process in his projects. He provides his
          consulting experience to improve the process in the industry and also
          he has also provided the cost savings for many customers using his
          expertise knowledge and experience in the ink/painting industry. He is
          true assets to the organization.`,
          image:
            "https://media-exp1.licdn.com/dms/image/C5603AQGcp9Bg6VOzPg/profile-displayphoto-shrink_100_100/0/1625389584876?e=1652918400&v=beta&t=CvPH55bVArYNlJ1fIS5FQPE_lMHp2PkTpyGiL9ZnpX8 ",
          name: "Arul ChristhuRaj Alphonse",
          title: "Senior Web Architect",
          description1: `Mr. Rajagurulingam is energetic person with great passion in his profession. He's a Professional role model for many of his juniors including me. Patience and concentration in the work is his key success factor. He will be a great asset to any organization.`,
          image1:
            "https://media-exp1.licdn.com/dms/image/C5603AQHU6whuV0xSBg/profile-displayphoto-shrink_100_100/0/1516507455360?e=1652918400&v=beta&t=s0Hk2g8cFhbqqkH8Tk9bAYKs0-C-YMFEvP8sTS2-JGA ",
          name1: "Pandiya Rajan",
          title1: "Technical Manager"
        },
      
        {
          description: `I work together with Raja almost more than 5 years. He very nice person, dedicated, and very focus to support our important projects. Raja has excellent experiences in Ink Management Systems, Process Management Consulting, and InHouse management to provide the good guidance in printing industry and provide the good systems there and bring successful result. 
          He also understand how about our customer expections to achive the goal and result. 
          I really happy work together with Raja and I dream to have work together with him again and futures. `,
          image:
            "https://media-exp1.licdn.com/dms/image/C4E03AQFJkU2Ju4KLMg/profile-displayphoto-shrink_100_100/0/1613088382245?e=2147483647&v=beta&t=2pfqaCiWBom6v3XtPz-zuCyl7ZeXGs9yaxyA4KXHQQg",
          name: "Elia Agung Kurniawan",
          title: "Head of Sales",
          description1: `I find Raja to be very professional in all aspects of his job. In the past 6 months I have worked closely with him on a number of technical projects as well as working closely with the customers. He has shown great maturity and pride and his attention to detail is unrivalled. He has an extremely important job with his company and always gives maxium support and assistance. It's a pleasure to work beside Raja. I am always impressed with the way in which he interacts with his customers and the support he always provides. This is vital in order for our businees to grow. Written By Dean Schofield `,
          image1:
            "https://media-exp1.licdn.com/dms/image/C5103AQFbO3AQqRiXAQ/profile-displayphoto-shrink_100_100/0/1561471782343?e=1652918400&v=beta&t=8KpCW_HBhEkC0Dr9TZG5ghlQFJls4oAMHmPaA5VWBjY",
          name1: "Dean Schofield ",
          title1: "Senior Consultant "
        },
        {
          description: `I have worked with Rajagurulingam on various projects and levels and he always gives you 100%. He is prompt and follows thru with his promises. He conducts himself as a professional and would be an asset to any project or team.`,
          image:
            "https://media-exp1.licdn.com/dms/image/C4D03AQFm_cVWlIYKWw/profile-displayphoto-shrink_100_100/0/1559773255879?e=1652918400&v=beta&t=szUm2pjeU_Tti_NwIOt53gOP8CRisRG0FmsdsByvY-A",
          name: "Mark Peska ",
          title: " Regional InHouse Mgr. Siegwerk USA",
      
          description1: `Raja has great business sense and run the plant as an entrepreneur. He sees opportunities everywhere & aligned the team to many successes.
          He is a leader who empowers his managers and back us up when it's needed. He set a culture of empowerment & ownership. Failure in trying is acceptable as long as we learn from our mistakes and comes out stronger, he did a fantastic job doing so.
          Difference in culture was never an issue and I dare say we had the best results during his tenure as the operations lead. The whole plant is aligned to his vision & we gave all our best together achieving or surpassing the goals.`,
          image1:
            "https://media-exp1.licdn.com/dms/image/C5603AQFqy3oip8a2Vw/profile-displayphoto-shrink_100_100/0/1516509201124?e=1652918400&v=beta&t=-hSJB-ikLPqizf3F9G54YOasDw7dlDq568J1ulY_YGg",
          name1: "Joerg Kurasz  ",
          title1: "Chespa "
        },
      
        {
          description: `A very competitive, knowlegable and very skill in the process. Never fail to provide a solution to all your questions asked.`,
          image:
            "https://media-exp1.licdn.com/dms/image/C4E03AQE9HAohOpcajw/profile-displayphoto-shrink_100_100/0/1517375885225?e=1652918400&v=beta&t=I98r8dBPTyTe_HnD2CciqHvglaeT5HRTe2V4qP4kve4",
          name: "Chong How Tang",
          title: "Laminator Process Specialist ",
          description1: `Hi Rajagurulingam (Raj) is a great guy to have advising on ink kitchen set up and operations. He is lean and six sigma qualified with years of hands on experience. I would heartedly give my recommendation to Raj...`,
          image1:
            "https://media-exp1.licdn.com/dms/image/C5603AQG3XHrkhUp_Mg/profile-displayphoto-shrink_100_100/0/1517463800592?e=1652918400&v=beta&t=W6_mXuYpVJkkKhBN41nupHMRjbvZrwF7OyI-b_svhb4",
          name1: "Dr Gary Mort",
          title1: "Printing Ink Specialists"
        }
      
        // {
        //   description: `Raja is Good in Ink knowledge, Very vast experine in Seigwerk. He is also a very good team leader`,
        //   image:
        //     "https://media-exp1.licdn.com/dms/image/C5103AQHAfRy6HKQqIg/profile-displayphoto-shrink_100_100/0/1529183236207?e=1652918400&v=beta&t=v-MHaAjduN9BvJwP2peynQRmO4bNzdx522MXy0wSxHc",
        //   name: "Milind Dongare",
        //   title: "Process Engineer-Printing "
        // }
      ];
    const maxSteps = testimonialData && testimonialData.length ? testimonialData.length : 0;
    const maxStepsImages = carouselImages && carouselImages.length ? carouselImages.length : 0;

      const handleStepChange = (step) => {
        console.log(step);
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
          interval={10000}
          >
         {carouselImages.map((image, i) => (
              <Box
              // key={i}
              sx={{ display: "flex", justifyContent: "center" }}>
                  <article style={{height:'100%', position:'relative',  textAlign:'center'}}>
                  <img  src={image.path} alt="background" style={{objectFit:'cover', width:'1124px', height:'400px'}} />
                  
                  <div style={{backgroundColor:'#6163ff', position:'absolute',position:'absolute',top:8, right:16, padding:8, opacity:0.8, borderRadius:10, fontSize:"2vw" }}>
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
              <Box
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
                      style={{fontStyle:'italic', fontWeight:'bolder', color:'#fff', fontFamily:'Lobster'}}
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
        <Grid item xs={12} style={{marginLeft:'43%'}}>
      <Pagination dots={showImages === true ? maxStepsImages : maxSteps} index={activeStep} onChangeIndex={(step)=>handleDotsClick(step)} />
        </Grid> 
      </Grid>
    </Paper>}
        </div>
      
    
    )
}

export default Caraousel;