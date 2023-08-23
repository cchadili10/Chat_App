import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

const LogPage = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [user , setUser] = useState(null)
    const [form , setForm] = useState(null)
    const navigate = useNavigate()


    useEffect(()=>{
        const fetchUser = async ()=>{
            const res = await fetch('http://localhost:5000/api/chat')
            const data = await res.json()
            if(!res.ok){ 
                console.log('err');
            }
            setUser(data)
            
        }
        fetchUser()
    },[])


    const handelSubmit = async (e)=>{
        e.preventDefault()
        if(!email || !password){
            setForm('Please complet the form')

        }else{
            user.map((user)=>{
                if(email === user.email && password === user.password){
                    console.log('marhba bik')
                    sessionStorage.setItem('id',user._id)
                    navigate('/dashboard')
                }
                else{
                    setForm('email or password not')
                    
                }
                
            })
        }

    }


  return (
    <div className='flex justify-center items-center  h-screen' >

        <form onSubmit={handelSubmit} className='h-3/6 w-96 bg-slate-300 flex flex-col justify-center items-center rounded-2xl shadow-md' >
            <h1 className='text-4xl text-white font-mono'>Welcome</h1>
            <div>
                <input className='input mt-10 ' type="email" name="email" id="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div>
                <input className='input mt-8 ' type="password" name="pass" id="pass" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div>
                <button className='py-2 px-6 bg-sky-500  text-white mt-10 shadow-md' type="submit">Log in</button>
            </div>
        </form>

         <h1>{form}</h1>
        
    </div>
  )
}

export default LogPage