import React from 'react';

import Profile1 from '../../assets/Profile1.jpg';

import Notifications from '../Notification'

import './styles.css'


export default function Profile(){
    const profile = {
                        image: <img src={ Profile1 } alt="Jefferson"/>
                    }
    return(
        <>
            <div className="Container">
                <div className="Content">
                    <div>
                        <span> Sistema de Ponto </span>
                    </div>
                    <div className="IconProfile">
                        <Notifications/>
                        {/* <IoMdNotifications/> */}
                        <div>{profile.image}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

