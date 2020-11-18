import React from 'react';

import Profile1 from '../../assets/Profile1.jpg';

import Notifications from '../Notification'

import './styles.css'


export default function Profile(){
    const profile = [
        {
            perfil: <img src={ Profile1 } alt="jefferson"/>           
        }
    ]
    return(
        <>
            <div className="Container">
                 {profile.map((item) =>{
                     return(
                        <>  
                            <div className="Content">
                                <div>   
                                    <span> Sistema de Ponto </span> 
                                </div>
                                <div className="IconProfile">
                                    <Notifications/>
                                    {/*<IoMdNotifications/>*/}
                                    <div>{item.perfil}</div>
                                </div>  
                            </div> 
                        </>           
                     );        
                })}
            </div>
        </>
    );
}

