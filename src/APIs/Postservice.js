import axios from 'axios' 

export default class PostService {
    static async getData(limit, page) {    
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: { _limit: limit, _page: page}})
        console.log(responce)
        return responce
    }
    static async getID(id) {    
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id )
        return responce
    }
}
