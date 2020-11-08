import React from 'react';

import { Container, Content } from './styles';

import Home from '../../styles/icons';

export default function Main() {
    return (
        <>
            <Container>
                <h1>
                    <Home />
                    Início
                </h1>
                <h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.747"
                        height="20.738"
                        viewBox="0 0 20.747 20.738"
                    >
                        <g id="graph-pie" transform="translate(-4.627 -4.632)">
                            <path
                                id="Caminho_1"
                                data-name="Caminho 1"
                                d="M19.4,4.633a.37.37,0,0,0-.37.37.312.312,0,0,0,.011.054h-.011v8.779a.37.37,0,0,0,.37.37h8.779v-.011a.321.321,0,0,0,.054.011.37.37,0,0,0,.37-.37,9.3,9.3,0,0,0-9.2-9.2Z"
                                transform="translate(-3.231)"
                                fill="#b8b3d4"
                            />
                            <path
                                id="Caminho_2"
                                data-name="Caminho 2"
                                d="M23.234,16.584a.369.369,0,0,0-.37-.37h-8.07a.37.37,0,0,1-.37-.37V7.8h-.011a.327.327,0,0,0,.011-.054.37.37,0,0,0-.37-.37c-.009,0-.016,0-.025,0v0l-.1,0a9.3,9.3,0,1,0,9.3,9.3c0-.029,0-.059,0-.088,0,0,0-.006,0-.01Z"
                                transform="translate(0 -0.616)"
                                fill="#b8b3d4"
                            />
                        </g>
                    </svg>
                    Acompanhamento
                </h1>
                <h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19.747"
                        height="19.066"
                        viewBox="0 0 19.747 19.066"
                    >
                        <g id="logout-solid" transform="translate(-5 -4)">
                            <path
                                id="Caminho_3"
                                data-name="Caminho 3"
                                d="M17.257,4H6.362A1.362,1.362,0,0,0,5,5.362V21.7a1.362,1.362,0,0,0,1.362,1.362H17.257A1.362,1.362,0,0,0,18.619,21.7V17.619h-6.38a.681.681,0,0,1,0-1.362h6.38V5.362A1.362,1.362,0,0,0,17.257,4Z"
                                transform="translate(0 0)"
                                fill="#b8b3d4"
                            />
                            <path
                                id="Caminho_4"
                                data-name="Caminho 4"
                                d="M27.152,17.2a.681.681,0,0,0-.96.96l2.3,2.254H25v1.362h3.493l-2.3,2.356a.681.681,0,1,0,.96.96l3.977-3.949Z"
                                transform="translate(-6.381 -4.161)"
                                fill="#b8b3d4"
                            />
                        </g>
                    </svg>
                    Sair
                </h1>
                <Content>teste</Content>
            </Container>
        </>
    );
}
