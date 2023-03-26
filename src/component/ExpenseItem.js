import React from "react"
import './ExpenseItem.css'
import ExpensDate from "./ExpensDate";

const ExpenseItem = (props)=>{
    // const dataT = new Date('10-10-2022')
    return(
        <div className="expense-item">
            <div className="expense-item__price">
               <ExpensDate date={props.date}/>
            </div>
            <div className="expense-item__description">
               <h2>{props.name}</h2>
               <div className="expense-item__price">{props.price}$</div>
            </div>
        </div>
    )
}

export default ExpenseItem