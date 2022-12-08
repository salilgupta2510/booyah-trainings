import React from 'react';
import TrainingCalendar from "../../components/sections/TrainingCalendar";
import InfoSection from '../../components/sections/partials/InfoSection';
import Testimonials from '../../components/sections/Testimonials';

const TrainingCalendarPage = () =>{
    const sectionHeader = {
        title: 'Kanban Management Professional (KMP)',
        paragraph: 'This credential is granted upon the completion of two classes. Kanban System Design, which teaches the basics of Kanban, flow, and how to design a Kanban system. Kanban Systems Improvement, which teaches how to evolve, improve, and scale a Kanban system. KMPs should be able to design a Kanban system and evolve and scale it beyond the team.'
      };

    return(
        <>
      {/* <InfoSection data={sectionHeader} invertMobile imageFill className="illustration-section-01" /> */}

      <TrainingCalendar  invertMobile imageFill className="illustration-section-02" calenderLimit={0} showHeader={false} showTrainerInfo={false} showSearchOption={true} />
      <Testimonials invertMobile imageFill className="illustration-section-02" />
       
        </>
    )
}

export default TrainingCalendarPage;