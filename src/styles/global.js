import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: #E3E6E8;
    }

    body, input, button {
        color: #5C35F7;
        font-size: 5px;
        font-family: 'Open Sans';
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    `;
