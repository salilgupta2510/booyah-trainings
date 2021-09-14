import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const AboutCoach = ({
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
        title: 'Agile Coach & Trainer',
        paragraph: ''
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={splitClasses}>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <p className="m-0">
                                    Meet Vikas, a travel enthusiast, and an Agile Leader. He believes that travel sharpens your skills to handle real-life scenarios with greater agility. An innovative and inventive thinker, Agile Coach, and Trainer.
                                </p>
                                <p className="m-0" style={{ marginTop: 20 }}>
                                    A motivated individual who creates the sPaRk in any training class. He has decades of experience in Agile Transformation. He has worked with teams iNSIDE Out and made their transformation journey – a sUccess
                                </p>
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" style={{ marginTop: 30 }}>
                                    <a style={{ color: '#5658dd' }} href="mailto: vikas@booyah.training" target="_blank">
                                        Write To Him
                                </a>
                                </div>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={require('./../../assets/images/Coach.jpeg')}
                                    alt="Features split 01"
                                    width={528}
                                    height={396} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

AboutCoach.propTypes = propTypes;
AboutCoach.defaultProps = defaultProps;

export default AboutCoach;