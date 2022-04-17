import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../../components/elements/ButtonGroup';
import Button from '../../components/elements/Button';
import Cta from '../../components/sections/Cta';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
const propTypes = {
    ...SectionProps.types
}
// eslint-disable-next-line
const defaultProps = {
    ...SectionProps.defaults
}
const KSD = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

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

    const renderTile = (text, color) => {
        return (
            <div className="tiles-item reveal-from-right" data-reveal-delay={200} style={{ padding: 0 }}>
                <div className="tiles-item-inner" style={{ backgroundColor: `${color}`, color: 'black' }}>
                    <p className="m-0 text-sm">
                        {text}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <section
            {...props}
            className={outerClasses}
            style={{ paddingTop: 0, marginTop: 150 }}
        >
            <div className="container">
                <div className={innerClasses} style={{ paddingBottom: 10 }}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Kanban System Design
            </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                Design a Kanban system or improve an existing system for optimal flow and faster delivery. Learn the fundamentals of the Kanban Method. Experience Kanban with a simulation game and hands-on exercises to design a Kanban board.
                </p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <ButtonGroup>
                                    <Button tag="a" color="primary" wideMobile href="">
                                    <Link to="/queryForm" >REGISTER FOR KSD</Link>
                                        {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSD</a> */}
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='section-inner reveal-from-bottom' data-reveal-delay="400" style={{ paddingTop: 10, width: '80%', margin: 'auto' }}>
                <div className='tiles-wrap' >
                    {renderTile('Do you want to bring an evolutionary change within your organization?', 'yellow')}
                    {renderTile('Do you want to know how to overcome the resistance to change?', 'aqua')}
                    {renderTile('Do you want to remove delays, reduce variability, and manage bottlenecks?', 'green')}
                    {renderTile('Do you want to scale workflow agility without changing organization structures?', 'red')}
                    {renderTile('Do you want to increase internal and external customer satisfaction levels?', 'violet')}
                    {renderTile('Do you want to be pro-active in bringing continuous improvements?', 'orange')}
                </div>
            </div>
            <h2 className="reveal-from-bottom" data-reveal-delay="200">
                What will you learn
            </h2>
            <div style={{ marginRight: '20%', marginLeft: '20%' }}>
                <div className="features-tiles-item-content reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Module 1
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                            Experience Kanban through an online simulation game
                    </li>
                        <li className="m-0 text-sm">
                            What is Pull System
                    </li>
                        <li className="m-0 text-sm">
                            Flow management using WIP Limits
                    </li>
                        <li className="m-0 text-sm">
                            Generate core metrics – Lead time, Delivery rate, and WIP levels
                    </li>
                        <li className="m-0 text-sm">
                            Generate charts – CFD, Lead Time Distribution, Run Chart
                    </li>
                        <li className="m-0 text-sm">
                            Understand Little’s Law
                    </li>
                        <li className="m-0 text-sm">
                            Understand Classes of Service, Blockers, and Commitment Point
                    </li>
                        <li className="m-0 text-sm">
                            Group Discussion and Exercises
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: FUN @ LEARNING
                    </li>
                    </ul>
                </div>
                <div className="features-tiles-item-content reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Module 2
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                            Understand Little’s Law
                    </li>
                        <li className="m-0 text-sm">
                            Disney Case Study
                    </li>
                        <li className="m-0 text-sm">
                            Understand Change Management and Service Delivery Principles
                    </li>
                        <li className="m-0 text-sm">
                            Understand six practices of Kanban
                    </li>
                        <li className="m-0 text-sm">
                            Kanban Metrics
                    </li>
                        <li className="m-0 text-sm">
                            Discuss benefits of Kanban
                    </li>
                        <li className="m-0 text-sm">
                            Quiz: Kanban Myths and Facts
                    </li>
                        <li className="m-0 text-sm">
                            Group Discussion and Exercises
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Listen to “How Toyota changed the way of working.”
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Real-life examples to understand the class of services
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: video from Ron Kaufman
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: FUN @ LEARNING
                    </li>
                    </ul>
                </div>
                <div className="features-tiles-item-content reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Module 3
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                            Particular focus on Systems Thinking Approach with an example
                    </li>
                        <li className="m-0 text-sm">
                            Understand STATIK and design your Kanban System
                    </li>
                        <li className="m-0 text-sm">
                            Discuss Microsoft XIT Case Study
                    </li>
                        <li className="m-0 text-sm">
                            Seven Interactive exercises
                    </li>
                        <li className="m-0 text-sm">
                            Seven Interactive exercises
                    </li>
                        <li className="m-0 text-sm">
                            Understand Little’s Law
                    </li>
                        <li className="m-0 text-sm">
                            Group Discussion and Exercises
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Talk to an Agile Coach who had been using Kanban iNSIDE oUt
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: FUN @ LEARNING
                    </li>
                    </ul>
                </div>
                <div className="features-tiles-item-content reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Module 4
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                            TEST, Don’t be scared it’s just to Recap
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Red Pill or Blue Pill
                    </li>
                        <li className="m-0 text-sm">
                            How will you design a Kanban System
                    </li>
                        <li className="m-0 text-sm">
                            Examples of Ticket Design
                    </li>
                        <li className="m-0 text-sm">
                            Real-world examples of Kanban Boards
                    </li>
                        <li className="m-0 text-sm">
                            Real-time feedback
                    </li>
                        <li className="m-0 text-sm">
                            Group Discussion and Exercises
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: FUN @ LEARNING
                    </li>
                        <li className="m-0 text-sm">
                            TATA, Bye-Bye – Close of KSD Class
                    </li>
                    </ul>
                </div>
                <div className="features-tiles-item-content reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        You earn
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                            Path towards Successful Evolutionary Change
                    </li>
                        <li className="m-0 text-sm">
                            Learn from each other’s experiences
                    </li>
                        <li className="m-0 text-sm">
                            Deep Knowledge of Kanban System Design
                    </li>
                    </ul>
                </div>
                <div className="features-tiles-item-content reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Certification
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                            Certificate of completion of KSD Course
                    </li>
                        <li className="m-0 text-sm">
                            Students completing this course and the Kanban Systems Improvements course receive the Kanban Management Professional (KMP) credential
                    </li>
                    </ul>
                </div>
                <div className="features-tiles-item-content reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'left' }}>
                    <h4 className="mt-0 mb-8">
                        Free Stuff
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                            ebook version of Kanban Blue Book by David J. Anderson
                    </li>
                        <li className="m-0 text-sm">
                            Discount on ebook – Kanban From The Inside
                    </li>
                        <li className="m-0 text-sm">
                            Free download of Essential Kanban Guides
                    </li>
                        <li className="m-0 text-sm">
                            Free Trial of SwiftKanban ESP
                    </li>
                        <li className="m-0 text-sm">
                            Free Trial of Kanbanize
                    </li>
                        <li className="m-0 text-sm">
                            Free Trial of Nave Dashboard
                    </li>
                        <li className="m-0 text-sm">
                            Free Trial of Kaiten
                    </li>
                        <li className="m-0 text-sm">
                            Menta Triage
                    </li>
                        <li className="m-0 text-sm">
                            Free Download of “The Official Guide to the Kanban Method”
                    </li>
                    </ul>
                </div>
            </div>
            <Cta split />
        </section >
    );
}

export default KSD;