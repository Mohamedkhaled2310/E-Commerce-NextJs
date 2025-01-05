"use client";
import { useState } from "react";
import { toast } from "react-toastify";
const RegisterForm = ()=>{

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCpassword] = useState("");

    const handelSubmitForm = (e:React.FormEvent)=>{
        e.preventDefault();
        if(userName === "") return toast.error("UserName is required");
        if(email === "") return toast.error("Email is required");
        if(password === "") return toast.error("Password is required");
        if(cpassword === "") return toast.error("Confirm Password is required");
        if(password !== cpassword) return toast.error("Passwords doesn't match ");
        console.log({userName,email,password});
    };
    return(
        <form onSubmit={handelSubmitForm} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your userName"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={cpassword}
          onChange={(e)=>setCpassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    );
}


export default RegisterForm;