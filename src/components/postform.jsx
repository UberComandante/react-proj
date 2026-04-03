import React, {useState} from 'react'
import MyBut from './UI/button/MyBut.jsx'
import MyInput from './UI/input/MyInput.jsx'


const Postform = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const newPost = (e) => {
        e.preventDefault()
        
        const createPost = {...post, id: Date.now()}
        create(createPost)
        
        setPost({title: '', body: ''})
    }

    


    return (
        <form>
            <div className='form'>
                <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} placeholder='Enter post title'></MyInput>
                
                <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} placeholder='Enter post summary'></MyInput>
                
                <MyBut onClick={newPost}>Create post</MyBut>
            </div>
        </form>
    )
}

export default Postform;
