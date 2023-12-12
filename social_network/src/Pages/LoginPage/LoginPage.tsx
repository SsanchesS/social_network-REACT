import React,{useState,FC} from 'react'
import s from './LoginPage.module.sass'
import Header from '../../components/Header/Header'

const LoginPage:FC = () => {
const [email,setemail] = useState('')
const [pass,setpass] = useState('')
const onClick = ()=>{
  
  // email,pass
  
  setemail('')
  setpass('')
}
return (
  <>
  <div className={`card ${s.center}`}>
    <div className={s.LoginPage}>
      <div className={s.text}>
        <h1><div className={s.logo}><a href="#"><img src="./img/logo.png" alt="logo" /></a></div> Вход в SaNeX</h1>
      </div>
      <div className={s.inputs}>
        <div className='mb10px'><input type="text" placeholder='email' value={email} onChange={e=>setemail(e.target.value)}/></div>
        <div className='mb10px'><input type="text" placeholder='password' value={pass} onChange={e=>setpass(e.target.value)}/></div>
      </div>
      <div className={`${s.button} button`}><button onClick={onClick}>Войти</button></div>
    </div>
  </div>
  </>
)
}

export default LoginPage