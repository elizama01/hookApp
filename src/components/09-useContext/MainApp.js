import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    // const user = {
    //     id: 123,
    //     name: 'esteban',
    //     email: 'ferman.herraro@asdasdas.cl'
    // }
    const [user, setUser] = useState({
        id:123
    })
    return (
        <UserContext.Provider value={{
            user,
            setUser,
            // temporal:1234
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
