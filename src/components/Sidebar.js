import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='wrapper-icon'>
            <Link to="/"><i className="material-icons large icon">search</i></Link>
            <Link to="/bookmarks"><i className="material-icons large icon">star</i></Link>
        </div>
    )
}

export default Sidebar