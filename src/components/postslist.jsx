import React from 'react'
import Post from './post'


const Postlist = ({remove, list}) => {

    if (list.length === 0) {
        return <h2 style={{ color: "red" }}>No posts here</h2>;
    }
    

    return (
        <div>
            <h1>Posts list</h1>
            {list.map((postObj, index) => <Post remove={remove} number={index + 1} post={postObj}   key={postObj.id}/>)}
        </div>
    )
}

export default Postlist;