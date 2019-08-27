import { movies } from './queries';
import { createUser, login } from './mutations';

export const resolvers = {
  Query: {
    movies,
  },
  Mutation: {
    createUser,
    login,
  },
};
