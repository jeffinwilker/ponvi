import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as HiIcons from 'react-icons/hi';

import {sidebarData} from './SidebarData';
import '../Navbar/styles.css'

export default function Navbar(){
    const [sidebar, SetSidebar] = useState(false);
    const ShowSidebar = ()=>SetSidebar(!sidebar);

    return(
        <>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    {sidebarData.map((item, index)=>{
                        return(
                        <div>
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    {sidebar ? <span/> : <span>{item.title}</span>}
                                </Link>
                            </li>
                        </div>
                        );
                    })}
                </ul>

                <div className='navbar-toggle'>
                    <Link to='#' className="menu-bars" >
                        {sidebar ?
                            <HiIcons.HiArrowCircleRight onClick={ShowSidebar}/> :
                            <HiIcons.HiArrowCircleLeft onClick={ShowSidebar}/>
                        }
                    </Link>
                </div>
            </nav>
        </>
    );
}
