import React, {useState} from 'react'

export const InpSim = () => {
    const [znach, setZnach] = useState('Some text')


    return (
      <span>
        <input type='text' onChange={(e) => setZnach(e.target.value)} />
        <h2>{znach}</h2>
      </span>
    )
}

export default InpSim;