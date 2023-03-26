import React, { useState } from "react";
import './NewExpens.css'
import Expensform from "./Expensform";

const NewExpens =(props)=>{
    const [show , setshow]= useState(false)
    const getData=(info)=>{
    const data={
        ...info,
        id:info.name+1
    }
    props.information(data)
    }
    const AddExpens=()=>{
        setshow(!show)
    }

    return(
        <div className="new-expense">
            {show&&<Expensform Shovn={AddExpens} getF={getData}/>}
            {!show&&<button onClick={AddExpens}>Open Add Expens</button>}
            
            </div>
    )
}

export default NewExpens