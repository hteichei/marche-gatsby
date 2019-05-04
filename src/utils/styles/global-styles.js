import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'CustomOne';
      src: url('./fonts/proxima_soft.woff2') format('woff2'),
        url('./fonts/proxima_soft.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    },
    @font-face {
      font-family: 'CustomThree';
      src: url('./fonts/BELLABOO-Regular.woff') format('woff2');
      /* url('./fonts/iowanold_bold.woff') format('woff'); */
      font-weight: normal;
      font-style: normal;
      font-variant: normal;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
      speak: none;
    }
`
