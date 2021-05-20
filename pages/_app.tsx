import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
	box-sizing: border-box;
	 -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
	font-family: sans-serif;
	line-height: 1.15;
	-webkit-text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
	-ms-overflow-style: scrollbar;
	-webkit-tap-highlight-color: transparent
}

@-ms-viewport {
	width: device-width
}

article,
aside,
dialog,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
	display: block
}

body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	text-align: left;
	background-color: #fff
}
[tabindex="-1"]:focus {
	outline: 0!important
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 0;
	margin-bottom: .5rem
}

p {
	margin-top: 0;
}


dl,
ol,
ul {
	margin-top: 0;
	margin-bottom: 1rem
}

ol ol,
ol ul,
ul ol,
ul ul {
	margin-bottom: 0
}


b,
strong {
	font-weight: bolder
}

small {
	font-size: 80%
}



a {
	text-decoration: none;
	background-color: transparent;
	-webkit-text-decoration-skip: objects
}



img {
	vertical-align: middle;
	border-style: none
}

svg:not(:root) {
	overflow: hidden
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
