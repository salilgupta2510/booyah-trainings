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
    >
      <div className="container ">
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h4 className="mt-0 mb-8">
                    Kanban System Design
                    </h4>
                </div>
                <div className="features-tiles-item-content">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="">
                  <Link to="/queryForm" >Find KSD</Link>
                    {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSD/KMP-1</a> */}
                  </Button>
                  <Button tag="a" color="primary" wideMobile href="">
                  <Link to="/queryForm" >Explore KSD</Link>
                    {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSI/KMP-2</a> */}
                  </Button>
                </ButtonGroup>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h4 className="mt-0 mb-8">
                    Kanban Systems Improvement
                    </h4>
                </div>
                <div className="features-tiles-item-content">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="">
                  <Link to="/queryForm" >Find KSI</Link>
                    {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSD/KMP-1</a> */}
                  </Button>
                  <Button tag="a" color="primary" wideMobile href="">
                  <Link to="/queryForm" >Explore KSI</Link>
                    {/* <a href="mailto: vikas@booyah.training" target="_blank">REGISTER FOR KSI/KMP-2</a> */}
                  </Button>
                </ButtonGroup>
                </div>
              </div>
            </div>

            {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    KSI
                    </h4>
                  <p className="m-0 text-sm">
                    Kanban Systems Improvement – Manage and evolve a kanban initiative. Scale beyond the team level.
                    </p>
                </div>
              </div>
            </div> */}

            {/* <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;