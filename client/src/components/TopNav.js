import React from 'react'
import { Link, Route } from 'react-router-dom'
import '../styles/nav.css'

const TopNav = () =>{
    return (
		<nav className="nav">
			<a className="router-link no-hover" href="/" ><h1 className="logo-icon">Tompkins<strong>CS</strong> | Quiz Builder</h1></a>
			<ul className="nav-links">
				{/* <li className="nav-item pad"><Link className="router-link" to="/" >Dashboard</Link></li> */}
				{/* <li className="nav-item"><Link className="router-link" to="/">Logout</Link></li> */}
				<Route path="/logout"/>
			</ul>
		</nav>
	)
}

export default TopNav