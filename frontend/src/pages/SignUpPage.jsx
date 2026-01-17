import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Eye, EyeOff, Loader, Loader2, Lock, Mail, MessageSquare,User } from 'lucide-react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName : "",
    email : "",
    password : "",
  })
   
  const { signup,  isSigningUp} = useAuthStore();
   
  const validateForm = () =>{
    if(!formData.fullName.trim()) return toast.error("Full name is required")
    if(!formData.email.trim()) return toast.error("Email is required")
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) return toast.error("Please enter valid email")
    if(!formData.password) return toast.error("Enter password")
    if(formData.password.length < 6 ) return toast.error("Length of password must be greater than 6 character")
    
      return true
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const success = validateForm()
    if(success === true) signup(formData) 
  }

  return <div className='min-h-screen grid lg:grid-cols-2'>
    {/* left side */}
    <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
      <div className='w-full max-w-md space-y-8'>
        {/* LOGO */}
        <div className='text-center mb-8'>
          <div className='flex flex-col items-center gap-2 group '>
            <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
            <MessageSquare className='size-6 text-primary'/>
            </div>
            <h1 className='text-2xl font-bold mt-2'> Create Account</h1>
            <p className='text-base-content/60'>Get started with your free account</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Full name</span>
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <User className = "size-5 text-base-content/40"/>
              </div>
              <input 
              type='text'
              className={`input input-bordered w-full pl-10`}
              placeholder='Enter your Name'
              value={formData.fullName}
              onChange={(e) =>setFormData({...formData,fullName : e.target.value})}
              />
            </div>
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Email</span>
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Mail className='size-5 text-base-content/40'/>
              </div>
              <input
              type="email"
              className={`input input-bordered w-full pl-10`}
              placeholder='Enter your Email'
              value={formData.email}
              onChange={(e) =>setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Password</span>
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Lock className ="size-5 text-base-content/40"/>
              </div>
              <input
              type= {showPassword ? "text" : "password"}
              className={`input input-bordered w-full pl-10`}
              placeholder='Enter your Password'
              value={formData.password}
              onChange={(e) => setFormData({...formData, password : e.target.value})}
              />
              <button 
              type='button'
              className='absolute inset-y-0 right-0 pr-3 flex items-center'
              onClick={() => setShowPassword(!showPassword)}
              >
               {showPassword ? (
                <EyeOff className='size-5 text-base-content/40'/>
               ) : (
                <Eye className='size-5 text-base-content/40'/> 
               )
               }   
              </button>
            </div>
          </div>
              <button
              type='submit'
              className='btn btn-primary w-full' 
              disabled = {isSigningUp}>
              {isSigningUp ? (
              <>
              <Loader2 className='size-5 animate-spin'/>
              Loading...
              </>
              ) : (
                "Create Account"
              )}
              </button>
        </form>
              <div className='text-center'>
              <p className='text-base-content/60'>
              Already have an account?{" "}
              <Link to="/login" className='link link-primary' >
              Login 
              </Link>
              </p>
              </div>
      </div>
    </div>
    {/* RIGHT SIDE */}
<div className="hidden lg:flex items-center justify-center bg-base-100">
  <div className="backdrop-blur-xl bg-base-200/10 border border-base-300/20 rounded-2xl w-full max-w-md p-6 shadow-xl">

    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
        A
      </div>
      <div>
        <p className="font-semibold text-base-content">KRUP</p>
        <p className="text-xs text-success">Online</p>
      </div>
    </div>

    {/* Chats */}
    <div className="space-y-4">
      {/* Incoming */}
      <div className="flex">
        <div className="bg-base-300/30 backdrop-blur text-base-content px-4 py-2 rounded-2xl rounded-tl-none max-w-[75%]">
          Hey! Did you check the new chat app UI?
        </div>
      </div>

      {/* Outgoing */}
      <div className="flex justify-end">
        <div className="bg-primary text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[75%] shadow-md shadow-primary/30">
          Yes! It looks super clean 
        </div>
      </div>

      {/* Incoming */}
      <div className="flex">
        <div className="bg-base-300/30 backdrop-blur text-base-content px-4 py-2 rounded-2xl rounded-tl-none max-w-[75%]">
          The signup page feels premium now.
        </div>
      </div>

      {/* Outgoing */}
      <div className="flex justify-end">
        <div className="bg-primary text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[75%] shadow-md shadow-primary/30">
          Exactly what we wanted 
        </div>
      </div>
    </div>

    {/* Typing indicator */}
    <div className="flex items-center gap-2 mt-4 text-base-content/50 text-sm">
      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
      <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-150" />
      <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-300" />
      <span className="ml-2">typing...</span>
    </div>
  </div>
</div>

  </div>
  
  
  
}

export default SignUpPage
