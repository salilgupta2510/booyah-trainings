import React, { useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { TestimonialService } from '../../services/testimonialService';
import TestimonialStore from '../../store/testimonialStore';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';

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
    countToFetch,
    showHeader,
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
        return TestimonialService.GetTestimonialData(countToFetch)
            .then((response) => {
                setTestimonialData(response);
            })
    }

    const rating = (currentRating, leftMargin) => {
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
            <span style={{marginLeft:leftMargin}}>
                {result.map((value, index) => {
                    return value == 'Y' ? <span className='fa fa-star checked' style={{paddingLeft:1}}></span> : <span className='fa fa-star' style={{paddingLeft:1}}></span>

                })}
            </span>
        );
    }

    const renderTestimonialTile = (testimonialData) => {
        return (
            <div style={{ padding: 0, marginRight: 10, width: '32%', marginBottom: 10 }}>
                <div className="tiles-item-inner" style={{ backgroundColor: 'rgb(39, 51, 69)', color: '#eceded', borderRadius: 5, marginRight: 6 }}>
                    <span style={{ textAlign: "left", color: "#eceded", fontWeight: "bold",fontFamily: "Arial, Ancient Runes, serif", fontSize:17 }}>Trainer Rating: {rating(testimonialData.trainerRating,9)}</span>
                    <span style={{ textAlign: "left", color: "#eceded", fontFamily: "Arial, Ancient Runes, serif", fontWeight: "bold" , fontSize:17}}>Content Rating: {rating(testimonialData.contentRating,2)}</span>
                    <br/>
                    <p className="m-0 text-sm" style={{ textAlign: "left", color: "#eceded", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Noto Sans,Liberation Sans,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji" }}>
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
               {showHeader && <h2 style={{ textAlign: "left", marginTop: 0 }}>Testimonials</h2>}
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
                    {typeof testimonialData !== "string" && testimonialData.length > 0 &&
                        testimonialData.map(item => (
                            renderTestimonialTile(item)
                        ))
                    }
                </div>
            </div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
                <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%'}}>
                      <Link to="/Testimonial" style={{ fontSize: 14, color: '#6163ff' }} >Read More Testimonials Here</Link>
                      {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSD/KMP-1</a> */}
                    </Button>
                </div>
        </section>
    );
}

export default Testimonials;