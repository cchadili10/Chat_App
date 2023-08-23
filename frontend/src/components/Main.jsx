import React from 'react'
import {Outlet , useNavigate,Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const Main = () => {
    const navigation = useNavigate()
    const [users,setUsers]=useState()
   useEffect(()=>{
     if(!sessionStorage.getItem('id')){
        navigation('/')
     }
     const getusers = async ()=>{
        const res = await fetch('http://localhost:5000/api/chat')
        const data = await res.json()
        if(!res.ok){
            console.log('eror');
        }
        if(res.ok){
            console.log(data);
            setUsers(data)
        }
        
     }
     getusers()
   },[]) 
  return (
    <div className='grid  xl:grid-cols-4 grid-cols-3'>
        <section className='bg-slate-200   h-screen flex flex-col items-center'>
            <div className='h-36 w-36 bg-sky-500 mt-6 rounded-full shadow'></div>
            <h1 className='text-xl capitalize font-semibold mt-2'>{users && users.map((u)=>u._id == sessionStorage.getItem('id')&& u.username)}</h1>

            <form action="">
                <input className='input my-10' type="search" placeholder='Search...' name="" id="" />
            </form>

            <main className='h-1/2 xl:w-96 w-72 '>
                { 
                    users &&  users.map((user)=>{ return( user._id !== sessionStorage.getItem('id') &&
                            <Link to={'/dashboard/'+user._id} className='flex items-center  shadow shadow-black mt-2 py-4 bg-gray-600 rounded cursor-pointer'  key={user._id}>
                                <div className='xl:h-20 xl:w-20 h-10 w-10 bg-sky-500 ml-2 rounded-full'></div>
                                <div className='mx-3  text-xl capitalize text-white'>
                                    <h1>{user.username}</h1>
                                </div>
                            </Link >
                        )
                        
                    })
                }
            </main>

        </section>
        <Outlet/>
    </div>
  )
}

export default Main