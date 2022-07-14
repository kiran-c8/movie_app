import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'
function Navbar() {

    const navigate = useNavigate();
    const [clicked,setClicked] = useState(false)

    const handleClick = () =>{
        setClicked(!clicked);
    }

 


    return (
        <div>
            <nav className='NavbarItems'>
                <h1 className='navbar-logo' onClick={()=>window.location.reload(navigate('/'))}>Moviebuff</h1>
                <div className='menu-icon' onClick={handleClick}>
                    {clicked?<FontAwesomeIcon className='faTimes' icon={faTimes}/>:<FontAwesomeIcon className='faBars' icon={faBars}/>}
                </div>
                
                <ul className={clicked?'nav-menu active':'nav-menu'}>
                    <li className='nav-links' onClick={()=>window.location.reload(navigate('/'))}>Home</li>
                    <li className='nav-links'>Movies</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar