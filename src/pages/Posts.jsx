import React, {useEffect, useState, useMemo} from 'react'
import {Counter} from '../components/counter.jsx'
// import ClassCounter from './components/classcomp';
import '../styles/App.css'
import Postlist from '../components/postslist.jsx'
import Postform from '../components/postform.jsx'
import InpSim from '../components/inputsimple.jsx'
import PostFilter from '../components/postfilter.jsx'
import MyModal from '../components/UI/modal/MyModal.jsx'
import MyBut from '../components/UI/button/MyBut.jsx'
import Loader from '../components/UI/loader/loader.jsx'

import useFilteredPosts from '../components/hooks/usePosts.js'
import PostService from '../APIs/Postservice.js'
import useSbor from '../components/hooks/useSbor.js'
import mathpagesfunc from '../instruments/mathPages.js'
import { FullingArray } from '../components/hooks/useFullArray.js'
import Pagination from '../components/UI/pagLogic/Pagination.jsx'


function Posts() {
  // #1

  // #2-1
  const [filter, setFilter] = useState({algo: "", stro: ""})
  const [modal, setModal] = useState(false)
  // const [waiting, setWaiting] = useState(true)
  const [allPosts, setAllPosts] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [limitPosts, setLimitPosts] = useState(5)
  const [nowPage, setNowPage] = useState(1)
  
  
  const [posts, setPosts] = useState([
    // {id: 1, title: 'Topic', body: 'Hello!'},
    // {id: 2, title: 'Topic 2', body: 'Hello! 2'},
    // {id: 3, title: 'Topic 3', body: 'Hello! 3'}
  ])
  

  // #2-2
  const sortedAndFilteredPosts = useFilteredPosts(posts, filter.algo, filter.stro)

  const [sborka, loader, error] = useSbor( async () => {
    const responce = await PostService.getData(limitPosts, nowPage)
    setPosts(responce.data)

    const pagesCount = responce.headers['x-total-count']
    const mathRes = mathpagesfunc(pagesCount)
    setTotalPages(mathRes)
  })

 
  const fulling = useMemo(() => { 
    const func = FullingArray(totalPages)
    console.log(func);
    return func
  }, [totalPages]);

  


  // #2-3
  useEffect(() => {
    sborka()
  }, [nowPage])

  const newPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }
  const changePage = (page) => {
    setNowPage(page)
  }
  


  return (
    <div className="App">

      {/* #1 */}
      <InpSim />
      <Counter />



      {/* #2 */}
           
      <MyModal visible={modal} setVisible={setModal}>
        <Postform create={newPost}/>
      </MyModal>
      
      <div className='posts'>

        <MyBut onClick={() => setModal(true)}>Create post</MyBut>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {error && <h1>Произошла ошибка: {error}</h1>}
        {loader ? <Loader /> : <Postlist remove={removePost} list={sortedAndFilteredPosts} />}

        
      </div>
      <Pagination changePage={changePage} nowPage={nowPage} fulling={fulling}/>

    </div>
  );
}

export default Posts
