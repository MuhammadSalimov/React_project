import React from "react";
import './Expensfilter.css'

const Expensfilter = (props)=>{
    const Filterchange = (e)=>{
        props.Filtergod(e.target.value)
    }
    return(
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                    <label htmlFor="filter">Filter</label>
                <select id="filter" onChange={Filterchange}>
                  <option value="2022">
                    2022
                  </option>
                  <option value="2021">
                    2021
                  </option>
                  <option value="2020">
                    2020
                  </option>
                  <option value="2019">
                    2019
                  </option>
                  <option value="2018">
                    2018
                  </option>
                </select>
                </div>
                
            </div>
    )
    
    }

export default Expensfilter