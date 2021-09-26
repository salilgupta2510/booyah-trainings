import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from '../../components/sections/partials/SectionHeader';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    >
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Testimonials</h2>
        {/* <div className={tilesClasses}> */}

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={8000}
        >
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Salil Gupta</h3>
              <h4 style={customStyles.designation}>Nagarro</h4>
              <p style={customStyles.para}>
                Thanks, Agile Training by Booyah for giving 4 days of in-depth training focussing on Kanban Practices, Principles, System Thinking, Lead Time along with very enthralling activities to make learning Kanban very easy. I strongly recommend Booyah Training.
            </p>
            </div>
          </div>
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Deepak Chaudhary</h3>
              <h4 style={customStyles.designation}>Wipro</h4>
              <p style={customStyles.para}>
                Thanks for the wonderful class.
                I am very much satisfied with KSD class, you make the concepts very clear with the help of Mural board and group activities. Apart from knowledge sharing you also make the session very lively, entertaining and sharing the practical experience. Initially I thought of doing only KSD class but now I change my mind and will do KSI class also.
            </p>
            </div>
          </div>
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Bijendra Nayak</h3>
              <h4 style={customStyles.designation}>Anonymous</h4>
              <p style={customStyles.para}>
                Thank you Vikas for providing a great Kanban training session. I liked the case studies, practical simulation games played to understand the flow efficiency and real-life Kanban Design group activities. The 2-day training session helped me to understand the fundamentals to design a great Kanban System. I highly recommend Booyah Training.
            </p>
            </div>
          </div>
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Piyush Jethwa</h3>
              <h4 style={customStyles.designation}>Securly</h4>
              <p style={customStyles.para}>
                It was great overall for me because I am new to Kanban. I have got lot of clarity on how it works. The flow of the training was quite good. What I liked the MURAL Board exercises that we did. Overall, the session was interactive and that helped to understand the concept clearly. I have attended a lot of other trainings - those trainings were one-way training. This one was delivered very nicely and in an understandable format. The references that you have shared for JIRA usage for Kanban will guide me to explore it further.
            </p>
            </div>
          </div>
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Mayank Saxena</h3>
              <h4 style={customStyles.designation}>Tetrapak</h4>
              <p style={customStyles.para}>
                Firstly, thanks a lot for the knowledge and time. I have done many trainings and certifications before, mostly they had been from the people I knew and met earlier.
                When I selected this training, I was sceptical as I did not know you. But honestly, I really liked the whole workshop. I am going to recommend it.
                There is a general mindset that we know Kanban but after the training I realised that there is a lot to learn.
                Also, that you used all new collaboration tools like MURAL, Kahoot.
                The way you explained the case study, it was an eye opener.
                Also, I understood various eye-opening concepts. It’s nice to be part of this training. Inclusion of case studies is not done in other trainings.
                You included the case studies and explained them end-to-end, and they echoed the real-life challenges.
                Your own case studies were also great and made concepts much clearer. I like the way that you distributed the workshop across the weeks,
                it gave us time to imbibe the knowledge that you imparted.
                 </p>
            </div>
          </div>
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Abhishek Vatsyayan</h3>
              <h4 style={customStyles.designation}>NTT</h4>
              <p style={customStyles.para}>
                The class was more than the PPT. Creative MURAL boards were used to explain the concepts.
            </p>
            </div>
          </div>
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Mrinal Singh</h3>
              <h4 style={customStyles.designation}>HCL</h4>
              <p style={customStyles.para}>
                Informative, with examples and exercises. Helped to clear concepts.
            </p>
            </div>
          </div>
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Anonymous</h3>
              <h4 style={customStyles.designation}>Anonymous</h4>
              <p style={customStyles.para}>
                Just finished the two - day Kanban System Design training by Booyah Trainer Vikas. It was an amazing experience learning KSD through informative, interactive, and fun-filled sessions.
            </p>
            </div>
          </div>
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Vinay Chauhan</h3>
              <h4 style={customStyles.designation}>NTT</h4>
              <p style={customStyles.para}>
                The concept has been cleared and now I am more focussed on the next steps. I am very confident with the terminology. Although, I had the background of using Kanban, but this training has enhanced my knowledge to a great extent, and I am able to relate the real-life challenges with the theory. The JIRA Kanban screenshots that you shared will be helpful.
            </p>
            </div>
          </div>
          <div>
            <div style={customStyles.container}>
              <h3 style={customStyles.name}>Mateen Abdul</h3>
              <h4 style={customStyles.designation}>Grassroots Energy</h4>
              <p style={customStyles.para}>
                It was very Hands-On.
            </p>
            </div>
          </div>

          {/* <div className="tiles-item reveal-from-right" style={{ margin: 'auto' }} data-reveal-delay="200">
                <div className="tiles-item-inner" style={{ width: 400 }}>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Thanks, Agile Training by Booyah for giving 4 days of in-depth training focussing on Kanban Practices, Principles, System Thinking, Lead Time along with very enthralling activities to make learning Kanban very easy. I strongly recommend Booyah Training.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Salil Gupta</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">Nagarro, India</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" style={{ margin: 'auto' }}>
                <div className="tiles-item-inner" style={{ width: 400 }}>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Thanks for the wonderful class.
                      I am very much satisfied with KSD class, you make the concepts very clear with the help of Mural board and group activities. Apart from knowledge sharing you also make the session very lively, entertaining and sharing the practical experience. Initially I thought of doing only KSD class but now I change my mind and will do KSI class also.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Deepak Chaudhary</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">Publicis Sapient</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left" data-reveal-delay="200" style={{ margin: 'auto' }}>
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content" style={{ width: 400 }}>
                    <p className="text-sm mb-0">
                      — Thank you Vikas for providing a great Kanban Training Session. I like the case studies, practicle simulations, games played to understand the flow efficiency and real life Kanban design group activities. The 2 day training session helped me to understand the fundamentals to design a great Kanban System. I highly recommend Booyah Training.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Anonymous</span>
                  </div>
                </div>
              </div> */}
        </Carousel>
        {/* </div> */}
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;

