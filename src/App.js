import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/UI/navbar/navbar.jsx'
import AppRouter from './AllWithRoutes/router/appRouter.jsx'
import { authContext } from './context/context.js'
import { useEffect, useState } from 'react'
import Navbar2 from './components/UI/navbar2/navbar.jsx'


function App() {

  const [isAuth, setIsAuth] = useState(false)
  
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <authContext.Provider value={{isAuth, setIsAuth}}>
      <BrowserRouter>
        {isAuth ? <Navbar /> : <Navbar2 /> }
        <AppRouter />
      </BrowserRouter>
    </authContext.Provider>
  );
}

export default App;
