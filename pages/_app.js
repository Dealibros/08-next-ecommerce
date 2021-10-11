import '@fortawesome/fontawesome-svg-core/styles.css';
import { css, Global } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import ReactDOM from 'react-dom';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
            width: 100vw;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
              'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
              'Noto Color Emoji';
            font-size: 20px;
            letter-spacing: 1.4;
            word-spacing: 1.4;
            line-height: 1.4;
            color: rgba(0, 0, 0, 0.9);
          }
        `}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} /> // state variable //setstate variable
    </>
  );
}

export default MyApp;
