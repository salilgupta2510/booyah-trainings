import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const WhyUs = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {

    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );

    const sectionHeader = {
        title: 'Why should you train from Vikas?',
        paragraph: ''
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container" style={{ marginTop: 20, borderWidth: 1, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20, marginBottom:20}}>
                <div className={innerClasses} style={{paddingTop: 20}}>
                    <h2 style={{marginTop: 0}}>{sectionHeader.title}</h2>
                    <div className={splitClasses}>
                        <div className="split-item" style={{paddingBottom: 0}}>
                            {/* <div className="split-item-content center-content-mobile" > */}
                            <ul>
                                <li>
                                Vikas practices Kanban in real-world scenarios and enables business agility. He is not just a trainer but brings practical implementation scenarios during the training.
                                </li>
                                <li>
                                Vikas follows an Inside-Out Approach to training and follows an inquiry-practice-concepts approach to train.
                                </li>
                                <li>
                                Train with Vikas and get individual attention to your questions. No question gets unanswered during his training.
                                </li>
                                <li>
                                Collaboration and learning from each other are other vital elements during the training. Through innovative icebreakers, Vikas helps build collaboration and contribution during the training.
                                </li>
                                <li>
                                His Kahoot quizzes help you recapitulate the concepts so that you remember the key elements of Kanban.
                                </li>
                                <li>
                                Vikas uses MURAL Board and Excel Sheets to explain complicated concepts like Lead Time Distribution, Cumulative Flow Diagrams, Little's Law, Scaling Kanban, Dependency Management, Risk Management to trim the tail, Kanban Board Designs, and many others.
                                </li>
                                <li>
                                Vikas has experience working on tools like JIRA, Azure DevOps, Kanbanize, Tally, and others. You can get your tool-specific questions answered by him.
                                </li>
                                <li>
                                You get one "re-training attempt" free when you train with Vikas. You can attend any of his future classes for FREE.
                                </li>
                                <li>
                                Also, you get a one-year email/chat consultancy FREE. Vikas's primary focus is that you succeed and grow in your career when you get back to work after attaining the KMP credential.
                                </li>
                                Still, have doubts? 
                                <Link to="/queryForm" style={{ fontSize: 20, color: '#6163ff' }}> Talk to him today</Link>
                                
                            </ul>
                                {/* <p className="m-0">
                                You get one re-training attempt Free of Cost within a year of training.
You get one-year consultation Free of Cost within a year of training.
You get access to his innovative MURAL Board designs.
Vikas pays individual attention to each training participant and ensures that you understand Kanban concepts to the core.
                                </p> */}
                            {/* </div> */}
                            {/* <div className={
                                classNames(
                                    'split-item-image center-content-mobile',
                                    imageFill && 'split-item-image-fill'
                                )}
                            >
                                <Image
                                    src={require('./../../assets/images/WhyUs.png')}
                                    alt="Features split 01"
                                    width={528}
                                    height={396} />
                            </div> */}
                        </div>
                    </div>
                    {/* Section 2 */}
                    {/* <div className={splitClasses}>
                        <div className="split-item" style={{paddingBottom: 0}}>
                            <div className="split-item-content center-content-mobile" >
                                <Image
                                    src={require('./../../assets/images/WhyUs.png')}
                                    alt="Features split 01"
                                    width={528}
                                    height={396} />
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile',
                                    imageFill && 'split-item-image-fill'
                                )}
                            >
                                <p className="m-0">
                                Vikas has converted this PowerPoint training to collaborative and interactive training. He follows an Inside Out Approach to training. He uses MURAL Boards for Group Exercises, Kahoot Quizzes for recapitulations, YouTube videos to explain concepts otherwise difficult to understand, and Ice Breakers to enlighten you. Vikas supports the Kanban concepts with successful case studies from the industry.
                                </p>
                            </div>
                        </div>
                    </div> */}
                    {/* Section 3 */}
                    {/* <div className={splitClasses}>
                        <div className="split-item" style={{paddingBottom: 0}}>
                            <div className="split-item-content center-content-mobile" >
                                <p className="m-0">
                                Vikas has practical knowledge of implementing Kanban using tools like JIRA, Kanbanize, and Azure DevOps.  
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile',
                                    imageFill && 'split-item-image-fill'
                                )}
                            >
                                <Image
                                    src={require('./../../assets/images/WhyUs.png')}
                                    alt="Features split 01"
                                    width={528}
                                    height={396} />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

WhyUs.propTypes = propTypes;
WhyUs.defaultProps = defaultProps;

export default WhyUs;