import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { useState } from 'react';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

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

// const imageDiv = css`
//   display: block;
//   margin-left: 0 auto !important;
//   margin-right: 0 auto !important;
//   text-align: center;

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

// const button = css`
//   border-radius: 2rem;
//   padding: 0.6rem;
//   background-color: beige;
// `;

const price = css`
  font-size: 1rem;
`;

export default function Tour(props) {
  function addTours(e) {
    console.log(props.tour.id);
    let toursSelected = getParsedCookie('toursSelected');

    if (typeof toursSelected === 'undefined') {
      // No tours have been saved yet, we create array with selected tour
      toursSelected = [
        {
          name: props.tour.name,
          destination: props.tour.destination,
          id: props.tour.id,
          price: props.tour.price,
        },
      ];
    } else {
      // There are already tours saved in the cookies,
      // we add the current one to the list
      toursSelected = toursSelected.tours;
      toursSelected.push({
        name: props.tour.name,
        destination: props.tour.destination,
        id: props.tour.id,
        price: props.tour.price,
      });
    }
    console.log(toursSelected);
    Cookies.set('toursSelected', JSON.stringify({ tours: toursSelected }));
    console.log(Cookies.get('toursSelected'));
  }

  return (
    <div>
      <Layout>
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
            <button onClick={addTours}>Click</button>
          </span>
        </div>
      </Layout>
    </div>
  );
}

// need to understand better

export async function getServerSideProps(context) {
  const { getTour } = await import('../../util/database');

  const tour = await getTour(context.query.tourId);

  console.log(getTour);

  // const singleTour = tours.find((tour) => {
  //   return idFromTour === tour.id;
  // });

  return {
    props: {
      tour,
    },
  };
}
