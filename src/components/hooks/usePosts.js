import {useMemo} from 'react'

const useSortedPosts = (posts, algo) => {

    const sortedPosts = useMemo(() => {
        console.log("Sort mem")
        if (algo === 'title') {
            return [...posts].sort((a, b) => a[algo].localeCompare(b[algo]))
        } else if (algo === 'id') {
            return [...posts].sort((a, b) => a.id - b.id)
        } else {
            return posts;
        }
        
    }, [algo, posts]);

    return sortedPosts
}

const useFilteredPosts = (posts, sort, stro) => {

    const sorting = useSortedPosts(posts, sort)
    const searchInSortedArray = useMemo(() => {
        console.log("Filter mem")
        return sorting.filter(post => post.title.toLocaleLowerCase().includes(stro))

    }, [stro, sorting])
    
    return searchInSortedArray
}

export default useFilteredPosts;