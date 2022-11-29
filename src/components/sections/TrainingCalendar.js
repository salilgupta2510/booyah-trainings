import React, { useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';
import TrainingCalendarStore from "../../store/trainingCalendarStore";
import { TrainingCalendarService } from "../../services/trainingCalendarService";
import CalendarControl from '../elements/CalendarControl';

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
        'hero-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    // eslint-disable-next-line
    const tilesClasses = classNames(
        'tiles-wrap center-content'
    );

    function getTimeZonesInfo(calendarItem) {
        let timeZoneResult = [];
        if (calendarItem.trainingDurationTimeZone1) {
            timeZoneResult.push(calendarItem.trainingDurationTimeZone1);
        }
        if (calendarItem.trainingDurationTimeZone2) {
            timeZoneResult.push(calendarItem.trainingDurationTimeZone2);
        }
        if (calendarItem.trainingDurationTimeZone2) {
            timeZoneResult.push(calendarItem.trainingDurationTimeZone3);
        }
        return timeZoneResult.map(item => item).join('/');
    }

    useEffect(() => {
        TrainingCalendarService.GetTrainingCalendarData()
            .then((response) => {
                console.log("Received response ", response);
                setTrainingCalendarData(response);
            })
    }, [])

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
            style={{ paddingTop: 0, marginTop: 20, borderWidth: 1, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20 }}
        >
            <div className={innerClasses} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
            }}>
                <h2 style={{ marginTop: 0 }}>{sectionHeader.title}</h2>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Link to="/queryForm" style={{ fontSize: 16, marginRight: 20, textDecoration: 'underline', fontWeight: 'bold' }} >Know Your Trainer</Link>
                    <img src={require('../../assets/images/Vikas.jpg')} style={{ height: 40, width: 40, alignSelf: 'center', borderRadius: 10 }} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {typeof trainingCalendarData !== "string" && trainingCalendarData.length > 0 &&
                    trainingCalendarData.map(item => (
                        renderTile(item)
                    ))
                }
            </div>
        </section >
    );
}

export default TrainingCalendar;