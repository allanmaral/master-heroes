import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #fff;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background: rgba(9,12,47,1);
    background: linear-gradient(135deg, rgba(9,12,47,1) 0%, rgba(3,54,54,1) 100%);
  }
`;
