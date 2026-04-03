import MyBut from "../components/UI/button/MyBut"
import MyInput from "../components/UI/input/MyInput"
import { useContext } from "react"
import { authContext } from "../context/context"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const {isAuth, setIsAuth} = useContext(authContext)

    const nav = useNavigate()
    
    const login = e => {
        e.preventDefault()

        setIsAuth(true)
        localStorage.setItem('auth', 'true')

        nav('/posts')
    }
    return (
        <div>
            <h2>Login window</h2>
            <form style={{display: 'flex', alignItems: 'center' }} onSubmit={login}>
                <MyInput type='text' placeholder="Введите логин" />
                <MyInput type='password' placeholder="Введите пароль" />
                <MyBut>Войти</MyBut>
            </form>
        </div>

    )
}

export default Login