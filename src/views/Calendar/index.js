import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import FooterSocial from '../../components/layout/partials/FooterSocial';

const Calendar = ({
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
            style={{ paddingTop: 0, marginTop: 150 }}
        >
            <div className="container">
                <div className={innerClasses} style={{ paddingBottom: 10 }}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Under Construction !!
            </h1>
                        <FooterSocial label={"Mean while get in touch with us here"} showPhoneNumber={false} />
                    </div>
                </div>
            </div>
            {/* <Cta split /> */}
        </section >
    );
}

export default Calendar;