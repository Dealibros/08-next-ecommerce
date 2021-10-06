// This will create the table
const tours = [
  {
    name: 'Trip to Tah Mahal',
    destination: 'Agra, India',
    st_date: '2022-07-02',
    duration: '7 Days',
    img: 'Images1',
    img_thum: 'Images1',
    description:
      'Exotic trip to Indian with a dreamy stop in Agra to visit thr Tah Mahal',
    price: '649.99',
  },
  // {
  //   name: 'A trip to Havana',
  //   destination: 'Havana, Cuba.',
  //   st_date: '2022-03-03',
  //   duration: '7 Days',
  //   img: 'Images2',
  //   img_thum: 'Images2',
  //   description: 'Amazing week in Cuba, great people and Crazy Salsa moves',
  //   price: '449.99',
  // },
  /*
  // {
  //   name: 'Maldives',
  //   destination: 'Male, Maldives',
  //   st_date: '2022-02-08',
  //   duration: '5 Days',
  //   img: 'Images3',
  //   img_thum: 'Images3',
  //   description:
  //     'Your well deserved holidays,white sand beaches cocktails and delicious fresh sea food.',
  //   price: '399.99',
  // },
  // {
  //   name: 'The Machu Pichu Experience',
  //   destination: 'Machu Pichu, Peru',
  //   st_date: '2022-12-10',
  //   duration: '1 Week',
  //   img: 'Images4',
  //   img_thum: 'Images4',
  //   description: 'Incredible experience visiting and exploring Machu Pichu.',
  //   price: '499.99',
  // },
  // {
  //   name: 'Weekend in Venice',
  //   destination: 'Venice, Italy',
  //   st_date: '2022-10-03',
  //   duration: '3 Days',
  //   img: 'Images5',
  //   img_thum: 'Images5',
  //   description: 'Romantic weekend for two on the lovely canals of Venice',
  //   price: '499.99',
  // },
  // {
  //   name: 'Visit the Pyramids',
  //   destination: 'Cairo, Egypt',
  //   st_date: '2022-10-04',
  //   duration: '8 Days',
  //   img: 'Images6',
  //   img_thum: 'Images6',
  //   description:
  //     'A trip full of Pyramids and famous tombs a one life experience in Egypt',
  //   price: '349.99',
  // },
	*/
];

exports.up = async function up(sql) {
  // Looping over the array and inserting tours
  for (const tour of tours) {
    await sql`
	INSERT INTO tours
	(name, destination, st_date, duration, img, img_thum, description, price)
		VALUES
		(${tour.name}, ${tour.destination}, ${tour.st_date}, ${tour.duration}, ${tour.img}, ${tour.img_thum}, ${tour.description}, ${tour.price});
	`;
  }
};

// This will remove the table

exports.down = async function down(sql) {
  await sql`
	DELETE FROM
	tours
	WHERE
(name = 'A trip to Havana' AND destination = 'Havana, Cuba.' AND st_date = '2022-03-03' AND duration = '7 Days' AND img = 'Images2' AND img_thum = 'Images2' AND description = 'Amazing week in Cuba, great people and Crazy Salsa moves' AND price = '449.99');



-- OR (name = 'Maldives' AND destination = 'Male, Maldives' AND st_date = '2022-02-08' AND duration = '5 Days' AND img = 'Images3' AND img_thum =  'Images3' AND description =
-- 'Your well deserved holidays,white sand beaches cocktails and delicious fresh sea food.' AND price =  '399.99')
  -- // },
  -- // {
  -- //   name: 'The Machu Pichu Experience',
  -- //   destination: 'Machu Pichu, Peru',
  -- //   st_date: '2022-12-10',
  -- //   duration: '1 Week',
  -- //   img: 'Images4',
  -- //   img_thum: 'Images4',
  -- //   description: 'Incredible experience visiting and exploring Machu Pichu.',
  -- //   price: '499.99',
  -- // },
  -- // {
  -- //   name: 'Weekend in Venice',
  -- //   destination: 'Venice, Italy',
  -- //   st_date: '2022-10-03',
  -- //   duration: '3 Days',
  -- //   img: 'Images5',
  -- //   img_thum: 'Images5',
  -- //   description: 'Romantic weekend for two on the lovely canals of Venice',
  -- //   price: '499.99',
  -- // },
  -- // {
  -- //   name: 'Visit the Pyramids',
  -- //   destination: 'Cairo, Egypt',
  -- //   st_date: '2022-10-04',
  -- //   duration: '8 Days',
  -- //   img: 'Images6',
  -- //   img_thum: 'Images6',
  -- //   description:
  -- //     'A trip full of Pyramids and famous tombs a one life experience in Egypt',
  -- //   price: '349.99',
  -- // },

`;
};
