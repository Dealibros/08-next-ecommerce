import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './node-heroku-postgres-env-vars';

setPostgresDefaultsOnHeroku();

// import fs from 'node:fs';

// Read in the environment variables
// in the .env file, making it possible
// to connect to PostgreSQL
dotenvSafe.config();

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getTours() {
  const tours = await sql`
  SELECT * FROM tours;
  `;

  return tours.map((tour) => camelcaseKeys(tour));
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

export async function getTourintoCart() {
  const tours = await sql`
  SELECT
  *
  FROM
  tours
  `;
  return tours.map((tour) => {
    return camelcaseKeys(tour);
  });
}
