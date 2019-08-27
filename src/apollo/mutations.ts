import { User } from '@model';
import { generateToken } from 'src/auth/jwt';

const users: { [key: string]: User } = {

};

type UserMutation = (root: any, parameters: User, context: any) => User | null;

export const createUser: UserMutation = (root, { username, password }) => {
  let user: User | null = null;
  if (!users[username]) {
    user = users[username] = {
      username,
      password,
    };
  }
  return user;
};
export const login: UserMutation = (root, { username, password }) => {
  const user: User | null = users[username];
  if (!user) { return null; }
  const token = generateToken(user.username);
  return user.password === password ? { ...user, token } : null;
};
