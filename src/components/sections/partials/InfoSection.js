import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../../elements/Image';
import SectionHeader from './SectionHeader';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const InfoSection = ({
  className,
  data,
  children,
  tag,
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

  const classes = classNames(
    'section-header',
    className
  );
  
  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
);

const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
);
const sectionHeader = {
    title: 'Agile Coach & Trainer',
    paragraph: ''
};

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) &&
        <div
          {...props}
          className={classes}
        >
          <div className="container-xs">
          <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

                    <div className={splitClasses}>

                        <div className="split-item">
                        {/* <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
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
                                    src={require('../../../assets/images/Coach.jpeg')}
                                    alt="Features split 01"
                                    width={528}
                                    height={396} />
                            </div> */}
                                    <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                 <Image style={{height:60, width:60, alignSelf:"left"}}
                                    src={require('../../../assets/images/kmp_badge.png')}
                                    alt="Features split 01"
                                    width={60}
                                    height={60} 
                                    />
                            </div>
                            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                                <p className="m-0">
                                {data.paragraph}
                                                   </p>
                               
                            </div>
                         
                       
                        </div>
                    </div>
                </div>
            
           
          </div>
        </div>
      }
    </>
  );
}

InfoSection.propTypes = propTypes;
InfoSection.defaultProps = defaultProps;

export default InfoSection;