import { css } from '@emotion/react';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { isDynamicRoute } from 'next/dist/shared/lib/router/utils';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import findTourAndIncrementAmountCount, {
  getParsedCookie,
  setParsedCookie,
} from '../util/cookies';
import { incrementTour } from '../util/PlusMinusInfoCookie';
import { totalCartSum, toursTotalPrice } from '../util/totalCartSum';
import Tours from './tours';

const main = css`
  margin-left: auto;
  margin-right: auto;
  width: 85%;
`;
const mainBody = css`
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
`;

const title = css`
  text-align: center;
  font-family: 'New Tegomin';
  font-size: 2em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  margin-left: 50px;
`;

const titleOfMain = css`
  display: grid;
  grid-template-columns: 0.4fr 1.8fr 0.6fr 1fr 0.4fr;
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: center;
  gap: 40px;
  text-align: center;
  font-family: 'New Tegomin';
  margin-right: auto;
  margin-left: auto;
  padding-right: 8rem;
  padding-left: 10rem;
  background: rgb(190, 199, 143);
  display: flex;
  justify-content: space-between;
  border-radius: 0.8rem;
  max-width: 90%;
  div {
    display: flex;
    color: white;
    font-weight: bold;
  }
  img {
    padding-left: 0 !important;
  }
`;

const tourBox = css`
  display: grid;
  font-size: 1rem;
  color: white;
  text-align: center;
  font-family: 'New Tegomin';
  margin-right: auto;
  margin-left: auto;
  background: rgb(190, 199, 143);
  display: flex;
  margin: 50px 50px;
  border-radius: 0.8rem;
  padding-right: 3rem;
  img {
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem !important;
  }
`;

const noItemsContainer = css`
  color: rgb(190, 199, 143);
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 5em;
  text_align: right;
`;

const container = css`
  max-width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 0.6fr 0.6fr;
  grid-template-rows: 1fr;
  justify-items: stretch;
  align-items: center;
  img {
    width: 70%;
    margin-right: 0.3rem;
  }
`;

const subContainer = css`
  width: 100%;
`;

const buttonsContainer = css`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-radius: 1rem;
  /* font-size: 1.3em; */
`;

const buttonspan = css`
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
  border-radius: 1 rem;
  color: white;
  background: rgb(190, 199, 143);
  border: none;
  font-weight: bold;
  margin-right: 0.6rem;
  margin-left: 0.6rem;
  padding: 3px 8px;
  font-size: 0.9em;
  border: 2px solid gray;

  :hover {
    background: gray;
    color: #f39200;
  }
`;

const buttonCheckout = css`
  font-family: 'New Tegomin';
  border-radius: 1 rem;
  color: white;
  background: rgb(190, 199, 143);
  border: none;
  font-weight: bold;
  margin-right: 0.6rem;
  margin-left: 0.6rem;
  padding: 3px 8px;
  font-size: 0.9em;
  border: 2px solid gray;
  text-align: right;
`;

const buttondelete = css`
  font-family: 'New Tegomin';
  border-radius: 1rem;
  color: white;
  background: rgb(190, 199, 143);
  border: none;
  font-weight: bold;
  border-radius: 2px;
  margin-left: 20px;
  padding: 3px 8px;
  font-size: 0.9em;
  border: 2px solid gray;
`;

const amount = css`
  text-align: center;
`;

const shoppingText = css`
  font-family: 'New Tegomin';
  text-align: right;
  margin-right: 0;
`;

const tourPrice = css`
  text-align: center;
`;

function AddtoShoppingCart(props) {
  let newCookie = getParsedCookie('idfromTourSelected');

  if (typeof newCookie === 'undefined') {
    newCookie = [];
  } else {
    newCookie = newCookie.id;
  }
  const [activeTours, setActiveTours] = useState(props.tours);
  console.log(newCookie);
  return (
    <div>
      <Layout>
        <Head>
          <title>Shopping Cart Ecommerce</title>
        </Head>
        <div css={main}>
          <h2 css={title}>Shopping cart</h2>
          <div css={titleOfMain}>
            <div>
              <p>Tour</p>
            </div>
            <div>
              <p>Quantity</p>
            </div>
            <div>
              <p>Subtotal</p>
            </div>
          </div>
          <div css={mainBody}>
            <div>
              {activeTours.map((tour) => {
                return (
                  <div css={container} key={`tour-li-do-${tour.id}`}>
                    <div css={tourBox}>
                      <img
                        src={`/images/${tour.img}.jpg`}
                        alt="Logo"
                        width="170"
                        height="250"
                      />
                      <h3>
                        {tour.name}
                        <br />
                        {tour.destination}
                      </h3>
                      <br />
                      <h3>{tour.price}</h3>
                    </div>
                    <div>
                      <div css={buttonsContainer}>
                        <button
                          css={button}
                          onClick={() => {
                            incrementTour(tour.id);
                            const currentPropTour = props.tours.find(
                              (t) => t.id === tour.id,
                            );
                            currentPropTour.amount -= 1;
                            // setActiveTours(props.tours);
                            setActiveTours([...props.tours]);
                            console.log(props.tours);
                            // check for refresh page
                          }}
                        >
                          <FontAwesomeIcon
                            size="xs"
                            icon={faMinus}
                            aria-hidden="true"
                            title="Substract item"
                          />
                          <span css={buttonspan}>Substract item</span>
                        </button>

                        <h2 css={amount}>{tour.amount}</h2>

                        {/* {tours.find((product) => product.id === item.id)?.quantity} */}

                        <button
                          css={button}
                          onClick={() => {
                            incrementTour(tour.id);
                            const currentPropTour = props.tours.find(
                              (t) => t.id === tour.id,
                            );
                            currentPropTour.amount += 1;
                            // setActiveTours(props.tours);
                            setActiveTours([...props.tours]);
                            console.log(props.tours);
                            // check for refresh page
                          }}
                        >
                          <FontAwesomeIcon
                            size="xs"
                            icon={faPlus}
                            aria-hidden="true"
                            title="Add item"
                          />
                          <span css={buttonspan}>Add item</span>
                        </button>
                        <button
                          css={buttondelete}
                          // id={tour.id}

                          onClick={() => {
                            incrementTour(tour.id);
                            const currentPropTour = props.tours.find(
                              (t) => t.id === tour.id,
                            );
                            currentPropTour.amount += 1;
                            // setActiveTours(props.tours);
                            setActiveTours([...props.tours]);
                            console.log(props.tours);
                            // check for refresh page
                          }}
                          // onClick={(e) => {
                          //   console.log('DELETE');
                          // Cookies.remove;
                          // setTourCart(deleteTour(tour.id));
                          // onClick={() => {
                          //   const arr = setParsedCookie(tour);
                          // console.log(arr);
                          // console.log(tour);
                          // const deleting = tour.some((id) => {
                          //   return id === Number(tour.id);
                          // });
                          // const tourie = getParsedCookie('tour');
                          // console.log(tourie);
                          // tour.splice(0, 1);
                          // props.setShoppingCart(removeProductById(item.id));
                          // setFinalShoppingCartArray(
                          //   finalShoppingCartArray.filter(
                          //     (product) => product.id !== item.id,
                          //   ),
                          // );
                          // }}
                          //                         export function removeProductById(productId) {
                          // const newCookieValue = [...getShoppingCartCookieValue()];
                          // const productIdInCookie = newCookieValue.find((p) => p.id === productId);

                          // if (productIdInCookie) {
                          //   newCookieValue.splice(productIdInCookie, 1);
                          // } else {
                          //   return newCookieValue;
                          // }

                          // cookies.set('quantity', newCookieValue);
                          // return newCookieValue;
                        >
                          <FontAwesomeIcon
                            size="sm"
                            icon={faTrashAlt}
                            aria-hidden="true"
                            title="Delete item"
                          />{' '}
                          <span css={buttonspan}>Delete item</span>
                        </button>
                      </div>
                    </div>
                    <div css={tourPrice}>
                      <h4>{toursTotalPrice(tour.amount, tour.price)}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div css={noItemsContainer}>
            <div>
              <div css={totalContainer}>
                <div>
                  <span>
                    {console.log(props.tours)}
                    {totalCartSum(props.tours)} {' €'}
                  </span>
                </div>
              </div>
              <button css={buttonCheckout}>Check Out</button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getTourintoCart } = await import('../util/database');

  const tours = await getTourintoCart();

  const cookies = context.req.cookies.idfromTourSelected || '[]';
  const idfromTourSelected = JSON.parse(cookies);
  // console.log(cookies);

  // to put together the right database and cookie through the id
  // to put together the right database and cookie through the id
  // some will return true(a bolean) as soon as one value fits the written condition.
  //   // After the first truthy condition it will stop running.

  const theCookie = tours.map((tour) => {
    const isIdTourSelected = idfromTourSelected.some((tourCookieObj) => {
      return Number(tour.id) === tourCookieObj.id;
    });
    // similar to some, find will return the first truthy value it finds. (only one)
    const tourObj = idfromTourSelected.find((cookieObj) => {
      return cookieObj.id === Number(tour.id);
    });

    // console.log(tourObj);
    // console.log(idfromTourSelected);
    // const removeFalsy = idfromTourSelected.filter((values) => {
    //   return ((value)  !!value);
    // });

    // const removeFalsy = idfromTourSelected.filter((idfromTourSelected)  => Boolean(true))  {
    //   return
    // }
    // console.log(removeFalsy);
    // const trueInCart = idfromTourSelected.find((cookieObj) => {
    //   return cookieObj.idfromTourSelected === 'true';
    // });

    // const trueInCart = idfromTourSelected.filter((idfromTourSelected === "true") => {
    //   return trueInCart;
    // });

    return {
      ...tour,
      idfromTourSelected: isIdTourSelected,
      amount: isIdTourSelected ? tourObj.amount : 0,
    };
  });

  const trueCookie = theCookie.filter((cookieObject) => {
    return cookieObject.idfromTourSelected === true;
  });
  console.log(trueCookie);

  // console.log(theCookie); // shows all the tours

  // console.log(idfromTourSelected);
  // const reqCookie = JSON.parse(context.req.cookies.toursSelected);
  // console.log(theCookie);

  return {
    props: {
      tours: trueCookie,
    },
  };
}
export default AddtoShoppingCart;

//     // const trueInCart = idfromTourSelected.filter((idfromTourSelected === "true") => {
//     //   return trueInCart;
//     // });
//     // if (isIdTourSelected === true) {
//     //   console.log(idfromTourSelected);
