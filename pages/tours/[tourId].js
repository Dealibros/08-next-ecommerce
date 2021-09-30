import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

function Tour(props){

// to get the url query in the frontend

  // const router = useRouter()
  // const { tour } = router.query;


  if(typeof window !=="undefined"){
 console.log(window.localStorage);
  }
  return  (
  <div>
  <Layout>
  <Head>
    <title>Tour Ecommerce</title>
  </Head>
      <h1>Tour to {props.singleTour.name}</h1>

    </Layout>
</div>
);
}

// need to understand better

export async function getServerSideProps(context){
  const {tours} = await import ('../../util/database');

  const idFromTour = context.query.tourId;

  const singleTour = tours.find((tour) => {
    return idFromTour === tour.id;
  });

  return {
    props: {
      singleTour,
    },
    };
  }

export default Tour;