import React from 'react'
import styles from './styles/Button.css'
const Button = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input type={props.type} className={props.className} value={props.value} onBlur={props.onBlur} id={props.id} name={props.name} />
    </>
  )
}

export default Button