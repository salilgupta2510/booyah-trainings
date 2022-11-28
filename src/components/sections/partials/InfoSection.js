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
      <div className="container" style={{borderWidth: 1, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20}}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Image
            src={require('../../../assets/images/kmp_badge.png')}
            alt="Features split 01"
            style={{ height: 125, width: 250, marginBottom: 10 }}
          />
          <div className="m-0" style={{ fontSize: 16 }}>
            {data.paragraph}
          </div>
        </div>
        <div className="center-content-mobile" >
          <FeaturesTiles />
        </div>
      </div>
    </section>
  );
}

InfoSection.propTypes = propTypes;
InfoSection.defaultProps = defaultProps;

export default InfoSection;