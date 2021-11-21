import { css } from '@emotion/react';
import Head from 'next/head';
import image from 'next/image';
import Layout from '../components/Layout';
import Home from './';

const container = css`
  font-family: 'New Tegomin';
  display: flex;
  width: 100%;

  h4 {
    font-size: 1.3em;
    margin-top: 0.9rem;
    margin-bottom: 0.7rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const leftContainer = css`
  margin-left: 8rem;
  width: 60%;
  font-size: 1.1em;
  font-weight: bold;
  input {
    font-size: 1.3em;
    border-radius: 0.4rem;
  }
`;

const rightContainer = css`
  width: 40%;
  margin: 50px 30px 30px 3rem;
  padding-top: 1.5rem;
  > div {
    padding: 60px;
    background: rgb(190, 199, 143);
    border: 2px solid black;
    border-radius: 0.5rem;
    display: flex;
    width: 80%;
  }
  p {
    color: white;
    font-size: 1.3em;
  }
`;

const lastSubContainerLeft = css`
  width: 50%;
  div {
    margin-bottom: 20px;
  }
`;

const lastSubContainerRight = css`
  width: 70%;

  div {
    border-radius: 0.6rem;
    margin-bottom: 20px;
  }
`;

const extendInput = css`
  width: 71%;
`;
const sum = css`
  font-weight: bold;
`;

const inputContainer = css`
  display: flex;
  width: 100%;
`;

const subContainerLeft = css`
  margin-right: 1rem;
`;

const subContainer = css`
  width: 50%;
  margin-right: 10px;
`;

const button = css`
  font-family: 'New Tegomin';
  padding: 13px 30px;
  color: white;
  background: rgb(190, 199, 143);
  border: none;
  font-size: 1em;
  border-radius: 2px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 0.4rem;

  :hover {
    color: gray;
  }
  :active {
    color: gray;
    border: none;
  }
  :focus {
    color: yellow;
    border: none;
  }
`;

function Checkout(props) {
  return (
    <Layout
      Layout
      cartCount={props.cartCount}
      setCartCount={props.setCartCount}
    >
      <Head>
        <title>Payment</title>
      </Head>

      <div css={container}>
        <form css={leftContainer}>
          <div>
            <h4>Personal Details</h4>
            <div css={inputContainer}>
              <form css={subContainerLeft}>
                <form>First Name</form>
                <input id autocomplete="name" required />
                <form placeholder="Dea" />
              </form>
              <form css={subContainer}>
                <form>Last Name</form>
                <input id autocomplete="name" required />
                <form placeholder="Miku" />
              </form>
            </div>
            <form>
              <form>Email adress</form>
              <input css={extendInput} id autocomplete="name" required />
              <form type="email" placeholder="Dea@dea.com" />
            </form>
            <div css={inputContainer}>
              <form css={subContainerLeft}>
                <form>City</form>
                <input id autocomplete="name" required />
                <form placeholder="Viena" />
              </form>
              <form css={subContainer}>
                <form>Postal Code</form>
                <input id autocomplete="name" required />
                <form placeholder="1060" />
              </form>
            </div>
            <form>
              <form>Country</form>
              <input css={extendInput} id autocomplete="name" required />
              <form placeholder="Austria" />
            </form>
          </div>
          <div>
            <h4>Payment Details</h4>
            <form>
              <form>Name on Credit Card</form>
              <form placeholder="Dea Mik" />
              <input css={extendInput} id autocomplete="name" required />
            </form>
            <form>
              <form type="number">Card Number</form>
              <input css={extendInput} id autocomplete="name" required />
              <form placeholder="533344455556666" />
            </form>
            <div css={inputContainer}>
              <form css={subContainerLeft}>
                <form type="number">CVV Number</form>
                <input id autocomplete="name" required />
                <form placeholder="333" />
              </form>
              <form css={subContainer}>
                <form>Expiration Date</form>
                <input id autocomplete="name" required />
                <form type="month" />
              </form>
            </div>
          </div>
          <button
            css={button}
            // onClick={}
          >
            Submit
          </button>
        </form>
        <div css={rightContainer}>
          <div>
            <div css={lastSubContainerLeft}>
              <div>
                <p>
                  Total Amount:
                  {/* {toursTotalPrice(props.tour.amount, props.tour.price)} */}
                  {' €'}
                </p>
                <p>Price Subtotal:</p>
                <p>Shipping Fee:</p>
              </div>
              <p css={sum}>Price Total:</p>
            </div>
            <div css={lastSubContainerRight}>
              <div>Calculations!</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;

export function getServerSideProps(context) {
  // const tourId = context.query.tourId;
  // // console.log(getTourintoCart());
  // const { getTour } = import('../util/database');

  // const tourCart = getTour(tourId);
  // const cookies = context.req.cookies.idfromTourSelected || '[]';
  // const idfromTourSelected = JSON.parse(cookies);
  // console.log(cookies);

  // // to put together the right database and cookie through the id
  // // some will return true(a bolean) as soon as one value fits the written condition.
  // // After the first truthy condition it will stop running.

  // const theCookie = tours.map((tour) => {
  //   const isIdTourSelected = idfromTourSelected.some((tourCookieObj) => {
  //     return Number(tour.id) === tourCookieObj.id;
  //   });
  //   // similar to some, find will return the first truthy value it finds. (only one)
  //   const tourObj = idfromTourSelected.find((cookieObj) => {
  //     return cookieObj.id === Number(tour.id);
  //   });

  //   return {
  //     ...tour,
  //     idfromTourSelected: isIdTourSelected,
  //     amount: isIdTourSelected ? tourObj.amount : 0,
  //   };
  // });

  // const trueCookie = theCookie.filter((cookieObject) => {
  //   return cookieObject.idfromTourSelected === true;
  // });
  // console.log(trueCookie);

  // console.log(theCookie); // shows all the tours

  return {
    props: {
      // tourCart: tourCart,
    },
  };
}
