import React from 'react';

import ResultPointTable from '../../components/ResultPointTable';
import Hrtotal from '../../components/TotaldeHr';
// import {ButtonPointRegister, Dbot} from './style';

export default function Inicio() {
    return(
        <>
            <Hrtotal/>
            <ResultPointTable/>
            {/*<Dbot>
                <ButtonPointRegister>
                    <span>Começar bem :)</span>
                </ButtonPointRegister>
            </Dbot>*/}
        </>
    );
}
