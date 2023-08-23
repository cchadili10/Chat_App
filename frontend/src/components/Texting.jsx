import React, { useState } from 'react'
import { useEffect } from 'react';
import { useChat } from '../hook/useChat';
import { useParams } from 'react-router-dom'
import send from '../images/send.png'
const Texting = () => {
    const id_user=useParams('id')
    const [user,setUser]=useState('')
    const {userM,dispatch} = useChat()
    const [message,setMessage]=useState('')
    // console.log(id_user.id);


     useEffect(()=>{
        const getuser_1 = async ()=>{
            const res = await fetch('http://localhost:5000/api/chat/'+sessionStorage.getItem('id'))
            const data = await res.json()
            if(res.ok){
                dispatch({type:'SET_CHAT',payload:data})

                 
            }
            if(!res.ok){
                console.log('err');
            }
        }
        getuser_1()
       
    },[])


    useEffect(()=>{
        const getuser_2 = async ()=>{
            const res = await fetch('http://localhost:5000/api/chat/'+id_user.id)
            const data = await res.json()
            if(res.ok){
                setUser(data)              
            }
            if(!res.ok){
                console.log('err');
            }
        }
               
        getuser_2()
        //  const el = document.getElementById('chat');
        //  el.scrollTo(0,10000)
                  
    },[id_user])
   

    const handlsubmit = async (e)=>{
        e.preventDefault()
        if(message){
            
                const to_id= id_user.id
                const from_id = sessionStorage.getItem('id')
                const Message = {from_id,to_id,message}
                const res_1 = await fetch('http://localhost:5000/api/chat/sms/'+sessionStorage.getItem('id'),{
                    method:'PATCH',
                    body: JSON.stringify(Message),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })

                const res_2 = await fetch('http://localhost:5000/api/chat/sms/'+id_user.id,{
                    method:'PATCH',
                    body: JSON.stringify(Message),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })

                
                const respo = await fetch("http://localhost:5000/api/chat/"+sessionStorage.getItem('id'))
                
                const data_1 = await res_1.json()
                const data_2 = await res_2.json()
                const json = await respo.json()
                
                if(!res_1.ok && !res_2.ok && !respo.ok){
                    console.log('eror');
                }
                if(res_1.ok && res_2.ok && respo.ok){
                    console.log(data_1,data_2);
                     dispatch({type:'SET_CHAT',payload:json})
                    
                    setMessage('')
                     
                   
                }
            
        }
        // const el = document.getElementById('chat');
        // el.scrollTo(0,10)

    }
    // setTimeout(() => {
       
    // var objDiv = document.getElementById('chat');
    // objDiv.scrollTop = objDiv.scrollHeight
    // }, 0)
    
   
    
  return (
    <div className='xl:col-span-3 col-span-2 flex flex-col justify-between h-screen'>
        <div className='h-24 bg-slate-100 flex items-center shadow-md  '>
            <div className='h-20  w-20 rounded-full bg-sky-500 ml-10 mr-4'></div>
            { user && <h1 className='text-lg capitalize font-semibold'>{user.username}</h1>}
        </div>
        <main  className=' h-4/5 bg-white ' >
            <div id='chat' className='overflow-y-scroll h-full flex flex-col ' >

                {   
                    userM && userM.msj.map((M,index)=>{ 
                    if(  M.from_id === sessionStorage.getItem('id') && M.to_id === id_user.id ){
                            return(
                                <div  key={index} className='flex justify-end mr-2 my-3  '>
                                    <p className='py-3 px-6 bg-sky-500 text-white rounded-md'>{M.message}</p>
                                </div>
                            ) 
                    }
                    if(  M.from_id === id_user.id && M.to_id ===  sessionStorage.getItem('id') ){
                            return(
                                <div  className='flex justify-start ml-2 my-3 ' key={index}>
                                    <p  className='py-3 px-6 bg-gray-500 text-white rounded-md'>{M.message}</p>
                                </div>
                            )
                    }

                    
                    
                    })
                }
            </div>
        </main>
        <footer className='bg-slate-100 h-20 flex items-center justify-center shadow-lg  '>
            <form onSubmit={handlsubmit} className='flex items-center justify-center w-full'>
                <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} className=' border-2 border-white focus:outline-none focus:border-sky-500 py-1 px-2 ml-2 w-1/2 h-12 rounded shadow-md'  />
                <button className='bg-white py-4 px-4 ml-4 rounded-full shadow' type="submit"><img className='w-6' src={send} alt="" /></button>
            </form>

        </footer>
    </div>
  )
}

export default Texting