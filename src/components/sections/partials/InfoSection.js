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
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 50, marginBottom: 50 }}>
          <div className="m-0" style={{ fontSize: 22, textAlign: 'center', color: '#ffffff' }}>
          <b style={{color:'#BF40BF'}}>Kanban Management Professional</b> credential is granted upon the completion of two classes. <b style={{color:'#BF40BF'}}>Kanban System Design</b>, which teaches the basics of Kanban, flow, and how to design a Kanban system. <b style={{color:'#BF40BF'}}>Kanban Systems Improvement</b>, which teaches how to evolve, improve, and scale a Kanban system. KMPs should be able to design a Kanban system and evolve and scale it beyond the team.
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