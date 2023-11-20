import axios from 'axios';
import React, { useState } from 'react'

export default function AxiosPut() {

    const [id,setId]=useState("");
    const [name,setName]=useState("");

    const handleIdChange =(e)=>{setId(e.target.value)};
    const handleNameChange =(e)=>{setName(e.target.value)};
    const handleSubmit=()=>
    {
    
    axios.put(`http://localhost:3001/user/${id}`,{name})
    .then((res)=>{console.log(res)
    console.log(res.data);
    })
    .catch((err)=>
    {
        console.error("something went wrong "+err);
    })}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Person ID: 
            <input type="number" name="id" onChange={handleIdChange}></input>
            </label>
            
            <label>New Name: 
            <input type="text" name="name" onChange={handleNameChange}></input>
            </label>
            <button type="submit">Update</button>

        </form>
    </div>
  )
}
