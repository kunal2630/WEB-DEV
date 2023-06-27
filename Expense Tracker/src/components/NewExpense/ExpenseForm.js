import React, { useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [changeTitle,setChangeTitle]=useState('');
    const [changeAmount,setChangeAmount]=useState('');
    const [changeDate,setChangeDate]=useState('');


    const onchangeTitle = (event) =>{

        setChangeTitle(event.target.value);

    }

    const onchangeAmount = (event) =>{

        setChangeAmount(event.target.value);

    }

    const onchangeDate = (event) =>{

        setChangeDate(event.target.value);

    }

    const formSubmit = (event) =>{
        
        //TO PREVENT FORM SUBMITTING AND RELOADING
        event.preventDefault();
        
        //INSTEAD OF DECLARING THREE DIFFEREENT USESTATE WE CAN DECLARE A OBJECT 

        const expensedata ={

            title:changeTitle,
            amount:changeAmount,
            date : new Date(changeDate)
        }

        //SENDING expensedata to parent
        props.onSaveExpenseData(expensedata);


        //AFTER GETTING THE VALUES WE WANT OUR FORM TO BLANK AS IT WAS IN STARTING
        
        //IT IS CALLED 2 WAY BINDING
        setChangeTitle('');
        setChangeAmount('');
        setChangeDate('');
       
    }



    return (
        <form  onSubmit={formSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={changeTitle} onChange={onchangeTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"   min="0.01" step="0.01"  value={changeAmount} onChange={onchangeAmount}  />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  value={changeDate} onChange={onchangeDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"  >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;