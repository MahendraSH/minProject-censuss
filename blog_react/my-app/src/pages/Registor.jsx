import React, { useState } from "react";
const Registor = () => {
  const [email,setEmail]=useState("");
  
  const [password,setPassword]=useState("");

  const handleSubmit =  async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/register",{
      method:"POST",
      
      headers:{
        "Content-Type":"application/json"
        
      },
      body:JSON.stringify({
        
        email,
        password
        
      })
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    }
    )
  };
  return (
    <div className=" mb-8 flex flex-col items-center input-group input-group-vertical content-center">
      <h1 className="text-center font-semibold  p-2 rounded bg-gray-100 w-4/6 pt-5 mt-4">Registor Page </h1>
      <form
        className="input-group input-group-vertical content-center  w-4/6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="input text-center"
        />

        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="input text-center "
        />

        <input
          type="submit"
          value="Registor"
          name="Registor"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default Registor;
