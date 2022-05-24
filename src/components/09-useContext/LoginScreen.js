import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    // obtener la referencia al  context
    // 2 setUser
    // const [user, setUser] = useState({
    //     id: 123
    // })
    const { setUser } = useContext(UserContext)

    return (
        <div>
            <h1>Login  Screeen</h1>
            <hr />
            <button className='btn btn-primary'
                onClick={() => setUser({
                    id: 123,
                    name: 'fernando'
                })}
            >
                Login
            </button>
        </div>
    )
}
