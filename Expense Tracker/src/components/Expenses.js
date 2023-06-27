import React from 'react'
import './Expenses.css';

import ExpenseItem from '../components/ExpenseItem';



const Expenses = (props) => {

  return (

    <div className='expenses-div'>

      {/* CURLY BRACES BECAUSE WE ARE WRITING JAVASCRIPT APPLICATION */}

     {

      //WE WANT TO ACCESS ALL ELEMENTS OF THIS expense array so we can use map instead of declaring each ExpenseItem  separately

      //props.it is the item which we paased as a prop from parent which was a array
      //inside that array we have object and object attributes are accesed using . hence we have writen expen.date and here expen is any variable on whom we written function (that is whatever we want to do)


      props.it.map( 
        
              expen => (

                  < ExpenseItem 

                  key={ expen.id }

                  date={expen.date}
                  title={expen.title}
                  amount={expen.amount}       />

              )
            
            )

       }



        
      
        {/* < ExpenseItem 

        date={props.it[0].date}
        title={props.it[0].title}
        amount={props.it[0].amount}       />

        // WE CAN ALSO REPEAT THSESE COMPONENT 

        <ExpenseItem 

            date={props.it[1].date}
            title={props.it[1].title}
            amount={props.it[1].amount}         />


        <ExpenseItem 

            date={props.it[2].date}
            title={props.it[2].title}
            amount={props.it[2].amount}         />

        <ExpenseItem 

            date={props.it[3].date}
            title={props.it[3].title}
            amount={props.it[3].amount}   /> */}
       

    </div>
  )
}

export default Expenses;