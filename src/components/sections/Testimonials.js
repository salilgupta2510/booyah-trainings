import React, { useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { TestimonialService } from '../../services/testimonialService';
import TestimonialStore from '../../store/testimonialStore';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

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
                    <span style={{ textAlign: "left", color: "#eceded", fontWeight: "bold",fontFamily: "Arial, Ancient Runes, serif", fontSize:16 }}>Trainer Rating: {rating(testimonialData.trainerRating,9)}</span>
                    <span style={{ textAlign: "left", color: "#eceded", fontFamily: "Arial, Ancient Runes, serif", fontWeight: "bold" , fontSize:16}}>Content Rating: {rating(testimonialData.contentRating,2)}</span>
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
         <BrowserView>
         <div className={innerClasses}>
               {showHeader && <h3 style={{ textAlign: "left", marginTop: 0 }}>Testimonials</h3>}
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
                    {typeof testimonialData !== "string" && testimonialData.length > 0 &&
                        testimonialData.map(item => (
                            renderTestimonialTile(item)
                        ))
                    }
                </div>
            </div>
                {showHeader &&  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
               <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', backgroundColor:'#0e1012'}}>
                      <Link to="/Testimonial" style={{ fontSize: 22, color: 'white' }} >Read More</Link>
                    </Button>
                </div>
               }
         </BrowserView>
         <MobileView>
            <>
            {showHeader && <h3 style={{ textAlign: "left", marginTop: 0 }}>Testimonials</h3>}

            {typeof testimonialData !== "string" && testimonialData.length > 0 &&
                        testimonialData.map((parentItem) => {
            return (
                <>

              <div style={{ display: 'flex', flexDirection: 'row' }}>

                <div className="tiles-item reveal-from-right" style={{ marginBottom: 50 }} data-reveal-delay="200">
                  <div className="tiles-item-inner" style={{paddingTop:20}}>
                    <span style={{ textAlign: "left", color: "#eceded", fontWeight: "bold",fontFamily: "Arial, Ancient Runes, serif", fontSize:13 }}>Trainer Rating: {rating(parentItem.trainerRating,9)}</span>
                    <span style={{ textAlign: "left", color: "#eceded", fontFamily: "Arial, Ancient Runes, serif", fontWeight: "bold" , fontSize:13}}>Content Rating: {rating(parentItem.contentRating,2)}</span>
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0" style={{ minHeight: 150, maxHeight: 350, overflowY: "auto" }}>
                        {parentItem.like}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
                </>
            )
          })}
            {showHeader &&  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
               <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', backgroundColor:'#0e1012'}}>
                      <Link to="/Testimonial" style={{ fontSize: 22, color: 'white' }} >Read More</Link>
                    </Button>
                </div>
               }
            </>

         </MobileView>
            
        </section>
    );
}

export default Testimonials;