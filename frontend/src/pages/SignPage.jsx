import React from 'react'
import { useState,useEffect } from 'react'
import { json } from 'react-router-dom'

const SignPage = () => {

  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [msj , setMsj] = useState('')
  

  

  const insertuser= async (e)=>{
    e.preventDefault()

    if(username,email,password){
      const user = {username,email,password}
      const res = await fetch('http://localhost:5000/api/chat',{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const data = await res.json()
      if(res.ok){
        console.log("new user added" , data);
        setPassword('')
        setEmail('')
        setUsername('')
      }
      if(!res.ok){
         console.log("err");
      }
    }else{
      setMsj('please complete the form');
      const err=document.getElementById('err')
      err.classList.remove('invisible')
      setTimeout(()=>{
        err.classList.add('invisible')
      },4000)
    }
  }



  return (
    <div className='h-screen flex justify-center items-center bg-slate-100'>
      <form onSubmit={insertuser} className='bg-white h-3/4 w-96  flex justify-center items-center flex-col rounded-3xl text-black shadow-xl'>
        <h1 className='text-3xl font-semibold'>JOIN <span className='text-orange-500'>US</span></h1>
        <div>
          <input className='input mt-10' type="text"  placeholder='UserName' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        </div>
        <div>
          <input className='input mt-10' type="email" placeholder='Emai' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div>
          <input className='input my-10' type="password"  placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <div>
          <button className='py-2 px-6  bg-sky-500  text-white shadow-md rounded-lg ' type="submit" >Sign up</button>
        </div>
        <h1 id='err' className='text-red-500 uppercase font-semibold text-lg mt-10  animate-bounce invisible'> {msj} </h1>
      </form>

    </div>
  )
}

export default SignPage