import React from 'react'
import Input from '../Input'
import Button from '../Button'
const Add = (props) => {
  return (
    <>  
        <Input type={props.type} changed={props.changed} currValue={props.currValue} label={props.label}/>
        <Button color='black' clicked={props.clicked} value={props.textHolder}/>
    </>
  )
}

export default Add