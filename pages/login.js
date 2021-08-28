import Link from 'next/link'
import { useState, signIn, signOut, useSession } from 'next-auth/client'

const Login = () => {

    const [session] = useSession()

    const handleLogin = (e) => {
        e.preventDefault()
        signIn('github')
    }

    const handleLogout = (e) => {
        e.preventDefault()
        signOut()
    }

    console.log('SESSION', session)
    console.log(session.user)
    
    return (
        <>
            <Link href='/'>
                <a className='title'>Test Page
                </a>
            </Link>
            <div className='user-info'>
                {session ? (
                    <>
                    <img src={session.user.image} className="user"/>
                    <a href="#" onClick={handleLogout} className="logout">Logout</a>
                    </>
                ) : (
                    <a href="#" onClick={handleLogin} className="logout">Login</a>
                )}
            </div>
        </>
    )
}


export default Login