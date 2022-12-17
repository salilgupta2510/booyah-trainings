import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../../components/elements/ButtonGroup';
import Button from '../../components/elements/Button';
import Cta from '../../components/sections/Cta';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';


// eslint-disable-next-line
const propTypes = {
    ...SectionProps.types
}
// eslint-disable-next-line
const defaultProps = {
    ...SectionProps.defaults
}
const KSD = ({
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
                        src={require('./../../assets/images/KSDHeader.png')}
                        />
                    </div>  
                    <div  className="hero-content" style={{marginTop:30}}>
<div className='col-lg-9' style={{float:'left'}}>
                <ButtonGroup>
                    <Button tag="a" color="white" fo wideMobile href="" style={{ borderRadius: 7}} className="btn-lg">
                      <Link to="/calendar" style={{ fontSize: 14, color: '#6163ff' }} >Find A KSD Class</Link>
                    </Button>
                    <Button tag="a" color="white" wideMobile href="" style={{ borderRadius: 7}} className="btn-lg">
                    <a href="/KSDFlyer.pdf" download style={{ fontSize: 14, color: '#6163ff' }}>Download KSD Flyer</a>
                    </Button>
                    <Button tag="a" color="white" wideMobile href="" style={{ borderRadius: 7}} className="btn-lg">
                      <Link to="/queryForm" style={{ fontSize: 14, color: '#6163ff' }} >Ques? Contact Us</Link>
                    </Button>
                    <Button tag="a" color="white" wideMobile href="" style={{ borderRadius: 7}} className="btn-lg">
                      <Link to="/KSI" style={{ fontSize: 14, color: '#6163ff' }} >Explore KSI</Link>
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
<h2  style={{textAlign:'left'}}>
            KMP-I (Kanban System Design)
            </h2>

            <div style={{ marginRight: '20%', float:'left' }}>
            <div className="features-tiles-item-content"  style={{ textAlign: 'left', marginBottom: 80 }}>
                    <a href="/ExploreKSD.docx" download style={{ fontSize: 16, color: '#6163ff', marginLeft:0, textDecoration:'underline' }}>Sample KSD Certificate</a>
            
                        <p className="text-sm" style={{marginTop:20}}>
                        This course, known as Kanban Management Professional 1 (KMP I), is the first of two courses towards the Kanban Management Professional (KMP) credential. KMP I is the prerequisite to KMP II. By completing both KMP I and KMP II, participants can achieve the KMP credential with the Lean Kanban University®.
                    </p>
                </div>

                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Learning objectives:
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                        Learn the core of Kanban practices to design and evolve a Kanban system.
                    </li>
                        <li className="m-0 text-sm">
                        Design a Kanban system (or improve an existing system) for optimal flow and faster delivery.
                    </li>
                        <li className="m-0 text-sm">
                        Learn the fundamentals of the Kanban Method
                    </li>
                        <li className="m-0 text-sm">
                        Experience Kanban with a simulation game and hands-on exercises to design a Kanban board.
                    </li>
                        <li className="m-0 text-sm">
                        Learn and use STATIK (Systems Thinking Approach to Introducing Kanban) to design your Kanban system.
                    </li>
                        <li className="m-0 text-sm">
                        Visual board design and ticket design.
                    </li>
                    <li className="m-0 text-sm">
                        Deal with shifting priorities
                    </li>
                    <li className="m-0 text-sm">
                        Deal with interruptions in work
                    </li>
                    </ul>
                </div>
                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <h4 className="mt-0 mb-8">
                        Benefits
                    </h4>
                    <ul>
                        <li className="m-0 text-sm">
                        Become faster and more responsive, with better risk management and governance.
                    </li>
                        <li className="m-0 text-sm">
                        Learn the alternative approach to agility.
                    </li>
                        <li className="m-0 text-sm">
                        Career growth.
                    </li>
                    </ul>
                </div>
                
                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 40 }}>
                <h4 className="mt-0 mb-8">
                        Course Contents
                    </h4>
                    <h5>KSD course consists of 4 modules.</h5>
                    <table class="table" style={{color:'#9ca9b3', borderColor:'white', borderWidth:3, border:'block'}}>
  <thead>
    <tr>
      <th scope="col" style={{color:'#eceded'}}>Module 1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Experience flow and Kanban through an online simulation game.</td>
    </tr>
    <tr>
      <td>Understand how to plot Cumulative Flow Diagram, Control Chart and Lead time.</td>
    </tr>
    <tr>
      <td>Real-time experience of managing variations in demand, handling capacity and managing priorities.</td>
    </tr>
    <tr>
      <td>Play online simulation game using MURAL Boards</td>
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
    <td>Learn Kanban method.</td>
    </tr>
    <tr>
    <td>Learn six general practices of Kanban</td>
    </tr>
    <tr>
    <td>Learn two Kanban principles</td>
    </tr>
    <tr>
      <td>Understand how to define a service and follow a service – oriented approach</td>
    </tr>
    <tr>
      <td>Understand commitment points</td>
    </tr>
    <tr>
      <td>Learn core Kanban metrics and charts</td>
    </tr>
    <tr>
      <td>Learn four classes of service and how they differ from work types</td>
    </tr>
   
  </tbody>
</table>
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
      <td>Experience flow and Kanban through an online simulation game.	Learn Kanban method. Learn STATIK (Systems Thinking Approach to Introducing Kanban)	Design a Kanban System</td>
    </tr>
    <tr>
      <td>Apply STATIK using Microsoft XIT Case Study</td>
    </tr>
    <tr>
      <td>Apply real-life case studies through 8 embedded group exercises</td>
    </tr>
   
  </tbody>
</table>
                </div>
                <div className="features-tiles-item-content" style={{ textAlign: 'left', marginBottom: 40 }}>
                    <table class="table" style={{color:'#9ca9b3'}}>
  <thead>
    <tr>
      <th scope="col" style={{color:'#eceded'}}>Module 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Design a Kanban System</td>
    </tr>
    <tr>
      <td>Learn Visual Board Designs</td>
    </tr>
    <tr>
      <td>Learn Ticket Designs</td>
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

export default KSD;