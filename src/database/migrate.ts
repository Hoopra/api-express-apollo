import massive from 'massive';

export const migrate = async (db: massive.Database) => {
  await db.query(`
  CREATE TABLE IF NOT EXISTS users(
  id serial PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  hash VARCHAR (255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT now()
  );`);
  return;
};
