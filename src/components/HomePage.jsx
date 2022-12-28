import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth' 
import Button from './Button'
const HomePage = () => {
    const navigate=useNavigate()
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