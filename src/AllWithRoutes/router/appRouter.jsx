import { Routes, Route } from 'react-router-dom'
import { routesArr, pubRoutes } from '../routes/routes'
import { useContext } from 'react'
import { authContext } from '../../context/context'


const AppRouter = () => {
 
   const {isAuth, setIsAuth} = useContext(authContext)
   const array = isAuth ? routesArr : pubRoutes
   
    return ( 
        <> 
                      
            <Routes>
                {array.map((el, index) => 
                    <Route key={index} path={el.path} element={el.component} />
                )}
            </Routes>
            

               
        </>
    )
}

export default AppRouter