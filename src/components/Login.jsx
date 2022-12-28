import React, { useState, useEffect } from 'react'
import Input from './Input'
import Button from './Button'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/homepage')
            }
        })
    }, [])

    const handleEmailchange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordchange = (e) => {
        setPassword(e.target.value)
    }
    const handleSignIn = () => {

        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/homepage')
        }).catch((error) => alert(error.message))
    }
    const handleSignUp = () => {

    }
    return (
        <>
            <div className='font-semibold text-4xl flex justify-center items-center text-center pt-32'>
                <h1>kaam crow</h1>
            </div>
            <div className='pt-16 flex flex-col justify-center items-center text-center'>
                <Input label={'username'} type={'email'} changed={handleEmailchange} currValue={email} />
                <Input label={'password'} type={'password'} changed={handlePasswordchange} currValue={password} />
            </div>
            <div className=' flex flex-col justify-center items-center text-center'>
                <Button value={'sign in'} color={'blue'} clicked={handleSignIn} />
                <a href='/'>Create an Account</a>
            </div>

        </>
    )
}

export default Login