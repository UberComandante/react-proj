import React from 'react'
import classes from './MyBut.module.css'

const MyBut = (props) => {
    return (
        <button {...props} className={classes.myBtn}>
            {props.children}
        </button>
    )
}

export default MyBut;