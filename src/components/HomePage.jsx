import React,{useEffect} from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import { signOut } from 'firebase/auth' 
import Button from './Button'
const HomePage = () => {
    const navigate=useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate('/')
            }
        })
    }, [])
    const handleSignOut=()=>{
        signOut(auth).then(()=>{
            navigate('/')
        }).catch((error)=>{alert(error.message)})
    }
  return (
    <>
    <div>HomePage</div>
    <Button
    color={'black'} 
    clicked={handleSignOut}
    value={'sign out'} />
    </>
  )
}

export default HomePage