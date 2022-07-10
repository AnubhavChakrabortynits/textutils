import React from 'react'

export default function Alert(props) {
  
  return (
    
   props.alert && <div class={`alert alert-warning alert-dismissible fade show bg-${props.alert.typ}`} role="alert">
     <b>{props.alert.typ}:</b>  <strong>{props.alert.mesg}</strong>
    
  </div>

  )
  

}
