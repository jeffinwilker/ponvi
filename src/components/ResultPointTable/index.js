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
        },

        {
            data:'12/11/2020',
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
                <div className="header">Entrada</div>
                <div className="header">Saída</div>
                <div className="header">Entrada</div>
                <div className="header">Saída</div>
                <div className="header">Total</div>
                <div className="header">Setor</div>
            </div>
        
            {tabela.map((item, index)=>{
                return(
                    <div className="detail">
                        <div className="item">{item.data}</div>
                        <div className="item">{item.entrada1}</div>
                        <div className="item">{item.saida1}</div>
                        <div className="item">{item.entrada2}</div>
                        <div className="item">{item.saida2}</div>
                        <div className="item">{item.total}</div>
                        <div className="item">{item.setor}</div>
                    </div>
                );
            })}
        </>
    );
}