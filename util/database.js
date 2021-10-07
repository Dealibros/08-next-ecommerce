import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// import fs from 'node:fs';

// Read the enviromental variables in the .env file, making it possible to connect to PostgreSQL
dotenvSafe.config();

// Connect to PostgreSQL
const sql = postgres();

export async function getTours() {
  const tours = await sql`
  SELECT * FROM tours;
  `;

  return tours.map((tour) => {
    return camelcaseKeys(tour);
  });
}

export async function getTour(id) {
  const tours = await sql`
  SELECT
  *
  FROM
  tours
  WHERE
  id = ${id}
  `;

  return camelcaseKeys(tours[0]);
}
