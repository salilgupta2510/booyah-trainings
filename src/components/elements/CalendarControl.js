import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const CalendarControl = ({month='', date, year}) => {

  return (
    <div style={{
      dispaly: 'flex',
      flexDirection: 'row',
      // justifyContent: 'space-evenly',
      // height: 70,
      width: 60,
      backgroundColor: 'white',
      borderRadius: 10,
      maginLeft: 10,
      marginRight: 10

    }}>
      <div
        style={{
          color: 'white', 
          fontSize: 12,
          backgroundColor: '#ff4653',
          borderTopRightRadius: 10, 
          borderTopLeftRadius: 10,
          height: 20,
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {`${monthNames[month]} ${year.slice(-2)}`}
      </div>
      <div
        style={{
          fontSize: 18,
          textAlign: 'center',
          height: 30,
          fontWeight: 'bolder',
          color: 'black'
        }}>
        {date}
      </div>
      {/* <div
        style={{
          color: 'white', 
          fontSize: 12,
          backgroundColor: '#ff4653',
          borderBottomRightRadius: 10, 
          borderBottomLeftRadius: 10,
          textAlign: 'center',
          height: 20,
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {year}
      </div> */}
    </div>
  );

}
export default CalendarControl