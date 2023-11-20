import axios from 'axios';
import React, { useState } from 'react'

export default function AxiosPost() {
    const [name,setName]=useState("");
    const handleChange=(e)=>{setName(e.target.value)}
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        axios.post(`http://localhost:3001/user`,{name})
        .then((res)=>{console.log(res.data);})
        .catch((err)=>{
            console.log("Something went wrong"+err);
        })
    }   
 
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
