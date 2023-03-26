import React, {useState}  from "react";
import './Expensform.css'


const Expensform = (props)=>{
    const [title, setTitle] = useState('')
    const [Amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const titlechange=(e)=>{
        setTitle(e.target.value)

    }
    const Amountchange=(e)=>{
        setAmount(e.target.value)
    }
    const Datechange=(e)=>{
        setDate(e.target.value)
    }
   

    const submitChanged=(e)=>{
        e.preventDefault()
        if(!(title.trim().length>0 && Amount.trim().length>0 && +Amount>0 && date.trim().length>0)){
            return
        }
        const data1=
            {
                name:title,
                price:+Amount,
                date:new Date(date)
            }
        

        props.getF(data1)
        setTitle('')
        setAmount('')
        setDate('')
    }

return(
    <form className="new-expense__controls" onSubmit={submitChanged}>
        <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input value={title} type="text" id="title" onChange={titlechange} />
        </div>
        <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input value={Amount} type="text" id="amount" onChange={Amountchange}/>
        </div>
        <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input value={date} type="date" id="date" onChange={Datechange} />
        </div>
    <div style={{width:'100%' , textAlign:"right"}}>
        <button onClick={props.Shovn}>Close</button>
        <button > Add Expens </button>
    </div>
    </form>
)
}


export default Expensform