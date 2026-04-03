import React from 'react'
import MyInput from './UI/input/MyInput.jsx'
import Selector from './UI/selector/Selector.jsx'


const PostFilter = ({filter, setFilter}) => {

    return (
        <div className='posts'>
            <MyInput value={filter.stro} onChange={e => setFilter({...filter, stro: e.target.value})} placeholder={"Search line"} style={{ background: 'turquoise'}}/>
            {filter.algo}
            <Selector 
                value={filter.algo}
                onChange={choose => setFilter({...filter, algo: choose})}
                defVal="Сортировать по" 
                options={[{name: "По ID", svo: 'id'}, {name: "По названию", svo: 'title'}]}
                
            />
        </div>
    )
}

export default PostFilter;