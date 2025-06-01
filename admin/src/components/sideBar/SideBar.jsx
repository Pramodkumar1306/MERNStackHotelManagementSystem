import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets.js'
import { NavLink } from 'react-router-dom'
export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className="sideBar-options">
                <NavLink to='/add' className="sideBar-option">
                    <img src={assets.add_icon} alt="" />
                    <p>Add Items</p>
                </NavLink >
                <NavLink to='/list' className="sideBar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/order' className="sideBar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>Orders</p>
                </NavLink>
            </div>
            
        </div>
    )
}
