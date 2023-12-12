import React, { FC,useState } from 'react'
import s from './AuthPage.module.sass'

import {Ibirth} from '../../types/types'

const AuthPage:FC = () => {
const [email,setemail] = useState('')
const [pass,setpass] = useState('')
const [Fname,setFname] = useState('')
const [Sname,setSname] = useState('')

const [day,setday] = useState('')
const [month,setmonth] = useState('')
const [year,setyear] = useState('')

const onClick = ()=>{
  let birth : Ibirth = {day,month,year}
  console.log(birth)
  
  // email,pass,Fname,Sname,birth

  setemail('')
  setpass('')
  setFname('')
  setSname('')
}
return (
  <>
  <div className={`card ${s.center}`}>
    <div className={s.AuthPage}>
      <div className={s.text}>
        <h1><div className={s.logo}><a href="#"><img src="./img/logo.png" alt="logo" /></a></div>Впервые в SaNeX?</h1>
        <p>Моментальная регистрация</p>
      </div>
      <div className={s.inputs}>
        <div className='mb10px'><input type="text" placeholder='Ваше имя' value={Fname} onChange={e=>setFname(e.target.value)}/></div>
        <div className='mb10px'><input type="text" placeholder='Ваша фамилия' value={Sname} onChange={e=>setSname(e.target.value)}/></div>
        <p className='mb10px'>Дата рождения</p>
        <div className={`${s.date} mb10px`}>
          <div className='mr10px'><input type="text" placeholder='День' value={day} onChange={e=>setday(e.target.value)}/></div>
          <div className='mr10px'><input type="text" placeholder='Месяц' value={month} onChange={e=>setmonth(e.target.value)}/></div>
          <div><input type="text" placeholder='Год' value={year} onChange={e=>setyear(e.target.value)}/></div>
        </div>
        <div className='mb10px'><input type="text" placeholder='email' value={email} onChange={e=>setemail(e.target.value)}/></div>
        <div className='mb10px'><input type="text" placeholder='password' value={pass} onChange={e=>setpass(e.target.value)}/></div>
      </div>
      <div className={`${s.button} button`}><button onClick={onClick}>Зарегестрироваться</button></div>
    </div>
  </div>
  </>
)
}

export default AuthPage