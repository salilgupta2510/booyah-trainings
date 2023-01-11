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
    calenderLimit,
    showHeader,
    showTrainerInfo,
    showSearchOption,
    ...props
}) => {
    const setTrainingCalendarData = TrainingCalendarStore((state) => state.setTrainingCalendarData);
    const trainingCalendarData = TrainingCalendarStore((state) => state.trainingCalendarData);

    const [trainingCount, setTrainingCount] = useState(0);
    const [trainingFilter, setTrainingFilter] = useState('All');

    const [selectedBtn, setSelectedBtn] = useState('ALL');

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
        if (calendarItem.trainingDurationTimeZone2) {
            timeZoneResult.push(calendarItem.trainingDurationTimeZone3);
        }
        return timeZoneResult.map(item => item).join('\r\n');
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
            style={{ paddingTop: 0, marginTop: 30, borderWidth: 1, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20 }}
        >
            {showSearchOption &&
                <>
                    <BrowserView>
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
                    </BrowserView>
                    <MobileView>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
                            <Button tag="a" fo wideMobile href="" style={{ borderRadius: 7, marginBottom: 10, width: '40%', fontSize: 14, color: selectedBtn === "ALL" ? '#eceded' : '#6163ff', backgroundColor: selectedBtn === "ALL" ? '#6163ff' : '#eceded' }} onClick={event => onAllDataClick(event, "ALL")}>All Classes
                            </Button>
                            <Button tag="a" wideMobile href="" style={{ borderRadius: 7, marginBottom: 10, width: '40%', fontSize: 14, color: selectedBtn === "KMP" ? '#eceded' : '#6163ff', backgroundColor: selectedBtn === "KMP" ? '#6163ff' : '#eceded' }} onClick={event => onAllDataClick(event, "KMP")}>KMP Class
                            </Button>
                            <Button tag="a" fo wideMobile href="" style={{ borderRadius: 7, marginBottom: 10, width: '40%', fontSize: 14, color: selectedBtn === "KSD" ? '#eceded' : '#6163ff', backgroundColor: selectedBtn === "KSD" ? '#6163ff' : '#eceded' }} onClick={event => onKSDClick(event, "KSD")}>KSD Class
                            </Button>
                            <Button tag="a" wideMobile href="" style={{ borderRadius: 7, marginBottom: 10, width: '40%', fontSize: 14, color: selectedBtn === "KSI" ? '#eceded' : '#6163ff', backgroundColor: selectedBtn === "KSI" ? '#6163ff' : '#eceded' }} onClick={event => onKSIClick(event, "KSI")}>KSI Class
                            </Button>
                        </div>
                    </MobileView>
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
                renderTrainingCalendarData()
            }
        </section>
    );
}

export default TrainingCalendar;