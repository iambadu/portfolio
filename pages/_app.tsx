import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  }
  * {
  font-family: system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,
		Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}