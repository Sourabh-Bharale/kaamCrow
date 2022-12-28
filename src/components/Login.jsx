import React, { useState, useEffect } from 'react'
import Input from './Input'
import Button from './Button'
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

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
    const handleRegister = () => {
        if (registerInfo.password !== registerInfo.confirmPassword) {
            return <h1>Passwords do not match</h1>;
        }
        createUserWithEmailAndPassword(auth, registerInfo.email, registerInfo.password).then(() => {
            navigate('/homepage')
        }).catch((error) => alert(error.message))
    }

    return (
        <>
            <div className='font-semibold text-4xl flex justify-center items-center text-center pt-32'>
                <h1>kaam crow</h1>
            </div>
            {isRegistering ? (
                <>
                    <div className='pt-16 flex flex-col justify-center items-center text-center'>

                        <Input label={'username'}
                        type={'email'}
                        changed={(e) => setRegisterInfo({ ...registerInfo, email: e.target.value })}
                        currValue={registerInfo.email} />

                        <Input label={'password'} 
                        type={'password'}
                        changed={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })} 
                        currValue={registerInfo.password} />

                        <Input label={'confirm-password'} 
                        type={'password'} 
                        changed={(e) => setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value })} 
                        currValue={registerInfo.confirmPassword} />

                    </div>
                    <div className=' flex flex-col justify-center items-center text-center'>
                        <Button value={'Register'} color={'blue'} clicked={handleRegister} />
                        <Button value={'sign in'} color={'link'} clicked={() => setIsRegistering(false)} />
                    </div>
                </>
            ) :
                <>
                    <div className='pt-16 flex flex-col justify-center items-center text-center'>
                        <Input label={'username'} type={'email'} changed={handleEmailchange} currValue={email} />
                        <Input label={'password'} type={'password'} changed={handlePasswordchange} currValue={password} />
                    </div>
                    <div className=' flex flex-col justify-center items-center text-center'>
                        <Button value={'sign in'} color={'blue'} clicked={handleSignIn} />
                        <Button value={'create an account'} color={'link'} clicked={() => setIsRegistering(true)} />
                    </div>
                </>
            }


        </>
    )
}

export default Login