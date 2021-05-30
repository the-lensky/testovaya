import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='wrapper-icon'>
            <NavLink activeClassName='activeIcon' exact to="/"><i className="material-icons large icon">search</i></NavLink>
            <NavLink activeClassName='activeIcon' to="/bookmarks"><i className="material-icons large icon">star</i></NavLink>
        </div>
    )
}

export default Sidebar