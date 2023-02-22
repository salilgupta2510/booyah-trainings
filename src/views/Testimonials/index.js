import React, {useEffect} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BrowserView, MobileView } from 'react-device-detect';
import Testimonials from '../../components/sections/Testimonials';
import { useLocation} from 'react-router-dom';



const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {


  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.scrollTo(0,0)
  }, [routePath]);

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Testimonials',
    paragraph: ''
  };

  const customStyles = {
    para: {
      fontWeight: 100,
      color: 'grey',
      fontSize: '1em',
      fontFamily: 'sans-serif',
      height: 250,
      overflowY: 'auto',
      // overflow: 'hidden'
    },
    designation: {
      // textTransform: 'uppercase',
      marginTop: 0,
      paddingTop: 0,
      fontWeight: 500,
      color: 'darkgrey',
      fontSize: '1.2em',
      fontStyle: 'italic'
    },
    name: {
      color: '#ffffff',
      letterSpacing: 0.2,
      marginBottom: 4,
      fontWeight: 600,
      // textTransform: 'uppercase',
      fontSize: '1.4em',
    },
    container: {
      // background: "grey",
      marginTop: '-6%',
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '6%',
      paddingBottom: '5%',
      paddingLeft: '5%',
      paddingRight: '5%',
      height: '50%'
    }
  }
  

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ paddingTop: 0 }}
    >
      <div className="container">
        <h3 style={{ textAlign: 'center' }}>WE LOVE TO GET TRAINED AT BOOYAH</h3>
                      <Testimonials  invertMobile imageFill className="illustration-section-02" showHeader={false} countToFetch={0}/> 
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;

