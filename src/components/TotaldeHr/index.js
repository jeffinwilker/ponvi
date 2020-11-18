import React from 'react';

import './styles.css';

import * as CgIcons from 'react-icons/cg'

export default function HrTotal(){
    //Esse array Valor da hora total.
    const horaTotal = [
        {
            HoraTotal:'002:55'
        }
    ]
    return(
        <div className="Titotal">
            <div className="TiHrTotal">
                <>  
                    <div className="ToIcon">
                        <CgIcons.CgTimelapse/>
                    </div>
                    {horaTotal.map((item)=>{
                        return(                           
                            <span>{item.HoraTotal}</span>                                               
                        );   
                    })}
                </>
            </div>
        </div>
    );
}