import React from 'react'
import classes from './Selector.module.css'


const Selector = ({options, defVal, onChange}) => {
    return (
        <select className={classes.sel} onChange={event => onChange(event.target.value)}>
            
            <option disabled>{defVal}</option>
            
            {options.map((opt, index) => (
                <option key={index} value={opt.svo}>
                    {opt.name}
                </option>
            ))}
            
        </select>
    )
}

export default Selector;