import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const CalendarControl = ({month='', date, year}) => {

  return (
    <div style={{
      dispaly: 'flex',
      flexDirection: 'row',
      // justifyContent: 'space-evenly',
      height: 70,
      width: 70,
      backgroundColor: 'white',
      borderRadius: 10,

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
        {month}
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
      <div
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
      </div>
    </div>
  );

}
export default CalendarControl