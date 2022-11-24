import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../../elements/Image';
import SectionHeader from './SectionHeader';
import FeaturesTiles from '../FeaturesTiles';

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
        <div className={innerClasses} style={{ padding: 30}}>
          <div className={splitClasses}>
            <div className="split-item" style={{padding: 0, marginTop: 40}}>
              <div className={'split-item-content center-content-mobile center-content'}>
                <Image
                  src={require('../../../assets/images/kmp_badge.png')}
                  alt="Features split 01"
                  style={{ height: 125, width: 250, marginBottom: 10 }}
                />
                <p className="m-0" style={{fontSize: 16}}>
                  {data.paragraph}
                </p>
              </div>
              <div className="split-item-content center-content-mobile" >
                <FeaturesTiles />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

InfoSection.propTypes = propTypes;
InfoSection.defaultProps = defaultProps;

export default InfoSection;