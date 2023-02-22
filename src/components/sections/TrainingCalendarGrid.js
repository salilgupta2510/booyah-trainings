import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';
import TrainingCalendarStore from "../../store/trainingCalendarStore";
import { TrainingCalendarService } from "../../services/trainingCalendarService";
import CalendarControl from '../elements/CalendarControl';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { useHistory } from 'react-router-dom';
import {Box, Paper, Typography, Grid, CssBaseline, Card, CardContent, CardActions} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Moment from 'react-moment';

// eslint-disable-next-line
const propTypes = {
    ...SectionProps.types
}
// eslint-disable-next-line
const defaultProps = {
    ...SectionProps.defaults
}
const TrainingCalendarGrid = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    calenderLimit,
    showHeader,
    showTrainerInfo,
    showSearchOption,
    trainingFilterInput,
    ...props
}) => {
    const setTrainingCalendarData = TrainingCalendarStore((state) => state.setTrainingCalendarData);
    const trainingCalendarData = TrainingCalendarStore((state) => state.trainingCalendarData);

    const [trainingCount, setTrainingCount] = useState(0);

    const [trainingFilter, setTrainingFilter] = useState(trainingFilterInput === undefined ? 'ALL' : trainingFilterInput);

    const [selectedBtn, setSelectedBtn] = useState(trainingFilterInput === undefined ? 'ALL' : trainingFilterInput);

    const history = useHistory();

    const routeToQueryForm = () => {
        history.push('/queryForm');
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
        'hero-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    // eslint-disable-next-line
    const tilesClasses = classNames(
        'tiles-wrap center-content'
    );

    const onKSDClick = async (event, data) => {
        event.preventDefault();
        setTrainingFilter("KSD");
        makeDataCall("KSD");
        setSelectedBtn(data);
    }

    const onKSIClick = async (event, data) => {
        event.preventDefault();
        await setTrainingFilter("KSI");
        makeDataCall("KSI");
        setSelectedBtn(data);
    }

    const onAllDataClick = async (event, data) => {
        event.preventDefault();
        await setTrainingFilter('All');
        makeDataCall("All");
        setSelectedBtn(data);
    }

    function getTimeZonesInfo(calendarItem) {
        let timeZoneResult = [];
        if (calendarItem.trainingDurationTimeZone1) {
            timeZoneResult.push(calendarItem.trainingDurationTimeZone1);
        }
        if (calendarItem.trainingDurationTimeZone2) {
            timeZoneResult.push(calendarItem.trainingDurationTimeZone2);
        }
        if (calendarItem.trainingDurationTimeZone3) {
            timeZoneResult.push(calendarItem.trainingDurationTimeZone3);
        }
        return timeZoneResult.map(item => item).join(' / ');
    }

    useEffect(() => {
        makeDataCall(trainingFilter);
    }, [trainingCount])


    const makeDataCall = (trainingType) => {
        TrainingCalendarService.GetTrainingCalendarData(calenderLimit, trainingType)
            .then((response) => {
                setTrainingCalendarData(response);
                setTrainingCount((trainingCalendarData.length) / 4);
            })
    }

    const getDataToRender = (index) => {
        if ((index * 4) + 4 > trainingCalendarData.length) {
            let trainingCalendarToRender = trainingCalendarData.slice(index * 4, trainingCalendarData.length);
            return trainingCalendarToRender;
        }
        else {
            let trainingCalendarToRender = trainingCalendarData.slice(index * 4, (index * 4) + 4);
            return trainingCalendarToRender;
        }
    }

    const renderRowMobile = (index) => {
        let dataToRender = getDataToRender(index);
        return (
            <>
                {dataToRender.map((item, index) => {
                    return <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: 20,
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: '#273345',
                            width: '100%'
                        }} >

                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image
                                        src={require('../../assets/images/kmp_badge.png')}
                                        alt="Features split 01"
                                        style={{ height: 75, width: 130, marginBottom: 5 }}
                                    />
                                    <div style={{
                                        fontSize: 14,
                                        borderStyle: 'solid',
                                        borderWidth: 1,
                                        borderColor: '#273345',
                                        color: '#ff4653',
                                        height: 30,
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        borderRadius: 10
                                    }}>
                                        {`Live ${item.venue}`}
                                    </div>
                                </div>

                                <div style={{ marginBottom: 10, height: '30%', fontSize: 17, fontWeight: 'bold' }}>{item.trainingTitle}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <CalendarControl
                                    month={new Date(item.trainingStartDate).getMonth()}
                                    date={new Date(item.trainingStartDate).getDate()}
                                    year={new Date(item.trainingStartDate).getFullYear().toString()}

                                />
                                <CalendarControl
                                    month={new Date(item.trainingEndDate).getMonth()}
                                    date={new Date(item.trainingEndDate).getDate()}
                                    year={new Date(item.trainingEndDate).getFullYear().toString()}

                                />
                            </div>
                            <div style={{ height: '15%' }}>
                    <div style={{ fontSize: 16 }}>{`${item.trainingDurationTimeZone1 ?? ''}`}</div>
                    <div style={{ fontSize: 16 }}>{`${item.trainingDurationTimeZone2 ?? ''}`}</div>
                    <div style={{ fontSize: 16 }}>{`${item.trainingDurationTimeZone3 ?? ''}`}</div>

                </div>
                           
                            <div style={{ marginTop: 25 }}>
                                <Button tag="a" color="white" wideMobile href="" style={{ height: 40, alignItems: 'center', fontSize: 14, color: '#6163ff' }} onClick={routeToQueryForm}>Enroll Now
                                </Button>
                            </div>
                        </div>
                    </div>
                })}
            </>
        )


    }

    const renderRow = (index) => {
        let dataToRender = getDataToRender(index);
        return (
            <>
                {dataToRender.map((item, index) => {
                    return <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: 20,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#273345',
                        width: '25%'
                    }} >
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image
                                    src={require('../../assets/images/kmp_badge.png')}
                                    alt="Features split 01"
                                    style={{ height: 75, width: 130, marginBottom: 5 }}
                                />
                                <div style={{
                                    fontSize: 14,
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#273345',
                                    color: '#ff4653',
                                    height: 30,
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    borderRadius: 10
                                }}>
                                    {`Live ${item.venue}`}
                                </div>
                            </div>

                            <div style={{ marginBottom: 10, height: '30%', fontSize: 17, fontWeight: 'bold' }}>{item.trainingTitle}</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <CalendarControl
                                month={new Date(item.trainingStartDate).getMonth()}
                                date={new Date(item.trainingStartDate).getDate()}
                                year={new Date(item.trainingStartDate).getFullYear().toString()}

                            />
                            <CalendarControl
                                month={new Date(item.trainingEndDate).getMonth()}
                                date={new Date(item.trainingEndDate).getDate()}
                                year={new Date(item.trainingEndDate).getFullYear().toString()}

                            />
                        </div>

                        {/* <div style={{ marginBottom: 10, height: '20%', fontSize: 16 }}>{`${getTimeZonesInfo(item)}`}</div> */}
                        <div style={{ height: '15%' }}>
                    <div style={{ fontSize: 16 }}>{`${item.trainingDurationTimeZone1 ?? ''}`}</div>
                    <div style={{ fontSize: 16 }}>{`${item.trainingDurationTimeZone2 ?? ''}`}</div>
                    <div style={{ fontSize: 16 }}>{`${item.trainingDurationTimeZone3 ?? ''}`}</div>

                </div>
                        <div style={{ marginTop: 10 }}>
                            <Button tag="a" color="white" wideMobile href="" style={{ height: 40, alignItems: 'center', fontSize: 14, color: '#6163ff' }} onClick={routeToQueryForm}>Enroll Now
                            </Button>
                        </div>
                    </div>
                })}
            </>
        )
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'white',
        //  theme.palette.mode === 'dark' ? '#fff' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const Header = styled(Paper)(({ theme }) => ({
        backgroundColor: 'white',
        //  theme.palette.mode === 'dark' ? '#fff' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderStyle:'none'
      }));

      const renderTrainingCalendarHeader = () =>{
        return(
            <tr style={{marginBottom:10, backgroundColor:'#6163ff'}}>
      <th className="header-left header-text">Event</th>
      <th className='header-all header-text'>Start Date</th>
      <th className='header-all header-text'>End Date</th>
      <th className='header-all header-text'>Timing</th>
      <th className='header-all header-text'>Venue</th>
      <th className='header-right header-text'>Register</th>
            </tr>
        )
      }

      const renderTrainingCalendarGridRow = () =>{
        return(
            <>
            {trainingCalendarData.map((training, index) =>{
                return(<>
    
    <tr key={index} style={{backgroundColor: index%2 == 0 ? '#ffffff' : '#D3D3D3'}}>
      <td className="header-left">{training.trainingTitle}</td>
      <td className='header-all'> 
      <Moment format="DD/MM/YYYY">{training.trainingStartDate}</Moment>
      </td>
      <td className='header-all'>
      <Moment format="DD/MM/YYYY">{training.trainingEndDate}</Moment>
      </td>
      <td className='header-all'>{getTimeZonesInfo(training)}</td>
      <td className='header-all'>{training.venue}</td>
      <td  className='header-right'>
      <a tag="a" onClick={routeToQueryForm} 
            style={{color:'blue', cursor:'pointer', textDecoration:'underline'}}>Register</a>
      </td>
    </tr>
                </>)
            })}
        </>
        )

      }

    const renderGrid = () =>{
        return(

<Box style={{overflowX: 'auto', maxWidth:1200}}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:0 }} className="grid-width">
      <Grid item xs={2} style={{paddingBottom:10}}>
          <Header className="header-left">Event</Header>
        </Grid>
        <Grid item xs={2} style={{paddingBottom:10}}>
          <Header className="header-all">Start Date</Header>
        </Grid>
        <Grid item xs={2} style={{paddingBottom:10}}>
          <Header className="header-all">End Date</Header>
        </Grid>
        <Grid item xs={2} style={{paddingBottom:10}}>
          <Header className="header-all" noWrap>Timing</Header>
        </Grid>
        <Grid item xs={2} style={{paddingBottom:10}}>
          <Header className="header-all">Venue</Header>
        </Grid>
        <Grid item xs={2} style={{paddingBottom:10}}>
          <Header className="header-right"></Header>
        </Grid>
        {trainingCalendarData.map((training, index) =>{
            return(<>

            <Grid item xs={2} className="grid-row">
          <Item className="header-left">{training.trainingTitle}</Item>
        </Grid>
        <Grid item xs={2} className="grid-row">
          <Item className="header-all">
          <Moment format="DD/MM/YYYY">
          {training.trainingStartDate}
            </Moment>
          </Item>
        </Grid>
        <Grid item xs={2} className="grid-row">
          <Item className="header-all">
          <Moment format="DD/MM/YYYY">
          {training.trainingEndDate}
            </Moment>
            </Item>
        </Grid>
        <Grid item xs={2} className="grid-row">
          <Item className="header-all">{getTimeZonesInfo(training)}</Item>
        </Grid>
        <Grid item xs={2} className="grid-row">
          <Item className="header-all">{training.venue}</Item>
        </Grid>
        <Grid item xs={2} className="grid-row">
          <Item className="header-right">
            <a tag="a" onClick={routeToQueryForm} 
            style={{color:'blue', cursor:'pointer', textDecoration:'underline'}}>Register</a>
          </Item>
        </Grid>
            </>)
        })}
        
        
      </Grid>
    </Box>
        )
    }

    const renderTrainingCalendarData = () => {
        let rowCount = [];
        for (let index = 0; index < trainingCount; index++) {
            rowCount[index] = 1;
        }
        if (trainingCalendarData.length > trainingCount * 4) {
            rowCount[rowCount.length] = 1;
        }
        return (
            <>
                {
                    rowCount.map((value, index) => {
                        return <>
                            <BrowserView>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    {renderRow(index)}
                                </div>
                            </BrowserView>

                            <MobileView>
                                {renderRowMobile(index)}
                            </MobileView>
                        </>
                    })
                }
            </>
        )
    }

    const renderTile = (item) => {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 20,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#273345',
                width: '40%'
            }} >
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image
                            src={require('../../assets/images/kmp_badge.png')}
                            alt="Features split 01"
                            style={{ height: 75, width: 130, marginBottom: 5 }}
                        />
                        <div style={{
                            fontSize: 14,
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: '#273345',
                            color: '#ff4653',
                            height: 30,
                            paddingLeft: 5,
                            paddingRight: 5,
                            borderRadius: 10
                        }}>
                            {`Live ${item.venue}`}
                        </div>
                    </div>

                    <div style={{ marginBottom: 10, height: '30%', fontSize: 17 }}>{item.trainingTitle}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <CalendarControl
                        month={new Date(item.trainingStartDate).getMonth()}
                        date={new Date(item.trainingStartDate).getDate()}
                        year={new Date(item.trainingStartDate).getFullYear().toString()}

                    />
                    <CalendarControl
                        month={new Date(item.trainingEndDate).getMonth()}
                        date={new Date(item.trainingEndDate).getDate()}
                        year={new Date(item.trainingEndDate).getFullYear().toString()}

                    />
                </div>

                {/* <div style={{ marginBottom: 10, height: '20%', fontSize: 16 }}>{`${getTimeZonesInfo(item)}`}</div> */}
                <div style={{ height: '15%' }}>
                    <div style={{ fontSize: 16 }}>{`${item.trainingDurationTimeZone1 ?? ''}`}</div>
                    <div style={{ fontSize: 16 }}>{`${item.trainingDurationTimeZone2 ?? ''}`}</div>
                    <div style={{ fontSize: 16 }}>{`${item.trainingDurationTimeZone3 ?? ''}`}</div>

                </div>
                <div style={{ marginTop: 10 }}>
                    <Button tag="a" color="white" wideMobile href="" style={{ height: 40, alignItems: 'center' }}>
                        <Link to="/queryForm" style={{ fontSize: 14, color: '#6163ff' }} >Enroll Now</Link>
                    </Button>
                </div>
            </div>
        )
    }

    const sectionHeader = {
        title: 'Upcoming Classes',
        paragraph: ''
    };

    return (
        <section
            {...props}
            className='container'
            style={{ paddingTop: 0, borderWidth: 1, marginTop:30, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20 }}
        >
            {showSearchOption &&
                <>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                            <ButtonGroup>
                                <Button tag="a" fo wideMobile href="" style={{ borderRadius: 7, width: '22%', fontSize: 14, color: selectedBtn === "ALL" ? '#eceded' : '#6163ff', backgroundColor: selectedBtn === "ALL" ? '#6163ff' : '#eceded' }} onClick={event => onAllDataClick(event, "ALL")}>All Classes
                                </Button>
                                <Button tag="a" wideMobile href="" style={{ borderRadius: 7, width: '22%', fontSize: 14, color: selectedBtn === "KMP" ? '#eceded' : '#6163ff', backgroundColor: selectedBtn === "KMP" ? '#6163ff' : '#eceded' }} onClick={event => onAllDataClick(event, "KMP")}>KMP Class
                                </Button>
                                <Button tag="a" fo wideMobile href="" style={{ borderRadius: 7, width: '22%', fontSize: 14, color: selectedBtn === "KSD" ? '#eceded' : '#6163ff', backgroundColor: selectedBtn === "KSD" ? '#6163ff' : '#eceded' }} onClick={event => onKSDClick(event, "KSD")}>KSD Class
                                </Button>
                                <Button tag="a" wideMobile href="" style={{ borderRadius: 7, width: '22%', fontSize: 14, color: selectedBtn === "KSI" ? '#eceded' : '#6163ff', backgroundColor: selectedBtn === "KSI" ? '#6163ff' : '#eceded' }} onClick={event => onKSIClick(event, "KSI")}>KSI Class
                                </Button>
                            </ButtonGroup>
                        </div>
                    
                </>
            }
            <div className={innerClasses} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
            }}>
                {showHeader && <h3 style={{ marginTop: 0 }}>{sectionHeader.title}</h3>}
                {showTrainerInfo &&
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <a href="/SampleKMPCertificate.pdf" download style={{ fontSize: 16, textDecoration: 'underline', fontWeight: 'bold', color: 'rgb(97, 99, 255)', textAlign: 'right' }}>Sample KMP Certificate</a>
                        <Link to="/KnowYourTrainer" style={{ fontSize: 16, textDecoration: 'underline', fontWeight: 'bold', color: 'rgb(97, 99, 255)', textAlign: 'right' }} >Know Your Trainer</Link>
                    </div>}
            </div>
            {typeof trainingCalendarData !== 'string' && trainingCalendarData.length > 0 &&
            <div>
  <table style={{minWidth:100}}>
  {renderTrainingCalendarHeader()}
    {renderTrainingCalendarGridRow()}
  
  </table>

  {showHeader && <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems:'center' }} >
               <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', backgroundColor:'#0e1012'}}>
                      <Link to="/calendar" style={{ fontSize: 22, color: 'white' }} >Click here for more Workshops</Link>
                    </Button>
                </div>}
</div>
            }
        </section>
    );
}

export default TrainingCalendarGrid;