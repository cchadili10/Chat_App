import React ,{useState , useEffect} from 'react'
import { Outlet , Link } from 'react-router-dom'

const Navbar = () => {

   const [user , setUser] = useState('')


  console.log(sessionStorage.getItem('id'));

  useEffect(()=>{
    if(sessionStorage.getItem('id')){
      const getUser = async ()=>{
        const res = await fetch('http://localhost:5000/api/chat/'+sessionStorage.getItem('id'))
        const data = await res.json()
        if(!res.ok){
          console.log('err');
        }
        console.log(data);
        setUser(data)
      }
      getUser()
    }
  },[])

  const clr=()=>{sessionStorage.clear()
    window.location.reload()
  }
  // useEffect(()=>{
    
  // },[clr()])

  console.log(user.email);
  const UserInfo = ()=>{
    return (
        <div>
           <h1> {user.email} </h1>
           <button onClick={()=>{clr()}}> out </button>
        </div>
    )
  }
  const LogInfo = ()=>{
    return (
         <div className='text-right mr-10 text-lg font-thin'>
                <Link className='mr-3 py-2 px-5 bg-green-500 text-white rounded shadow-md hover:bg-slate-500' to='login'>Log in</Link>
                <Link className='mr-3 py-2 px-5 bg-sky-500 text-white rounded shadow-md hover:bg-slate-500' to='sign'>Sign up</Link>
          </div> 
    )
  }




  return (
    <div>
        <nav className='mt-3 grid grid-cols-2'>
            <h1 className='text-3xl font-medium ml-3'>Web<span className='text-sky-600'>Chat</span></h1>
            {sessionStorage.getItem('id')?<UserInfo/> :<LogInfo/>}
        </nav>
        
        <Outlet/>

    </div>
  )
}

export default Navbar