import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import Expensfilter from "./NewExpens/Expensfilter";
const Expenses =(props)=>{
    const [year,setYear] = useState(2022)
    const changeYear= (yil)=>{
        setYear(+yil)
    }
    const NewFilterData =props.data.filter((item)=>{
      return  year===item.date.getFullYear()
    })
    return(
        <Card className="expenses">
            <Expensfilter Filtergod={changeYear}/>

                {NewFilterData.length>0? NewFilterData.map((item)=>{
                    return(

                            <ExpenseItem name={item.name} price={item.price} date={item.date}/>
                    )
                }):<p style={{color:'white',textAlign:'center', fontWeight:'800',fontSize:'26px'} }>No Found</p>}
        </Card>
    )
}

export default Expenses