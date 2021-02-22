import './style.css'

import React, { useReducer } from 'react';

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
    
    const initialState = {
        data: [],
        entrada1: [], 
        saida1: [],
        entrada2: [],
        saida2: [],
        total:[],
        setor:[]
    }

    function reducer(state, action){
        switch(action.type) {
            case 'entrada':
                return {...state, data: state.data = DComple, entrada1: state.entrada1 = Phoras, total: state.total = 'total', setor: state.setor = 'Marketing'}
            case 'saida':
                return {...state, saida: state.saida1 = Phoras}
                default:
                    return state
            case 'entrada2':
                return {...state, entrada2: state.entrada2 = Phoras}
        }
    }
    
    export default function ResultPointTable(){
        const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
            <div className="header">
                <div className="header">Data</div>
                <div id="Hentrada"className="header">Entrada</div>
                <div className="header">Saida</div>
                <div className="header">Entrada</div>
                <div className="header">Saida</div>
                <div id="Hsaida" className="header">Total</div>
                <div className="header">Setor</div>
            </div>

            <div className="detail">
                <div>{state.data}</div>
                <div>{state.entrada1}</div>
                <div>{state.saida1}</div>
                <div></div>
                <div></div>
                <div>{state.total}</div>
                <div>{state.setor}</div>
            </div>
            <div className="Bu">
                <button className="Bbutton"
                    onClick={() => dispatch({type: 'entrada'})}
                    
                >Entrada</button>
                <button className="Sbutton"
                    onClick={() => dispatch({type: 'saida'})}
                >Saida</button>                
            </div>
        </>    
    );
}