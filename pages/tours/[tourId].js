import { css } from '@emotion/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import {
  CreateCookieArray,
  findTourAndIncrementAmountCount,
  getParsedCookie,
  setParsedCookie,
} from '../../util/cookies';

const title = css`
  text-align: center;
  font-family: 'New Tegomin';
`;

const imageDiv = css`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: horizontal;
  margin-left: auto !important;
  margin-right: auto !important;
  text-align: center;
  height: 85vh;
  width: 60vw;
`;

const image = css`
  border-radius: 20rem;
  display: inline-block;
  vertical-align: top;
`;

const description = css`
  text-align: center;
  font-family: 'New Tegomin';
  font-size: 1.4rem;
`;

const destination = css`
  text-align: center;
`;

const text = css`
  height: 30rem;
  width: 30rem;
  padding: 3rem -3rem 1rem -3rem;
  margin-left: 2rem;
`;

const price = css`
  font-size: 1rem;
`;

export default function Tour(props) {
  // UseState for idfromTourSelected
  const [idfromTourSelected, setIdfromTourSelected] = useState(
    getParsedCookie('idfromTourSelected') || [],
  );
  // idfromTourSelected = Cookie with Only Amount and Id

  // Finds search for the first element in the provided array that satisfies the provided testing function.In this case the same ID.
  // props.tour.Id = Id from Cookie from the Database.
  console.log(idfromTourSelected);
  // const cookieWithSame = Object.keys(idfromTourSelected);
  const cookieWithSameId = idfromTourSelected.find(
    (cookieObj) => cookieObj.id === props.tour.id,
  );
  console.log(cookieWithSameId);
  // -------------------------------------------------------
  // If the cookie is empty = 0, if not = amount

  const initialAmount = cookieWithSameId ? cookieWithSameId.newAmount : 0;

  // UseState for amount (items in Cart) //Takes the intial amount from up.

  const [newAmount, setNewAmount] = useState(initialAmount);

  // ----------------------------------------------------------------

  function CreateCookie() {
    const idfromTourSelectedArray = getParsedCookie('idfromTourSelected') || [];
    window.location.reload();

    // Creates a new cookie with the values added from the other cookie, amount and Id
    const idfromTourSelectedPlus = CreateCookieArray(
      idfromTourSelectedArray,
      props.tour.id,
      () => setNewAmount(0),
    );

    setParsedCookie('idfromTourSelected', idfromTourSelectedPlus);
    setIdfromTourSelected(idfromTourSelectedPlus);

    const currentCookie = getParsedCookie('idfromTourSelected') || [];

    // 2. Get the object into the array
    const updateTour = findTourAndIncrementAmountCount(
      currentCookie,
      props.tour.id,
    );
    console.log(updateTour); // adds the id and amount

    // 3. set the new version of the array
    setParsedCookie('idfromTourSelected', currentCookie);
    console.log(currentCookie); // shows all tours with only amount and id
    setNewAmount(updateTour.newAmount);
    console.log(props.cartCount); // shows the sum of all amounts. (what we want to display)

    console.log(newAmount);
    console.log(props.cartCount);
    // props.setCartCount = idfromTourSelected.reduce(
    //   (sum, obj) => sum + obj['amount'],
    //   0,
    // );
    console.log(props.CartCount);
    // setCartCount(currentCookie.amount);
  }

  return (
    <div>
      <Layout cartCount={props.cartCount} setCartCount={props.setCartCount}>
        <Head>
          <title>Tour Ecommerce</title>
        </Head>
        <div css={imageDiv}>
          <div>
            <img
              css={image}
              src={`/images/${props.tour.img}.jpg`}
              alt="Logo"
              width="470"
              height="480"
            />
          </div>
          <span css={text}>
            <h1 css={title}>Tour"{props.tour.name}"</h1>
            <h3 css={destination}>{props.tour.destination}</h3>
            <p css={description}>{props.tour.description} </p>
            <h5>{props.tour.stDate}</h5>
            <h5>{props.tour.duration}</h5>
            <h4 css={price}>{props.tour.price}€</h4>
            <button onClick={CreateCookie}>Add to Cart</button>
          </span>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getTour } = await import('../../util/database');

  const tour = await getTour(context.query.tourId);
  // console.log(tour);
  // console.log(context.query.tourId);

  // const singleTour = tours.find((tour) => {
  //   return idFromTour === tour.id;
  // });

  return {
    props: {
      tour,
    },
  };
}
