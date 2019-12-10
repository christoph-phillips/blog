import { createGlobalStyle, keyframes } from 'styled-components'

export const theme = {
    primaryColor: '#1C4C55',
    secondaryColor: '#A3DAE3',
    subtitle: '#26798C',
    text: '#171717',
    quotes: '#2D818F',
    primaryFont: 'Montserrat',
    secondaryFont: 'Open Sans',
    background: '#F9F9F9'
}

export const GlobalStyle = createGlobalStyle`
  h1, h2 {
    color: ${theme.primaryColor};
    font-family: ${theme.primaryFont};
  }
  h3, h4, h5 {
    color: ${theme.subtitle};
    font-family: ${theme.primaryFont};
  }
  p {
    color: ${theme.text};
    font-family: ${theme.secondaryFont};
  }
  blockquote {
    color: ${theme.quotes};
  }
  .post figure {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .post figure figcaption {
    font-size: 14px;
  }
  .post img {
    max-width: 100%;
    width: 600px;
    margin: 0px auto;
  }
  .post h2 {
      margin: 50px 0px;
      text-transform: capitalize;
  }
`

export const animations = {
    fadeIn: keyframes`
    from {
      opacity: 0;
      transform: scale(1.1);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  `
}