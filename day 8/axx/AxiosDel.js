import axios from 'axios';
import React, { useState } from 'react'

export default function AxiosDel() {

    const[id,setId]=useState("");
    const handleDel=(e)=>
    {
        setId(e.target.value);
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        axios.delete(`http://localhost:3001/user/${id}`)
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log("Something went wrong "+err))

    }
  return (
    <div>
        <form>
            <input type="text" onChange={handleDel}></input>
            <button type="submit" onClick={handleSubmit}>Delete</button>
        </form>
    </div>
  )
}
