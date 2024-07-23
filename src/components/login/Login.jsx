import React, { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import upload from '../../lib/upload'

const Login = () => {
    
    
    const[avatar,setAvatar]=useState({

        file:null,
        url:""
    })
    const[loading,setLoading]=useState(false)

    const handleLogin=async(e)=>{
       e.preventDefault();
       setLoading(true)
       const formData=new FormData(e.target)
       const{email,password}=Object.fromEntries(formData);
       try {
        await signInWithEmailAndPassword(auth,email,password)
        toast.success('login successful')
       } catch (error) {
        console.log(error)
        toast.error(error.message)
       }finally{
        setLoading(false);
       }
        
    }

    const handleRegister=async(e)=>{
        e.preventDefault()
        setLoading(true)
        const formData=new FormData(e.target);
        const{username,email,password}=Object.fromEntries(formData);
        const imgURL=await upload(avatar.file.name)

        try {
            const res=await createUserWithEmailAndPassword(auth,email,password)
            console.log(res);
            await setDoc(doc(db,"users",res.user.uid),{
                username,
                email,
                avatar:imgURL,
                id:res.user.uid,
                blocked:[],

            });
            await setDoc(doc(db,"userchats",res.user.uid),{
                chats:[]

            });


            toast.success("Account created,You can login now");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }

    }

    const handleAvatar=(e)=>{
        if(e.target.files[0])
        {
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
           })
        }
       
    }
  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome back,</h2>
            <form onSubmit={handleLogin}>
                <input type='text' placeholder='Email' name='email'/>
                <input type='password' placeholder='Password' name='password'/>
                <button disabled={loading}>{loading?'loading':"Sign in"}</button>
                
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor='file'>
                <img src={avatar.url || './avatar.png'} alt="" />
                Upload an image
                </label>
                <input type='file' id='file' style={{display:'none'}} onChange={handleAvatar}/>
                <input type='text' placeholder='Username' name='username'></input>
                <input type='text' placeholder='Email' name='email'/>
                <input type='password' placeholder='Password' name='password'/>
                <button disabled={loading}>{loading? "loading": "Sign Up"}</button>
            </form>
        </div>
    </div>
  )
}

export default Login