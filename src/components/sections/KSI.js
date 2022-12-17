import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../../components/elements/ButtonGroup';
import Button from '../../components/elements/Button';
import Cta from '../../components/sections/Cta';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';
import { keysIn } from 'lodash';


// eslint-disable-next-line
const propTypes = {
    ...SectionProps.types
}
// eslint-disable-next-line
const defaultProps = {
    ...SectionProps.defaults
}
const KSI = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

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

    const renderTile = (text, color) => {
        return (
            <div className="tiles-item" style={{ padding: 0 }}>
                <div className="tiles-item-inner" style={{ backgroundColor: `${color}`, color: 'black' }}>
                    <p className="m-0 text-sm">
                        {text}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <section
            {...props}
            className={outerClasses}
            style={{ paddingTop: 0, marginTop: 150 }}
        >
            <div className="container">
                <div className={innerClasses} style={{ paddingBottom: 10 }}>
                    <div className="hero-content">
                        <Image
                        src={require('./../../assets/images/KSIHeader.png')}
                        />
                    </div>  
                    <div  className="hero-content" style={{marginTop:30}}>
<div className='col-lg-9' style={{float:'left'}}>
                <ButtonGroup>
                    <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7}} className="btn-lg">
                      <Link to="/calendar" style={{ fontSize: 14, color: '#6163ff' }}>Find A KSI Class</Link>
                    </Button>
                    <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7}} className="btn-lg">
                    <a href="/KSIFlyer.pdf" download style={{ fontSize: 14, color: '#6163ff' }}>Download KSI Flyer</a>
                    </Button>
                    <Button tag="a" color="white" wideMobile href="" style={{ borderRadius: 7}} className="btn-lg">
                      <Link to="/queryForm" style={{ fontSize: 14, color: '#6163ff' }} >Ques? Contact Us</Link>
                    </Button>
                    <Button tag="a" color="white" wideMobile href="" style={{ borderRadius: 7}} className="btn-lg">
                      <Link to="/KSD" style={{ fontSize: 14, color: '#6163ff' }} >Explore KSD</Link>
                    </Button>
                    
                  </ButtonGroup>
                 
</div>
                  <div style={{float:'right'}} className='d-none d-lg-block'>
                  <Image
                        src={require('./../../assets/images/KanbanFlyer.png')}
                        width={220}
                        />
                        </div>
                    </div>

                    <div  className="hero-content" style={{marginTop:30}}>
<div style={{width:'75%', float:'left', marginTop:20}}>
<h2 style={{textAlign:'left'}}>
                KMP-II (Kanban Systems Improvement)
            </h2>
            <div style={{ marginRight: '20%', float:'left' }}>
            <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 80 }}>
            <a href="/ExploreKSI.docx" download style={{ fontSize: 16, color: '#6163ff', marginLeft:0, textDecoration:'underline' }}>Sample KSI Certificate</a>
            
                        <p className="text-sm" style={{marginTop:20}}>
                        This training systematically builds upon the foundations established in the Kanban System Design (KMP 1) training. This course, known as Kanban Systems Improvement (KMP II), is the final course towards the Kanban Management Professional (KMP) credential.
Kanban Management Professional is an advanced level course that will help participants build on their existing knowledge of Kanban Method and will help them take their current Kanban implementation to the next level.

                    </p>
                </div>

                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Learning objectives:
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                        Managing Evolutionary Change
                    </li>
                        <li className="m-0 text-sm">
                        Dealing with Resistance to Change
                    </li>
                        <li className="m-0 text-sm">
                        Feedback Loops and Continuous Learning
                    </li>
                        <li className="m-0 text-sm">
                        Implementing and Scaling out Kanban
                    </li>
                        <li className="m-0 text-sm">
                        Balancing Demand and Capability
                    </li>
                        <li className="m-0 text-sm">
                        Optimizing Flow and Predictability
                    </li>
                    </ul>
                </div>
                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Benefits
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                        Implement continuous improvement for sustainable customer satisfaction.
                    </li>
                        <li className="m-0 text-sm">
                        Career growth.
                    </li>
                        <li className="m-0 text-sm">
                        Learn the alternative approach to agility.
                    </li>
                    </ul>
                </div>
                
                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 40 }}>
                <h4 className="mt-0 mb-8">
                        Course Contents
                    </h4>
                    <h5>KSI course consists of 4 modules.</h5>
                    <table class="table" style={{color:'#9ca9b3', borderColor:'white', borderWidth:3, border:'block'}}>
  <thead>
    <tr>
      <th scope="col" style={{color:'#eceded'}}>Module 1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Learn the motivation and appropriateness for the Kanban Method’s evolutionary change approach.</td>
    </tr>
    <tr>
      <td>Learn System 1 and System 2 thinking approach</td>
    </tr>
    <tr>
      <td>Learn the various levels of Maturity in Kanban (ML0 to ML4)</td>
    </tr>
    <tr>
      <td>Understand a typical ScrumBan / Proto-Kanban evolution based on the Posit Science case study </td>
    </tr>
    <tr>
      <td>Understand the various types of Kanban boards at each Maturity Level</td>
    </tr>
   
  </tbody>
</table>
                </div>

                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 40 }}>
                    <table class="table" style={{color:'#9ca9b3'}}>
  <thead>
    <tr>
      <th scope="col" style={{color:'#eceded'}}>Module 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Learn how Kanban method can be applied across the enterprise.</td>
    </tr>
    <tr>
      <td>Learn to see service through Kanban Lens</td>
    </tr>
    <tr>
      <td>Learn three scaling principles of Kanban</td>
    </tr>
    <tr>
      <td>Learn three scaling dimensions of Kanban</td>
    </tr>
    <tr>
      <td>Learn about upstream Kanban</td>
    </tr>
    <tr>
      <td>Learn about Kanban emerging roles</td>
    </tr>

  </tbody>
</table>
<br></br>
                </div>

                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 40 }}>
                    <table class="table" style={{color:'#9ca9b3'}}>
  <thead>
    <tr>
      <th scope="col" style={{color:'#eceded'}}>Module 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Learn the feedback loops from ML1 to ML4</td>
    </tr>
    <tr>
      <td>Learn to run some of the Kanban cadences</td>
    </tr>
  </tbody>
</table>
<br></br>
                </div>

                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 40 }}>
                    <table class="table" style={{color:'#9ca9b3'}}>
  <thead>
    <tr>
      <th scope="col" style={{color:'#eceded'}}>Module 4 and 5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Learn the strategies for improving capabilities</td>
    </tr>
    <tr>
      <td>Learn to identify demand patterns and shape the demand</td>
    </tr>
    <tr>
      <td>Understand Lead Time Distribution</td>
    </tr>
    <tr>
      <td>Learn to manage dependencies and remove delays</td>
    </tr>
    <tr>
      <td>Learn the different approaches to handle variations</td>
    </tr>
    <tr>
      <td>Learn to reveal and remove bottlenecks using theory of constraints</td>
    </tr>
    <tr>
      <td>Learn to bring evolutionary change in your organization</td>
    </tr>
   
  </tbody>
</table>
<br></br>

<h5>Become a Kanban Management Professional and get recognized in the Kanban University website.
Get access to private KMP-only forums for professional collaboration.
</h5>

                    
                </div>
            </div>
                 
</div>
                  
                    </div>
                    
                </div>
            </div>
           
           
        </section >
    );
}

export default KSI;