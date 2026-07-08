import React, {useState} from 'react'

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
            <p>
                <button onClick={more}>More</button>
                <button onClick={less}>Less</button>
            </p>
            <p>{count}</p>
        </div>
    )
}
