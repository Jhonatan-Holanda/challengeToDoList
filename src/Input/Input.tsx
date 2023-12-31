import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes <HTMLInputElement>{
  text?: string;
}

export function Input({...props}: InputProps){
  return(
    <input className={styles.input} {...props}/>
  )
}