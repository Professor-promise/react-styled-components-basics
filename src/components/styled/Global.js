import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;

    }

    body {
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        /* font-size: 1.5rem; */
        background: ${({ theme }) => theme.colors.body};
        
        h1 {
            font-size: 3rem;
            font-weight: 600;
            
        }
        
        p {
            opacity: 0.6;
            line-height: 1.5;
        }
    }
`;

export default GlobalStyles;
