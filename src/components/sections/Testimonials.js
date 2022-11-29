import React, { useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { TestimonialService } from '../../services/testimonialService';
import TestimonialStore from '../../store/testimonialStore';

// eslint-disable-next-line
const propTypes = {
    ...SectionProps.types
}
// eslint-disable-next-line
const defaultProps = {
    ...SectionProps.defaults
}
const Testimonials = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
    const setTestimonialData = TestimonialStore((state) => state.setTestimonialData);
    const testimonialData = TestimonialStore((state) => state.testimonialData);

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

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        return TestimonialService.GetTestimonialData(6)
            .then((response) => {
                console.log("Received response ", response);
                setTestimonialData(response);
            })
    }

    const rating = (currentRating) => {
        let remainingRating = 5 - currentRating;
        currentRating = currentRating > 5 ? 5 : currentRating;
        let result = [];
        for (let index = 0; index < currentRating; index++) {
            result.push("Y")
        }
        for (let index = 0; index < remainingRating; index++) {
            result.push("N")
        }
        return (
            <>
                {result.map((value, index) => {
                    return value == 'Y' ? <span className='fa fa-star checked'></span> : <span className='fa fa-star'></span>

                })}
            </>
        );
    }

    const renderTestimonialTile = (testimonialData) => {
        return (
            <div style={{ padding: 0, marginRight: 10, width: '30%', marginBottom: 10 }}>
                <div className="tiles-item-inner" style={{ backgroundColor: 'rgb(39, 51, 69)', color: '#eceded', borderRadius: 5, marginRight: 6 }}>
                    <span style={{ textAlign: "left", color: "#eceded", fontFamily: "Arial Ancient Runes serif", fontWeight: "bold" }}>Trainer Rating: {rating(testimonialData.trainerRating)}</span>
                    <span style={{ textAlign: "left", color: "#eceded", fontFamily: "Arial Ancient Runes serif", fontWeight: "bold" }}>Content Rating: {rating(testimonialData.contentRating)}</span>
                    <p className="m-0 text-sm" style={{ textAlign: "left", color: "#eceded", fontFamily: "Arial Ancient Runes serif" }}>
                        {testimonialData.like}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <section
            {...props}
            className='container'
            style={{ paddingTop: 10, width: '89%', margin: 'auto', borderWidth: 1, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20 }}
        >
            <div className={innerClasses}>
                <h2 style={{ textAlign: "left", marginTop: 0 }}>Testimonial</h2>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
                    {typeof testimonialData !== "string" && testimonialData.length > 0 &&
                        testimonialData.map(item => (
                            renderTestimonialTile(item)
                        ))
                    }
                </div>
            </div>
        </section >
    );
}

export default Testimonials;