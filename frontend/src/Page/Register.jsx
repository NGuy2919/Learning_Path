import { useState } from "react"

function Register(){

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleRegister = async (e)=>{
    e.preventDefault()

    const res = await fetch("http://localhost:3000/api/auth/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,
        email,
        password
      })
    })

    const data = await res.json()

    if(data.success){
      alert("Register success")
    }else{
      alert(data.message)
    }

  }

  return(
    <div>

      <h2>Register</h2>

      <form onSubmit={handleRegister}>

        <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />

        <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Register</button>

      </form>

    </div>
  )
}

export default Register