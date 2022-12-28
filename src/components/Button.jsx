import React from 'react'

const Button = (props) => {

    const color = {
        'black': 'bg-black text-white font-semibold p-4 lg:w-[12%] m-4 rounded-lg',
        'blue': 'bg-blue-300 font-semibold p-4 lg:w-[12%] m-4 rounded-lg',
        'link':'font-semibold text-blue-700'
    }

    return (
        <>
            <button className={color[props.color]} onClick={props.clicked}>{props.value}</button>
        </>
    )
}

export default Button