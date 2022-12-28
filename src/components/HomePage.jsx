import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import Button from './Button'
import { uid } from 'uid'
import { onValue, ref, remove, set } from 'firebase/database'
import { Add } from './todo'
const HomePage = () => {
    const [todo, setTodo] = useState('');
    const [allTodos, setAllTodos] = useState([]);

    const navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
                    setAllTodos([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map((todo) => {
                            setAllTodos((oldArray) => [...oldArray, todo]);
                        })
                    }
                });
            }
            else if (!user) {
                navigate('/')
            }
        })
    }, [])
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => { alert(error.message) })
    }
    const handlePushToDB = () => {
        const uidd = uid();
        set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
            todo,
            uidd
        });
        setTodo('');
    }
    const handleUpdate = () => {

    }
    const handleDeletion = (uid) => {
        remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
    }
    return (
        <>
            <div>HomePage</div>
            {/* add task */}
            <Add type={'text'} changed={(e) => setTodo(e.target.value)} currValue={todo} label={'Add an Task'} clicked={handlePushToDB} textHolder={'+'} />
            {/* render tasks */}
            {
                allTodos.map((todo) => (
                    <div className="">
                        <h1>{todo.todo}</h1>
                        <Button color='blue' clicked={handleUpdate} value={'update'} />
                        {/* delete task */}<Button color='black' clicked={() => handleDeletion(todo.uidd)} value={'delete'} />
                    </div>
                ))
            }
            <Button
                color={'black'}
                clicked={handleSignOut}
                value={'sign out'} />
        </>
    )
}

export default HomePage