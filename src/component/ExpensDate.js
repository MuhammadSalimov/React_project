import React from "react";
import './ExpensDate.css'

const ExpensDate= (props)=>{
    
    const day = props.date.getDate()
    const year = props.date.getFullYear()
    const month = props.date.toLocaleString('en-US',{month:'long'})
    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>

        </div>
    )
}




export default ExpensDate

