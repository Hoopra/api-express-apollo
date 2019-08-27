import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from '@apollo';
import { validateToken } from './auth/jwt';

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const server = new ApolloServer({
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
server.applyMiddleware({ app });

// Export express instance
export default app;
