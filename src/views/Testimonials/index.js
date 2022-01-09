import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from '../../components/sections/partials/SectionHeader';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BrowserView, MobileView } from 'react-device-detect';

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
  const testimonialsMobileView = [
    {
      name: 'Rajat Agrawal',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Redhat',
      data: 'I really benefited through this entire training session. I did not know anything about Kanban before coming to this session, now I have good enough understanding of the concept. I can start implementing them and start improvising on it. You were very patient and answered all our questions and queries. It was really a great class and the kind of contribution that everyone did during the exercises, it made the class livelier. With this kind if interaction, all of us learned from each other.  '
    }, {
      name: 'Salil Gupta',
      image: require('../../assets/images/Salil.jpg'),
      company: 'Nagarro',
      data: 'Thanks, Agile Training by Booyah for giving 4 days of in-depth training focussing on Kanban Practices, Principles, System Thinking, Lead Time along with very enthralling activities to make learning Kanban very easy. I strongly recommend Booyah Training.'
    }, {
      name: 'Abhishek Vatsyayan',
      image: require('../../assets/images/Abhishek.jpeg'),
      company: 'NTT',
      data: 'The class was more than the PPT. Creative MURAL boards were used to explain the concepts.'
    }, {
      name: 'Atul Kumar Sinha',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Adobe',
      data: 'A wonderful piece of coaching and training. It was filled with examples and activities. Training was awesome, I enjoyed a lot. I was thoroughly engaged. I could correlate. We are already on the verge of ML4 and correlate the fitment of the theory to practice. MURAL board is something very interesting and interactive. I will also try to include this idea. Participation was awesome. '
    },
    {
      name: 'Deepak Chaudhary',
      image: require('../../assets/images/Deepak.jpeg'),
      company: 'Wipro',
      data: 'Thanks for the wonderful class. I am very much satisfied with KSD class, you make the concepts very clear with the help of Mural board and group activities. Apart from knowledge sharing you also make the session very lively, entertaining and sharing the practical experience.'
    }, {
      name: 'Dharthi Kashyap',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Ather Energy',
      data: 'I really enjoyed this class. I think it was very interactive, we had lot of exercises to do. We were not restricted to only one group and did exercises with everybody. A lot of ideas came out. It was a good way of learning. It was a great experience to do it together for 4 days. '
    },
    {
      name: 'Mrinal Singh',
      image: require('../../assets/images/Mrinal.png'),
      company: 'HCL',
      data: 'Informative, with examples and exercises. Helped to clear concepts.'
    }, {
      name: 'Mateen Abdul',
      image: require('../../assets/images/Mateen.png'),
      company: 'Grassroots Energy',
      data: 'It was very Hands-on. Just finished the two - day Kanban System Design training by Booyah Trainer Vikas. It was an amazing experience learning KSD through informative, interactive, and fun-filled sessions.'
    }, {
      name: 'Bijendra Nayak',
      image: require('../../assets/images/Bijendra.jpeg'),
      company: 'Anonymous',
      data: 'Thank you Vikas for providing a great Kanban training session. I liked the case studies, practical simulation games played to understand the flow efficiency and real-life Kanban Design group activities. The 2-day training session helped me to understand the fundamentals to design a great Kanban System. I highly recommend Booyah Training.'
    }, {
      name: 'Anonymous',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Anonymous',
      data: 'Just finished the two - day Kanban System Design training by Booyah Trainer Vikas. It was an amazing experience learning KSD through informative, interactive and fun-filled sessions.'
    },
    {
      name: 'Vinay Chauhan',
      image: require('../../assets/images/Vinay.jpeg'),
      company: 'NTT',
      data: 'The concept has been cleared and now I am more focussed on the next steps. I am very confident with the terminology. Although, I had the background of using Kanban, but this training has enhanced my knowledge to a great extent, and I am able to relate the real-life challenges with the theory. The JIRA Kanban screenshots that you shared will be helpful.'
    },
    {
      name: 'Piyush Jethwa',
      image: require('../../assets/images/Piyush.jpeg'),
      company: 'Securly',
      data: 'It was great overall for me because I am new to Kanban. I have got lot of clarity on how it works. What I liked the MURAL Board exercises that we did. Overall, the session was interactive and that helped to understand the concept clearly. This one was delivered very nicely and in an understandable format. The references that you have shared for JIRA usage for Kanban will guide me to explore it further.'
    },
    {
      name: 'Mayank Saxena',
      image: require('../../assets/images/Mayank.jpeg'),
      company: 'Tetrapak',
      data: 'Firstly, thanks a lot for the knowledge and time. When I selected this training, I was sceptical as I did not know you. But honestly, I really liked the whole workshop. Use of all new collaboration tools like MURAL, Kahoot was amazing. Inclusion of case studies is not done in other trainings. These case study echoed the real-life challenges. I like the way that you distributed the workshop across the weeks, it gave us time to imbibe the knowledge that you imparted.'
    },
    {
      name: 'Jeetesh Kumar Nagaraj',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'EY',
      data: 'The training was excellent. It will give me an ability to implement Agile in a different way. And the way you took the training was not just the ppt, you gave us a lot more like YouTube videos, MURAL boards and awesome activities. So it was not just a dry subject like a download that we have to do. It was not about certification, you made the concepts clear and made are fundamentals strong. You are really good in conveying your messaging. I also liked the participants. The batch was fantastic and participated. '
    },
    {
      name: 'Swathi K Rao',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Baxter Innovations and Solutions',
      data: 'Initially when I came for this training, I had no idea about Kanban. I am very happy, and I have understood it very well and thanks for your patience. You did not hurry up and made sure that all of us get our concepts clear. And also, I would like to thank all the participants for making this class very interactive. Learning together was very helpful. '
    },
    {
      name: 'Varun Shrivastava',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Wipro',
      data: 'It was really a good session. Before joining the class, what I knew about Kanban is that it is just a board. But we have learned a lot in this class, we learnt a lot of are concepts and spent time on doing the exercises. That was great'
    }, {
      name: 'Ravi Suman',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'NTT',
      data: 'Thank you for spending weekends with us and giving us insights about Kanban. Given this training, you are a wonderful coach. '
    }]

  const testimonialsBrowser = [[
    {
      name: 'Rajat Agrawal',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Redhat',
      data: 'I really benefited through this entire training session. I did not know anything about Kanban before coming to this session, now I have good enough understanding of the concept. I can start implementing them and start improvising on it. You were very patient and answered all our questions and queries. It was really a great class and the kind of contribution that everyone did during the exercises, it made the class livelier. With this kind if interaction, all of us learned from each other.  '
    }, {
      name: 'Salil Gupta',
      image: require('../../assets/images/Salil.jpg'),
      company: 'Nagarro',
      data: 'Thanks, Agile Training by Booyah for giving 4 days of in-depth training focussing on Kanban Practices, Principles, System Thinking, Lead Time along with very enthralling activities to make learning Kanban very easy. I strongly recommend Booyah Training.'
    }, {
      name: 'Abhishek Vatsyayan',
      image: require('../../assets/images/Abhishek.jpeg'),
      company: 'NTT',
      data: 'The class was more than the PPT. Creative MURAL boards were used to explain the concepts.'
    }],
  [
    {
      name: 'Atul Kumar Sinha',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Adobe',
      data: 'A wonderful piece of coaching and training. It was filled with examples and activities. Training was awesome, I enjoyed a lot. I was thoroughly engaged. I could correlate. We are already on the verge of ML4 and correlate the fitment of the theory to practice. MURAL board is something very interesting and interactive. I will also try to include this idea. Participation was awesome. '
    },
    {
      name: 'Deepak Chaudhary',
      image: require('../../assets/images/Deepak.jpeg'),
      company: 'Wipro',
      data: 'Thanks for the wonderful class. I am very much satisfied with KSD class, you make the concepts very clear with the help of Mural board and group activities. Apart from knowledge sharing you also make the session very lively, entertaining and sharing the practical experience.'
    },
    {
      name: 'Dharthi Kashyap',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Ather Energy',
      data: 'I really enjoyed this class. I think it was very interactive, we had lot of exercises to do. We were not restricted to only one group and did exercises with everybody. A lot of ideas came out. It was a good way of learning. It was a great experience to do it together for 4 days. '
    }], [
    {
      name: 'Mrinal Singh',
      image: require('../../assets/images/Mrinal.png'),
      company: 'HCL',
      data: 'Informative, with examples and exercises. Helped to clear concepts.'
    }, {
      name: 'Mateen Abdul',
      image: require('../../assets/images/Mateen.png'),
      company: 'Grassroots Energy',
      data: 'It was very Hands-on. Just finished the two - day Kanban System Design training by Booyah Trainer Vikas. It was an amazing experience learning KSD through informative, interactive, and fun-filled sessions.'
    }, {
      name: 'Bijendra Nayak',
      image: require('../../assets/images/Bijendra.jpeg'),
      company: 'Anonymous',
      data: 'Thank you Vikas for providing a great Kanban training session. I liked the case studies, practical simulation games played to understand the flow efficiency and real-life Kanban Design group activities. The 2-day training session helped me to understand the fundamentals to design a great Kanban System. I highly recommend Booyah Training.'
    },], [
    {
      name: 'Anonymous',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Anonymous',
      data: 'Just finished the two - day Kanban System Design training by Booyah Trainer Vikas. It was an amazing experience learning KSD through informative, interactive and fun-filled sessions.'
    },
    {
      name: 'Vinay Chauhan',
      image: require('../../assets/images/Vinay.jpeg'),
      company: 'NTT',
      data: 'The concept has been cleared and now I am more focussed on the next steps. I am very confident with the terminology. Although, I had the background of using Kanban, but this training has enhanced my knowledge to a great extent, and I am able to relate the real-life challenges with the theory. The JIRA Kanban screenshots that you shared will be helpful.'
    },
    {
      name: 'Piyush Jethwa',
      image: require('../../assets/images/Piyush.jpeg'),
      company: 'Securly',
      data: 'It was great overall for me because I am new to Kanban. I have got lot of clarity on how it works. What I liked the MURAL Board exercises that we did. Overall, the session was interactive and that helped to understand the concept clearly. This one was delivered very nicely and in an understandable format. The references that you have shared for JIRA usage for Kanban will guide me to explore it further.'
    }], [{
      name: 'Mayank Saxena',
      image: require('../../assets/images/Mayank.jpeg'),
      company: 'Tetrapak',
      data: 'Firstly, thanks a lot for the knowledge and time. When I selected this training, I was sceptical as I did not know you. But honestly, I really liked the whole workshop. Use of all new collaboration tools like MURAL, Kahoot was amazing. Inclusion of case studies is not done in other trainings. These case study echoed the real-life challenges. I like the way that you distributed the workshop across the weeks, it gave us time to imbibe the knowledge that you imparted.'
    },
    {
      name: 'Jeetesh Kumar Nagaraj',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'EY',
      data: 'The training was excellent. It will give me an ability to implement Agile in a different way. And the way you took the training was not just the ppt, you gave us a lot more like YouTube videos, MURAL boards and awesome activities. So it was not just a dry subject like a download that we have to do. It was not about certification, you made the concepts clear and made are fundamentals strong. You are really good in conveying your messaging. I also liked the participants. The batch was fantastic and participated. '
    },
    {
      name: 'Swathi K Rao',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Baxter Innovations and Solutions',
      data: 'Initially when I came for this training, I had no idea about Kanban. I am very happy, and I have understood it very well and thanks for your patience. You did not hurry up and made sure that all of us get our concepts clear. And also, I would like to thank all the participants for making this class very interactive. Learning together was very helpful. '
    },], [
    {
      name: 'Varun Shrivastava',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'Wipro',
      data: 'It was really a good session. Before joining the class, what I knew about Kanban is that it is just a board. But we have learned a lot in this class, we learnt a lot of are concepts and spent time on doing the exercises. That was great'
    }, {
      name: 'Ravi Suman',
      image: require('../../assets/images/placeholder_pic.png'),
      company: 'NTT',
      data: 'Thank you for spending weekends with us and giving us insights about Kanban. Given this training, you are a wonderful coach. '
    }
  ]]

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ paddingTop: 0, marginTop: 200 }}
    >
      <div className="container">
        <h3 style={{ textAlign: 'center' }}>WE LOVE TO GET TRAINED AT BOOYAH</h3>
        {/* <div className={tilesClasses}> */}
        <BrowserView>
          {/* <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={8000}
          > */}
          {testimonialsBrowser.map((parentItem) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                {parentItem.map((childItem) => {
                  return (
                    <div className="tiles-item reveal-from-right" style={{ marginBottom: 50 }} data-reveal-delay="200">
                      <div className="tiles-item-inner" >
                        <img src={childItem.image} style={{ height: 100, width: 100, alignSelf: 'center', borderRadius: 50 }} />
                        <div className="testimonial-item-header text-xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
                          <span className="testimonial-item-name text-color-high">{childItem.name}</span>
                          <span className="testimonial-item-link">
                            <a href="#0">{childItem.company}</a>
                          </span>
                        </div>
                        <div className="testimonial-item-content">
                          <p className="text-sm mb-0" style={{ height: 350, overflowY: "auto" }}>
                            {childItem.data}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
          {/* </Carousel> */}
        </BrowserView>
        <MobileView>
          {testimonialsMobileView.map((parentItem) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>

                <div className="tiles-item reveal-from-right" style={{ marginBottom: 50 }} data-reveal-delay="200">
                  <div className="tiles-item-inner" >
                    <img src={parentItem.image} style={{ height: 100, width: 100, alignSelf: 'center', borderRadius: 50 }} />
                    <div className="testimonial-item-header text-xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span className="testimonial-item-name text-color-high">{parentItem.name}</span>
                      <span className="testimonial-item-link">
                        <a href="#0">{parentItem.company}</a>
                      </span>
                    </div>
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0" style={{ minHeight: 150, maxHeight: 350, overflowY: "auto" }}>
                        {parentItem.data}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </MobileView>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;

