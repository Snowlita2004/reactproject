import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Nav() {
    const navigate=useNavigate();
    const handleHome=()=>{navigate("/home")}
    const handleAbout=()=>{navigate("/about")}
  return (
    <div>
        <ul>
            <li onClick={handleHome}>Home</li>
            <li onClick={handleAbout}>About</li>
        </ul>
    </div>
  )
}
