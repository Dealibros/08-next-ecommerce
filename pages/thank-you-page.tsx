import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const thankyou = css`
  font-family: 'New Tegomin';
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;
    z-index: 1;
  }

  p {
    margin: 0;
    color: white;
    font-size: 2.5em;
  }

  button {
    font-family: 'New Tegomin';
    background: none;
    font-size: 3em;
    border: white 1px solid;
    padding: 15px 25px;
    margin-top: 20px;
    border-radius: 1rem;
  }

  button:hover {
    border: rgb(190, 199, 143);
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;
const text = css`
  color: gray !important;
`;

const background = css`
  background: rgb(190, 199, 143);
  width: 100vw;
  height: 100vh;
  position: absolute;
  opacity: 81%;
`;

export default function Thankyou() {
  return (
    <div css={thankyou}>
      <div css={background} />
      <Head>
        <title>Thank you</title>
      </Head>
      <div>
        <p css={text}>Thank you very much for your order.</p>
        <button>
          <Link href="/tours">
            <a> Back to tours</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
