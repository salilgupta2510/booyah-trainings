import React from 'react';
import classNames from 'classnames';
import Image from '../../components/elements/Image';
import Cta from '../../components/sections/Cta';

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

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className='section-inner' style={{ paddingTop: 10, width: '80%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image
                            src={require('./../../assets/images/Coach.jpeg')}
                            alt="Features split 01"
                            width={500}
                            height={300}
                            style={{ margin: 0 }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: 20 }}>
                            <Image
                                src={require('./../../assets/images/AKT_Badge.svg')}
                                width={100}
                            />
                            <Image
                                src={require('./../../assets/images/PSMIII_Badge.svg')}
                                width={80}
                            />
                        </div>

                    </div>
                </div>
                <h3>
                    Vikas Agarwal
                </h3>
                <div className="container-xl">
                    <p className="m-0 mb-32">
                        AKT, PMP®, PSM-I, PSM-II, PSM-III, KMP, PSPO-I, SPC, PSD-I, PAL-e, CAL-1, ITIL V3 F
                    </p>
                </div>

            </div>
            <div className='row' style={{ marginBottom: 20 }}>
                <div className='col'>

                </div>
            </div>

            <div style={{ marginRight: '20%', marginLeft: '20%' }}>
                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <ul>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            Accredited Kanban Trainer (by Kanban University) since March 2020.
                    </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            Holds highly recognized PSM-III (Professional Scrum Master) credential from Scrum.org.
                    </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            Have total 23+ years of experience in IT industry.
                    </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            Have 12 years’ experience in Agile Transformation across multiple domains which include manufacturing, education, e-commerce, operations, business processes, financial, banking, energy trading, truck operations, dairy management, and many more.
                    </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            I write eye-opening real case study based blogs for Agile practitioners. The blogs are available in Serious Scrum Publication. <a href="https://medium.com/@contactvix" target="_blank">https://medium.com/@contactvix</a>
                        </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            Created and implemented FISH Model (to enhance business agility) for the delivery of key strategic initiatives. The FISH Model was presented at Access Agility Festival on 6th Oct,2021.
                    </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            One of his Kanban implementations will be presented in Kanban India Conference Dec, 2021. <a href="https://www.kanbanindia.org/speakers/vikas-agarwal/" target="_blank">https://www.kanbanindia.org/speakers/vikas-agarwal/</a>
                        </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            One of the distinguished writers in Serious Scrum publication on Medium.com. He writes about the actual challenges in Agile transformation and how to overcome those.
                    </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            He was featured in “The Agile Podcast: Scrum Mastery Challenge” run by Geoff Watt and Paul Goddard.
                    </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            Led several Agile Transformations, the largest being with a team of 350+ team members for an e-commerce retail chain.
                    </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            Follows a unique approach for training. His trainings are innovative, interactive, and collaborative. Supports theory with real-life agile transformation case studies and examples.
                    </li>
                        <li className="m-0 text-sm" style={{lineHeight:'32px'}}>
                            Some of my recent testimonials can be read at <a href="https://www.booyah.training" target="_blank">https://www.booyah.training</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Cta split />
        </section >
    );
}

export default KnowYourTrainer;