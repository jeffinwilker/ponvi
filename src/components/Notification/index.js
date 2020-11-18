import React from 'react';

import { IoMdNotifications } from "react-icons/io";


export default function Notifications(){
    const Notifi = [
        {
            Noti: <IoMdNotifications/>
        },
    ]   
    return(        
            <div className="Container">
                {Notifi.map((item) => {
                    return(
                        <div>
                            {item.Noti}
                        </div>
                    );
                 })}
            </div>
         )
}