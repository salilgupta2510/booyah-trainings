import React, { useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Cta from './Cta';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';
import TrainingCalendarStore from "../../services/trainingCalendar/trainingCalendarStore";
import { TrainingCalendarService } from "../../services/trainingCalendar/trainingCalendarService";
import { CalendarIcon } from 'react-calendar-icon';
import CalendarControl from '../elements/CalendarControl';
import SectionHeader from './partials/SectionHeader';

// eslint-disable-next-line
const propTypes = {
    ...SectionProps.types
}
// eslint-disable-next-line
const defaultProps = {
    ...SectionProps.defaults
}
const TrainingCalendar = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
    const setTrainingCalendarData = TrainingCalendarStore((state) => state.setTrainingCalendarData);
    const trainingCalendarData = TrainingCalendarStore((state) => state.trainingCalendarData);

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

    // eslint-disable-next-line
    const tilesClasses = classNames(
        'tiles-wrap center-content'
    );
    
    function getTimeZonesInfo(calendarItem){
        console.log(calendarItem);
        let timeZoneResult = [];
        if(calendarItem.trainingDurationTimeZone1){
            timeZoneResult.push(calendarItem.trainingDurationTimeZone1); 
        }
        if(calendarItem.trainingDurationTimeZone2){
            timeZoneResult.push(calendarItem.trainingDurationTimeZone2); 
        }
        if(calendarItem.trainingDurationTimeZone2){
            timeZoneResult.push(calendarItem.trainingDurationTimeZone3); 
        }
        return timeZoneResult.map(item => item).join('/');
    }

    useEffect(() => {
        TrainingCalendarService.GetTrainingCalendarData()
        .then((response) =>{
console.log("Received response ", response);
setTrainingCalendarData(response);
        })
        // console.log(response);
      }, [])

    const renderTile = (item, widthIP) => {
        return (
            <>
            <div className="tiles-item reveal-from-right" data-reveal-delay={200} style={{ padding: 0, maxWidth: widthIP }}>
                <div className="tiles-item-inner" style={{ backgroundColor: 'rgb(236, 237, 237)', color: 'rgb(14, 16, 18)' }}>
                    <Image
                  src={require('../../assets/images/kmp_badge.png')}
                  alt="Features split 01"
                  style={{ height: 75, width: 130, marginTop:2 }}
                  />
                </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay={200} style={{ padding: 0, maxWidth: widthIP }}>
                <div className="tiles-item-inner" style={{ backgroundColor: 'rgb(236, 237, 237)', color: 'rgb(14, 16, 18)' }}>
                    <p className="m-0 text-sm">
                        {item.trainingTitle} ({item.venue})
                    </p>
                    <span>{item.trainingStartDate} - {item.trainingEndDate}</span>
                    <span>{getTimeZonesInfo(item)}
                   </span>

                    {/* <span>   <CalendarIcon date={new Date()} style={{height:5,width:5}} /></span> */}
                    {/* <CalendarControl/> */}
                </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay={200} style={{ padding: 0, maxWidth: widthIP }}>
                <div className="tiles-item-inner" style={{ backgroundColor: 'rgb(236, 237, 237)', color: 'rgb(14, 16, 18)' }}>
                    <p className="m-0 text-sm">
                    <Button tag="a" color="primary" fo wideMobile href="" size='1'>
                    <Link to="/queryForm" style={{fontSize: 14}} >REGISTER</Link>
                  </Button>
                    </p>
               
                </div>
            </div>
                  </>
        )
    }

    const sectionHeader = {
        title: 'Upcoming Classes',
        paragraph: ''
    };

    return (
        <section
            {...props}
            className={outerClasses}
            style={{ paddingTop: 0, marginTop: 150 }}
        >
                    <SectionHeader data={sectionHeader} className="center-content" />
            <div className='section-inner reveal-from-bottom' data-reveal-delay="400" style={{ paddingTop: 10, width: '80%', margin: 'auto' }}>
                <div className='tiles-wrap' >
                    {typeof trainingCalendarData !== "string" && trainingCalendarData.length > 0 && trainingCalendarData.map(item => (
                        // <p>{item.trainingTitle}</p>
                    renderTile(item, 330)

                    ))}
                    {/* {renderTile('Do you want to know how to overcome the resistance to change?', 'aqua',330)} */}
                    {/* {renderTile('Do you want to remove delays, reduce variability, and manage bottlenecks?', 'green',330)}
                    {renderTile('Do you want to scale workflow agility without changing organization structures?', 'red',330)}
                    {renderTile('Do you want to increase internal and external customer satisfaction levels?', 'violet',330)}
                    {renderTile('Do you want to be pro-active in bringing continuous improvements?', 'orange',330)} */}
                </div>
            </div>
        </section >
    );
}

export default TrainingCalendar;