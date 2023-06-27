import React from 'react';

import './ExpenseDate.css';



const ExpenseDate = (props) => {

    // Check if props.date is a valid date
    if (isNaN(props.date) || !(props.date instanceof Date)) {
      return null; // Return null or handle the error case as per your requirements
    }
  
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  
    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );
  };
  

export default ExpenseDate;