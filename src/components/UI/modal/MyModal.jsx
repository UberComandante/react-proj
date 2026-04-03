import React from 'react'
import classes from './Mymodal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const arr = [classes.mymodal]
    
    if (visible) {
        arr.push(classes.active)
    }

    return (
        <div className={arr.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.mymodalcontent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;