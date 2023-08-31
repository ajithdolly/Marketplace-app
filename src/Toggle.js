import React from 'react'
import { Button } from '@mui/material'


function Toggle(props) {

const changeauth=()=>{
    props.setauth(prev => !prev)
}

  return (
    <div >
        <Button color="secondary" onClick={changeauth}>Toggle</Button>
    </div>
  )
}

export default Toggle