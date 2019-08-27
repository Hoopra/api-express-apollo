import massive from 'massive';
import { migrate } from './migrate';

const {
  POSTGRES_DB,
  POSTGRES_PASSWORD: password,
  POSTGRES_USER: user,
} = process.env;
let migrated = false;

const connect = async () => massive({
  host: 'scdb',
  port: 5432,
  database: POSTGRES_DB,
  user,
  password,
});

let pool: massive.Database;
export const database = async () => {
  if (!pool) {
    pool = await connect();
    if (!migrated) {
      await migrate(pool);
      await pool.reload();
      migrated = true;
    }
  }
  return pool;
};
