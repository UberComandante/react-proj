import { Link, useNavigate } from 'react-router-dom'
import MyBut from '../button/MyBut'
import { useContext } from 'react'
import { authContext } from '../../../context/context'

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(authContext)
    const nav = useNavigate()

    const exit = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
        nav('/login')
    }

    return (
    <div className='allNavbar'>
        <div className='navbar'>  
            <Link to='/posts'>Posts</Link>
            <Link to='/about'>About</Link> 
        </div>
        
        <MyBut onClick={exit} id='exit-btn' style={{ backgroundColor: 'orange' }}>Exit</MyBut>
    </div>
    )
}

export default Navbar