import './style.css'

import React, { useState } from 'react';

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
    const [ponto, setPontos]  = useState([
        {
            data: DComple,
            entrada1:Phoras,
            saida1:Phoras,
            entrada2:Phoras,
            saida2:Phoras,
            total:'20:20',
            setor:'Desenvolvimento'
        },

    ]);

    function handleAddPonto(){
        setPontos([...ponto, 'stru']);
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
                {ponto.map((pont )=> (      
                    <>              
                        <li key={pont.data}>{pont.data}</li>
                        <li id="entrada">{pont.entrada1}</li>
                        <li>{pont.saida1}</li>
                        <li>{pont.entrada2}</li>
                        <li>{pont.saida2}</li>
                        <li id="saida">{pont.total}</li>
                        <li>{pont.setor}</li> 
                    </>                       
                ))}
                </ul>
                </div>
                <button type="button" onClick={handleAddPonto}>Add novo ponto</button>
            </>
        )
    };
/* export default function ResultPointTable(){
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
        },

        {
            data:'12/11/2020',
            entrada1:'08:10',
            saida1:'12:30',
            entrada2:'13:30',
            saida2:'17:40',
            total:'00:30',
            setor:'Desenvolvimento'
        },

        {
            data:'13/11/2020',
            entrada1:'08:10',
            saida1:'12:30',
            entrada2:'13:30',
            saida2:'17:40',
            total:'00:30',
            setor:'Desenvolvimento'
        }
    ]
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

            {tabela.map((item, index)=>{
                return(
                    <div className="detail">
                        <div className="item">{item.data}</div>
                        <div id="entrada" className="item">{item.entrada1}</div>
                        <div className="item">{item.saida1}</div>
                        <div className="item">{item.entrada2}</div>
                        <div className="item">{item.saida2}</div>
                        <div id="saida" className="item">{item.total}</div>
                        <div className="item">{item.setor}</div>
                    </div>
                );
            })}
        </>
    );
}*/


