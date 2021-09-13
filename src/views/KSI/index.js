import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../../components/elements/ButtonGroup';
import Button from '../../components/elements/Button';
import Cta from '../../components/sections/Cta';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}
const KSI = ({
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
        >
            <div className="container">
                <div className={innerClasses} style={{ paddingBottom: 10 }}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Kanban System Improvement
            </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                Managing with Kanban day to day; Feedback loops; Operating at scale; Effective metrics. Gain the knowledge necessary for rollout and daily operation of a Kanban system. Learn how to manage, optimize, scale and evolve it over time.
                </p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <ButtonGroup>
                                    <Button tag="a" color="primary" wideMobile href="/Calendar">
                                        REGISTER FOR KSI
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
                            System 1 vs. System 2
                    </li>
                        <li className="m-0 text-sm">
                            Kanban Method, a new approach to improvement
                    </li>
                        <li className="m-0 text-sm">
                            Types of Kanban
                    </li>
                        <li className="m-0 text-sm">
                            Posit Science Case Study
                    </li>
                        <li className="m-0 text-sm">
                            KMM – ML0 to ML4
                    </li>
                        <li className="m-0 text-sm">
                            Group Discussion and Exercises
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Bruce Lee – Be like water
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Talks from David
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
                            TEST, Don’t be scared its just a TeachBack
                    </li>
                        <li className="m-0 text-sm">
                            Kanban Lens
                    </li>
                        <li className="m-0 text-sm">
                            Kanban Scaling Principles
                    </li>
                        <li className="m-0 text-sm">
                            Upstream Kanban
                    </li>
                        <li className="m-0 text-sm">
                            Kanban Roles
                    </li>
                        <li className="m-0 text-sm">
                            Group Discussion and Exercises
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Learn to pronounce Kanban
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: The Elevator Pitch
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
                            Feedback Loops
                    </li>
                        <li className="m-0 text-sm">
                            Types of cadence
                    </li>
                        <li className="m-0 text-sm">
                            Aligning cadences with organizational maturity
                    </li>
                        <li className="m-0 text-sm">
                            ML1 Cadences
                    </li>
                        <li className="m-0 text-sm">
                            ML2 Cadences incl. Flow Review and Blocker Clustering
                    </li>
                        <li className="m-0 text-sm">
                            ML3 Cadences incl. planning and review
                    </li>
                        <li className="m-0 text-sm">
                            ML4 Cadences incl. Operations Review and Service Delivery Review
                    </li>
                        <li className="m-0 text-sm">
                            Group Discussion and Exercises
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Talk to an Agile Coach who had been using Kanban iNSIDE oUt
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Blues
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
                            Improvement Techniques
                    </li>
                        <li className="m-0 text-sm">
                            Strategy for Improving Capability
                    </li>
                        <li className="m-0 text-sm">
                            Lead Time Distribution
                    </li>
                        <li className="m-0 text-sm">
                            Sources of Delays
                    </li>
                        <li className="m-0 text-sm">
                            Removing Delays
                    </li>
                        <li className="m-0 text-sm">
                            Manage Dependencies
                    </li>
                        <li className="m-0 text-sm">
                            Understanding Variability
                    </li>
                        <li className="m-0 text-sm">
                            Wimbledon Case Study
                    </li>
                        <li className="m-0 text-sm">
                            Risk Management & Variability
                    </li>
                        <li className="m-0 text-sm">
                            Managing Bottlenecks
                    </li>
                        <li className="m-0 text-sm">
                            Theory of Constraints
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Sonalika Tractors Case Study
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Kanban in an advertising agency – An example
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: Theory of Constraints applied to XIT Case Study
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: FUN @ LEARNING
                    </li>
                    </ul>
                </div>
                <div className="features-tiles-item-content reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Module 5
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                            Evolutionary Change
                    </li>
                        <li className="m-0 text-sm">
                            J-Curve
                    </li>
                        <li className="m-0 text-sm">
                            Fitness Criteria
                    </li>
                        <li className="m-0 text-sm">
                            Group Discussion and Exercises
                    </li>
                        <li className="m-0 text-sm">
                            BONUS: FUN @ LEARNING
                    </li>
                        <li className="m-0 text-sm">
                            TATA, Bye-Bye – Close of KSI Class
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
                        <li className="m-0 text-sm">
                            KMP (Kanban Management Professional) Credential
                    </li>
                        <li className="m-0 text-sm">
                            Ability to Design and Implement Kanban
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

export default KSI;