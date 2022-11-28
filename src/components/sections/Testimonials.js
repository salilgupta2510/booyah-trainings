import React,{ useEffect } from 'react';
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
        TestimonialService.GetTestimonialData(6)
            .then((response) => {
                console.log("Received response ", response);
                setTestimonialData(response);
            })
    }, [])

    const rating = (currentRating) => {
        let remainingRating = 5-currentRating;
        currentRating = currentRating > 5 ? 5 : currentRating;
        let result = [];
        for (let index = 0; index < currentRating; index++) {
           result.push("Y")
        }
        for (let index = 0; index < remainingRating; index++) {
            result.push("N")
         }
        return(
            <>
            {result.map((value, index) => {
                return value == 'Y' ? <span className='fa fa-star checked'></span> : <span className='fa fa-star'></span>
                
            })}
            </>
        );
    }

    const renderTestimonialTile = (testimonialData) => {
        return (
            <div className="reveal-from-right" data-reveal-delay={200} style={{ padding: 0, width:470, marginBottom:6 }}>
                <div className="tiles-item-inner" style={{ backgroundColor: 'rgb(236, 237, 237)', color: 'black', borderRadius:5, marginRight:6 }}>
                    <span style={{textAlign:"left", color:"rgb(14, 16, 18)", fontFamily:"Arial Ancient Runes serif",fontWeight:"bold"}}>Trainer Rating: {rating(testimonialData.trainerRating)}</span>
                    <span style={{textAlign:"left", color:"rgb(14, 16, 18)", fontFamily:"Arial Ancient Runes serif",fontWeight:"bold"}}>Content Rating: {rating(testimonialData.contentRating)}</span>
                    <p className="m-0 text-sm" style={{textAlign:"left", color:"rgb(14, 16, 18)", fontFamily:"Arial Ancient Runes serif"}}>
                        {testimonialData.like}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <section
            {...props}
            className={outerClasses}
            style={{ paddingTop: 0 }}
        >
            <div className={innerClasses}>
                
            

            <div className ="section-inner reveal-from-bottom" data-reveal-delay="400" style={{ paddingTop: 10, width: '80%', margin: 'auto' }}>
            <h2 style={{textAlign:"left"}}>Testimonial</h2>
                <div className='tiles-wrap' style={{justifyContent:'left'}} >
                    {typeof testimonialData !== "string" && testimonialData.length>0 &&
                     testimonialData.map(item => (
                        renderTestimonialTile(item)
                    ))
                    }
                </div>
            </div>
          </div>
        </section >
    );
}

export default Testimonials;