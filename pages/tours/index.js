import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { userInfo } from 'os';
import Layout from '../../components/Layout';

// import { getTours } from '../../util/database';

const background = css`
  background-color: rgba(145, 111, 111, 0.1);
  padding: -1rem 3rem 0 3rem;
`;
const container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px 250px;
  margin-top: 6.2rem;
`;
const containerItem = css`
  height: 350px;
  width: 330px;
  border-radius: 7px 7px 0 0;
  margin: -10px 20px 40px 0;
  margin-bottom: 9rem;

  img {
    border-radius: 20px 20px 0px 0px;
    margin-bottom: -20px;
    width: 350px;
  }
`;

const item = css`
  transition: 0.3s;
  transition-timing-function: ease-out;
  margin-bottom: 2rem;

  :hover {
    border-radius: 10px;
    box-shadow: 0px 0px 70px 8px rgba(0, 0, 0, 0.04);
    transform: scale(1.08);
  }
`;
const itemInfo = css`
  text-align: center;
`;

const tourName = css`
  margin: 1.7rem 0 0 0;
`;

const tourDestination = css`
  font-family: 'New Tegomin';
  margin: 0 0 0 0;
`;
const fontPrice = css`
  margin: 0.5rem 0 1rem 0;
  opacity: 0.8;
  font-size: 95%;
  font-family: 'New Tegomin';
`;

const a = css`
  :link {
    color: green;
  }
`;

function Tours(props) {
  return (
    <div>
      <Layout>
        <Head>
          <title>Tours Ecommerce</title>
        </Head>
        <section>
          <div css={container}>
            {props.tours.map((tour) => {
              return (
                <div css={background} key={tour}>
                  <div css={item} key={`tour-li-${tour.id}`}>
                    <Link href={`/tours/${tour.id}`}>
                      <a css={a}>
                        <div css={containerItem}>
                          <img
                            src={tour.img}
                            alt="Logo"
                            width="350"
                            height="360"
                          />
                          <div css={itemInfo}>
                            <h4 css={tourName}>{tour.name}</h4>
                            <h5 css={tourDestination}>{tour.destination}</h5>
                            <p css={fontPrice}>{tour.price}€</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { tours, getTours } = await import('../../util/database');

  const tours2 = await getTours();

  // const tours2 = await getTours();
  console.log(tours2);

  // const reqCookie = JSON.parse(context.req.cookies.toursSelected);
  // console.log(reqCookie);

  return {
    props: {
      tours,
    },
  };
}

export default Tours;
