import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


import React from 'react';

const ExpenseItem = (props) => {




  return (

    <div>
    

        

        <div className='expense-item'>

          <ExpenseDate date={props.date} />
          <h2 className='item'>{props.title}</h2>
          <div className='price'>${props.amount}</div>
         
          
        </div>


    </div>

       
    
  )
}

export default ExpenseItem