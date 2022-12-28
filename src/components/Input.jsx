import React from 'react'

const Input = (props) => {
  return (
    <>
    <input className='border-[3px] rounded-lg w-[30%] justify-center text-left m-4 p-4' type={props.type} placeholder={props.label} value={props.currValue} onChange={props.changed}/>
    </>
  )
}

export default Input