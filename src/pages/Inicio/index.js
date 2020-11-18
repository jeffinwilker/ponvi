import React from 'react';

import ResultPointTable from '../../components/ResultPointTable';
import Hrtotal from '../../components/TotaldeHr';

export default function Inicio() {
    return(
        <>
            <div>
                <Hrtotal/>
            </div>
            <div className='TituloTi'>
                <tr>
                    <div className='TituloTi2'>
                        <th>Data</th>
                    </div>
                    <div className='TituloTi1'>
                        <th>Entrada</th>
                        <th>Saída</th>
                        <th>Entrada</th>
                        <th>Saída</th>
                    </div>
                    <div className='TableTo1'>
                        <th>Total</th>
                    </div>
                    <div>
                        <th>Setor</th>
                    </div>
                </tr>
            </div>
            <div className="container">
                <ResultPointTable/>                
            </div>
            <div className='Bbutton'>
                <button id='BPonto'>Começar o dia bem :)</button>
            </div>
        </>
    );

}