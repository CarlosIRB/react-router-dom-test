
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    //navbar
    <div>
        <ul>
            <li><NavLink className={(isActive)=>{
                return isActive ? 'active' : 'hover'
            }} to="/">Home</NavLink></li>
            <li><NavLink className={(isActive)=>{
                return isActive ? 'active' : 'hover'
            }} to="/users">Users</NavLink></li>
            <li><NavLink className={(isActive)=>{
                return isActive ? 'active' : 'hover'
            }} to="/about">About</NavLink></li>
            <li><NavLink className={(isActive)=>{
                return isActive ? 'active' : 'hover'
            }} to="/dashboard">Dashboard</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar