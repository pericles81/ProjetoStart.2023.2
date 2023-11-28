import React from 'react'
import Button from '../Button'
import styles from '../styles/Login.css'
import logoP from '../assets/logoP.png'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <section className='secLogin'>
      <div>
        <img src={logoP} alt="" />
      </div>
      <div className='div2'>
        <form>
          <Button
            label={'Email'}
          />
          <Button
            label={'Senha'}
            type={'password'}
          />
          <Link to={'/user'}><Button
            value={'Entrar'}
            type={'submit'}
          /></Link>
        </form>
      </div>
    </section>
  )
}
