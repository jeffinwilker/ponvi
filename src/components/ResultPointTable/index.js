import './style.css'

import React, { useState } from 'react';

    function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
    }

    function addzmes(p) {      
        p = p + 1        
        return p;
    }

    const data = new Date();
    const dia = addZero(data.getDate());
    const ms = addzmes(data.getMonth());
    const mes = addZero(ms);
    const ano = data.getFullYear();
    const DComple = dia + "/" + mes + "/" + ano;


    const horas = addZero(data.getHours());
    const minutos = addZero(data.getMinutes());
    const Phoras = horas + ":" + minutos;
    
   

export default function ResultPointTable(){
    const [ponto, setpontos] = useState ([ ])

    const [ newPonto ] = ([DComple])

    const [ newPonto1 ] = ([Phoras])

    const [ newPonto2 ] = (['08:40'])

    

    function handleAddPonto(){
        setpontos([ newPonto, newPonto1, newPonto2 ]);
    }

    function handleAddPonto2(){
        setpontos([...ponto, newPonto1 ]);
    }

    function controller(){
        if(handleAddPonto == true){
            handleAddPonto()
        }else{
            handleAddPonto2()
        }
    }

        return (
            <>
                <div className="header">
                    <div className="header">Data</div>
                    <div id="Hentrada"className="header">Entrada</div>
                    <div className="header">Saída</div>
                    <div className="header">Entrada</div>
                    <div className="header">Saída</div>
                    <div id="Hsaida" className="header">Total</div>
                    <div className="header">Setor</div>
                </div>
                <div>               
                    <ul className="detail">
                        {ponto.map((pont, index )=> (                                    
                            <li key={pont}>{pont}</li>                                             
                        ))}
                    </ul> 
                </div>
                <button type="button" onClick={controller}>Add novo ponto</button>
            </>
        )
    };
