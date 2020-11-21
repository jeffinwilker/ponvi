import React from 'react';

import './styles.css';

import * as CgIcons from 'react-icons/cg'

export default function HrTotal(){
    
    const  TOTALHORA = '002:50';

    return(
        <div className="Titotal">
            <div className="TiHrTotal">
                <>  
                    <div className="ToIcon">
                        <CgIcons.CgTimelapse/>
                    </div>
                    <span>{TOTALHORA}</span>
                </>
            </div>
        </div>
    );
}