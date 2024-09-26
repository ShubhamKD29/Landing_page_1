import React from 'react'
import Mahindra_logo from '../../assets/Mahindra_logo.png'
import './Navigation.css'

function Navigationbar() {
    return (
        <div>
            <nav className='navbar'>
                <ul className='lists'>
                    <li><img  className='logo' src={Mahindra_logo} alt="" /></li>
                    <li>Home</li>
                    <li>About</li>
                    <li className='special-lists'>Contact Us</li>
                    <li className='special-lists'>Test Drive</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigationbar
