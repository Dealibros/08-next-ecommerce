import fs from 'node:fs';

export const tours = [
  {
    id: '1',
    name: 'Trip to Tah Mahal',
    destination: 'Agra, India',
    stDate: '07.01.2022',
    duration: '7 Days',
    img: '/images/1-India.jpg',
    imgThum: 'assets/Img/pexels-dario-fernandez-ruz-6827267.jpg',
    description:
      'Exotic trip to Indian, with a dreamy stop in Agra to visit el Tah Mahal',
    price: 649.99,
  },
  {
    id: '2',
    name: 'A trip to Havana',
    destination: 'Havana, Cuba.',
    stDate: '03.13.2022',
    duration: '7 Days',
    img: '/images/2-Cuba.jpg',
    imgThum: 'assets/Img/1pexels-raul-juarez-2388639.jpg',
    description: 'Amazing week in Cuba, great people and Crazy Salsa moves',
    price: 449.99,
  },
  {
    id: '3',
    name: 'Maldives',
    destination: 'Male, Maldives',
    stDate: '29.02.2022',
    duration: '5 Days',
    img: '/images/3-maldives.jpg',
    description:
      'Your well deserved holidays. white sand beaches, cocktails and delicious fresh sea food.',
    price: 399.99,
  },
  {
    id: '4',
    name: 'The Machu Pichu Experience',
    destination: 'Machu Pichu, Peru',
    stDate: '20.12.2022',
    duration: '1 Week',
    img: '/images/4-MachuPichu.jpg',
    imgThum: 'assets/Img/1pexels-alex-azabache-3879058.jpg',
    description: 'Incredible experience visiting and exploring Machu Pichu.',
    price: 499.99,
  },
  {
    id: '5',
    name: 'Weekend in Venice',
    destination: 'Venice, Italy',
    stDate: '03.10.2022',
    duration: '3 Days',
    img: '/images/5-Venice.jpg',
    imgThum: 'assets/Img/1pexels-david-bartus-586687.jpg',
    description: 'Romantic weekend for two on the lovely canals of Venice.',
    price: 499.99,
  },

  {
    id: '6',
    name: 'Visit the Pyramids',
    destination: 'Cairo, Egypt',
    stDate: '28.11.2022',
    duration: '8 Days',
    img: '/images/6-pyramids.jpg',
    imgThum: 'assets/Img/pyramids.jpg',
    description:
      'A trip full of Pyramids and famous tombs, a one life experience in Egypt',
    price: 349.99,
  },
];
