import { User } from 'src/model';
import { generateToken } from 'src/auth/jwt';
import { users } from 'src/database/users';

type UserMutation = (root: any, parameters: User, context: any) => Promise<User | null>;

export const createUser: UserMutation = async (root, user) => {
  try {
    await users.save(user);
    return user;
  } catch (error) {
    return null;
  }
};
export const login: UserMutation = async (root, { username, password }) => {
  const user = await users.validate(username, password);
  if (!user) { return null; }
  const token = generateToken(username);
  return { ...user, token };
};
