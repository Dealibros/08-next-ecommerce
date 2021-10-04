import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';
import { userState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

const heading = css`
  font-family: 'New Tegomin';
  font-size: 2em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  margin-left: 50px;
`;

const tableHeading = css`
  font-family: 'New Tegomin';
  background: rgb(190, 199, 143);
  display: flex;
  justify-content: space-between;
  margin: 50px 50px;
  border-radius: 0.8rem;
  div {
    display: flex;
    color: white;
    font-weight: bold;
    width: 40%;
  }
  p {
    margin-left: 20%;
    margin-right: 20%;
  }
`;

const noItemsContainer = css`
  display: flex;
  color: rgb(190, 199, 143);
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 5em;
`;

const mainContainer = css`
  display: flex;
  position: relative;
  margin-left: 50px;
`;

const container = css`
  display: grid;
  grid-template-columns: 1.4fr 1.8fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  justify-items: stretch;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 80%;
    margin-right: 8%;
  }
  h3 {
    margin-bottom: 0;
  }
  h4 {
    font-size: 1.3em;
    margin: 0 10px 0 0;
  }
  p {
    margin-right: 20px;
    font-size: 1.2em;
    color: rgb(190, 199, 143);
  }
  button {
    font-family: 'New Tegomin';
    margin-right: 20px;
    background: white;
    color: rgb(190, 199, 143);
    padding: 3px 8px;
    font-size: 0.9em;
    border: 2px solid #182b4f;
  }
`;

const subContainer = css`
  width: 100%;
`;

const subContainerRight = css`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  font-size: 1.3em;
`;

const screenreaderSpans = css`
  display: none;
`;

const subTotal = css`
  width: 70%;
  display: flex;
  justify-content: center;
  font-size: 1.3em;
`;

const totalContainer = css`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  margin-bottom: 50px;
  padding: 30px;
  border-top: 2px solid #182b4f;
  span {
    font-size: 1.6em;
    margin-left: 160px;
    margin-right: 50px;
    font-weight: bold;
    color: rgb(190, 199, 143);
  }
`;

const button = css`
  font-family: 'New Tegomin';
  border-radius: 0.8rem;
  padding: 13px 30px;
  color: white;
  background: rgb(190, 199, 143);
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 2px;
  margin-bottom: 50px;
  margin-right: 60px;
  float: right;

  :hover {
    background: #182b4f;
    color: #f39200;
  }
`;

const shoppingText = css`
  font-family: 'New Tegomin';
`;

function ShoppingCart() {
  console.log(Cookies.get('toursSelected'));

  // let toursSelected = getParsedCookie('toursSelected');
  // let toursSelected = Cookies.get('toursSelected');
  // console.log(toursSelected);
  // if (typeof toursSelected === 'undefined') {
  //   toursSelected = [];
  // } else {
  //   toursSelected = toursSelected.tour;

  return (
    <div>
      <Layout>
        <Head>
          <title>Shopping Cart Ecommerce</title>
        </Head>
        <h2 css={heading}>Shopping cart</h2>
        <div css={tableHeading}>
          <div>
            <p>Product</p>
            <p>Description</p>
          </div>
          <div>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
        {/* <div className="zorro" css={elDiv}>
            {toursSelected.map((tour) => {
              return <div>{toursSelected}</div>;
            })}
          </div> */}
        <div css={mainContainer}>
          <div css={totalContainer}>
            <div>
              <span>{/* {totalSum} {' €'} */}</span>
            </div>
          </div>
          <div>
            <Link href="/checkout">
              <a></a>
            </Link>
          </div>
        </div>
        <div data-cy="no-items-in-cart-div" css={noItemsContainer}>
          <div>
            <p css={shoppingText}>
              There are currently no items in your shopping cart.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ShoppingCart;
