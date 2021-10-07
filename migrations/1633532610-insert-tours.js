// This will create the table
const tours = [
  {
    name: 'Trip to Tah Mahal',
    destination: 'Agra, India',
    st_date: '07.2022',
    duration: '7 Days',
    img: 1,
    img_thum: 1,
    description:
      'Exotic trip to Indian with a dreamy stop in Agra to visit thr Tah Mahal',
    price: '649.99',
  },
  {
    name: 'A trip to Havana',
    destination: 'Havana, Cuba',
    st_date: '08.2022',
    duration: '7 Days',
    img: 2,
    img_thum: 2,
    description:
      'Amazing week in Cuba full of great people and Crazy Salsa moves',
    price: '499.99',
  },
  {
    name: 'Maldives',
    destination: 'Male, Maldives',
    st_date: '03.2022',
    duration: '5 Days',
    img: 3,
    img_thum: 3,
    description:
      'Your well deserved holidays,white sand beaches cocktails and delicious fresh sea food.',
    price: '399.99',
  },
  {
    name: 'The Machu Pichu Experience',
    destination: 'Machu Pichu, Peru',
    st_date: '07.2022',
    duration: '1 Week',
    img: 4,
    img_thum: 4,
    description: 'Incredible experience visiting and exploring Machu Pichu.',
    price: '499.99',
  },
  {
    name: 'Weekend in Venice',
    destination: 'Venice, Italy',
    st_date: '10.2022',
    duration: '3 Days',
    img: 5,
    img_thum: 5,
    description: 'Romantic weekend for two on the lovely canals of Venice',
    price: '499.99',
  },
  {
    name: 'Visit the Pyramids',
    destination: 'Cairo, Egypt',
    st_date: '08.2022',
    duration: '8 Days',
    img: 6,
    img_thum: 6,
    description:
      'A trip full of Pyramids and famous tombs a one life experience in Egypt',
    price: '349.99',
  },
];

exports.up = async function up(sql) {
  // Looping over the array and inserting tours
  for (const tour of tours) {
    await sql`
	INSERT INTO tours (name, destination, st_date, duration, img, img_thum, description, price)
	VALUES
		(${tour.name}, ${tour.destination}, ${tour.st_date}, ${tour.duration}, ${tour.img}, ${tour.img_thum}, ${tour.description}, ${tour.price});
	`;
  }
};

// This will remove the table

exports.down = async function down(sql) {
  for (const tour of tours) {
    await sql`
	DELETE FROM
	tours
	WHERE
	name = ${tour.name} AND destination = ${tour.destination} AND st_date = ${tour.st_date} AND duration = ${tour.duration} AND img = ${tour.img} AND img_thum = ${tour.img_thum} AND description = ${tour.description} AND price = ${tour.price}
	`;
  }
};
