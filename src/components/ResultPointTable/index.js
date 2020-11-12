import React from 'react';

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
            entrada1:'08:00',
            saida1:'11:30',
            entrada2:'12:30',
            saida2:'17:10',
            total:'00:10',
            setor:'Desenvolvimento'
        }
    ]
    return(
        <>
            <table>
                <tr>
                    <th>Data</th>
                    <th>Entrada</th>
                    <th>Saída</th>
                    <th>Entrada</th>
                    <th>Saída</th>
                    <th>Total</th>
                    <th>Setor</th>
                </tr>

                {tabela.map((item, index)=>{
                    return(
                        <tr>
                            <th>{item.data}</th>
                            <th>{item.entrada1}</th>
                            <th>{item.saida1}</th>
                            <th>{item.entrada2}</th>
                            <th>{item.saida2}</th> 
                            <th>{item.total}</th>
                            <th>{item.setor}</th>                       
                        </tr> 
                    );   
                })}
            </table>
        </>
    );
}