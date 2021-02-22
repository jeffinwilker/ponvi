import './style.css'

import React, { useState } from 'react';
import  ButtonPoint  from '../ButtonPoint'

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
    }

    function mess(p) {      
        p = p + 1        
        return p;
    }

    const data = new Date();
    const dia = addZero(data.getDate());
    const ms = mess(data.getMonth());
    const mes = addZero(ms);
    const ano = data.getFullYear();
    const DComple = dia + "/" + mes + "/" + ano;


    const horas = addZero(data.getHours());
    const minutos = addZero(data.getMinutes());
    const Phoras = horas + ":" + minutos;

    export default function ResultPointTable(){
    //Esse array vai ser preenchido ao consultar a API

    const [ponto, setPontos]  = useState( [
        {
            data: DComple,
            entrada1: Phoras,
            saida1: Phoras,
            entrada2: Phoras,
            saida2: Phoras,
            total:'00:20',
            setor:'Desenvolvimento'
        }
    ]
      
    );

  
    
    
   function handleAddPonto(){
        setPontos([...ponto, setPontos]);
    }


    return(
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

            {ponto.map((pont, index)=>{
                return(
                    <div key={index}className="detail">
                        <div className="item">{pont.data}</div>
                        <div id="entrada" className="item">{pont.entrada1}</div>
                        <div className="item">{pont.saida1}</div>
                        <div className="item">{pont.entrada2}</div>
                        <div className="item">{pont.saida2}</div>
                        <div id="saida" className="item">{pont.total}</div>
                        <div className="item">{pont.setor}</div>
                    </div>
                );
            })}
                <button onClick={() => setPontos(ponto)}>teste</button>
                < ButtonPoint onClick={handleAddPonto} />
        </>    
    );
}