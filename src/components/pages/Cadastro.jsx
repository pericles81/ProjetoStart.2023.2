import React from 'react'
import Button from './../Button';
import styles from '../styles/Cadastro.css'
import { Link } from 'react-router-dom';


export const Cadastro = () => {
  return (
    <form >
      <Button 
      label={'Digite seu nome:'}
      type={'text'}
      name={'nome'}
      id={'campoNome'}
      />
      <Button 
      label={'Digite seu nome:'}
      type={'text'}
      name={'nome'}
      id={'campoNome'}
      />
      <Button 
      label={'Digite seu CPF:'}
      type={'number'}
      name={'cpf'}
      id={'campoCPF'}
      />
      <Button 
      label={'Digite seu curso:'}
      type={'text'}
      name={'nome'}
      id={'campoCurso'}
      />
      <Button 
      label={'Digite seu nome:'}
      type={'text'}
      name={'nome'}
      id={'campoNome'}
      />

     <Link to={'/user'}><Button  type={'button'} value={'cadastrar'}/></Link>
      
    </form>
  )
}
