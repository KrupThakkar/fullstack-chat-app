import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"
import { Eye, EyeOff, Loader, Loader2, Mail, MessageSquare } from "lucide-react"
import { Link } from "react-router-dom"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData ] = useState({
    email : "",
    password : "",
  })
  const {login , isLoggingIn} = useAuthStore()

  const handleSubmit = async(e) => {
    e.preventDefault()
    login(formData)
  }
  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* left side  */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* logo */}
          <div className="text-center mb-8">
             <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>

          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className=" relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40"/>
                </div>
                <input
                type="email"
                className={`input input-bordered w-full pl-10`}
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email : e.target.value})}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className=" relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40"/>
                </div>
                <input
                type={showPassword ? "text" : "password"}
                className={`input input-bordered w-full pl-10`}
                placeholder="Enter your Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password : e.target.value})}
                />
                <button 
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40"/>
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40"/>
                  )
                  }
                </button>
              </div>
            </div>
            <button 
            type="submit"
            className="btn btn-primary w-full" 
            disabled = {isLoggingIn}>
              {isLoggingIn ? (
                <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="text-center">
            <p className="text-base-content/60">
            Don't have an account ? {" "}
            <Link to={"/signup"} className="link link-primary">
            Create Account
            </Link>
            </p>
          </div>
        </div>
      </div>
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
  )
}

export default LoginPage
