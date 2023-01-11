import React, { useEffect } from 'react';
import TrainingCalendar from "../../components/sections/TrainingCalendar";
import InfoSection from '../../components/sections/partials/InfoSection';
import Testimonials from '../../components/sections/Testimonials';
import { useLocation} from 'react-router-dom';
import { gtag } from 'ga-gtag';

const TrainingCalendarPage = () =>{
  gtag('event', 'conversion', { 'send_to': 'AW-11057596411/MvRiCJqIzocYEPuP1pgp' });

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.scrollTo(0,0)
  }, [routePath]);

    const sectionHeader = {
        title: 'Kanban Management Professional (KMP)',
        paragraph: 'This credential is granted upon the completion of two classes. Kanban System Design, which teaches the basics of Kanban, flow, and how to design a Kanban system. Kanban Systems Improvement, which teaches how to evolve, improve, and scale a Kanban system. KMPs should be able to design a Kanban system and evolve and scale it beyond the team.'
      };

    return(
        <>
      <TrainingCalendar  invertMobile imageFill className="illustration-section-02" calenderLimit={0} showHeader={false} showTrainerInfo={false} showSearchOption={true} />
      <div style={{marginTop:10}}>
      <Testimonials invertMobile imageFill className="illustration-section-02" showHeader={true} countToFetch={6} />
      </div>
        </>
    )
}

export default TrainingCalendarPage;