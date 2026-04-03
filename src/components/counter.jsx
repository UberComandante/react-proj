import React, {useState} from 'react'
import '/Programs/IT Programs/XAMPP/htdocs/react-big-proj/react-tests/src/styles/counter.css'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const more = () => {
        setCount((count) => count + 1)
    }
    const less = () => {
        setCount((count) => count - 1)
    }


    return (
        <div className="container">
            <span>
                <button onClick={more}>More</button>
                <button onClick={less}>Less</button>
            </span>
            <p>{count}</p>
        </div>
    )
}
