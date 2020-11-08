import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as BsIcons from 'react-icons/bs'

import {sidebarData} from './SidebarData'
import './style.css'

export default function Navbar(){
    const [sidebar, SetSidebar] = useState(false);
    const ShowSidebar = ()=>SetSidebar(!sidebar);

    return(
        <>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    {sidebarData.map((item, index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    {sidebar ? <span/> : <span>{item.title}</span>}
                                </Link>
                            </li>
                        );
                    })}

                    <li className='navbar-toggle'>
                        <Link to='#' className="menu-bars">
                            {sidebar ? 
                                <BsIcons.BsBoxArrowRight onClick={ShowSidebar}/> : 
                                <BsIcons.BsBoxArrowLeft onClick={ShowSidebar}/>
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}