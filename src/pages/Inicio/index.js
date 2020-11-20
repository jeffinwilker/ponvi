import React from 'react';

import ResultPointTable from '../../components/ResultPointTable';
import Hrtotal from '../../components/TotaldeHr';
import {ButtonPointRegister} from './style'

export default function Inicio() {
    return(
        <>
            <Hrtotal/>
            <ResultPointTable/>
            <ButtonPointRegister>             
                <span>Registrar ponto</span>
            </ButtonPointRegister>
        </>
    );

}