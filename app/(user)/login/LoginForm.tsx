"use client";
import { useState } from "react";
import { toast } from "react-toastify";
const LoginForm = ()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handelSubmitForm = (e:React.FormEvent)=>{
        e.preventDefault();
        if(email === "") return toast.error("Email is required");
        if(password === "") return toast.error("Password is required");
        console.log({email,password});
    };
    return(
        <form onSubmit={handelSubmitForm} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Log in
        </button>
      </form>
    );
}


export default LoginForm;