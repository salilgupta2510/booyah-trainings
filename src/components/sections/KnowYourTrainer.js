import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../../components/elements/ButtonGroup';
import Button from '../../components/elements/Button';
import Cta from '../../components/sections/Cta';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';

// eslint-disable-next-line
const propTypes = {
    ...SectionProps.types
}
// eslint-disable-next-line
const defaultProps = {
    ...SectionProps.defaults
}
const KnowYourTrainer = ({
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
                            Vikas Agarwal
            </h1>
                        <div className="container-xs">
   
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <Image 
                                src={require('./../../assets/images/Vikas.jpeg')}
                                width={400}
                                height={400}/>
                             
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='section-inner reveal-from-bottom' data-reveal-delay="400" style={{ paddingTop: 30, width: '80%', margin: 'auto' }}>
                <div className='tiles-wrap' >
                    {renderTile('Certificate Image will go here', 'yellow')}
                    {renderTile('Certificate Image will go here', 'aqua')}
                    {renderTile('Certificate Image will go here', 'green')}
                    {renderTile('Certificate Image will go here', 'red')}
                    {renderTile('Certificate Image will go here', 'violet')}
                    {renderTile('Certificate Image will go here', 'orange')}
                </div>
            </div>
            <h2 className="reveal-from-bottom" data-reveal-delay="200">
                Why Vikas
            </h2>
            <div style={{ marginRight: '20%', marginLeft: '20%' }}>
                <div className="features-tiles-item-content reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'left', marginBottom: 80 }}>
                   
                    <ul>
                        <li className="m-0 text-sm">
                        Vikas is a Program Manager, Agile Coach, Scrum Master, Kanban Practitioner, author, and speaker with 23 years of experience who has previously worked as a developer, product owner, and business analyst.
                    </li>
                        <li className="m-0 text-sm">
                        Vikas has delivered from small-sized projects to multi-million dollar deals across the US, UK, Japan, UAE, Australia, and Asia, spanning multiple domains, including education, banking, CTRM, B2B, and B2C. He believes in enhancing business agility and creates a psychologically safe team environment.
                    </li>
                        <li className="m-0 text-sm">
                        Vikas is an AKT (Accredited Kanban Trainer) from Kanban University and holds Professional Scrum Master – III Certification.
                    </li>
                        <li className="m-0 text-sm">
                        Vikas is one of the Content Creators for Kanban Maturity Model and actively contributes to the learning modules of Kanban.
                    </li>
                        <li className="m-0 text-sm">
                        Vikas has created and implemented FISH Model (to enhance business agility) for the delivery of key strategic initiatives.
                    </li>
                        <li className="m-0 text-sm">
                        Vikas is one of the distinguished writers in Serious Scrum publication on Medium.com. He writes about the actual challenges in Agile transformation and how to overcome those.
                    </li>
                        <li className="m-0 text-sm">
                        Vikas was featured in “The Agile Podcast: Scrum Mastery Challenge” run by Geoff Watt and Paul Goddard.
                    </li>
                        <li className="m-0 text-sm">
                        Vikas actively participates in Agile conferences worldwide.
                    </li>
                        
                    </ul>
                </div>
               
                
               
                
               
                
            </div>
        </section>
    );
}

export default KnowYourTrainer;