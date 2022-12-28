import React,{useEffect,useState} from 'react'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth' 
import Button from './Button'
import { uid } from 'uid'
import { ref, set} from 'firebase/database'
import { Add } from './todo'
const HomePage = () => {
    const [todo,setTodo]=useState('');


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
    const handlePushToDB=()=>{
        const uidd=uid();
        set(ref(db,`/${auth.currentUser.uid}/${uidd}`),{
            todo,
            uidd
        });
        setTodo('');
    }
  return (
    <>
    <div>HomePage</div>
    <Add type={'text'} changed={(e)=>setTodo(e.target.value)} currValue={todo} label={'Add an Task'} clicked={handlePushToDB} textHolder={'+'}/>
    <Button
    color={'black'} 
    clicked={handleSignOut}
    value={'sign out'} />
    </>
  )
}

export default HomePage