import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import InfoSection from './partials/InfoSection';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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

  const history = useHistory();


  const routeToCalendar = () =>{ 
    history.push('/calendar');
    }

    const routeToKSI = () =>{ 
      history.push('/KSI');
    }

    const routeToKSD = () =>{ 
      history.push('/KSD');
    }

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
      style={{ paddingTop: 50 }}
    >
      <div className="container ">
        <div className={innerClasses} style={{ paddingBottom: 20 }}>
          <div className={tilesClasses} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div className="tiles-item" style={{
              backgroundColor: '#6163ff',
              borderRadius: 5,
              marginBottom: 20,
              padding: 20,
              height: 100,
              // boxShadow: '8px 8px 5px lightblue, 20px 20px 10px #273345'
            }}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <h4 className="mt-0 mb-8" style={{ fontSize: 18 }}>
                    Kanban Systems Design
                  </h4>
                </div>
                <div className="features-tiles-item-content">
                  <ButtonGroup>
                    <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 14, color: '#6163ff'}} onClick={routeToCalendar}>
                    Find KSD
                    </Button>
                    <Button tag="a" color="white" wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 14, color: '#6163ff' }} onClick={routeToKSD}>Explore KSD
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
            <div className="tiles-item" style={{
              backgroundColor: '#6163ff',
              borderRadius: 5,
              marginBottom: 20,
              padding: 20,
              height: 100,
              // boxShadow: '8px 8px 5px #eb622d, 20px 20px 10px #273345'
            }}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <h4 className="mt-0 mb-8" style={{ fontSize: 18 }}>
                    Kanban Systems Improvement
                  </h4>
                </div>
                <div className="features-tiles-item-content">
                  <ButtonGroup>
                  <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 14, color: '#6163ff'}} onClick={routeToCalendar}>Find KSI
                    </Button>
                    <Button tag="a" color="white" wideMobile href="" style={{ borderRadius: 7, width: '40%', fontSize: 14, color: '#6163ff' }} onClick={routeToKSI}>Explore KSI
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