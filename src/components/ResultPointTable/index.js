import React from 'react';

import './style.css'

export default function ResultPointTable(){
    //Esse array vai ser preenchido ao consultar a API
    const tabela = [
        {
            data:'11/11/2020',
            entrada1:'08:00',
            saida1:'11:30',
            entrada2:'12:30',
            saida2:'17:20',
            total:'00:20',
            setor:'Desenvolvimento'
        }
    ]
    return(
        <>
            <div className='TableCo'>
                {tabela.map((item, index)=>{
                    return(
                    <>
                        <div>
                            <tr>
                                <th>{item.data}</th>
                            </tr>  
                        </div>
                        <div className='TableCoPo'>
                            <tr>
                                <th>{item.entrada1}</th>
                                <th>{item.saida1}</th>
                                <th>{item.entrada2}</th>
                                <th>{item.saida2}</th> 
                            </tr>
                        </div>
                        <div className='TableTo'>
                            <tr>
                                <th>{item.total}</th>
                            </tr>
                        </div>
                        <div>
                            <tr>
                                <th>{item.setor}</th>                       
                            </tr> 
                        </div>
                    </>    
                    );   
                })}
            </div>
        </>
    );
}