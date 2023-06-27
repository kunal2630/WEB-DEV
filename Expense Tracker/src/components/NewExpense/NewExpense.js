import React from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'

const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{


        //ADDING ID TO THE OBJECT RECEIVED FROM CHILD(ExpenseForm)

        const expenseData = {
            
            //SPREAD OPERATOR COPIES THE CONTENT FROM child object(enteredExpenseData)
            ...enteredExpenseData,

            id:Math.random().toString()


        }

        props.onAddExpenseData(expenseData);

        console.log(expenseData);



    }

    return(
        <div className='new-expense'>
            <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;