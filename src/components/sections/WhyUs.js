import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

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
            <div className="container">
                <div className={innerClasses} style={{paddingTop: 20}}>
                    <h2>{sectionHeader.title}</h2>
                    <div className={splitClasses}>
                        <div className="split-item" style={{paddingBottom: 0}}>
                            <div className="split-item-content center-content-mobile" >
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet. At explicabo dolor eum accusantium tempora At vero consectetur et iure inventore aut dolore excepturi et optio officia eum odit tempore. Et quia voluptas ut consequatur laudantium aut sunt unde est ratione odio non quam dolores
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
                    </div>
                    {/* Section 2 */}
                    <div className={splitClasses}>
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
                                    Lorem ipsum dolor sit amet. At explicabo dolor eum accusantium tempora At vero consectetur et iure inventore aut dolore excepturi et optio officia eum odit tempore. Et quia voluptas ut consequatur laudantium aut sunt unde est ratione odio non quam dolores
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Section 3 */}
                    <div className={splitClasses}>
                        <div className="split-item" style={{paddingBottom: 0}}>
                            <div className="split-item-content center-content-mobile" >
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet. At explicabo dolor eum accusantium tempora At vero consectetur et iure inventore aut dolore excepturi et optio officia eum odit tempore. Et quia voluptas ut consequatur laudantium aut sunt unde est ratione odio non quam dolores
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
                    </div>
                </div>
            </div>
        </section>
    );
}

WhyUs.propTypes = propTypes;
WhyUs.defaultProps = defaultProps;

export default WhyUs;