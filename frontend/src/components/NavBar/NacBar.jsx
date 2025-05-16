import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {useState} from 'react'


export default function NacBar() {
    const [menu,setMenu] = useState('home');
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo'/>
            <ul className="navbar-menu">
                <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</li>
                <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</li>
                <li onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>menu-app</li>
                <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact_us</li>
            </ul>
            <div className="varbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
    }
