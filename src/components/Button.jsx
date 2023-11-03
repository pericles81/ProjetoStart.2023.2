import React from 'react'
import styles from './styles/Button.css'
const Button = (props) => {
  return (
    <>
        <input type={props.type} value={props.value} />
    </>
  )
}

export default Button