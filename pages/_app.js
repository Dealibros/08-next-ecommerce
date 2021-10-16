import '@fortawesome/fontawesome-svg-core/styles.css';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getParsedCookie } from '../util/cookies';

// config.autoAddCss = false;

// change number 1, set the state at the parent.
// need to finish

function MyApp({ Component, pageProps }) {
  const [cartCount, setCartCount] = useState(0);
  console.log(cartCount);

  async function getAllCookies() {
    const currentCookies = (await getParsedCookie('idfromTourSelected')) || [];
    console.log(currentCookies);
    // setCartCount(currentCookies);
    setCartCount(currentCookies.reduce((sum, obj) => sum + obj['amount'], 0));
  }
  console.log(cartCount);

  useEffect(() => {
    getAllCookies();
  }, [cartCount]);

  console.log(cartCount);

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
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto;
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
      <Component
        {...pageProps}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </>
  );
}

export default MyApp;
