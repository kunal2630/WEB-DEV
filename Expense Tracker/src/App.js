import React, { useState } from 'react'
import "./components/ExpenseItem.css";

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let Dummy_Expense =[

//   {
     
//      id:'e1',
//      title:'School',
//      amount:500,
//      date :new Date(2017,3,28)

//   },
//   {
     
//     id:'e2',
//     title:'Gym',
//     amount:100,
//     date :new Date(2017,3,28)


//  },
//  {
     
//   id:'e3',
//   title:'Rent',
//   amount:300,
//   date :new Date(2017,3,28)


// },

// {
      
//   id:'e4',
//   title:'Dinner',
//   amount:200,
//   date :new Date(2017,3,28)


// }

];


const App =() => {

  //  let expenseItemDate=new Date(2017,3,28);
  //  let expenseItemName="School";
  //  let expenseItemPrice=300;


  // NOW SINCE WE ARE USING MULTIPLE COMPONENTS IT IS VERY HARD TO DECLARE AND MAINTAIN EACH VARIABLE  SO WE WILL DECLARE AND ARRAY OF OBJECTS WHERE EACH OBJECT WILL CONTAIN THE DATA OF EACH COMPONENT

  

//since our expense data is changing on run time that uswer fill form to update it so we have to use states so that it can be updated 
 
const [expenses,setExpenses]=useState(Dummy_Expense);

const addExpenseHandler = (expense) => {

  // created a new array having old expense data and new expense data   

  //old expense data is expenses
  // new one is expense

  const updatedexpense = [expense,...expenses];

  setExpenses(updatedexpense);

}





  return (
    
    


    <div>

      <h2>Let's Get Started</h2>
       
       <NewExpense onAddExpenseData={addExpenseHandler} />
       <Expenses it={expenses} />

       
</div>
    
  )
}

export default App