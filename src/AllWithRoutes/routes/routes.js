import About from "../../pages/About"
import PostPage from "../../pages/PostPage"
import Posts from "../../pages/Posts"
import Error from "../../pages/Error"
import Login from "../../pages/LoginPage"

export const routesArr = [
    {path: '/', component: <Posts/>},
    {path: '/posts', component: <Posts/>},
    {path: '/about', component: <About/>},
    {path: '/posts/:id', component: <PostPage/>},
    {path: '*', component: <Error/>}
]

export const pubRoutes = [
    {path: '/', component: <Login/>},
    {path: '/login', component: <Login/>},
    {path: '*', component: <Error/>}

]
