'use client'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from "react-toastify"


function page() {


  const router = useRouter();

    const [user, setUser] = useState({
     
        email: '',
        password: ''
    })

    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)


    const onLogin = async (e) => {
        e.preventDefault();

        if (!user.email || !user.password) {
            toast.error("Enter valid  email & password 🙁");
            return;
        }
        else if (user.email.length < 13) {
            toast.error("Enter a valid email address");
            return;
        }
        else if (user.password.length < 5) {
            toast.error("Password requires a minimum of 5 characters");
            return;
        }


      try {
      setLoading(true);
      const res = await axios.post('http://localhost:3000/api/users/login', user);
      console.log("login success", res.data)    
      JSON.stringify(localStorage.setItem('users', user.email));
      toast.success("Login successfully😍")
      router.push('/');
    }
        catch (err) {
         console.log(err);
            toast.error("check email or password")
        }
        
    }


    useEffect(() => {
        if ( user.email.length > 0 && user.password.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [user])

  return (

    <div className= "h-screen  flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">

    <div className="relative  bottom-12 ">
      <div className="absolute -top-2 -left-2 -right-2 -bottom-2  rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
      <div id="form-container" className="bg-white p-10   rounded-lg shadow-2xl w-72 relative z-10 transform transition duration-500 ease-in-out">
        <h1 className='py-4'>{loading ? "processing..." : "LoginPage"}</h1>
        <form className="space-y-4">
          <input className="w-full h-10 border border-gray-800 px-3 rounded-lg"  id="" name="" type="email"  placeholder='enter email'
                      value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}/>
          <input className="w-full h-10 border border-gray-800 px-3 rounded-lg"  id="" name="" type="password" placeholder='enter password'
                      value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
          <button className='w-full h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ' onClick={onLogin}>{disabled ? "No login" : "login"} </button>
  
           <br/>
           <Link href="/signup" className="text-blue-500 hover:text-blue-800 text-xs">Don't have an account / signup here</Link>   
        </form>
      </div>
    </div>
  </div>
   )
}

export default page
