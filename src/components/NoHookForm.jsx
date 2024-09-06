import { useState } from "react";

export default function NoHookForm() {

const [name, setName] = useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");





  return (
    <div>
      <form action="">
        <label htmlFor="">Name</label>
        <input
         type="text"
         placeholder="Name"
         value= {name}
         onChange={(e)=>setName(e.target.value)}
        
        />
        <label htmlFor="">Email</label>
        <input 
        type="email"
        placeholder="email"
        name={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      </form>
    </div>
  )
}
