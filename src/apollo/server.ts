import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from 'src/apollo';
import { validateToken } from 'src/auth/jwt';

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || '';

    // try to retrieve a user with the token
    return {
      token,
      authenticated: token ? validateToken(token) : null,
    };
  },
});
