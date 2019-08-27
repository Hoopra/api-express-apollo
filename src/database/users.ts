import { User } from '@model';
import { database } from './pool';
import bcrypt from 'bcryptjs';

export const users = {
  save: async (user: User) => {
    const db = await database();
    const { username, password } = user;
    const hash = await bcrypt.hash(password, 12);
    db.users.save({
      username,
      hash,
    });
  },
  find: async (username: string) => {
    const db = await database();
    return db.users.findOne({ username });
  },
  validate: async (username: string, password: string) => {
    const user = await users.find(username);
    return (user && await bcrypt.compare(password, user.hash)) ? user : null;
  },
};
