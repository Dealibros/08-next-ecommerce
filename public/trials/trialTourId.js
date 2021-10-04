import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import { useState } from 'react';
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
  // to get the url query in the frontend

  // const router = useRouter()
  // const { tour } = router.query;

  // if (typeof window !== 'undefined') {

  //   console.log(window.localStorage);
  //   // }
  // }

  // seems to get the information from the cookie?
  // const [following, setFollowing] = useState(getParsedCookie('following') || []);
  // [5,7]
  // [{id: 5, clapCount:13}, {id: 7, clapCount:0} ]

  // const initialClapCount = following.find((cookieObj)=>cookieObj.id === props.user.id).clapCount

  // const userCookieObject = following.find(
  //   (cookieObj) => cookieObj.id === props.tour.id,
  // );

  // const initialClapCount = userCookieObject ? userCookieObject.clapCount : 0;

  // const [clapCount, setClapCount] = useState(initialClapCount);

  const [amountofTours, setAmountofTours] = useState(
    getParsedCookie('toursSelected') || [],
  );

  function followClickHandler() {
    // 1. check the current state of the cookie
    const currentCookie = getParsedCookie('toursSelected') || [];
    console.log(currentCookie);
    // [5,7]
    // [{id: 5, clapCount:13}, {id: 7, clapCount:0} ]

    // 2 . update the cookie add if is not htere, remove if its there

    // const isUserFollowed = currentCookie.some((id) => {
    //   return id === Number(props.singleUser.id); // id that comes from the URL
    // });

    // let newCookie;
    // if (isUserFollowed) {
    //   // remove the user
    //   newCookie = currentCookie.filter(
    //     (id) => id !== Number(props.singleUser.id),
    //   );
    //   setClapCount(0);
    // } else {
    // add the userdev
    // newCookie = [...currentCookie, Number(props.singletour.id)]; clapCount: 0 }];
    //   }
    // }
  }

    // 3.update state

    // setParsedCookie('following', newCookie);
    // setFollowing(newCookie);

    // function clapClickHandler() {
    // add 1 to the clap property
    // 1. get old version of the array
    // const currentCookie = getParsedCookie('following') || [];
    // 2. get the object in the array
    // const cookieObjFound = currentCookie.find(
    //   (cookieObj) => cookieObj.id === props.user.id,
    // );
    // cookieObjFound.clapCount += 1;
    // 3. set the new version of the array
    // setParsedCookie('following', currentCookie);
    // setClapCount(cookieObjFound.clapCount);

    function addTours(e) {
      console.log(props.singleTour.id);
      // Cookies.set('bla', 0);
      let toursSelected = Cookies.get('toursSelected');

      // if (typeof toursSelected === 'undefined') {
      toursSelected = [
        {
          name: props.singleTour.name,
          destination: props.singleTour.destination,
          id: props.singleTour.id,
          price: props.singleTour.price,
        },
      ];
    }

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
              src={props.singleTour.img}
              alt="Logo"
              width="470"
              height="480"
            />
          </div>
          <span css={text}>
            <h1 css={title}>Tour"{props.singleTour.name}"</h1>
            <h3 css={destination}>{props.singleTour.destination}</h3>

            <p css={description}>{props.singleTour.description} </p>
            <h5>{props.singleTour.stDate}</h5>
            <h5>{props.singleTour.duration}</h5>
            <h4 css={price}>{props.singleTour.price}€</h4>
            <button onClick={addTours}>Click</button>

            {/* <button css={button} onClick={followClickHandler}>
              {following.some((cookieObj) => props.user.id === cookieObj.id)
                ? 'unfollow'
                : 'follow'}
            </button> */}
            {/* {following.some((cookieObj) => props.user.id === cookieObj.id) ? (
              <>
                <div>Clap: {clapCount}</div>
                <button onClick={clapClickHandler}>Clap me</button>
              </>
            ) : null} */}
          </span>
        </div>
      </Layout>
    </div>
  );
}

// need to understand better

export async function getServerSideProps(context) {
  const { tours } = await import('../../util/database');

  //   const user = await getUser(context.query.userId);
  //   //  { id: '6', name: 'Andrea', favoriteColor: 'purple' },

  const idFromTour = context.query.tourId;
  console.log(idFromTour);

  const singleTour = tours.find((tour) => {
    return idFromTour === tour.id;
  });

  return {
    props: {
      singleTour,
    },
  };
}
