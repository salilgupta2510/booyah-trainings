import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import InfoSection from './partials/InfoSection';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Kanban Management Professional (KMP)',
    paragraph: 'This credential is granted upon the completion of two classes. Kanban System Design, which teaches the basics of Kanban, flow, and how to design a Kanban system. Kanban Systems Improvement, which teaches how to evolve, improve, and scale a Kanban system. KMPs should be able to design a Kanban system and evolve and scale it beyond the team.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      style={{paddingTop: 50}}
    >
      <div className="container ">
        <div className={innerClasses} style={{paddingBottom: 20}}>
          <div className={tilesClasses} style={{display: 'flex', justifyContent: 'space-around'}}>
            <div className="tiles-item" style={{borderRadius: 5, marginBottom: 10, padding: 20, height: 100}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h4 className="mt-0 mb-8" style={{fontSize: 18}}>
                    Kanban System Design
                    </h4>
                </div>
                <div className="features-tiles-item-content">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="">
                  <Link to="/queryForm" style={{fontSize: 14}} >Find KSD</Link>
                    {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSD/KMP-1</a> */}
                  </Button>
                  <Button tag="a" color="primary" wideMobile href="">
                  <Link to="/queryForm" style={{fontSize: 14}} >Explore KSD</Link>
                    {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSI/KMP-2</a> */}
                  </Button>
                </ButtonGroup>
                </div>
              </div>
            </div>
            <div className="tiles-item" style={{backgroundColor: '#eceded', borderRadius: 5, marginBottom: 20, padding: 20, height: 100}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h4 className="mt-0 mb-8" style={{color: '#0e1012', fontSize: 18}}>
                    Kanban Systems Improvement
                    </h4>
                </div>
                <div className="features-tiles-item-content">
                <ButtonGroup>
                  <Button tag="a" color="primary" fo wideMobile href="" size='1'>
                  <Link to="/queryForm" style={{fontSize: 14}} >Find KSI</Link>
                    {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSI/KMP-1</a> */}
                  </Button>
                  <Button tag="a" color="primary" wideMobile href="">
                  <Link to="/queryForm" style={{fontSize: 14}} >Explore KSI</Link>
                    {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSI/KMP-2</a> */}
                  </Button>
                </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;